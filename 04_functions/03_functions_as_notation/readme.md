# 🌟 JavaScript Functions as Values

JavaScript functions can act as both tools and values, allowing us to manipulate them just like other data types. Let's explore the different ways to work with functions and their various forms in JavaScript! 🚀

## 📖 Table of Contents

1. [🔗 Functions as Values](#-functions-as-values)
2. [📝 Declaration Notation](#-declaration-notation)
3. [➡️ Arrow Functions](#-arrow-functions)

## 🔗 Functions as Values

In JavaScript, a **function** isn’t just a one-time command. It’s a **value** you can store, manipulate, and even pass around as an argument. This gives functions flexibility and power in JavaScript, making it easy to create reusable and modular code! 🎉

### Example

Here’s an example where we assign a function to a variable and later change it if needed:

```javascript
let safeMode = true;
const missileSystem = {
    launch:function(t){
        console.log(`Missile Launched at ${t}`);
        
    }
}

let launchMisssiles = function() {
    missileSystem.launch('Pluto');
}

launchMisssiles();

if(safeMode){
    launchMisssiles = function(){
    console.log('Safe Mode is ON');
    }
}

launchMisssiles();
```

### ✨ Key Takeaways
- You can store a function in a binding just like other values.
- Function bindings (if not `const`) can be reassigned or altered based on conditions, like in the `safeMode` example above.

## 📝 Declaration Notation

JavaScript provides a shorthand way to create a function binding known as **function declaration** notation.

### Example: Square Function

```javascript
function square(x) {
  return x * x;
}

console.log(square(4)); // Outputs: 16
```

#### 📌 What’s Different?

- This **function declaration** syntax is more concise and doesn’t require a semicolon.
- Functions created this way are “hoisted,” meaning they can be called **before** their definition in the code.

### Example: Hoisting in Action

```javascript
console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}
```

This code works even though `future()` is called before it’s defined. Function declarations are conceptually moved to the top of their scope, allowing you to call them anywhere in the same scope. 🎩✨

## ➡️ Arrow Functions

Introduced in ES6 (2015), **arrow functions** provide a more concise way to write functions. They’re especially useful for small, quick functions.

### Example: Arrow Function with Parameters

```javascript
const roundTo = (n, step) => {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};
```

#### 📝 Arrow Function Syntax

- **Parameters** go in parentheses `( )` and are followed by an arrow `=>`.
- **Function body** comes after the arrow. If it’s a single line, no `{ }` braces are needed, and the result is automatically returned.

### Simplifying Arrow Functions

When a function has **one parameter**, parentheses are optional, and if the function body has only **one expression**, braces can be skipped.

```javascript
const square1 = (x) => { return x * x; };
const square2 = x => x * x; // Same as square1, but shorter!
```

### 🥁 Example: No Parameters

When an arrow function has no parameters, use empty parentheses:

```javascript
const horn = () => {
  console.log("Toot");
};

horn(); // Outputs: "Toot"
```

## 🎉 Summary

JavaScript provides multiple ways to create and use functions, giving you flexibility to choose the style that best fits your code’s purpose:

- **Functions as Values**: Functions can be stored, reassigned, and used as flexible values in JavaScript.
- **Declaration Notation**: Offers a straightforward way to define functions that are accessible anywhere within their scope.
- **Arrow Functions**: A concise way to write functions, ideal for shorter functions and callbacks.
