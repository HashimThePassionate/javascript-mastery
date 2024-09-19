# 🌟 **Styles** 🌟

In HTML, elements are styled using **CSS**. You can control various aspects of an element’s appearance—such as color, size, and positioning—using CSS rules. JavaScript can dynamically manipulate these styles through the **`style` property**, allowing you to **change, remove, or add styles** on the fly.


## **Understanding the Style Property** 🎨

Every DOM element has a **`style` property** that allows you to directly manipulate its inline CSS styles using JavaScript. For example, you can change text color, hide or show elements, adjust positioning, and much more.

### **Key Points**:
- The **`style` property** refers to **inline styles**, meaning it modifies styles written directly on the element (not in external or embedded CSS).
- JavaScript can dynamically change styles using **dot notation** (e.g., `element.style.color = "red";`).
- For **CSS properties** with hyphens (e.g., `font-family`), JavaScript uses **camelCase** (e.g., `fontFamily`).

Let’s see some **simple examples**!


## **Example 1: Changing the Text Color of an Element** 🎨

### **Scenario**: You want to change the text color of a paragraph when a button is clicked.

```html
<!DOCTYPE html>
<html>
  <body>
    <p id="text">This is some text!</p>
    <button onclick="changeTextColor()">Change Color</button>

    <script>
      function changeTextColor() {
        let text = document.getElementById("text");
        text.style.color = "blue";  // Change text color to blue
      }
    </script>
  </body>
</html>
```

### **Explanation**:
- **`text.style.color = "blue";`**: This changes the text color of the paragraph to blue.
- **`getElementById("text")`** selects the element with the ID of `text` and modifies its style.


## **Example 2: Hiding and Showing an Element with `display: none`** 👁️

### **Scenario**: You want to hide and show an element when a button is clicked.

```html
<!DOCTYPE html>
<html>
  <body>
    <p id="message">You can hide or show this message!</p>
    <button onclick="toggleMessage()">Toggle Message</button>

    <script>
      function toggleMessage() {
        let message = document.getElementById("message");
        if (message.style.display === "none") {
          message.style.display = "block";  // Show the message
        } else {
          message.style.display = "none";  // Hide the message
        }
      }
    </script>
  </body>
</html>
```

### **Explanation**:
- **`message.style.display = "none";`** hides the element by setting its display to `none`.
- **`message.style.display = "block";`** shows the element again.


## **Example 3: Changing Font Size Dynamically** 📏

### **Scenario**: You want to increase the font size of a paragraph when a button is clicked.

```html
<!DOCTYPE html>
<html>
  <body>
    <p id="text">This text will grow in size!</p>
    <button onclick="increaseFontSize()">Increase Font Size</button>

    <script>
      function increaseFontSize() {
        let text = document.getElementById("text");
        let currentSize = window.getComputedStyle(text).fontSize;  // Get current font size
        let newSize = parseInt(currentSize) + 2;  // Increase font size by 2px
        text.style.fontSize = newSize + "px";  // Set new font size
      }
    </script>
  </body>
</html>
```

### **Explanation**:
- **`getComputedStyle(text).fontSize`** retrieves the current font size of the element.
- **`text.style.fontSize`** changes the font size by increasing it by `2px` each time the button is clicked.


## **Example 4: Changing Background Color on Hover** 🖼️

### **Scenario**: You want to change the background color of a `div` when the user hovers over it.

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="box" style="width: 100px; height: 100px; background-color: lightgray;"></div>

    <script>
      let box = document.getElementById("box");

      // Change background color on mouseover
      box.addEventListener("mouseover", function() {
        box.style.backgroundColor = "lightblue";
      });

      // Revert background color on mouseout
      box.addEventListener("mouseout", function() {
        box.style.backgroundColor = "lightgray";
      });
    </script>
  </body>
</html>
```

### **Explanation**:
- **`addEventListener("mouseover", ...)`** triggers when the mouse is moved over the `div`, changing its background color.
- **`addEventListener("mouseout", ...)`** reverts the background color when the mouse leaves the `div`.


## 🎯 **Key Takeaways**:

1. **`style.propertyName`**: You can directly access or modify an element’s style using this method (e.g., `style.color`, `style.display`).
2. **`camelCase`**: Properties with hyphens in CSS (like `font-family`) use camelCase in JavaScript (`fontFamily`).
3. **`getComputedStyle()`**: Use this method to **retrieve the current style** of an element, especially when styles are applied via CSS.
4. **`display: none`**: Hides an element from view without removing it from the DOM, and **`display: block`** shows it again.

By mastering these techniques, you can dynamically control the appearance of elements, creating engaging and interactive websites.


## **4 Real-World Examples** 🌟

### 1. **Change Button Text and Color on Click** 🔘

```html
<!DOCTYPE html>
<html>
  <body>
    <button id="myButton" onclick="changeButton()">Click Me</button>

    <script>
      function changeButton() {
        let button = document.getElementById("myButton");
        button.textContent = "You Clicked Me!";
        button.style.backgroundColor = "green";  // Change button color
      }
    </script>
  </body>
</html>
```

### **Explanation**:
- Changes the text inside the button and changes its background color when clicked.


### 2. **Change Text to Bold on Double Click** 💪

```html
<!DOCTYPE html>
<html>
  <body>
    <p id="text">Double-click me to make me bold!</p>

    <script>
      let text = document.getElementById("text");
      text.addEventListener("dblclick", () => {
        text.style.fontWeight = "bold";  // Make text bold on double-click
      });
    </script>
  </body>
</html>
```

### **Explanation**:
- Uses the `dblclick` event to change the font weight of the paragraph to bold.


### 3. **Highlight List Item on Hover** 🔦

```html
<!DOCTYPE html>
<html>
  <body>
    <ul>
      <li id="item1">Item 1</li>
      <li id="item2">Item 2</li>
      <li id="item3">Item 3</li>
    </ul>

    <script>
      let items = document.querySelectorAll("li");

      items.forEach(item => {
        item.addEventListener("mouseover", () => {
          item.style.backgroundColor = "yellow";  // Highlight on hover
        });

        item.addEventListener("mouseout", () => {
          item.style.backgroundColor = "";  // Remove highlight
        });
      });
    </script>
  </body>
</html>
```

### **Explanation**:
- Adds a yellow highlight when the user hovers over a list item, then removes the highlight when the user stops hovering.


### 4. **Show/Hide Password Field** 🔑

```html
<!DOCTYPE html>
<html>
  <body>
    <label for="password">Password:</label>
    <input type="password" id="password">
    <button onclick="togglePassword()">Show/Hide Password</button>

    <script>
      function togglePassword() {
        let passwordField = document.getElementById("password");
        if (passwordField.type === "password") {
          passwordField.type = "text";  // Show password
        } else {
          passwordField.type = "password";  // Hide password
        }
      }
    </script>
  </body>
</html>
```

### **Explanation**:
- The button toggles the password field between showing the password as plain text and hiding it.
