# 🔄 **Event Loop** 🌟

## Introduction 📖

The **Event Loop** is a fundamental concept in JavaScript that allows it to handle asynchronous operations such as callbacks, promises, and various other events. It is the engine that drives the asynchronous behavior of JavaScript, ensuring that multiple operations can happen seemingly at the same time without blocking the main thread. Understanding the event loop is key to writing efficient and non-blocking JavaScript code! 🚀

In this README, we'll break down the event loop in simple terms and provide some practical real-world examples to demonstrate how it works. Let’s dive in! 🏊‍♂️

---

## 🌐 **What is the Event Loop?** 🤔

The **Event Loop** is like a manager that keeps track of all the tasks that need to be executed in JavaScript. It manages the execution of **synchronous** and **asynchronous** code by placing tasks in a **queue** and executing them one by one. The event loop ensures that JavaScript, which is single-threaded, can perform non-blocking operations, allowing multiple tasks to happen without freezing the UI.

### 🧩 **Key Concepts:**

1. **Main Script Execution**: The JavaScript program starts by executing the main script.
2. **Callbacks and Task Queue**: Asynchronous operations (like `setTimeout`, `Promise`, etc.) are added to a task queue and are executed after the main script completes.
3. **Empty Call Stack**: Asynchronous callbacks run on their own, independent of the function that scheduled them.
4. **Event Loop**: The event loop continuously checks the task queue for pending tasks and executes them one at a time.

### 💡 **Simple Explanation:**

Imagine you are at a restaurant, and there's only one chef. The chef takes one order at a time (synchronous code), but if an order needs time to cook (asynchronous code), the chef starts cooking it and moves on to the next order. When the cooking is done, the chef completes the task. The event loop is like the chef managing these orders.

---

## 🔍 **Detailed Code Explanation** 📝

### Example: Basic Asynchronous Code with `setTimeout` 🕰️

Consider the following code example using `setTimeout`:

```javascript
try {
  setTimeout(() => {
    throw new Error("Woosh");
  }, 20);
} catch (e) {
  // This will not run
  console.log("Caught", e);
}
```

#### 🧩 **Explanation:**

- **What This Code Does**:
  - The `setTimeout` function schedules a callback to be executed after 20 milliseconds.
  - The callback throws an error after 20 milliseconds.

- **Why the `catch` Block Doesn’t Catch the Error**:
  - The `try...catch` block is **synchronous** and runs immediately, but `setTimeout` is **asynchronous**.
  - By the time the callback throws the error, the `try...catch` block has already completed. The error is not caught because it occurs outside the `try` block on a new event in the event loop.

### Example: Blocking the Event Loop 🛑

Blocking the event loop can delay the execution of asynchronous code. Here’s an example:

```javascript
let start = Date.now();
setTimeout(() => {
  console.log("Timeout ran at", Date.now() - start);
}, 20);

// Blocking the event loop for 50 milliseconds
while (Date.now() < start + 50) {}

console.log("Wasted time until", Date.now() - start);
// Output:
// Wasted time until 50
// Timeout ran at 55
```

#### 🧩 **Explanation:**

- **What This Code Does**:
  - A `setTimeout` is scheduled to run after 20 milliseconds.
  - A `while` loop blocks the main thread for 50 milliseconds.

- **Why the Timeout is Delayed**:
  - The event loop is blocked by the `while` loop, preventing the `setTimeout` callback from executing at the intended time.
  - The timeout runs at 55 milliseconds instead of 20, showing how blocking operations can delay the event loop.
--- 
### Example: Promises in the Event Loop 🕳️

Promises are always resolved or rejected as a new event. Even if a promise is already resolved, waiting for it will cause your callback to run after the current script finishes.

```javascript
Promise.resolve("Done").then(console.log);
console.log("Me first!");
// Output:
// Me first!
// Done
```

#### 🧩 **Explanation:**

