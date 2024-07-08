# Mutability 

## Introduction
In JavaScript, understanding how objects and their properties can change over time (mutability) is crucial. This guide also explores how to compute the correlation between different events and transformations, using a specific example related to Jacques' journal.

## Mutability in JavaScript

### Immutable Values

#### Numbers
Numbers are immutable, meaning their values cannot be changed once created.

##### Example
```javascript
let num = 5;
num = num + 3; // This creates a new number, it does not change the original number
console.log(num); // → 8
```

#### Strings
Strings are also immutable. You cannot change the individual characters of a string.

##### Example
```javascript
let str = "cat";
str[0] = "r"; // This won't change the string
console.log(str); // → "cat"
```

#### Booleans
Booleans have immutable values, meaning they can only be `true` or `false` and cannot be changed.

##### Example
```javascript
let bool = true;
bool = !bool; // This creates a new boolean value, it does not change the original value
console.log(bool); // → false
```

### Mutable Objects
Objects, on the other hand, are mutable. You can change their properties, and the same object reference can have different content at different times.

#### Detailed Example: Object References and Mutability

```javascript
let object1 = {value: 10}; // Create an object with a property 'value' set to 10
let object2 = object1;     // object2 now references the same object as object1
let object3 = {value: 10}; // Create a new, separate object with 'value' set to 10

console.log(object1 == object2); // → true (object1 and object2 reference the same object)
console.log(object1 == object3); // → false (object1 and object3 reference different objects)

object1.value = 15; // Change the 'value' property of the object referenced by object1

console.log(object2.value); // → 15 (object2 references the same object as object1, so it sees the updated value)
console.log(object3.value); // → 10 (object3 references a different object, so its value remains unchanged)
```

### Explanation
1. `object1` is created and references an object with `value: 10`.
2. `object2` is assigned the same reference as `object1`, so they both point to the same object.
3. `object3` is created as a new object with `value: 10` and references a different object.
4. Comparing `object1` and `object2` with `==` returns `true` because they reference the same object.
5. Comparing `object1` and `object3` with `==` returns `false` because they reference different objects.
6. Modifying `object1.value` to 15 also changes `object2.value` because they reference the same object.
7. `object3.value` remains 10 because it references a different object.

### Bindings and Mutability
Bindings (variables) can be changeable (`let`) or constant (`const`). Even if an object is bound to a constant, its properties can still be changed.

#### Example
```javascript
const score = {visitors: 0, home: 0};
score.visitors = 1; // This is allowed
score = {visitors: 1, home: 1}; // This isn't allowed
```

### Object Comparison
When comparing objects with `==`, JavaScript checks if both objects are the same reference, not if they have identical properties.

#### Example
```javascript
let object1 = {value: 10};
let object2 = {value: 10};
console.log(object1 == object2); // → false
```

## Jacques' Journal

### Setting Up the Journal
Jacques keeps a journal to track events and his transformations into a squirrel.

#### Setting Up the Journal
First, we create an empty array called `journal` to store the entries.

```javascript
let journal = [];
```

#### Adding Entries to the Journal
To add entries to the journal, we define a function called `addEntry`. This function takes two parameters:
1. `events` - an array of strings representing the activities of the day.
2. `squirrel` - a Boolean indicating whether Jacques turned into a squirrel.

The function creates an object with these two properties and pushes it into the `journal` array.

```javascript
function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}
```

This function uses a shorthand notation in the object literal where `{ events, squirrel }` is equivalent to `{ events: events, squirrel: squirrel }`.

#### Adding Example Entries
We can now use the `addEntry` function to add some entries to the journal.

```javascript
addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);
```

### Explanation of Example Entries
1. The first entry logs the events "work", "touched tree", "pizza", "running", and "television" and indicates that Jacques did not turn into a squirrel (`false`).
2. The second entry logs the events "work", "ice cream", "cauliflower", "lasagna", "touched tree", and "brushed teeth" and also indicates that Jacques did not turn into a squirrel (`false`).
3. The third entry logs the events "weekend", "cycling", "break", "peanuts", and "beer" and indicates that Jacques did turn into a squirrel (`true`).

