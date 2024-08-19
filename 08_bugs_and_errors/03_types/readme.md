# 🎯 Types 🧩

In programming, **types** are an essential concept that helps you understand and manage the kinds of values that your code handles. Some programming languages enforce strict type checks before a program runs, but JavaScript handles types differently. Let’s explore how JavaScript deals with types and why they’re still important.

---

## 🛠️ How JavaScript Handles Types

Unlike some languages that require you to specify types for all your variables and expressions before running your code, JavaScript checks types only at runtime. Even then, it often tries to implicitly convert values to the expected type, which can sometimes lead to unexpected behavior.

### Example of Implicit Conversion:

```javascript
console.log("5" - 1); // 🟢 Output: 4 (string "5" is converted to number)
console.log("5" + 1); // 🔴 Output: "51" (number 1 is converted to string)
```

In the above examples, JavaScript implicitly converts the types of values during operations, which can lead to different results depending on the operation.

---

## 💬 Why Types Matter

Even though JavaScript doesn’t enforce strict typing, understanding types is still crucial. Many programming errors stem from confusion about the type of value expected by a function or an operation. By keeping track of types, you reduce the likelihood of making such mistakes.

### Annotating Types with Comments:

You can add comments in your code to describe the expected types, which can help clarify how a function should be used. For example, consider the `findRoute` function:

```javascript
// (graph: Object, from: string, to: string) => string[]
function findRoute(graph, from, to) {
  // ...
}
```

In this example, the comment describes that `findRoute` expects an object (`graph`), a string (`from`), and another string (`to`), and it returns an array of strings (`string[]`).

---

## 🧠 The Complexity of Types

Types can introduce complexity, especially when trying to describe functions that work with multiple types. For example, consider a function `randomPick` that returns a random element from an array:

```javascript
function randomPick(array) {
  return array[Math.floor(Math.random() * array.length)];
}
```

To describe the type of `randomPick`, you might introduce a type variable `T` that represents any type. The type of `randomPick` could then be described as:

```typescript
(T[]) => T  // A function that takes an array of T and returns a T
```

This notation means that `randomPick` can take an array of any type and return an element of that same type.

---

## 🔍 Type Checking with TypeScript

When the types of a program are known, it’s possible for the computer to check them for you, pointing out mistakes before the program is run. **TypeScript** is a popular JavaScript dialect that adds static types to the language and checks them during development.

### Why Use TypeScript?

- **Error Detection**: TypeScript can catch type-related errors before your program runs.
- **Improved Code Quality**: Types help document your code, making it easier to understand and maintain.
- **Better Tooling**: Many modern development tools integrate well with TypeScript, offering features like autocompletion and refactoring support.

If you’re interested in adding more rigor to your JavaScript programming, I recommend giving TypeScript a try.

---

## 🚧 Continuing with Raw JavaScript

In this section, we'll continue to use raw, untyped JavaScript code. While this approach offers flexibility, it also requires you to be more vigilant about the types of values your code is working with.