- **What This Code Does**:
  - `Promise.resolve("Done")` creates a promise that is immediately resolved.
  - `.then(console.log)` schedules the logging of `"Done"` as a microtask in the event loop.
  - `console.log("Me first!")` runs synchronously.

- **Why “Me first!” is Logged Before “Done”**:
  - The synchronous code (`console.log("Me first!")`) runs first.
  - The promise’s `.then()` callback runs after the synchronous code, showing that promises are added to the microtask queue and run after the current stack is clear.

---

## 🌍 **Real-World Examples Using the Event Loop** 🚴‍♂️

### 1. **Asynchronous Data Fetching** 🌐

Imagine fetching user data from an API while keeping the UI responsive.

#### 🧩 **Code Example:**

```javascript
console.log("Fetching data...");

fetch('https://api.example.com/user')
  .then(response => response.json())
  .then(data => console.log("User Data:", data))
  .catch(error => console.error("Error fetching data:", error));

console.log("Waiting for data...");
// Output:
// Fetching data...
// Waiting for data...
// User Data: { ... } (after data is fetched)
```

#### ✨ **Explanation:**

- The `fetch` function is asynchronous and returns a promise.
- While waiting for the data, the rest of the script continues executing (`"Waiting for data..."` is logged).
- Once the data is fetched, the `.then()` callbacks are executed, keeping the UI responsive.

### 2. **Animating Elements on a Web Page** 🎨

Animating elements while responding to user interactions is another example where the event loop shines.

#### 🧩 **Code Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Animate Element Example</title>
  <style>
    #animatedBox {
      position: absolute; /* Required for positioning */
      width: 50px;
      height: 50px;
      background-color: teal; /* Color for visibility */
      left: 0; /* Initial position */
      top: 50px; /* Positioning it from the top */
    }
  </style>
</head>
<body>
  <div id="animatedBox"></div>
  <button id="startButton">Start Animation</button>

  <script>
    function animateElement(element) {
      let position = 0; // Starting position
      function frame() {
        position++; // Increment position
        element.style.left = position + 'px'; // Move element to the right
        if (position < 300) { // Stop at 300px
          requestAnimationFrame(frame); // Asynchronously request the next frame
        }
      }
      requestAnimationFrame(frame); // Start the animation
    }

    console.log("Animation script loaded!");

    // Wait for the DOM to fully load
    document.addEventListener('DOMContentLoaded', () => {
      const box = document.getElementById('animatedBox'); // Get the element to animate
      const button = document.getElementById('startButton'); // Get the button element

      // Start animation when button is clicked
      button.addEventListener('click', () => {
        animateElement(box); // Trigger the animation function
        console.log("Animation started!");
      });
    });
  </script>
</body>
</html>
```

#### ✨ **Explanation:**
Let's go through this HTML and JavaScript code step-by-step to understand how it works and what it does. This code creates a simple web page with an animated box that moves to the right when a button is clicked. The animation is achieved using JavaScript's `requestAnimationFrame` function, which provides a smooth and efficient way to create animations.

### Overview of the Code 📝

This code consists of three main parts:

1. **HTML Structure**: Defines the basic structure of the web page, including the animated element (`div`) and the button.
2. **CSS Styling**: Provides styles for the animated element to make it visible and position it on the screen.
3. **JavaScript**: Handles the animation logic and the user interaction with the button to start the animation.

### 1. HTML Structure 🏗️

The HTML sets up the basic structure of the page, including a `div` element that will be animated and a button to start the animation.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Animate Element Example</title>
  <style>
    #animatedBox {
      position: absolute; /* Required for positioning */
      width: 50px;
      height: 50px;
      background-color: teal; /* Color for visibility */
      left: 0; /* Initial position */
      top: 50px; /* Positioning it from the top */
    }
  </style>
</head>
<body>
  <div id="animatedBox"></div>
  <button id="startButton">Start Animation</button>
```

