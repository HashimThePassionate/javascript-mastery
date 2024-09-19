# 🌟 **Attributes** 🌟

In the DOM, elements have attributes such as `href`, `class`, `id`, or custom attributes like `data-*` attributes. You can easily access, modify, or remove these attributes using JavaScript, giving you the power to manipulate the content and behavior of your webpage dynamically.

## **Key Methods for Working with Attributes** 🛠️

1. **`getAttribute()`**: Retrieves the value of a specified attribute.
2. **`setAttribute()`**: Sets the value of a specified attribute.
3. **`removeAttribute()`**: Removes a specified attribute from an element.

Additionally, some attributes like `class` and `id` have **shortcut properties** like `className` and `id` to make them easier to work with.

### **Example: Working with Standard Attributes** 🔗

Some attributes, like `href`, `id`, or `class`, are commonly used in HTML. You can easily access and modify them with properties or methods.

### **Example: Modifying a Link’s `href`** 🔗

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>Visit My Website</h2>
    <a id="myLink" href="https://example.com">Go to Example</a>
    <button onclick="changeLink()">Change Link</button>

    <script>
      function changeLink() {
        let link = document.getElementById("myLink");
        link.href = "https://www.wikipedia.org";  // Change href attribute
        link.textContent = "Go to Wikipedia";  // Change the text content
      }
    </script>
  </body>
</html>
```

### **Explanation**:
- **`link.href`** is used to directly access and modify the `href` attribute of the link.
- We also modify the **text content** of the link to reflect the new URL.

### **Example: Working with `data-*` Attributes** 📝

Custom attributes prefixed with `data-` can store extra information on elements. These attributes can be easily accessed and modified using the **`getAttribute()`** and **`setAttribute()`** methods.

### **Example: Handling Custom `data-*` Attributes** 🛠️

```html
<!DOCTYPE html>
<html>
  <body>
    <p data-classified="secret">The launch code is 00000000.</p>
    <p data-classified="public">I like pizza.</p>
    <button onclick="revealClassified()">Reveal Classified Info</button>

    <script>
      function revealClassified() {
        let paragraphs = document.getElementsByTagName("p");  // Get all <p> elements
        for (let para of paragraphs) {
          if (para.getAttribute("data-classified") === "secret") {  // Check for "secret" data-classified
            para.textContent = "Classified information has been revealed!";  // Change text content
            para.setAttribute("data-classified", "revealed");  // Update the custom attribute
          }
        }
      }
    </script>
  </body>
</html>
```

### **Explanation**:
- **`getAttribute("data-classified")`** checks if a paragraph is marked as "secret".
- **`setAttribute("data-classified", "revealed")`** updates the `data-classified` attribute to "revealed".
- The content of the paragraph is changed to indicate the classified info has been revealed.

### **Example: Removing Attributes** ❌

You can remove an attribute using **`removeAttribute()`**, which will completely remove the attribute from an element.

### **Example: Removing an Image's `alt` Attribute** 🖼️

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>Image Alt Text Example</h2>
    <img id="image" src="cat.jpg" alt="A cute cat">
    <button onclick="removeAlt()">Remove Alt Attribute</button>

    <script>
      function removeAlt() {
        let image = document.getElementById("image");
        image.removeAttribute("alt");  // Remove the alt attribute
        alert("Alt attribute removed!");
      }
    </script>
  </body>
</html>
```

### **Explanation**:
- **`removeAttribute("alt")`** removes the `alt` attribute from the image.
- After clicking the button, the image no longer has an alternative text for accessibility or when the image is unavailable.

### **Example: Changing Classes Dynamically** 🎨

You can dynamically change an element's class using **`className`** or **`setAttribute()`** to modify the element’s `class` attribute.

### **Example: Toggling a Dark Mode Theme** 🌙

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .dark-mode {
        background-color: black;
        color: white;
      }
    </style>
  </head>
  <body>
    <h2>Toggle Dark Mode</h2>
    <button id="themeToggle" onclick="toggleTheme()">Enable Dark Mode</button>

    <script>
      function toggleTheme() {
        let body = document.body;
        let button = document.getElementById("themeToggle");
        
        if (body.className === "dark-mode") {
          body.className = "";  // Remove dark mode class
          button.textContent = "Enable Dark Mode";  // Update button text
        } else {
          body.className = "dark-mode";  // Add dark mode class
          button.textContent = "Disable Dark Mode";  // Update button text
        }
      }
    </script>
  </body>
</html>
```

### **Explanation**:
- **`className`** is used to add or remove the `dark-mode` class to toggle the theme.
- The button text is updated based on whether dark mode is enabled or disabled.

## 🎯 **Key Takeaways**:

1. **`getAttribute()`**: Retrieve the value of an attribute.
2. **`setAttribute()`**: Set or modify the value of an attribute.
3. **`removeAttribute()`**: Remove an attribute entirely from an element.
4. **`className`**: Easily manage class names for styling.

By using these methods, you can dynamically change how your webpage behaves, interacts, and looks to the user, making it more engaging and functional.

## **4 Simple Real-World Examples** 🌟

### 1. **Changing a Button’s `disabled` State** 🔒

```html
<!DOCTYPE html>
<html>
  <body>
    <button id="submitBtn" disabled>Submit</button>
    <button onclick="enableButton()">Enable Submit Button</button>

    <script>
      function enableButton() {
        let button = document.getElementById("submitBtn");
        button.removeAttribute("disabled");  // Enable the submit button by removing "disabled" attribute
      }
    </script>
  </body>
</html>
```

### 2. **Change a Link's Title and Href** 🔗

```html
<!DOCTYPE html>
<html>
  <body>
    <a id="myLink" href="https://www.google.com" title="Go to Google">Google</a>
    <button onclick="changeLinkAttributes()">Change Link</button>

    <script>
      function changeLinkAttributes() {
        let link = document.getElementById("myLink");
        link.setAttribute("href", "https://www.bing.com");  // Change the href
        link.setAttribute("title", "Go to Bing");  // Change the title attribute
        link.textContent = "Bing";  // Change the visible text
      }
    </script>
  </body>
</html>
```

### 3. **Mark Items as "Completed" with Data Attributes** ✅

```html
<!DOCTYPE html>
<html>
  <body>
    <ul id="taskList">
      <li data-status="incomplete">Buy Groceries</li>
      <li data-status="incomplete">Do Laundry</li>
    </ul>
    <button onclick="markAsCompleted()">Complete Tasks</button>

    <script>
      function markAsCompleted() {
        let tasks = document.querySelectorAll('li[data-status="incomplete"]');
        tasks.forEach(task => {
          task.setAttribute("data-status", "complete");  // Mark the task as complete
          task.textContent += " (Completed)";
        });
      }
    </script>
  </body>
</html>
```

### 4. **Toggle Image Visibility Using Custom Data Attributes** 🖼️

```html
<!DOCTYPE html>
<html>
  <body>
    <img id="profilePic" src="profile.jpg" alt="Profile Picture" data-visible="true">
    <button onclick="toggleImageVisibility()">Toggle Image Visibility</button>

    <script>
      function toggleImageVisibility() {
        let image = document.getElementById("profilePic");
        let isVisible = image.getAttribute("data-visible") === "true";

        if (isVisible) {
          image.style.display = "none";  // Hide the image
          image.setAttribute("data-visible", "false");
        } else {
          image.style.display = "block";  // Show the image
          image.setAttribute("data-visible", "true");
        }
      }
    </script>
  </body>
</html>
```