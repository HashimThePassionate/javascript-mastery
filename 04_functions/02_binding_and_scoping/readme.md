# 🚀 Bindings and Scopes in JavaScript

Understanding **bindings** and **scopes** in JavaScript is crucial for managing variables and functions effectively. Let’s explore how different types of scopes work and see examples to make these concepts clear! 🎉

## 📖 Table of Contents

1. [🔍 Global Scope](#-global-scope)
2. [🔒 Local Scope](#-local-scope)
3. [📦 Block Scope](#-block-scope)
4. [🔗 Nested Scopes](#-nested-scopes)
5. [📘 Lexical Scoping](#-lexical-scoping)

## 🔍 Global Scope

In JavaScript, **global scope** refers to bindings (variables or functions) that are accessible from any part of the program. Bindings declared outside any function, block, or module are considered **global bindings** and can be accessed globally.

```javascript
let x = 10; // 🌍 Global scope

function showX() {
  console.log(x); // ✅ Accessible here
}

showX(); // Outputs: 10
```

### 🌟 Key Points
- **Global bindings** are accessible anywhere in the program.
- They remain in memory for the entire runtime, so it’s good practice to keep global variables to a minimum.

## 🔒 Local Scope

**Local scope** refers to bindings created within a function. These bindings are only accessible inside that function, and each time the function is called, new instances of these local bindings are created.

```javascript
const halve = function(n) {
  return n / 2;
};

let n = 10;
console.log(halve(100)); // → 50
console.log(n); // → 10
```

### 🌟 Key Points
- **Local bindings** (variables or parameters) only exist within the function.
- Each function call has its own **instance** of these local variables.

## 📦 Block Scope

**Block scope** in JavaScript refers to bindings declared with `let` or `const` inside a block `{...}`. These bindings are limited to the block they’re declared in, such as loops, `if` statements, or functions.

```javascript
if (true) {
  let y = 20; // 🧩 Block-scoped
  var z = 30; // 🌐 Global-scoped with var
}
console.log(z); // ✅ Outputs: 30
console.log(y); // ❌ Error: y is not defined
```

### 🌟 Key Points
- Bindings declared with `let` and `const` are **block-scoped**.
- In contrast, `var`-declared bindings are scoped to the nearest function or global scope, even if they’re declared within a block.

## 🔗 Nested Scopes

JavaScript allows creating blocks and functions within other blocks and functions, forming **nested scopes**. Inner functions have access to the outer function’s variables, but not vice versa.

```javascript
const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

hummus(2);
```

### 🌟 Key Points
- The **inner function `ingredient`** has access to `factor` from the outer function.
- **Local bindings** like `unit` and `ingredientAmount` in `ingredient` are not visible to the outer `hummus` function.

## 📘 Lexical Scoping

JavaScript follows **lexical scoping**, meaning the scope of a variable is determined by its position in the code. A block’s scope is defined by where it is **declared** in the code, not where it is **called**.

```javascript
function outer() {
  let outerVar = "I'm outside!";
  function inner() {
    console.log(outerVar); // ✅ Accessible here due to lexical scoping
  }
  inner();
}

outer(); // Outputs: I'm outside!
```

### 🌟 Key Points
- **Lexical scoping** lets inner functions access variables of their outer scope.
- Variables are **locked** to the scope they were defined in, ensuring predictability.