#### Explanation 📝

- **`<div id="animatedBox"></div>`**:
  - This `div` element represents the box that will be animated. It has an `id` of `animatedBox` to style and manipulate it with CSS and JavaScript.
  
- **`<button id="startButton">Start Animation</button>`**:
  - This button will be used to start the animation when clicked. It has an `id` of `startButton` to attach an event listener to it using JavaScript.

### 2. CSS Styling 🎨

The CSS defines the appearance and initial positioning of the animated box.

```css
#animatedBox {
  position: absolute; /* Required for positioning */
  width: 50px;
  height: 50px;
  background-color: teal; /* Color for visibility */
  left: 0; /* Initial position */
  top: 50px; /* Positioning it from the top */
}
```

#### Explanation 📝

- **`position: absolute;`**:
  - This makes the `div` (`#animatedBox`) absolutely positioned, meaning it can be moved freely within its container based on the `left` and `top` properties.
  
- **`width: 50px;` and `height: 50px;`**:
  - These properties set the dimensions of the animated box to `50px` by `50px`.
  
- **`background-color: teal;`**:
  - Sets the background color of the box to `teal` to make it visible on the page.
  
- **`left: 0;` and `top: 50px;`**:
  - The `left` property sets the initial horizontal position of the box to `0px` from the left edge of the container.
  - The `top` property sets the vertical position of the box to `50px` from the top of the container.

### 3. JavaScript for Animation Logic 🕹️

The JavaScript code provides the functionality to animate the box when the button is clicked.

```javascript
<script>
  function animateElement(element) {
    let position = 0; // Starting position
    function frame() {
      position++; // Increment position
      element.style.left = position + 'px'; // Move element to the right
      if (position < 300) { // Stop at 300px
        requestAnimationFrame(frame); // Asynchronously request the next frame
      }
    }
    requestAnimationFrame(frame); // Start the animation
  }

  console.log("Animation script loaded!");

  // Wait for the DOM to fully load
  document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('animatedBox'); // Get the element to animate
    const button = document.getElementById('startButton'); // Get the button element

    // Start animation when button is clicked
    button.addEventListener('click', () => {
      animateElement(box); // Trigger the animation function
      console.log("Animation started!");
    });
  });
</script>
```

#### Explanation 📝

- **`function animateElement(element)`**:
  - This is a function that takes an `element` as an argument and animates it to move to the right.
  - The function uses `requestAnimationFrame` to perform smooth animations.

- **`let position = 0;`**:
  - This initializes the starting position of the element to `0px`.

- **`function frame()`**:
  - A nested function inside `animateElement` that performs the actual animation by updating the position of the element.
  - **`position++`**: Increments the `position` by `1px`.
  - **`element.style.left = position + 'px';`**: Updates the `left` CSS property of the element to move it to the right by `1px`.
  - **`if (position < 300)`**: Checks if the position is less than `300px`. If it is, the animation continues; otherwise, it stops.
  - **`requestAnimationFrame(frame);`**: Requests the browser to call `frame()` again to create the next frame of the animation.

- **`requestAnimationFrame(frame);`**:
  - This starts the animation by calling the `frame()` function for the first time.

- **`document.addEventListener('DOMContentLoaded', () => { ... });`**:
  - This code waits for the DOM to fully load before running the script, ensuring that all elements are available to interact with.

- **`const box = document.getElementById('animatedBox');`**:
  - Selects the animated box element from the DOM.

- **`const button = document.getElementById('startButton');`**:
  - Selects the button element from the DOM.

- **`button.addEventListener('click', () => { ... });`**:
  - Adds a `click` event listener to the button. When clicked, it calls the `animateElement` function, passing the `box` element to start the animation.

### How It All Works Together 🌟

1. **Page Loads**:
   - The `DOMContentLoaded` event listener waits for the page to load completely before executing any JavaScript.
   - The `button` and `box` elements are selected from the DOM.

