# 📚 Summary

This summary provides an overview of foundational concepts in JavaScript, covering how programs are structured, how control flow is managed, and the essential role of bindings and functions. Let’s dive in! 🚀

## 📖 Table of Contents
1. [🛠️ Program Structure](#-program-structure)
2. [🔄 Control Flow](#-control-flow)
3. [📂 Bindings (Variables)](#-bindings-variables)
4. [⚙️ Functions](#-functions)
5. [💡 Example: Using Functions](#-example-using-functions)

## 🛠️ Program Structure

- **Statements**: Programs are built from statements, which are individual instructions that perform specific tasks.
- **Expressions**: Statements can contain expressions, which are combinations of values and operators that yield a result.
- **Execution Order**: Writing statements one after another creates a program that runs from top to bottom, following a sequential flow.

> 📝 **Example**: Each line in a program is a statement. Writing them in sequence forms a logical flow of execution.

## 🔄 Control Flow

Control flow determines the path your program takes as it runs, allowing for **conditional** logic and **repeating actions**.

- **Conditional Statements**: Use `if`, `else`, and `switch` statements to execute code based on specific conditions.
- **Looping Statements**: Use loops like `while`, `do`, and `for` to repeat sections of code until a condition is met.

> 🔹 **Example**: `if-else` statements help manage branching paths, while `for` loops simplify tasks like iterating over arrays.

## 📂 Bindings (Variables)

Bindings, also known as variables, are placeholders that store data, allowing you to reference and manipulate values throughout your program.

- **Purpose**: Bindings are used to "file" pieces of data under a name.
- **Tracking State**: Bindings help track values and states as your program executes.
- **Environment**: The environment consists of all defined bindings, with some JavaScript systems providing built-in bindings for commonly used operations.

> 🧩 **Example**: `let count = 0;` declares a binding `count` with an initial value of 0, allowing you to track a counter.

## ⚙️ Functions

Functions are blocks of code that perform specific tasks and can be reused throughout a program.

- **Function Call**: Invoke functions by writing `functionName(argument1, argument2)`.
- **Return Values**: Function calls are expressions that may return values, which can be assigned to bindings or used directly.

> 🛠️ **Example**: Use functions to encapsulate reusable logic, making code modular and organized.

## 💡 Example: Using Functions

Here’s a simple function that takes a name as input and returns a greeting message:

```javascript
// Define a function
function greet(name) {
  return "Hello, " + name + "!";
}

// Call the function with an argument
let message = greet("Alice");

// Output the result
console.log(message); // → "Hello, Alice!"
```

### 🔍 Explanation

1. **Function Definition**: `greet` takes one parameter, `name`.
2. **Return Statement**: The function returns a greeting message that includes the name.
3. **Function Call**: The function is called with `"Alice"` as the argument.
4. **Output**: The result is stored in `message` and logged to the console.

