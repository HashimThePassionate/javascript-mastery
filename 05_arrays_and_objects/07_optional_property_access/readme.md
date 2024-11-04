# 🌟 Optional Property Access in JavaScript

Optional property access in JavaScript lets you safely access properties or methods on objects that might be `null` or `undefined`, preventing runtime errors. This feature uses the **optional chaining operator** `?.`, which returns `undefined` when an object or property is missing. Let’s dive into its usage! 🚀✨

## 📖 Table of Contents 📚

1. [🔗 Optional Chaining with Dot Notation](#-optional-chaining-with-dot-notation)
2. [🔎 Optional Chaining with Bracket Notation](#-optional-chaining-with-bracket-notation)
3. [🔄 Optional Chaining with Function Calls](#-optional-chaining-with-function-calls)
4. [🧩 Combining Optional Chaining](#-combining-optional-chaining)
5. [✅ Conclusion](#-conclusion)

## 🔗 Optional Chaining with Dot Notation

### Syntax
The **optional chaining operator** `?.` safely accesses properties of an object without explicit checks.

### 🌐 Example: Accessing Nested Properties
This example safely accesses the `city` property of an `address` object:

```javascript
function city(object) {
  return object.address?.city;
}

console.log(city({ address: { city: "Toronto" } })); // → Toronto
console.log(city({ name: "Vera" })); // → undefined
```

#### 📝 Explanation
- `object.address?.city` will only try to access `city` if `object.address` exists.
- If `object.address` is missing, the expression returns `undefined` instead of causing an error.

## 🔎 Optional Chaining with Bracket Notation

Optional chaining can be combined with **bracket notation** for arrays and dynamic object properties.

### 🧩 Example: Accessing Array Elements
Here’s how optional chaining works with an array element:

```javascript
console.log({}.arrayProp?.[0]); // → undefined
```

- `{}.arrayProp?.[0]` tries to access the first element of `arrayProp`.
- Since `arrayProp` is not defined, the expression safely returns `undefined`.

## 🔄 Optional Chaining with Function Calls

Optional chaining can be used with function calls to **safely invoke methods** that might not exist.

### ⚙️ Example: Calling Methods
Here’s an example that attempts to call a non-existent method:

```javascript
console.log("string".notAMethod?.()); // → undefined
```

- `"string".notAMethod?.()` tries to call `notAMethod` on the string.
- Since `notAMethod` doesn’t exist, it safely returns `undefined`.

## 🧩 Combining Optional Chaining

Optional chaining can be combined for **nested properties** and **methods** to handle complex data safely.

### 💡 Example: Nested Access and Method Calls
Here’s a more complex example with nested properties and function calls:

```javascript
let user = {
  profile: {
    getName: () => "Alice"
  }
};

console.log(user.profile?.getName?.()); // → Alice
console.log(user.account?.getBalance?.()); // → undefined
```

#### 📋 Explanation
- `user.profile?.getName?.()` calls `getName` only if both `profile` and `getName` exist.
- `user.account?.getBalance?.()` safely returns `undefined` because `account` is missing.

## ✅ Conclusion
Optional property access provides a **safe, concise way** to access properties and methods on potentially undefined or null objects, eliminating repetitive null checks and enhancing code readability. 🎉