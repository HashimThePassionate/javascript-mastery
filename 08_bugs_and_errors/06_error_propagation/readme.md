# Error Propagation 🚨

In programming, not all problems can be prevented. When your program interacts with the outside world, such as handling user input or communicating over a network, errors are inevitable. This section explores how to handle errors gracefully, ensuring your program can respond to unexpected situations without simply crashing.

## 🧩 The Reality of Errors

If your program communicates with the outside world in any way, it’s bound to encounter problems like malformed input, network failures, or unexpected data. While you can ignore these issues when programming for yourself, it’s crucial to handle them properly when building something for others to use.

### 🚩 Example: Handling Malformed Input

Let’s consider a function `promptNumber` that asks the user for a number and returns it. But what happens if the user inputs something like “orange”?

### 🔍 Example Code:

```javascript
function promptNumber(question) {
    let result = Number(prompt(question));
    if (Number.isNaN(result)) return null;
    else return result;
}

console.log(promptNumber("How many trees do you see?"));
```

### 💡 Explanation:

- **Input Handling**: The function uses `prompt` to ask the user for input, then tries to convert the input to a number using `Number()`.
- **Error Check**: If the conversion fails (e.g., the user types “orange”), `Number.isNaN(result)` returns `true`, and the function returns `null`.
- **Special Value**: Returning `null` serves as a special value indicating that the input was invalid.

### 🛑 Error Propagation:

When `promptNumber` returns `null`, any code that calls this function must handle the possibility of receiving `null`. This could involve asking the user to try again, providing a default value, or returning another special value to indicate failure.

---

## 🛠️ Handling Errors with Special Values

In many situations, especially when errors are common and need to be explicitly managed, returning a special value like `null`, `undefined`, or `-1` is a good approach. However, this method has its challenges.

### 🔄 Example: Using a Special Value to Indicate Failure

Consider a function that returns the last element of an array. If the array is empty, it returns a special object indicating failure:

```javascript
function lastElement(array) {
    if (array.length == 0) {
        return {failed: true};
    } else {
        return {value: array[array.length - 1]};
    }
}

// Handling the result
let result = lastElement([]);
if (result.failed) {
    console.log("Array was empty.");
} else {
    console.log("Last element:", result.value);
}

result = lastElement([1, 2, 3]);
if (result.failed) {
    console.log("Array was empty.");
} else {
    console.log("Last element:", result.value); // Outputs: Last element: 3
}
```

### 💡 Explanation:

- **Error Handling**: The function checks if the array is empty. If it is, it returns an object with a `failed` property set to `true`. Otherwise, it returns the last element wrapped in an object with a `value` property.
- **Usage**: The caller checks the `failed` property to determine whether the function succeeded or not. This approach allows the function to signal whether it succeeded or failed, even when the return value could be any type.

### 🖥️ Console Output:

1. When the array is empty:
   ```
   Array was empty.
   ```

2. When the array has elements:
   ```
   Last element: 3
   ```

---

## ⚠️ The Downsides of Special Values

Returning special values to indicate errors can lead to a few problems:

1. **🔍 Ambiguity**: If a function can return every possible value, distinguishing between a valid result and an error can be tricky. You might need to wrap the result in an object, as shown in the `lastElement` example.

2. **🌀 Propagation of Checks**: If a function like `promptNumber` is called multiple times, each call requires a check to see if `null` was returned. This leads to repetitive and awkward code, where every function that calls another function must also check for special values and possibly return a special value itself. This pattern can quickly become cumbersome.

---

## 🚀 Conclusion

Error propagation is an essential consideration when designing robust programs. While returning special values like `null` can be an effective way to indicate errors, it’s important to be aware of the potential pitfalls, such as ambiguity and the need for repetitive checks. Understanding how to manage these challenges will help you build more resilient and user-friendly applications.
