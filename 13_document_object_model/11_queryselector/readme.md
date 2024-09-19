# 🌟 **Query Selectors** 🌟

## **Introduction**

When working with the DOM in JavaScript, you often need to find specific elements to interact with. JavaScript provides a powerful way to do this using **query selectors**. The `querySelector` and `querySelectorAll` methods allow you to select elements based on their tag names, classes, IDs, or even complex CSS-style selectors.

- **`querySelector`**: Selects the **first matching** element.
- **`querySelectorAll`**: Selects **all matching** elements and returns a `NodeList`.

Let’s dive into how they work with examples! 💡

## **Basic Example of `querySelectorAll`** 🔍

The `querySelectorAll` method allows you to select all elements that match a given CSS-style selector. It returns a **`NodeList`**, which you can loop through to manipulate each element.

### **Complete Example**

```html
<!DOCTYPE html>
<html>
  <body>
    <p>And if you go chasing <span class="animal">rabbits</span></p>
    <p>And you know you're going to fall</p>
    <p>Tell 'em a <span class="character">hookah smoking
      <span class="animal">caterpillar</span></span>
    </p>
    <p>Has given you the call</p>

    <script>
      function count(selector) {
        return document.querySelectorAll(selector).length;
      }

      console.log(count("p"));              // Select all <p> elements
      // → 4

      console.log(count(".animal"));        // Select all elements with class "animal"
      // → 2

      console.log(count("p .animal"));      // Select all elements with class "animal" inside <p>
      // → 2

      console.log(count("p > .animal"));    // Select elements with class "animal" that are direct children of <p>
      // → 1
    </script>
  </body>
</html>
```

### **Explanation**:
- **`querySelectorAll("p")`**: Selects all `<p>` elements.
- **`querySelectorAll(".animal")`**: Selects all elements with the class `animal`.
- **`querySelectorAll("p .animal")`**: Selects all `.animal` elements **inside** a `<p>`.
- **`querySelectorAll("p > .animal")`**: Selects `.animal` elements that are **direct children** of `<p>`.

## **Basic Example of `querySelector`** 🎯

The `querySelector` method is used to select the **first** element that matches a CSS selector. If no element matches, it returns `null`.

### **Complete Example**

```html
<!DOCTYPE html>
<html>
  <body>
    <h1 id="title">Welcome</h1>
    <p class="intro">This is the introduction paragraph.</p>
    <p class="content">This is the main content paragraph.</p>

    <script>
      const title = document.querySelector("#title");  // Select element with ID "title"
      console.log(title.textContent);  // Output: Welcome

      const introParagraph = document.querySelector(".intro");  // Select first element with class "intro"
      console.log(introParagraph.textContent);  // Output: This is the introduction paragraph.
    </script>
  </body>
</html>
```

### **Explanation**:
- **`querySelector("#title")`**: Selects the element with the ID `title`.
- **`querySelector(".intro")`**: Selects the first element with the class `intro`.

## 🎯 **4 Real-World Examples of Query Selectors** 🌍

### **1. Highlighting Specific Elements** 🌟

**Scenario**: You want to highlight all paragraphs with the class `.highlight` by changing their background color.

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .highlight {
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <p>This is a normal paragraph.</p>
    <p class="highlight">This paragraph will be highlighted.</p>
    <p class="highlight">This paragraph will also be highlighted.</p>

    <script>
      const highlights = document.querySelectorAll(".highlight");
      highlights.forEach(paragraph => {
        paragraph.style.backgroundColor = "lightgreen";  // Change background color
      });
    </script>
  </body>
</html>
```

### **Explanation**:
- **`querySelectorAll(".highlight")`** selects all paragraphs with the class `highlight` and changes their background color.

### **2. Show/Hide Elements Using a Button** 👁️

**Scenario**: You want to show or hide a block of text when a button is clicked.

```html
<!DOCTYPE html>
<html>
  <body>
    <button id="toggleButton">Toggle Text</button>
    <p id="text" style="display: none;">This is hidden text.</p>

    <script>
      const button = document.querySelector("#toggleButton");
      const text = document.querySelector("#text");

      button.addEventListener("click", () => {
        if (text.style.display === "none") {
          text.style.display = "block";  // Show the text
        } else {
          text.style.display = "none";  // Hide the text
        }
      });
    </script>
  </body>
</html>
```

### **Explanation**:
- **`querySelector("#toggleButton")`** selects the button.
- When clicked, the button toggles the visibility of the paragraph.

### **3. Counting Elements** 🔢

**Scenario**: You want to count how many `<li>` items are in a list.

```html
<!DOCTYPE html>
<html>
  <body>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>

    <script>
      const listItems = document.querySelectorAll("li");
      console.log("Number of list items:", listItems.length);  // Output: Number of list items: 3
    </script>
  </body>
</html>
```

### **Explanation**:
- **`querySelectorAll("li")`** selects all list items (`<li>`) and counts them using `.length`.

### **4. Changing the Text of Elements** ✏️

**Scenario**: You want to change the text of a specific element when a button is clicked.

```html
<!DOCTYPE html>
<html>
  <body>
    <h1 id="title">Original Title</h1>
    <button id="changeButton">Change Title</button>

    <script>
      const title = document.querySelector("#title");
      const button = document.querySelector("#changeButton");

      button.addEventListener("click", () => {
        title.textContent = "New Title";  // Change the text content of the title
      });
    </script>
  </body>
</html>
```

### **Explanation**:
- **`querySelector("#title")`** selects the title element.
- When the button is clicked, the text of the title changes.

## 🎯 **Key Takeaways**:

1. **`querySelectorAll`**: Use this method to select **all matching elements**. It returns a `NodeList` that can be iterated over.
2. **`querySelector`**: Use this method to select **the first matching element**.
3. **CSS Selectors**: You can use CSS-style selectors like class (`.class`), ID (`#id`), and element types (`p`, `h1`).
4. **Real-World Use**: Query selectors are essential for tasks like manipulating the DOM, changing element styles, and responding to user interactions.