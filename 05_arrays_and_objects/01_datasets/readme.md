# 📊 Working with Datasets in JavaScript

**Datasets** are collections of data that we can work with in JavaScript. They allow us to organize, access, and manipulate data effectively. This guide covers **arrays** and how they’re used to manage and work with collections of values.

## 📖 Table of Contents 📚

1. [🔍 Introduction to Datasets](#-introduction-to-datasets)
2. [🧩 Arrays in JavaScript](#-arrays-in-javascript)
3. [📐 Properties of Arrays](#-properties-of-arrays)
4. [🔧 Array Methods](#-array-methods)
5. [📝 Summary](#-summary)

## 🔍 Introduction to Datasets

When working with digital data, we need a way to store it in memory efficiently. For instance, representing numbers like `2, 3, 5, 7, 11` with **strings** would be inefficient. JavaScript provides a data type specifically for storing sequences of values: **arrays**.

## 🧩 Arrays in JavaScript

An **array** is a data structure in JavaScript that allows us to store sequences of values. Here’s how an array is created:

```javascript
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]); // → 5
console.log(listOfNumbers[0]); // → 2
console.log(listOfNumbers[2 - 1]); // → 3
```

### 📌 Key Points:
- **Indexing**: Arrays are zero-indexed, meaning the first element is at index `0`.
- **Accessing Elements**: Use square brackets `[]` to access specific elements.

## 📐 Properties of Arrays

JavaScript values, including arrays, often have **properties**. A **property** is a characteristic associated with a value, like `length` for an array.

### Types of Properties:
1. **Dot Notation** (`value.x`) - Used for simple properties.
2. **Bracket Notation** (`value[x]`) - Used when the property name is dynamic or not a valid identifier.

For instance:
- `listOfNumbers.length` gives the length of an array.
- `Math.max` is a property of `Math` that holds a function to get the maximum value.

### 📌 Special Note on Arrays:
- Array elements are stored as properties using numbers as property names.
- `length` is a key property that tells us how many elements an array contains.

## 🔧 Array Methods

Methods are functions attached to an object. **Strings** and **arrays** have useful methods that allow us to manipulate them easily.

### 📜 String Methods:
```javascript
let doh = "Doh";
console.log(doh.toUpperCase()); // → "DOH"
console.log(doh.toLowerCase()); // → "doh"
```
- **`toUpperCase()`**: Converts all letters to uppercase.
- **`toLowerCase()`**: Converts all letters to lowercase.

### 📜 Array Methods:
```javascript
let sequence = [1, 2, 3];
sequence.push(4); // Adds 4 at the end
sequence.push(5); // Adds 5 at the end
console.log(sequence); // → [1, 2, 3, 4, 5]
console.log(sequence.pop()); // → 5 (removes the last element)
console.log(sequence); // → [1, 2, 3, 4]
```

#### Important Array Methods:
- **`push()`**: Adds an element to the end of an array.
- **`pop()`**: Removes the last element from an array and returns it.

These methods are especially helpful for working with stacks—a data structure where the last item added is the first to be removed.

## 📝 Summary

In this guide, we explored **arrays** in JavaScript, **properties**, and **methods**. Understanding arrays and their manipulation is crucial for managing sequences of values in JavaScript, enabling efficient data handling and manipulation.