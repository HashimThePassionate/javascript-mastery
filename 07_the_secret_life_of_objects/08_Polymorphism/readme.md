# Polymorphism

## Introduction
Polymorphism is a powerful concept in programming that allows code to work with objects of different types, as long as they adhere to a common interface. This means that a single function or method can process different kinds of objects in a seamless way.

## Key Concepts

### Polymorphism in Action

When you call the `String` function to convert a value to a string, it will call the `toString` method on that object to create a meaningful string. Some standard prototypes define their own version of `toString` to provide more useful information.

**Example: Defining a Custom `toString` Method**
```javascript
function Rabbit(type) {
  this.type = type;
}

Rabbit.prototype.toString = function() {
  return `a ${this.type} rabbit`;
};

let killerRabbit = new Rabbit("killer");
console.log(String(killerRabbit)); // Output: a killer rabbit
```

**Explanation:**
- **Creating a Custom `toString` Method**: We define a `toString` method on the `Rabbit` prototype to customize the string representation of `Rabbit` objects.
- **Using the Custom `toString` Method**: When `String(killerRabbit)` is called, it invokes the custom `toString` method, resulting in the output "a killer rabbit".

### Polymorphism with Interfaces

When code is written to work with objects that have a certain interface (e.g., a `toString` method), any object that supports this interface can be used with the code. This technique is called polymorphism. Polymorphic code can work with values of different shapes, as long as they support the expected interface.

### Example: Array-like Objects

An array-like object has a `length` property and numbered properties for each of its elements. Both arrays and strings support this interface, as do various other objects.

**Example: Using `forEach` with Array-like Objects**
```javascript
Array.prototype.forEach.call({
  length: 2,
  0: "A",
  1: "B"
}, elt => console.log(elt));

// Output:
// A
// B
```

**Explanation:**
- **Array-like Object**: An object with a `length` property and numbered properties for each element is created.
- **Using `forEach` with Array-like Object**: `Array.prototype.forEach.call` is used to call `forEach` on the array-like object. The elements "A" and "B" are logged to the console.

### Polymorphism with Different Shapes

**Example: Polymorphism with Different Object Shapes**
```javascript
function printName(entity) {
  console.log(entity.getName());
}

let person = {
  firstName: "John",
  lastName: "Doe",
  getName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};

let company = {
  name: "TechCorp",
  getName: function() {
    return this.name;
  }
};

printName(person);   // Output: John Doe
printName(company);  // Output: TechCorp
```

**Explanation:**
- **Common Interface**: Both `person` and `company` objects have a `getName` method.
- **Polymorphic Function**: The `printName` function calls the `getName` method on the passed object. It works with both `person` and `company` objects, demonstrating polymorphism.

### Key Conversion to Strings

In JavaScript, when an object key is an integer, it is automatically converted to a string at runtime. This is a feature of how JavaScript handles object properties and is not directly related to polymorphism, but rather to the internal workings of the JavaScript language.

**Example: Key Conversion to String**
```javascript
let obj = {};
obj[1] = "one"; // The key 1 is converted to the string "1"
console.log(obj["1"]); // Output: one
console.log(obj[1]); // Output: one
```

**Explanation:**
- **Setting Integer Key**: When we set `obj[1] = "one"`, JavaScript converts the key `1` to the string `"1"`.
- **Accessing by String Key**: Accessing `obj["1"]` retrieves the value `"one"` because the key `1` was converted to the string `"1"` when it was set.
- **Accessing by Integer Key**: Accessing `obj[1]` also retrieves the value `"one"` because JavaScript automatically converts the integer key to a string.

## Conclusion

Polymorphism allows for flexible and reusable code by enabling functions and methods to operate on different types of objects, as long as they adhere to a common interface. Additionally, understanding how JavaScript handles object property keys (such as converting integer keys to strings) is important for writing effective JavaScript code.

## Summary

- **Polymorphism**: A technique that allows code to work with different types of objects that adhere to a common interface.
- **Custom `toString` Method**: Demonstrates how to define a custom `toString` method on a prototype to customize the string representation of objects.
- **Array-like Objects**: Shows how array-like objects (with a `length` property and numbered properties) can be used with array methods like `forEach`.
- **Polymorphism with Different Object Shapes**: Demonstrates how a function can operate on different objects that share a common method.
- **Key Conversion to Strings**: Explains how JavaScript converts integer keys to strings when setting and accessing object properties.

Polymorphism is a fundamental concept in programming that enables flexibility and reusability in code. By understanding and leveraging polymorphism, you can write more efficient and adaptable programs. Additionally, knowing how JavaScript handles key conversion helps prevent unexpected behavior in your code.