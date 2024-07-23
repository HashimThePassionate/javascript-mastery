# Symbols 

## Introduction
In JavaScript, symbols are a unique and immutable data type introduced in ECMAScript 6 (ES6). Symbols are primarily used as unique property keys to avoid property name conflicts and provide a way to implement interfaces that can coexist with other properties.

## Key Concepts

### Creating Symbols
Symbols are created using the `Symbol` function. Each symbol is unique, even if they have the same description.

**Example: Creating Unique Symbols**
```javascript
let sym1 = Symbol("name");
let sym2 = Symbol("name");

console.log(sym1 == sym2); // Output: false
```

**Explanation:**
- **Creating Symbols**: `sym1` and `sym2` are both created with the description "name", but they are unique symbols.
- **Comparing Symbols**: `sym1` and `sym2` are not equal because each call to `Symbol` creates a unique symbol.

### Using Symbols as Property Keys
Symbols can be used as property keys, ensuring that the property name does not conflict with other properties.

### Complete Example: Rabbit Class with Symbols

**Step-by-Step Explanation**

1. **Define the `Rabbit` Class**: We will create a `Rabbit` class with a constructor to initialize the type of rabbit.
2. **Create a Symbol**: We will create a symbol to use as a unique property key.
3. **Add Symbol Property to the Prototype**: We will add a property to the `Rabbit` prototype using the symbol.
4. **Create an Instance**: We will create an instance of the `Rabbit` class.
5. **Access the Symbol Property**: We will access the property using the symbol key.

**Code Example**
```javascript
// Step 1: Define the Rabbit class
class Rabbit {
  constructor(type) {
    this.type = type;
  }

  toString() {
    return `a ${this.type} rabbit`;
  }
}

// Step 2: Create a symbol
let sym = Symbol("secret");

// Step 3: Add a property to the Rabbit prototype using the symbol
Rabbit.prototype[sym] = 55;

// Step 4: Create an instance of the Rabbit class
let killerRabbit = new Rabbit("killer");

// Step 5: Access the symbol property
console.log(String(killerRabbit)); // Output: a killer rabbit
console.log(killerRabbit[sym]);    // Output: 55

// Step 6: Verify that the symbol property is unique
let anotherSym = Symbol("secret");
console.log(killerRabbit[anotherSym]); // Output: undefined
```

**Explanation:**
- **Step 1**: We define a `Rabbit` class with a `constructor` that takes a `type` parameter. The `toString` method is overridden to provide a custom string representation of the rabbit.
- **Step 2**: We create a symbol `sym` with the description "secret".
- **Step 3**: We add a property to the `Rabbit` prototype using the symbol `sym`. This property is set to `55`.
- **Step 4**: We create an instance of the `Rabbit` class, `killerRabbit`, with the type "killer".
- **Step 5**: We access the `toString` method and the symbol property. The `toString` method is called automatically when we use `String(killerRabbit)`, and the symbol property is accessed using `killerRabbit[sym]`.
- **Step 6**: We verify that symbols are unique by creating another symbol `anotherSym` with the same description. Accessing `killerRabbit[anotherSym]` returns `undefined` because `anotherSym` is a different, unique symbol.

### Symbols in Object Expressions and Classes
Symbols can be included in object expressions and class definitions by using square brackets around the property name.

**Example: Symbols in Object Expressions**
```javascript
const length = Symbol("length");

let myTrip = {
  length: 2,
  0: "Lankwitz",
  1: "Babelsberg",
  [length]: 21500
};

console.log(myTrip[length], myTrip.length); // Output: 21500 2
```

**Explanation:**
- **Symbol Property in Object**: The symbol `length` is used as a property key in the `myTrip` object.
- **Accessing Properties**: `myTrip[length]` accesses the symbol property, while `myTrip.length` accesses the string property.

### Using Symbols to Avoid Property Name Conflicts
Symbols are useful for defining properties that should not conflict with other properties, even if they have the same name.

**Example: Avoiding Property Name Conflicts**
```javascript
const length = Symbol("length");
Array.prototype[length] = 0;

console.log([1, 2].length); // Output: 2
console.log([1, 2][length]); // Output: 0
```

**Explanation:**
- **Symbol Property on Array Prototype**: The symbol `length` is used as a property key on the `Array` prototype.
- **Accessing Properties**: `[1, 2].length` accesses the built-in `length` property, while `[1, 2][length]` accesses the symbol property.

## Summary

- **Symbols**: Unique and immutable data type used as property keys to avoid property name conflicts.
- **Creating Symbols**: Each call to `Symbol` creates a unique symbol, even if they have the same description.
- **Using Symbols as Property Keys**: Symbols can be used as property keys to ensure unique and conflict-free property names.
- **Complete Example with Rabbit Class**: Demonstrates the use of symbols as property keys in a class and verifies their uniqueness.
- **Symbols in Object Expressions and Classes**: Symbols can be included in object expressions and class definitions using square brackets.
- **Avoiding Property Name Conflicts**: Symbols are useful for defining properties that do not conflict with other properties, even if they have the same name.

Symbols provide a powerful way to create unique and conflict-free property keys, making them useful for defining interfaces and avoiding property name conflicts in JavaScript.