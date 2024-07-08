# Datasets

### Introduction

To work with a chunk of digital data, we need a way to represent it in our machine’s memory. For example, to represent a collection of numbers like 2, 3, 5, 7, and 11, we could use strings, but that would be awkward and inefficient. Instead, JavaScript provides a data type specifically for storing sequences of values called an array.

### Arrays in JavaScript

An array in JavaScript is written as a list of values between square brackets, separated by commas. Here’s an example:

```javascript
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]); // → 5
console.log(listOfNumbers[0]); // → 2
console.log(listOfNumbers[2 - 1]); // → 3
```

To access the elements inside an array, we use square brackets. The first index of an array is zero, so the first element is retrieved with `listOfNumbers[0]`.

### Properties

JavaScript values often have properties. For example, `myString.length` gets the length of a string, and `Math.max` accesses the maximum function in the Math object. Properties can be accessed using a dot (`.`) or square brackets (`[]`).

- Dot notation: `value.x` fetches the property named "x".
- Bracket notation: `value[x]` fetches the property using the value of `x`.

If a property name is not a valid identifier (e.g., it starts with a number or contains spaces), use bracket notation: `value["property name"]`.

### Arrays and Properties

Array elements are stored as the array’s properties using numbers as property names. Arrays also have a `length` property that tells us how many elements they contain.

### Methods

Both strings and arrays have methods—properties that hold function values.

#### String Methods

Example:

```javascript
let doh = "Doh";
console.log(typeof doh.toUpperCase); // → function
console.log(doh.toUpperCase()); // → DOH
```

The `toUpperCase` method returns a copy of the string with all letters converted to uppercase. There is also a `toLowerCase` method.

#### Array Methods

Example:

```javascript
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence); // → [1, 2, 3, 4, 5]
console.log(sequence.pop()); // → 5
console.log(sequence); // → [1, 2, 3, 4]
```

- `push`: Adds values to the end of an array.
- `pop`: Removes the last value from the array and returns it.

These methods are commonly used in stacks, a data structure where the last added item is the first to be removed.

## Summary

In this guide, we covered how to work with arrays in JavaScript, access properties, and use methods. Arrays are essential for managing sequences of values, and understanding how to manipulate them with properties and methods is fundamental in programming.