2. **Button Click**:
   - When the "Start Animation" button is clicked, the `animateElement` function is triggered, passing the `box` element.

3. **Animation Starts**:
   - The `animateElement` function initializes the `position` to `0`.
   - The `frame` function is defined and then called using `requestAnimationFrame(frame)`.
   - The `frame` function moves the box `1px` to the right in each frame until it reaches `300px`.

4. **Smooth Animation**:
   - `requestAnimationFrame` ensures a smooth animation by synchronizing the redraws with the browser's refresh rate, making the animation more efficient and visually appealing.

### Final Output 🎬

When you click the "Start Animation" button:

- The box (`div`) with the teal background color smoothly moves from the left (`0px`) to the right until it reaches `300px`.
- The console logs "Animation started!" when the button is clicked and "Animation script loaded!" when the script loads.

### How the Event Loop Works in This Example 🌟

The **event loop** is a key part of how JavaScript handles tasks, especially when it comes to animations and user interactions. It helps manage tasks without blocking the browser, keeping everything smooth and responsive. Let’s see how it works step-by-step in our example! 👇

### 1. Page Loads and Script Runs 🖥️

- When the page loads, the browser reads the HTML and JavaScript. It sets up the **`DOMContentLoaded`** event listener.
- Once the DOM is fully loaded, the event listener is pushed to the **callback queue**. The **event loop** checks the **call stack** (where JavaScript runs) and runs this listener once the stack is empty.

### 2. Setting Up the Button Click 🖱️

- After the DOM is ready, we add a **click event listener** to the "Start Animation" button. When you click the button, this event listener will be triggered.
- When the button is clicked, the **click event** goes to the **callback queue**, and the **event loop** will run it when the **call stack** is clear.

### 3. Starting the Animation with `requestAnimationFrame` 🎬

- When you click the button:
  - The **`animateElement`** function starts and calls **`requestAnimationFrame(frame)`**.
  - This does **not** run the `frame` function immediately. Instead, it asks the browser to call `frame` on the next screen refresh (typically every 16.7 milliseconds for smooth animation).

### 4. Running Each Frame with the Event Loop 🔄

- The **`frame` function**:
  - Moves the box by `1px` to the right and checks if it has reached `300px`.
  - If not, it calls **`requestAnimationFrame(frame)`** again to keep moving the box in the next frame.
- Each time **`requestAnimationFrame`** is called, the **event loop** waits until the **call stack** is empty and then runs the next frame when the browser is ready to repaint. 🌈

### 5. Keeping the Animation Smooth 🌊

- **Why Smooth?** Because the **event loop** makes sure that the `frame` function runs only when the browser is ready to repaint, which keeps the animation from looking choppy or freezing.
- **No Blocking**: While the animation is running, the browser can still respond to other things (like user input or other scripts). This is because the **event loop** keeps everything non-blocking and efficient.

### 6. Efficient Use of Browser Power 💪

- **`requestAnimationFrame`** is super efficient! It tells the browser to optimize the timing of the animation, reducing unnecessary work and using just the right amount of power. ⚡

### In Short 📝

- **Event Loop Magic** ✨: Manages the execution of code so animations are smooth and other tasks can run too.
- **`requestAnimationFrame`** 🎥: Works with the event loop to make animations look great by syncing with the browser’s refresh rate.
- **Responsive and Fast UI** 🚀: The browser stays responsive to clicks and other actions while the animation runs smoothly.

So, the **event loop** is the hero here, making sure everything runs seamlessly, and `requestAnimationFrame` is its trusty sidekick, ensuring the animation is just right! 🎉
---

### 3. **Delayed Input Validation** 🧪

Validating form input after a user stops typing can prevent laggy input fields.

#### 🧩 **Code Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Delayed Input Validation Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    .input-container {
      margin-bottom: 15px;
    }
    #username {
      padding: 10px;
      width: 300px;
      font-size: 16px;
    }
    #validationMessage {
      color: green;
      font-size: 14px;
      margin-top: 5px;
    }
  </style>
