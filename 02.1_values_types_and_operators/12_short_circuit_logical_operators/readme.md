# ⚡ Short-Circuiting of Logical Operators in JavaScript

In JavaScript, logical operators not only return Boolean results but also **short-circuit** their evaluation, allowing certain expressions to be skipped if unnecessary. This short-circuiting behavior applies to operators like `||`, `&&`, and the conditional operator `??`. Let’s explore how this works! 🌐

---

## 📖 Table of Contents
1. [Overview](#1-overview-)
2. [The `||` Operator](#2-the--operator-)
3. [The `??` Operator (Nullish Coalescing)](#3-the--operator-nullish-coalescing-)
4. [The `&&` Operator](#4-the--operator-)
5. [Short-Circuit Evaluation](#5-short-circuit-evaluation-)
6. [The Conditional (Ternary) Operator](#6-the-conditional-ternary-operator-)

---

### 1. Overview 🔍

**Logical operators** in JavaScript like `&&`, `||`, and `??` can handle values of different types. They don’t always return Boolean values—instead, they return one of the original values based on **short-circuiting rules**. This allows for efficient, optimized evaluations.

---

### 2. The `||` Operator 🔗

The **`||` operator** (logical OR) returns the **left value** if it can be converted to `true`; otherwise, it returns the **right value**. This behavior is useful for setting **default values**.

#### Examples:
```javascript
console.log(null || "user");   // Output: "user"
console.log("Agnes" || "user"); // Output: "Agnes"
```

#### Using `||` for Default Values:
```javascript
let username = null;
let displayName = username || "Guest";
console.log(displayName); // Output: "Guest"
```

> 💡 **Tip**: Use `||` to provide fallback values when a variable might be empty or undefined.

---

### 3. The `??` Operator (Nullish Coalescing) 🚫

The **`??` operator** (nullish coalescing) is similar to `||` but only returns the **right value** if the **left value is `null` or `undefined`**. This is useful for treating `null` and `undefined` differently from other falsy values, such as `0` or `""`.

#### Examples:
```javascript
console.log(0 || 100);     // Output: 100
console.log(0 ?? 100);     // Output: 0
console.log(null ?? 100);  // Output: 100
```

> 🧠 **Note**: Use `??` when you want to provide defaults only for `null` or `undefined`, not for all falsy values.

---

### 4. The `&&` Operator 🔗

The **`&&` operator** (logical AND) returns the **left value** if it can be converted to `false`; otherwise, it returns the **right value**. This is useful for checking if a condition is met before proceeding with an action.

#### Examples:
```javascript
console.log(0 && "Hello");   // Output: 0
console.log(1 && "Hello");   // Output: "Hello"
```

> 📌 **Tip**: Use `&&` when both conditions must be true for an action to proceed.

---

### 5. Short-Circuit Evaluation ⚡

Both `&&` and `||` operators use **short-circuit evaluation**, meaning they only evaluate the right-hand side if necessary:
- **`||`**: If the left value is `true`, the right value is not evaluated.
- **`&&`**: If the left value is `false`, the right value is not evaluated.

#### Examples:
```javascript
function sideEffect() {
    console.log("Side effect!");
    return true;
}

console.log(true || sideEffect());  // Output: true (sideEffect is not called)
console.log(false && sideEffect()); // Output: false (sideEffect is not called)
```

> 🔹 **Note**: Short-circuiting improves performance by avoiding unnecessary evaluations and side effects.

---

### 6. The Conditional (Ternary) Operator 🔄

The **conditional operator** (`? :`) also uses short-circuiting. Only the selected value is evaluated based on the condition.

#### Example:
```javascript
let isMember = true;
console.log(isMember ? "Welcome back!" : "Sign up now!"); // Output: "Welcome back!"
```

- If the condition before `?` is `true`, it evaluates the first option.
- If it’s `false`, it evaluates the second option.

> 💡 **Tip**: Use the conditional operator for concise, inline condition checks without needing an `if` statement.

---

> 🧠 **In Summary**:
> - **`||` Operator**: Returns the left value if it’s `true`; otherwise, returns the right value.
> - **`??` Operator**: Returns the right value only if the left is `null` or `undefined`.
> - **`&&` Operator**: Returns the left value if it’s `false`; otherwise, returns the right value.
> - **Short-Circuiting**: Logical operators skip unnecessary evaluations, optimizing performance and reducing side effects.

Understanding short-circuiting in logical operators allows you to write efficient, readable, and optimized JavaScript code! 🎉