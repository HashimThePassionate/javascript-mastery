# ➖ Unary Operators in JavaScript

In JavaScript, **unary operators** operate on a single value, as opposed to **binary operators**, which require two values. Unary operators are versatile, including operators that check data types and perform mathematical negation. Let’s explore how they work! 🌐

---

## 📖 Table of Contents
1. [What are Unary Operators?](#1-what-are-unary-operators-)
2. [The `typeof` Operator](#2-the-typeof-operator-)
3. [Using `console.log`](#3-using-consolelog-)
4. [Binary vs. Unary Operators](#4-binary-vs-unary-operators-)
5. [Example of Unary Minus Operator](#5-example-of-unary-minus-operator-)

---

### 1. What are Unary Operators? 🔍

**Unary operators** operate on a single value, unlike binary operators, which require two values. They perform various tasks, such as checking data types or negating numbers. Not all unary operators are symbols; some are written as words, like the `typeof` operator.

---

### 2. The `typeof` Operator 📝

The `typeof` operator is a commonly used unary operator that returns the **type of a given value** as a string. It’s helpful for determining whether a value is a number, string, object, etc.

#### Examples:
```javascript
console.log(typeof 4.5);    // Output: "number"
console.log(typeof "hello"); // Output: "string"
```

> 📌 **Note**: The `typeof` operator is especially useful for checking variable types in dynamic JavaScript code.

---

### 3. Using `console.log` 🖥️

In these examples, we use `console.log` to display the result of evaluating expressions directly in the console. This is helpful for quickly seeing the output of unary operators.

Example:
```javascript
console.log(typeof 42); // Output: "number"
```

> 💡 **Tip**: `console.log` is a valuable debugging tool that shows real-time output in the console.

---

### 4. Binary vs. Unary Operators 🔄

To understand unary operators, it helps to compare them with **binary operators**:

- **Binary Operators**: Require two values to operate (e.g., `+`, `-` in `3 + 4`).
- **Unary Operators**: Operate on only one value (e.g., `typeof`, `-` in `-10`).

| Operator Type | Example                | Description                                  |
|---------------|------------------------|----------------------------------------------|
| **Unary**     | `typeof "JavaScript"`  | Checks the type of a single value            |
| **Binary**    | `10 + 5`               | Adds two values together                     |

---

### 5. Example of Unary Minus Operator ➖

The **minus operator (`-`)** can function both as a **binary** operator (subtracting two values) and a **unary** operator (negating a single value).

#### Example:
```javascript
console.log(-(10 - 2)); // Output: -8
```

In this case:
- The **binary minus** operator `10 - 2` calculates `8`.
- The **unary minus** operator `-` then negates the result, producing `-8`.

> 🔹 **Note**: Unary minus is commonly used to convert positive values to negative.

---

> 🧠 **In Summary**:
> - **Unary Operators**: Operate on a single value, with common examples like `typeof` and the unary minus.
> - **Type Checking**: `typeof` helps identify the type of a value.
> - **Unary Minus**: Converts positive values to negative or negates numbers.

Understanding unary operators enhances your ability to perform type checks and mathematical manipulations in JavaScript! 🎉