</head>
<body>

  <div class="input-container">
    <label for="username">Enter your username:</label><br>
    <input type="text" id="username" placeholder="Type your username...">
    <div id="validationMessage"></div> <!-- To display validation message -->
  </div>

  <script>
    // JavaScript for Delayed Input Validation
    let timeout; // Variable to hold the timeout ID
    const inputField = document.querySelector("#username"); // Select the input field
    const validationMessage = document.querySelector("#validationMessage"); // Select the validation message div

    // Add an event listener for the 'input' event
    inputField.addEventListener("input", (event) => {
      clearTimeout(timeout);  // Clear the previous timeout to reset the timer
      timeout = setTimeout(() => {  // Set a new timeout
        validateInput(event.target.value);  // Call the validation function after 300ms
      }, 300);  // Delay of 300ms
    });

    // Function to validate the input
    function validateInput(value) {
      if (value.trim() === "") {
        validationMessage.textContent = "Username cannot be empty.";
        validationMessage.style.color = "red";
      } else if (value.length < 3) {
        validationMessage.textContent = "Username must be at least 3 characters long.";
        validationMessage.style.color = "red";
      } else {
        validationMessage.textContent = "Username is valid!";
        validationMessage.style.color = "green";
      }
    }
  </script>
</body>
</html>
```

#### ✨ **Explanation:**
### 🎯 What Does the Example Do?

The example demonstrates **delayed input validation** using JavaScript. It ensures that input validation occurs only **after the user stops typing** for a specific amount of time (300 milliseconds in this case). This approach improves user experience by avoiding frequent validation checks while the user is actively typing.

### 🔍 How Does the Event Loop Shine Here?

In this example, the **event loop** manages the asynchronous behavior of `setTimeout` and `clearTimeout`, allowing JavaScript to delay execution without blocking the main thread. Let's break it down step-by-step. 👇

### 1. HTML Structure 🏗️

- The HTML provides an **input field** where users can type a username and a **validation message** area to show feedback.

```html
<input type="text" id="username" placeholder="Type your username...">
<div id="validationMessage"></div> <!-- Validation message will appear here -->
```

### 2. CSS Styling 🎨

- Basic CSS styles make the input field look nice and the validation messages stand out with different colors (red for errors, green for valid input). 

### 3. JavaScript with the Event Loop Magic 🪄

#### Setting Up Input Validation

- **Key Variables**:
  - `timeout`: A variable to hold the timeout ID, allowing us to clear it if needed.
  - `inputField`: The input field element where the user types.
  - `validationMessage`: The element where the validation feedback will be displayed.

#### Handling User Input 🖱️

```javascript
inputField.addEventListener("input", (event) => {
  clearTimeout(timeout); // 🧹 Clear previous timeout to reset the delay
  timeout = setTimeout(() => { // ⏳ Set a new timeout to validate after 300ms
    validateInput(event.target.value); // ✅ Call validation after user stops typing
  }, 300);
});
```

1. **User Types in the Input Field**:
   - Every time the user types a letter, the `input` event is triggered. This adds the `input` event to the **callback queue**.
   
2. **`clearTimeout(timeout)` Cleans Up the Old Timer** 🧹:
   - The `clearTimeout` function cancels the previous timer if the user is still typing, preventing unnecessary validation checks. The **event loop** ensures that the `clearTimeout` call runs immediately, so no overlapping validations occur.
   
3. **`setTimeout` Sets a New Delay Timer** ⏳:
   - `setTimeout` is called to schedule a validation after **300 milliseconds**. This timer is managed by the **event loop**, which waits until the specified time passes before running the callback function.
   
4. **Event Loop in Action** 🔄:
   - After the user stops typing for 300 milliseconds, the timer completes, and the **callback** for `setTimeout` moves to the **callback queue**.
   - The **event loop** waits until the **call stack** is clear and then moves the callback to the stack for execution. The `validateInput` function runs and updates the validation message based on the input value.

#### Validating Input and Displaying Messages 📋

```javascript
function validateInput(value) {
  if (value.trim() === "") {
    validationMessage.textContent = "Username cannot be empty.";
    validationMessage.style.color = "red";
  } else if (value.length < 3) {
    validationMessage.textContent = "Username must be at least 3 characters long.";
    validationMessage.style.color = "red";
  } else {
    validationMessage.textContent = "Username is valid!";
    validationMessage.style.color = "green";
  }
}
```

- This function checks the input value:
  - If it is empty or less than 3 characters, it shows an error message in **red**.
  - If valid, it displays a success message in **green**.

### 4. How the Event Loop Makes It All Work Smoothly 🚀

- **Debouncing with `setTimeout` and `clearTimeout`**:
  - The **event loop** ensures that the validation function (`validateInput`) only runs after the user stops typing for 300 milliseconds.
  - **Why does this matter?** It prevents the browser from performing resource-intensive checks on every keystroke, enhancing performance and user experience! 🌟
  
- **Managing Tasks Without Blocking**:
  - The **event loop** allows `setTimeout` to handle delays **asynchronously**, so the main thread is never blocked. Users can continue typing, and only when they pause does the validation occur.
---
### 4. **Rate Limiting Function Calls** 📊

Rate limiting API calls to avoid overloading a server is another practical application.

#### 🧩 **Code Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rate Limiting User Data Display with Toggle Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    #button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      background-color: teal;
      color: white;
      border: none;
      border-radius: 5px;
    }
    #button:disabled {
      background-color: gray;
      cursor: not-allowed;
    }
    #status {
      margin-top: 15px;
      font-size: 14px;
      color: #333;
    }
    #userData {
      margin-top: 15px;
      font-size: 16px;
      color: #444;
      border: 1px solid #ddd;
      padding: 10px;
      border-radius: 5px;
      width: 300px;
    }
  </style>
</head>
<body>

  <button id="button">Show User Data</button>
  <div id="status"></div> <!-- To display status messages -->
  <div id="userData" style="display: none;"></div> <!-- To display user data -->

  <script>
    let lastCall = 0;  // Timestamp of the last function call
    const rateLimit = 9000;  // Rate limit in milliseconds (9 seconds)
    const button = document.querySelector("#button"); // Get the button element
    const userDataDiv = document.getElementById('userData'); // Get the user data display div
    let isDataVisible = false; // Flag to track visibility of user data

    function displayUserData() {
      const userData = {
        name: "Hashim",
        age: 24,
        qualification: "BSCS",
        profession: "Python Developer"
      };

      // Toggle user data display
      if (isDataVisible) {
        userDataDiv.style.display = 'none'; // Hide user data
        isDataVisible = false; // Update flag
        console.log("User data hidden at", new Date().toISOString());
      } else {
        userDataDiv.innerHTML = `
          <strong>Name:</strong> ${userData.name} <br>
          <strong>Age:</strong> ${userData.age} <br>
          <strong>Qualification:</strong> ${userData.qualification} <br>
          <strong>Profession:</strong> ${userData.profession}
        `;
        userDataDiv.style.display = 'block'; // Show user data
        isDataVisible = true; // Update flag
        console.log("User data displayed at", new Date().toISOString());
      }
      document.getElementById('status').textContent = "User data displayed at " + new Date().toLocaleTimeString();
    }

    // Add click event listener to the button
    button.addEventListener("click", () => {
      const now = Date.now();  // Get the current timestamp
      if (now - lastCall >= rateLimit) {  // Check if enough time has passed since the last call
        displayUserData();  // Display or hide user data
        lastCall = now;  // Update the last call time
      } else {
        userDataDiv.style.display = 'none'; // Ensure data is hidden during cooldown
        isDataVisible = false; // Reset flag
        document.getElementById('status').textContent = `Please wait for ${((rateLimit - (now - lastCall)) / 1000).toFixed(1)} seconds before showing the data again.`;
      }
    });
  </script>

</body>
</html>
```

