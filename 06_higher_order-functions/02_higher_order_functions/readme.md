# 🌟 Higher-Order Functions in JavaScript 🌟

## 📖 Table of Contents

1. [🎯 Introduction to Higher-Order Functions](#-introduction-to-higher-order-functions)
2. [🛠️ Creating New Functions](#-creating-new-functions)
3. [🔄 Changing Other Functions](#-changing-other-functions)
4. [🚦 New Types of Control Flow](#-new-types-of-control-flow)
5. [📋 Built-in Array Method: forEach](#-built-in-array-method-foreach)

---

## 🎯 Introduction to Higher-Order Functions

Higher-order functions are a special type of function that works with **other functions**. They can take functions as arguments, return functions, or even modify other functions! This lets us:
- Write cleaner, more organized code.
- Create functions that can be customized on the fly.
- Simplify complex operations by abstracting actions.

Higher-order functions allow us to manipulate and transform functions the same way we work with data, making our code more powerful and flexible.

---

## 🛠️ Creating New Functions

Higher-order functions can **create new functions**. Let’s see this with an example:

### Example

```javascript
function greaterThan(n) {
  return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); // → true
```

<img src="./images/returnFunction.PNG" alt="Return Function" width="80%">

### Explanation
- The `greaterThan` function takes a number `n` and returns a new function.
- This returned function checks if another number `m` is greater than `n`.
- Here, `greaterThan10` is a new function created by calling `greaterThan(10)`. It checks if numbers are greater than 10.

This way, **greaterThan** is a higher-order function because it returns another function.

---

## 🔄 Changing Other Functions

Higher-order functions can also **modify other functions** to add new behavior.

### Example

```javascript
function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}

noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1
```

<img src="./images/changeFunction.PNG" alt="Change Function" width="80%">

### Explanation
- The `noisy` function takes another function `f` as an argument and returns a new function.
- This new function logs the arguments it was called with, executes `f` with those arguments, logs the result, and then returns the result.
- In the example, `noisy(Math.min)(3, 2, 1)` logs the arguments `[3, 2, 1]`, calls `Math.min` with those values, logs the result, and then returns the result.

This helps in **debugging** by logging input and output, without changing the original function.

---

## 🚦 New Types of Control Flow

Higher-order functions can create new types of **control flow**, providing alternative ways to structure logic.

### Example

```javascript
function unless(test, then) {
  if (!test) then();
}

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, n => {
  unless(n % 2 === 1, () => {
    console.log(n, "is even");
  });
});
// → 0 is even
// → 2 is even
```

### Explanation
- **unless**: This function takes a condition (`test`) and an action (`then`). If the condition is false, it runs the action.
- **repeat**: This function repeats an action `n` times. It takes `n` and an action, then calls the action `n` times, passing the current count.
- In the example, `repeat` calls `unless` within its loop to print even numbers. If `n` is even, it logs that `n` is even.

This pattern lets us create custom control flows, making code more expressive and flexible.

---

## 📋 Built-in Array Method: forEach

JavaScript arrays come with `forEach`, a built-in higher-order function similar to a `for/of` loop. It allows you to apply a function to each element in the array.

### Example

```javascript
["A", "B"].forEach(l => console.log(l));
// → A
// → B
```

### Explanation
- `forEach` takes a function and calls it for each element in the array.
- In this example, `forEach` calls `console.log` for each letter in the array `["A", "B"]`, logging each one.

---

## 💡 Key Takeaways

1. **Higher-Order Functions**: Functions that work with other functions, taking them as arguments, returning them, or modifying them.
2. **Creating Functions**: Use higher-order functions to create new functions with custom behaviors.
3. **Modifying Functions**: Add extra actions to functions without changing their original purpose.
4. **Custom Control Flow**: Build unique control structures, like custom loops or conditional actions.
5. **forEach**: A convenient, built-in higher-order function for working with arrays.

Using higher-order functions can help keep code **organized, flexible, and powerful**. Happy coding! 🎉