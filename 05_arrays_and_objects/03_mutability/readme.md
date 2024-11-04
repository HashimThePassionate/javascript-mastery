# 📊 Understanding Data Structures and Mutability in JavaScript

JavaScript handles data structures in various ways, with **mutability** being a key aspect. This guide dives into the concept of mutability, focusing on how it applies to different types of data and objects. We’ll also explore **arrays**, **objects**, and **essential methods** through real-life examples, such as tracking events in **Jacques' journal**.

## 📖 Table of Contents

1. [🔍 Introduction to Mutability](#-introduction-to-mutability)
2. [🔢 Immutable Values](#-immutable-values)
3. [🔄 Mutable Objects](#-mutable-objects)
4. [📒 Building Jacques' Journal](#-building-jacques-journal)
5. [🔧 Useful Array Methods](#-useful-array-methods)
6. [💡 Summary](#-summary)

## 🔍 Introduction to Mutability

In JavaScript, understanding **mutability**—or the ability to change—is essential, especially when working with objects and arrays. Some values, like numbers and strings, are **immutable** and cannot be changed once created. On the other hand, objects and arrays are **mutable**, allowing their content to be modified over time. 

## 🔢 Immutable Values

### Numbers 🧮

**Numbers** are immutable in JavaScript. When you perform operations, a new value is created rather than altering the original number.

```javascript
let num = 5;
num = num + 3; // Creates a new number (8) instead of modifying the original
console.log(num); // → 8
```

### Strings 📜

Strings in JavaScript are also immutable, so you can’t change individual characters.

```javascript
let str = "cat";
str[0] = "r"; // This has no effect on the string
console.log(str); // → "cat"
```

### Booleans 🔘

**Booleans** are immutable and can only be `true` or `false`. Operations create a new Boolean rather than changing the original.

```javascript
let bool = true;
bool = !bool; // Creates a new Boolean value (false)
console.log(bool); // → false
```

## 🔄 Mutable Objects

Unlike primitives, **objects** are mutable, meaning you can modify their properties. This allows you to work with more complex data structures.

### Example: Object References and Mutability

```javascript
let object1 = { value: 10 };
let object2 = object1;    // Both object1 and object2 reference the same object
let object3 = { value: 10 }; // New object with the same value

console.log(object1 == object2); // → true
console.log(object1 == object3); // → false

object1.value = 15; // Modifying the shared object

console.log(object2.value); // → 15 (object2 references the same object)
console.log(object3.value); // → 10 (object3 references a different object)
```

In this example:

1. `object1` and `object2` reference the same object, so changes to `object1` also affect `object2`.
2. `object3` is a different object, so changes to `object1` do not affect it.

### Constants and Mutability

Using `const` only prevents reassigning the variable reference; it does not make the object immutable.

```javascript
const score = { visitors: 0, home: 0 };
score.visitors = 1; // Allowed, as we’re not changing the reference
// score = { visitors: 1, home: 1 }; // Error: Assignment to constant variable
```

## 📒 Building Jacques' Journal

Jacques maintains a **journal** to record his daily activities and whether he turned into a squirrel on that day.

### Creating a Journal 📔

First, let’s set up an empty array to store journal entries.

```javascript
let journal = [];
```

### Adding Entries with `addEntry` Function

The `addEntry` function adds new entries to the journal, including a list of events and a `squirrel` status.

```javascript
function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}

// Adding entries to the journal
addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);
```

### Explanation 📝

1. The first entry logs various events, with Jacques not turning into a squirrel (`false`).
2. The second entry similarly logs events, with no transformation.
3. The third entry includes events with a transformation (`true`), indicating he became a squirrel.

## 🔧 Useful Array Methods

JavaScript arrays come with powerful built-in methods for managing and manipulating data.

### `push` and `pop`

- `push` adds elements to the end of an array.
- `pop` removes the last element.

```javascript
let animals = ["cat", "dog"];
animals.push("bird"); // → ["cat", "dog", "bird"]
animals.pop();        // → ["cat", "dog"]
```

### `unshift` and `shift`

- `unshift` adds elements to the beginning.
- `shift` removes the first element.

```javascript
let fruits = ["apple", "banana"];
fruits.unshift("orange"); // → ["orange", "apple", "banana"]
fruits.shift();           // → ["apple", "banana"]
```

### `indexOf` and `lastIndexOf`

These methods find the index of an element. `indexOf` starts from the beginning, and `lastIndexOf` starts from the end.

```javascript
let numbers = [1, 2, 3, 2, 1];
console.log(numbers.indexOf(2));     // → 1
console.log(numbers.lastIndexOf(2)); // → 3
```

### `slice`

`slice` creates a new array from a part of an existing array, without modifying the original.

```javascript
let colors = ["red", "green", "blue", "yellow"];
console.log(colors.slice(1, 3)); // → ["green", "blue"]
console.log(colors.slice(2));    // → ["blue", "yellow"]
```

### `concat`

`concat` merges two arrays into a new array.

```javascript
let array1 = [1, 2, 3];
let array2 = [4, 5];
console.log(array1.concat(array2)); // → [1, 2, 3, 4, 5]
```

## Example: Removing an Element from an Array

Here’s a function that removes an element at a specified index by combining `slice` and `concat`.

```javascript
function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2)); // → ["a", "b", "d", "e"]
```

In this example:
- `slice(0, index)` gets elements before the specified index.
- `slice(index + 1)` gets elements after the index.
- `concat` merges them to form a new array without the removed element.

## 💡 Summary

JavaScript allows flexible manipulation of data through **immutable values** (numbers, strings, Booleans) and **mutable objects** (arrays and objects). Here’s what we covered:

- **Immutable Values**: Numbers, strings, and Booleans remain constant.
- **Mutable Objects**: Objects can be modified, which is useful for tracking data like `journal` entries.
- **Essential Array Methods**: Methods like `push`, `pop`, `shift`, `slice`, and `concat` make array manipulation straightforward and powerful.