#### ✨ **Explanation:**
### 🎯 What Does This Example Do?

This example demonstrates **rate limiting with a toggle feature** for showing and hiding user data. The user can click a button to either **show** or **hide** user data, but the action is **rate-limited** to prevent frequent toggling. If the button is clicked too soon, the user is informed of the remaining wait time.

### 🌐 **HTML Structure and Styling** 📜

The HTML structure contains a **button** that the user can click to toggle user data visibility and two `<div>` elements: one for **status messages** and another for showing the **user data**.

#### **HTML and CSS** Overview

- **Button (`Show User Data`)**: This button toggles the display of user data. It can be clicked only if the rate limit allows it. If not, a message will prompt the user to wait.
- **Status Messages (`#status`)**: This `div` displays messages indicating if the user data is shown, hidden, or if the user needs to wait before toggling again.
- **User Data Display (`#userData`)**: This `div` is initially hidden but will show user data like name, age, qualification, and profession when the button is clicked.

```html
<button id="button">Show User Data</button>
<div id="status"></div> <!-- To display status messages -->
<div id="userData" style="display: none;"></div> <!-- To display user data -->
```

### 🎨 **CSS Styling**

- **Styling the Button**: Gives it a teal color, rounded corners, and disables it when not usable.
- **Status Messages and User Data**: Adds some margin, padding, border, and color to make it more readable and user-friendly.

