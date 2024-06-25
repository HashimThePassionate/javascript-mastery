## Introduction

This document will guide you through the basics of JavaScript bindings and how to set up a development environment using VS Code.

## Table of Contents
1. [Installing VS Code](#installing-vs-code)
2. [Installing Live Server Extension](#installing-live-server-extension)
3. [Creating and Linking JavaScript to HTML](#creating-and-linking-javascript-to-html)
4. [Understanding JavaScript Bindings](#understanding-javascript-bindings)

## Installing VS Code

Visual Studio Code (VS Code) is a popular code editor for web development.

1. Go to the [VS Code download page](https://code.visualstudio.com/Download).
2. Download the version appropriate for your operating system.
3. Run the installer and follow the setup instructions.

## Installing Live Server Extension

Live Server is an extension for VS Code that allows you to see your changes in real-time.

1. Open VS Code.
2. Go to the Extensions view by clicking the square icon in the sidebar or pressing `Ctrl+Shift+X`.
3. Search for "Live Server".
4. Click "Install".

## Creating and Linking JavaScript to HTML

### Step 1: Create `index.html`

1. Open VS Code.
2. Create a new file and name it `index.html`.
3. Add the following basic HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Bindings</title>
</head>
<body>
    <h1>Binding Variable Names</h1>
    <script src="script.js"></script>
</body>
</html>
```

### Step 2: Create `script.js`

1. Create a new file in the same directory as `index.html` and name it `script.js`.
2. Link this JavaScript file in your `index.html` as shown above.

### Step 3: Run with Live Server

1. Right-click on `index.html` in the VS Code file explorer.
2. Select "Open with Live Server".
3. Your default browser should open displaying the HTML content.

## Understanding JavaScript Bindings

Bindings, also known as variables, are used in JavaScript to store and manipulate data. Here’s a simple guide to understanding them:

### Basic Syntax

To create a binding, use the `let` keyword:

```javascript
let caught = 5 * 5;
```

This creates a binding called `caught` and assigns it the value of `5 * 5`, which is `25`.

### Using Bindings

Once a binding is defined, you can use it to refer to its value:

```javascript
let ten = 10;
console.log(ten * ten); // Output: 100
```

### Changing Binding Values

A binding can be reassigned to a new value using the `=` operator:

```javascript
let mood = "light";
console.log(mood); // Output: light
mood = "dark";
console.log(mood); // Output: dark
```

### Multiple Bindings

You can define multiple bindings in a single statement:

```javascript
let one = 1, two = 2;
console.log(one + two); // Output: 3
```

### `var` and `const`

Besides `let`, JavaScript also allows the use of `var` and `const` to create bindings:

```javascript
var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name); // Output: Hello Ayda
```

- `var` is an older way to declare bindings and behaves differently in some scenarios.
- `const` creates a constant binding, which means its value cannot be changed after being set.

### Binding Names

Binding names can include letters, digits (but not start with them), dollar signs ($), and underscores (_). They cannot include other punctuation or special characters. Some words are reserved by JavaScript and cannot be used as binding names.

### The Environment

The collection of bindings and their values at a given time is called the environment. A program starts with a predefined environment, which includes bindings provided by the JavaScript language standard and the browser or runtime environment.

By understanding these basics, you can start manipulating data and building more complex programs in JavaScript.