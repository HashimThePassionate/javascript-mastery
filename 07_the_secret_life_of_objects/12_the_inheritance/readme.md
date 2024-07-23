# Inheritance in JavaScript

## Introduction
Inheritance is a fundamental concept in object-oriented programming that allows a new class to inherit properties and behavior from an existing class. This is useful when creating new types that are similar to existing ones but with some modifications.

## Key Concepts

### Defining a Subclass

In JavaScript, the `extends` keyword is used to create a new class based on an existing class. The new class, called the subclass, inherits properties and methods from the existing class, known as the superclass.

**Example: Extending a Class**

Let's create a `LengthList` class that extends the `List` class to store the length of the list in each instance for efficient access.

**Step-by-Step Implementation:**

1. **Define the `List` Class**: Create a base class for a linked list.
2. **Extend the `List` Class**: Create a `LengthList` class that inherits from `List`.
3. **Use the `super` Keyword**: Call the superclass constructor and methods in the subclass.

### Code Example

```javascript
// Step 1: Define the List class
class List {
  constructor(value, rest) {
    this.value = value;
    this.rest = rest;
  }

  get length() {
    return 1 + (this.rest ? this.rest.length : 0);
  }

  static fromArray(array) {
    let result = null;
    for (let i = array.length - 1; i >= 0; i--) {
      result = new this(array[i], result);
    }
    return result;
  }
}

// Step 2: Extend the List class
class LengthList extends List {
  #length;

  constructor(value, rest) {
    super(value, rest);
    this.#length = super.length;
  }

  get length() {
    return this.#length;
  }
}

// Step 3: Example Usage
let lengthList = LengthList.fromArray([1, 2, 3]);
console.log(lengthList.length); // Output: 3
```

**Explanation:**

- **Step 1: Define the List Class**: The `List` class represents a linked list with a `value` and `rest` property. The `length` getter calculates the length of the list by recursively checking the length of the rest of the list.
- **Step 2: Extend the List Class**: The `LengthList` class extends the `List` class. It uses the `extends` keyword to indicate inheritance. The constructor of `LengthList` calls the superclass constructor using `super(value, rest)` and stores the length in a private property `#length`.
- **Using `super` Keyword**: The `super` keyword is used to call the superclass constructor and access the superclass methods. This ensures that the `LengthList` instance behaves like a `List` and has the necessary properties.
- **Step 3: Example Usage**: An instance of `LengthList` is created from an array. The length of the list is accessed using the `length` getter, which returns the precomputed length stored in `#length`.

### Pros and Cons of Inheritance

**Pros:**
- **Code Reuse**: Inheritance allows you to reuse existing code, reducing duplication.
- **Extension**: It provides a way to extend the functionality of existing classes.

**Cons:**
- **Tight Coupling**: Inheritance creates a strong relationship between the superclass and subclass, making changes in the superclass potentially affect the subclass.
- **Complexity**: It can make the code more complex and harder to understand, as it requires understanding the behavior of both the superclass and the subclass.

## Summary

- **Inheritance**: A mechanism to create a new class based on an existing class, allowing for code reuse and extension.
- **Subclass and Superclass**: The subclass inherits properties and methods from the superclass.
- **Using `extends` and `super`**: The `extends` keyword is used to define a subclass, and the `super` keyword is used to call the superclass constructor and methods.
- **Example**: Demonstrated with a `LengthList` class that extends a `List` class, storing the length for efficient access.

Inheritance is a powerful tool in object-oriented programming, but it should be used judiciously. While it allows for code reuse and extension, it also introduces tight coupling and can increase complexity. Use inheritance when it provides clear benefits, but consider other design patterns for more flexible and maintainable code.