### **JavaScript with Event Loop Magic** 🪄

#### Key JavaScript Elements:

1. **Setting Up Variables and Elements** 🧩:

```javascript
let lastCall = 0;  // Timestamp of the last function call
const rateLimit = 9000;  // Rate limit in milliseconds (9 seconds)
const button = document.querySelector("#button"); // Get the button element
const userDataDiv = document.getElementById('userData'); // Get the user data display div
let isDataVisible = false; // Flag to track visibility of user data
```

- **`lastCall`**: Tracks the timestamp of the last button click.
- **`rateLimit`**: Defines the **cool-down period** of 9 seconds between consecutive actions.
- **`isDataVisible`**: A flag that helps to track whether the user data is currently visible or hidden.

2. **Function to Toggle User Data Display** 🔄:

```javascript
function displayUserData() {
  const userData = {
    name: "Hashim",
    age: 24,
    qualification: "BSCS",
    profession: "Python Developer"
  };

  // Toggle user data display
  if (isDataVisible) {
    userDataDiv.style.display = 'none'; // Hide user data
    isDataVisible = false; // Update flag
    console.log("User data hidden at", new Date().toISOString());
  } else {
    userDataDiv.innerHTML = `
      <strong>Name:</strong> ${userData.name} <br>
      <strong>Age:</strong> ${userData.age} <br>
      <strong>Qualification:</strong> ${userData.qualification} <br>
      <strong>Profession:</strong> ${userData.profession}
    `;
    userDataDiv.style.display = 'block'; // Show user data
    isDataVisible = true; // Update flag
    console.log("User data displayed at", new Date().toISOString());
  }
  document.getElementById('status').textContent = "User data displayed at " + new Date().toLocaleTimeString();
}
```

- **Purpose**: This function either **displays** or **hides** the user data based on the `isDataVisible` flag.
- **How It Works**:
  - If `isDataVisible` is `true`, it hides the data and logs that action.
  - If `isDataVisible` is `false`, it populates the `#userData` `div` with user details and makes it visible.
  - The **console log** and **status message** provide feedback about the action.

3. **Button Click Handler with Rate Limiting** 🕹️:

