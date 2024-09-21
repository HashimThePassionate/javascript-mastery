# 🌐 Storing Data Client-Side

### 📚 Section Overview
In this section, we will learn how to store data in a web browser using `localStorage`. This is useful for small web applications (mini-apps) that need to remember information across page reloads or browser sessions, without the need for a server. We’ll walk through a **note-taking app** that saves data in the browser, making it persistent even after the browser is closed! 😍

## 🌟 Key Concepts

1. **localStorage**: Stores key-value pairs in the browser that survive page reloads and browser closures.
2. **sessionStorage**: Similar to `localStorage`, but only persists until the browser is closed.

### Example Usage of `localStorage`:

```js
// Store a value in localStorage
localStorage.setItem("username", "marijn");

// Retrieve and log the value
console.log(localStorage.getItem("username")); 
// Output: marijn

// Remove the value
localStorage.removeItem("username");
```

### ⚡ Important Points:
- **Persistence**: Data in `localStorage` stays even after the page is closed or refreshed.
- **Domain-Specific**: Each website gets its own separate storage, meaning one site can’t access data from another.
- **Size Limit**: Browsers impose a limit on how much data you can store, so don’t overload it with too much information.

## 📝 Building a Note-Taking App

Now let’s build a **simple note-taking app** that stores notes using `localStorage`. Users will be able to create, edit, and save notes, and all notes will remain saved even after the browser is closed.

Here’s how the app will look and behave:
- Dropdown to select a note.
- A button to add new notes.
- A textarea to edit note content.
- All changes are saved in `localStorage`.

### 🔧 Code Implementation:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Note-Taking App</title>
</head>
<body>
  <h1>Notes 📒</h1>
  <select id="note-list"></select> 
  <button id="add-btn">Add Note ➕</button><br><br>
  <textarea id="note-content" style="width: 100%; height: 200px;"></textarea>

  <script>
    let noteList = document.querySelector("#note-list");
    let noteContent = document.querySelector("#note-content");
    let state;

    // Function to update the state and localStorage
    function setState(newState) {
      noteList.textContent = "";  // Clear existing options
      for (let noteName of Object.keys(newState.notes)) {
        let option = document.createElement("option");
        option.textContent = noteName;  // Display note names
        if (newState.selected === noteName) option.selected = true;
        noteList.appendChild(option);
      }
      noteContent.value = newState.notes[newState.selected];  // Show selected note
      localStorage.setItem("Notes", JSON.stringify(newState));  // Save state to localStorage
      state = newState;
    }

    // Initialize state from localStorage or use default state
    setState(JSON.parse(localStorage.getItem("Notes")) ?? {
      notes: {"shopping list": "Carrots 🥕\nRaisins 🍇"},
      selected: "shopping list"
    });

    // Update note on selection change
    noteList.addEventListener("change", () => {
      setState({notes: state.notes, selected: noteList.value});
    });

    // Save note content on text change
    noteContent.addEventListener("change", () => {
      let {selected} = state;
      setState({
        notes: {...state.notes, [selected]: noteContent.value},
        selected
      });
    });

    // Add a new note
    document.querySelector("#add-btn").addEventListener("click", () => {
      let newNoteName = prompt("Enter a name for your note:");
      if (newNoteName) {
        setState({
          notes: {...state.notes, [newNoteName]: ""},
          selected: newNoteName
        });
      }
    });
  </script>
