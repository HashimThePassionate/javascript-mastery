# Functions
Functions are central tools in JavaScript programming. They allow us to wrap a piece of code in a value, providing a way to structure larger programs, reduce repetition, associate names with subprograms, and isolate these subprograms from each other.

## Defining a Function

A function definition is a regular binding where the value of the binding is a function. 

### Example: Square Function

This example defines a function `square` that returns the square of a given number:

```javascript
const square = function(x) {
    return x * x;
};

console.log(square(12));
// → 144
```

#### Explanation

- `const square = function(x) { return x * x; };`: This line defines a function `square` that takes one parameter `x` and returns the square of `x`.
- `console.log(square(12));`: This line calls the `square` function with the argument `12` and logs the result to the console, which is `144`.

### Example: makeNoise Function

This example defines a function `makeNoise` that logs a sound to the console:

```javascript
const makeNoise = function() {
    console.log("Pling!");
};

makeNoise();
// → Pling!
```

#### Explanation

- `const makeNoise = function() { console.log("Pling!"); };`: This line defines a function `makeNoise` that takes no parameters and logs the string `"Pling!"` to the console.
- `makeNoise();`: This line calls the `makeNoise` function, causing it to log `"Pling!"` to the console.

### Example: roundTo Function

This example defines a function `roundTo` that rounds a number to the nearest multiple of a given step:

```javascript
const roundTo = function(n, step) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(23, 10));
// → 20
```

#### Explanation

- `const roundTo = function(n, step) { let remainder = n % step; return n - remainder + (remainder < step / 2 ? 0 : step); };`: This line defines a function `roundTo` that takes two parameters `n` and `step`. It calculates the remainder of `n` divided by `step`, then returns `n` rounded to the nearest multiple of `step`.
- `console.log(roundTo(23, 10));`: This line calls the `roundTo` function with the arguments `23` and `10` and logs the result to the console, which is `20`.

## Returning Values from Functions

Some functions, like `roundTo` and `square`, return a value. Others, like `makeNoise`, do not return a value but instead perform a side effect (e.g., logging to the console). A `return` statement determines the value a function returns. When a `return` statement is encountered, the function execution stops, and the specified value is returned.

- If a `return` statement is used without an expression, the function returns `undefined`.
- Functions without a `return` statement also return `undefined`.

### Example: Returning Undefined

```javascript
const doNothing = function() {
    return;
};

console.log(doNothing());
// → undefined
```

#### Explanation

- `const doNothing = function() { return; };`: This line defines a function `doNothing` that returns `undefined` because the `return` statement has no expression.
- `console.log(doNothing());`: This line calls the `doNothing` function and logs the result to the console, which is `undefined`.

## Parameters and Bindings

Parameters to a function behave like regular bindings, but their initial values are provided by the caller of the function.

### Example: Function with Parameters

```javascript
const add = function(a, b) {
    return a + b;
};

console.log(add(5, 3));
// → 8
```

#### Explanation

- `const add = function(a, b) { return a + b; };`: This line defines a function `add` that takes two parameters `a` and `b` and returns their sum.
- `console.log(add(5, 3));`: This line calls the `add` function with the arguments `5` and `3` and logs the result to the console, which is `8`.

In summary, functions in JavaScript provide a powerful way to encapsulate code, create reusable pieces, and manage complexity in programs.