# Methods in Objects

## Introduction
Methods in JavaScript are functions that belong to an object. This guide explains how methods work, how the `this` keyword behaves in methods, and the difference between regular functions and arrow functions.

## Defining Methods

### Simple Method Example
A method is a function stored in an object property.

```javascript
function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };

whiteRabbit.speak("Oh my fur and whiskers");
// The white rabbit says 'Oh my fur and whiskers'

hungryRabbit.speak("Got any carrots?");
// The hungry rabbit says 'Got any carrots?'
```

### Explanation
- **Method Definition**: The `speak` function is defined separately.
- **Object Methods**: `whiteRabbit` and `hungryRabbit` objects have a `speak` method.
- **`this` Keyword**: Inside the `speak` method, `this` refers to the object that calls the method. For `whiteRabbit.speak(...)`, `this` is `whiteRabbit`.

## The `this` Keyword

### What is `this`?
When a function is called as a method (e.g., `object.method()`), `this` refers to the object on which the method was called.

### Using `call` to Set `this`
You can use a function’s `call` method to explicitly set `this`.

```javascript
speak.call(whiteRabbit, "Hurry");
// The white rabbit says 'Hurry'
```

- **`call` Method**: `call` sets the `this` value to `whiteRabbit` for the `speak` function.

## Arrow Functions and `this`

### Regular Functions vs. Arrow Functions
- **Regular Functions**: Each function has its own `this` value based on how it is called.
- **Arrow Functions**: Do not have their own `this` value. They use `this` from the surrounding context.

### Example with Arrow Functions
Arrow functions inherit `this` from the surrounding context.

```javascript
let finder = {
    value: 5,
    find(array) {
        return array.some(v => v == this.value);
    }
};

console.log(finder.find([4, 5])); // true
```

### Explanation
- **Arrow Function**: Inside the `some` method, `this` refers to `finder` because arrow functions do not create their own `this`.
- **Method Definition**: `find` is a method of the `finder` object.

### Example with Regular Function
Using a regular function inside `some` does not work as expected because `this` is different.

```javascript
let finder = {
    value: 5,
    find(array) {
        return array.some(function(v) {
            return v == this.value;
        });
    }
};

console.log(finder.find([4, 5])); // false or error
```

### Explanation
- **Regular Function**: Inside the `some` method, `this` does not refer to `finder`. It refers to the global object (or `undefined` in strict mode).

## Summary

1. **Methods**: Functions stored in object properties.
2. **`this` Keyword**: Refers to the object that calls the method.
3. **`call` Method**: Explicitly sets `this` for a function.
4. **Arrow Functions**: Do not have their own `this`, they inherit `this` from the surrounding context.

### Key Points
- Methods are useful for objects to perform actions using their own data.
- Understanding how `this` works is crucial for using methods effectively.
- Arrow functions are handy when you need to access `this` from the outer scope.

### Conclusion
Methods in JavaScript are properties that hold function values. The this binding in a method refers to the object on which the method was called. Arrow functions do not have their own this binding and instead inherit this from the surrounding scope. This behavior is useful when you need to access the this of the surrounding context inside a nested function.