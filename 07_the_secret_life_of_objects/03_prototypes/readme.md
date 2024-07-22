# Prototypes in Objects

## Introduction
Prototypes in JavaScript allow objects to share properties and methods. This guide explains how prototypes work and how to use them to create objects that share common functionality.

## What is a Prototype?

### Basic Concept
A prototype is an object that other objects can be linked to. This allows objects to share properties and methods without duplicating them.

### Example
Imagine you have a group of rabbits that can speak. Instead of giving each rabbit its own `speak` function, you can create a prototype that has the `speak` function and link each rabbit to this prototype.

## Creating a Simple Prototype

### Example with `Object.create`
Here’s how you can create a simple prototype and link objects to it:

```javascript
let rabbitPrototype = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};

let whiteRabbit = Object.create(rabbitPrototype);
whiteRabbit.type = "white";
whiteRabbit.speak("Oh my fur and whiskers");
// The white rabbit says 'Oh my fur and whiskers'

let blackRabbit = Object.create(rabbitPrototype);
blackRabbit.type = "black";
blackRabbit.speak("I am fear and darkness");
// The black rabbit says 'I am fear and darkness'
```

### Explanation
- **Prototype Object**: `rabbitPrototype` contains the `speak` method.
- **Creating Objects**: `Object.create(rabbitPrototype)` creates a new object linked to `rabbitPrototype`.
- **Setting Properties**: `whiteRabbit.type` and `blackRabbit.type` set specific properties for each rabbit.

## How Prototypes Work

### Inheritance
When you call a method on an object, JavaScript first looks for the method on the object itself. If it doesn’t find it, JavaScript looks at the object’s prototype.

### Example
```javascript
let empty = {};
console.log(empty.toString); // function toString() {...}
console.log(empty.toString()); // [object Object]
```

### Explanation
- **Empty Object**: `empty` is an empty object.
- **Inherited Method**: `empty.toString` is not defined on `empty`, so JavaScript looks at `Object.prototype` and finds `toString`.

## Checking Prototypes

### `Object.getPrototypeOf`
You can check the prototype of an object using `Object.getPrototypeOf`.

```javascript
let obj = {};
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null
```

### Explanation
- **Prototype Check**: `Object.getPrototypeOf(obj)` returns the prototype of `obj`.
- **Root Prototype**: `Object.prototype` is the root prototype with no further prototype (`null`).

## Prototypes for Different Object Types

### Function and Array Prototypes
Different types of objects have their own prototypes. Functions have `Function.prototype`, and arrays have `Array.prototype`.

### Examples
```javascript
console.log(Object.getPrototypeOf(Math.max) === Function.prototype); // true
console.log(Object.getPrototypeOf([]) === Array.prototype); // true
```

### Explanation
- **Function Prototype**: `Math.max` is a function, so its prototype is `Function.prototype`.
- **Array Prototype**: `[]` is an array, so its prototype is `Array.prototype`.

## Summary

1. **Prototypes**: Allow objects to share properties and methods.
2. **Object Linking**: Objects can be linked to prototypes to inherit properties.
3. **Prototype Chain**: JavaScript searches an object's prototype chain for properties.
4. **Object.create**: Creates objects with a specific prototype.
5. **Shared Methods**: Methods can be stored in a prototype to be shared among multiple objects.

### Key Points
- **Prototypes help avoid duplicating methods**: This makes your code more efficient.
- **Use `Object.create` to create objects with a specific prototype**: This method is straightforward and effective.
- **Understanding prototypes is essential for working with objects in JavaScript**: It’s a fundamental concept that improves how you write and understand code.

This guide simplifies the concept of prototypes in JavaScript, making it easier to understand and use them in your code.