</body>
</html>
```

### 🛠️ Detailed Explanation:
Let's go through the JavaScript parts of your **Note-Taking App** in detail, step by step:

---

### 1. **Selecting HTML Elements with `querySelector`** 🖱️
This section is all about grabbing references to the important HTML elements in the app (like the dropdown, textarea, and button) so we can manipulate them using JavaScript.

```javascript
let noteList = document.querySelector("#note-list"); // Dropdown for note titles
let noteContent = document.querySelector("#note-content"); // Textarea for note content
let state; // This will store the current app state (notes + selected note)
```

- **`noteList`**: This variable references the dropdown menu (the `<select>` element) that will hold the list of notes.
- **`noteContent`**: This references the `<textarea>` where the content of the selected note will be displayed and edited.
- **`state`**: This will hold the current state of the app, including the list of notes and the currently selected note.

---

### 2. **Updating State and Saving to `localStorage`** 🔄

This function is responsible for:
- Updating the dropdown with the list of notes.
- Displaying the content of the currently selected note.
- Saving everything to `localStorage` for persistence.

```javascript
function setState(newState) {
  // Clear the dropdown content (so we can repopulate it)
  noteList.textContent = "";  
  
  // Loop through all note names and create dropdown options dynamically
  for (let noteName of Object.keys(newState.notes)) {
    let option = document.createElement("option"); // Create new <option>
    option.textContent = noteName; // Set the note name as the option text
    if (newState.selected === noteName) option.selected = true; // Set selected note
    noteList.appendChild(option); // Append option to the dropdown
  }
  
  // Update the textarea to show the content of the currently selected note
  noteContent.value = newState.notes[newState.selected];  
  
  // Save the new state (notes + selected note) into localStorage as a string
  localStorage.setItem("Notes", JSON.stringify(newState));  
  
  // Update the global state variable
  state = newState;  
}
```

- **Clear the dropdown**: Each time the `setState` function runs, it clears the dropdown (`noteList.textContent = ""`) and repopulates it with the latest list of notes.
  
- **Create dropdown options**: For each note name, a new `<option>` is created in the dropdown, with the `noteName` as its text. If this note is the currently selected one, it’s marked as `selected`.

- **Update the textarea**: The content of the selected note is displayed in the `<textarea>` by updating `noteContent.value`.

- **Save to localStorage**: The entire app state (the notes and which note is selected) is saved as a JSON string in the browser’s `localStorage`. This allows the app to remember the notes even after the page is refreshed.

---

### 3. **Load Saved Notes from `localStorage`** 🗂️

This part of the code initializes the app by checking if there are any saved notes in `localStorage`. If there are, it loads them; if not, it uses a default note.

```javascript
setState(JSON.parse(localStorage.getItem("Notes")) ?? {
  notes: {"shopping list": "Carrots 🥕\nRaisins 🍇"},
  selected: "shopping list"
});
```

- **`localStorage.getItem("Notes")`**: This fetches any previously saved notes from the browser’s storage.
- **`JSON.parse()`**: Since data in `localStorage` is saved as a string, we convert it back into a JavaScript object using `JSON.parse()`.
- **Fallback with `??`**: If there are no saved notes, we provide a default note, "shopping list" with some example content ("Carrots 🥕\nRaisins 🍇"). The default selected note is "shopping list".

---

### 4. **Event Listener for Dropdown Change** 🎛️

This listener is triggered whenever the user selects a different note from the dropdown. It updates the state to reflect the newly selected note and displays its content.

```javascript
noteList.addEventListener("change", () => {
  // Update the state with the new selected note
  setState({notes: state.notes, selected: noteList.value});
});
```

- **Event `change`**: This event fires when the user changes the selection in the dropdown.
- **Update state**: The `setState` function is called to update the app with the newly selected note (`noteList.value`). The state remains the same for the notes, but the selected note is updated.

---

### 5. **Event Listener for Textarea Change** 🖋️

When the user edits the content of the note in the `<textarea>`, this listener updates the note in the state and saves it to `localStorage`.

```javascript
noteContent.addEventListener("change", () => {
  let {selected} = state; // Get the current selected note
  // Update the state with the new content of the selected note
  setState({
    notes: {...state.notes, [selected]: noteContent.value}, // Spread operator to keep all notes intact, but update the current one
    selected
  });
});
```

- **Event `change`**: This event triggers every time the user makes a change to the content of the textarea.
- **Update note content**: We update the state by keeping all the existing notes (using the spread operator `...state.notes`) but change the content of the currently selected note to the new content (`noteContent.value`).
- **Save changes**: The changes are automatically saved to `localStorage` via the `setState` function.

---

### 6. **Event Listener for Adding New Notes** ➕

This listener is triggered when the user clicks the "Add Note" button. It prompts the user for a new note name and adds it to the list.

```javascript
document.querySelector("#add-btn").addEventListener("click", () => {
  // Prompt the user for a new note name
  let newNoteName = prompt("Enter a name for your note:");
  if (newNoteName) {
    // Add the new note to the state with empty content
    setState({
      notes: {...state.notes, [newNoteName]: ""}, // Add new note to notes list
      selected: newNoteName // Automatically select the new note
    });
  }
});
```

- **Event `click`**: This event fires when the user clicks the "Add Note" button.
- **Prompt for note name**: The `prompt()` function opens a small dialog where the user can type a new note name.
- **Add new note**: If the user enters a valid name, we use the spread operator to add the new note to the existing list (`notes: {...state.notes, [newNoteName]: ""}`). The note content is initially set to an empty string.
- **Select the new note**: The newly created note is automatically selected, and its empty content will be displayed in the textarea.

---