```javascript
button.addEventListener("click", () => {
  const now = Date.now();  // Get the current timestamp
  if (now - lastCall >= rateLimit) {  // Check if enough time has passed since the last call
    displayUserData();  // Display or hide user data
    lastCall = now;  // Update the last call time
  } else {
    userDataDiv.style.display = 'none'; // Ensure data is hidden during cooldown
    isDataVisible = false; // Reset flag
    document.getElementById('status').textContent = `Please wait for ${((rateLimit - (now - lastCall)) / 1000).toFixed(1)} seconds before showing the data again.`;
  }
});
```

- **How It Works**:
  1. **Button Click Event Listener**:
     - When the button is clicked, a **click event** is added to the **callback queue**.
     - The **event loop** checks the **call stack** and runs the callback when it's clear.
  2. **Checking the Time Difference** ⏳:
     - `Date.now()` gets the current timestamp (`now`).
     - Compares `now` with `lastCall` to see if **9 seconds** (9000 milliseconds) have passed since the last action.
  3. **Toggling Data or Showing Wait Message** ⚡:
     - If **9 seconds** have passed, it toggles the data display using `displayUserData()` and updates `lastCall`.
     - If not, it hides the data, resets the `isDataVisible` flag, and shows a message indicating how much time is left before the next allowed action.

### 🌟 How the Event Loop Shines Here 🚀

1. **Handling User Interactions Smoothly** ✨:
   - When the button is clicked, the **click event** is queued in the **callback queue**.
   - The **event loop** picks up this event and executes the callback when the **call stack** is empty, ensuring smooth handling without blocking.

2. **Rate Limiting Logic Using the Event Loop** 🔄:
   - The rate limit check `if (now - lastCall >= rateLimit)` determines whether the action is allowed.
   - If the rate limit is met, the function runs; otherwise, the UI is updated with a wait message.

3. **Providing Immediate Feedback Without Blocking** 🗣️:
   - Thanks to the **event loop**, even when the button is clicked rapidly, it processes the clicks asynchronously, showing messages without blocking the main thread.

4. **Managing UI Responsiveness** 💪:
   - **Prevents frequent toggling**: The rate limit ensures that the data can only be toggled every 9 seconds, avoiding unnecessary rapid toggles.
   - **Keeps the UI responsive**: The **event loop** ensures that all tasks are handled smoothly, maintaining a responsive UI.
---

### Example: Promises in the Event Loop 🕳️

Promises are always resolved or rejected as a new event. Even if a promise is already resolved, waiting for it will cause your callback to run after the current script finishes.

```javascript
Promise.resolve("Done").then(console.log);
console.log("Me first!");
// Output:
// Me first!
// Done
```

#### 🧩 **Explanation:**

- **What This Code Does**:
  - `Promise.resolve("Done")` creates a promise that is immediately resolved.
  - `.then(console.log)` schedules the logging of `"Done"` as a microtask in the event loop.
  - `console.log("Me first!")` runs synchronously.

- **Why “Me first!” is Logged Before “Done”**:
  - The synchronous code (`console.log("Me first!")`) runs first.
  - The promise’s `.then()` callback runs after the synchronous code, showing that promises are added to the microtask queue and run after the current stack is clear.

---
## 🎉 **Conclusion**

The **Event Loop** is at the heart of JavaScript's asynchronous programming model. It allows JavaScript to handle multiple tasks efficiently, keeping the UI responsive and enabling non-blocking operations. By mastering the event loop, you can write more efficient, performant, and user-friendly JavaScript code! 🌟

## 💡 **Key Takeaways**

- **Single-Threaded Nature**: JavaScript runs one task at a time but can handle multiple operations using the event loop.
- **Task Queue and Microtasks**: Understand the difference between macrotasks (setTimeout, setInterval) and microtasks (Promises).
- **Avoid Blocking the Event Loop**:

 Write non-blocking code to keep the UI responsive and the event loop running smoothly.
