# Maps

## Introduction
In programming, a map is a data structure that links keys to values. For example, you might want to link people's names to their ages.

## Differences Between Objects and Maps

### Key Differences
1. **Key Types**: 
   - Objects: Keys must be strings or symbols.
   - Maps: Keys can be any type, including objects and functions.
   
2. **Ordering**: 
   - Objects: Keys are not ordered.
   - Maps: Keys are ordered by the order of insertion.
   
3. **Prototypes**: 
   - Objects: Have prototypes, which can lead to inherited properties.
   - Maps: Do not have prototypes, so there are no inherited properties.
   
4. **Syntax**: 
   - Objects: Created using curly braces `{}`.
   - Maps: Created using the `Map` constructor.
   
5. **Methods**: 
   - Objects: Have built-in methods from `Object.prototype`.
   - Maps: Have specific methods for adding, retrieving, and checking keys and values.

### What is a Symbol?

A `Symbol` is a unique and immutable data type introduced in ECMAScript 6 (ES6). Every `Symbol` value returned from `Symbol()` is unique. Symbols are often used to create unique property keys, especially when you want to ensure that the property keys do not clash with other keys.

### Why Use Symbols in Objects?

1. **Uniqueness**: Every `Symbol` is unique. This prevents property name collisions in objects.
2. **Non-enumerability**: Properties keyed by `Symbols` do not appear in `for...in` loops or `Object.keys()` iterations. They are not included in the standard property enumeration, which makes them useful for defining non-public properties in libraries or APIs.
3. **Hidden Properties**: Since symbol-keyed properties do not show up in normal object property enumerations, they can be used to define hidden properties that won't accidentally be accessed or modified.

### Best Example of Using Symbols in Objects

Let's look at an example where we use `Symbols` to avoid property name collisions and to create non-enumerable properties.

```javascript
// Creating unique symbols
const id = Symbol("id");
const secret = Symbol("secret");

let person = {
    name: "Alice",
    age: 30,
    [id]: 12345,         // Using a symbol as a property key
    [secret]: "mySecret" // Using another symbol as a property key
};

console.log(person.name); // Output: Alice
console.log(person.age);  // Output: 30

// Accessing the symbol properties
console.log(person[id]);      // Output: 12345
console.log(person[secret]);  // Output: mySecret

// Symbols do not appear in normal property enumeration
for (let key in person) {
    console.log(key); // Output: name, age
}

console.log(Object.keys(person)); // Output: ["name", "age"]

// But you can still access symbols using Object.getOwnPropertySymbols()
console.log(Object.getOwnPropertySymbols(person)); // Output: [Symbol(id), Symbol(secret)]
```

**Explanation:**
- **Creating Symbols**: We create two symbols, `id` and `secret`, which are unique and can be used as keys in the `person` object.
- **Using Symbols as Keys**: We use the symbols `[id]` and `[secret]` as keys to add properties to the `person` object.
- **Accessing Symbol Properties**: We access the symbol properties using `person[id]` and `person[secret]`.
- **Non-enumerability**: The symbol properties do not appear in normal property enumerations like `for...in` loops or `Object.keys()`. However, they can be accessed using `Object.getOwnPropertySymbols(person)`.

### Examples for Each Difference

#### 1. Key Types

**Objects:**
```javascript
let obj = {
    name: "Alice",
    42: "The answer"
};

console.log(obj["name"]); // Output: Alice
console.log(obj[42]); // Output: The answer

// Using a symbol as a key
let sym = Symbol("key");
obj[sym] = "Symbol value";
console.log(obj[sym]); // Output: Symbol value
```
**Explanation:**
- Objects allow string and symbol keys. Numbers are converted to strings.
- In the example, `name` is a string key, `42` is a number key (converted to a string), and `sym` is a `Symbol` key.

**Maps:**
```javascript
let map = new Map();
let objKey = { name: "Alice" };
let funcKey = function() {};

map.set(objKey, "Object value");
map.set(funcKey, "Function value");

console.log(map.get(objKey)); // Output: Object value
console.log(map.get(funcKey)); // Output: Function value
```
**Explanation:**
- Maps allow keys of any type, including objects and functions.
- In the example, `objKey` is an object used as a key, and `funcKey` is a function used as a key.

#### 2. Ordering

**Objects:**
```javascript
let obj = {
    b: "B value",
    a: "A value",
    c: "C value"
};

console.log(Object.keys(obj)); // Output: ["b", "a", "c"]
```
**Explanation:**
- The order of keys in an object is not guaranteed.
- In the example, the keys are listed in the order they were added, but this order is not guaranteed by the JavaScript specification.

**Maps:**
```javascript
let map = new Map();
map.set("b", "B value");
map.set("a", "A value");
map.set("c", "C value");

console.log([...map.keys()]); // Output: ["b", "a", "c"]
```
**Explanation:**
- Maps maintain the order of keys based on the order of insertion.
- In the example, the keys are listed in the order they were added.

#### 3. Prototypes

**Objects:**
```javascript
let obj = {
    key: "value"
};

console.log("toString" in obj); // Output: true (inherited from Object.prototype)
```
**Explanation:**
- Objects inherit properties from `Object.prototype`.
- In the example, `toString` is a method inherited from `Object.prototype`.

**Maps:**
```javascript
let map = new Map();
map.set("key", "value");

console.log(map.has("toString")); // Output: false
```
**Explanation:**
- Maps do not inherit from `Object.prototype`, so they do not have inherited properties.
- In the example, `toString` is not a key in the map.

#### 4. Syntax

**Objects:**
```javascript
let obj = {
    key: "value"
};

console.log(obj.key); // Output: value
```
**Explanation:**
- Objects are created using curly braces `{}`.
- In the example, `obj` is created with a key-value pair, and the value is accessed using dot notation.

**Maps:**
```javascript
let map = new Map();
map.set("key", "value");

console.log(map.get("key")); // Output: value
```
**Explanation:**
- Maps are created using the `Map` constructor.
- In the example, a key-value pair is added using `set`, and the value is accessed using `get`.

#### 5. Methods

**Objects:**
```javascript
let obj = {
    key: "value"
};

console.log(obj.toString()); // Output: [object Object]
```
**Explanation:**
- Objects have built-in methods like `toString` inherited from `Object.prototype`.
- In the example, calling `toString` on the object returns the default object representation.

**Maps:**
```javascript
let map = new Map();
map.set("key", "value"); // Adds a key-value pair
console.log(map.get("key")); // Retrieves the value for the given key: Output: value
console.log(map.has("key")); // Checks if the key exists in the map: Output: true
map.delete("key"); // Removes the key-value pair
console.log(map.has("key")); // Output: false
```
**Explanation:**
- Maps have specific methods for working with key-value pairs: `set`, `get`, `has`, and `delete`.
- In the example, these methods are used to add, retrieve, check, and remove a key-value pair.

### Example: Using Objects as Keys in Maps

**Using Objects as Keys:**
```javascript
let person1 = { name: "Boris" };
let person2 = { name: "Liang" };

let ages = new Map();
ages.set(person1, 39);
ages.set(person2, 22);

console.log(ages.get(person1));  // Output: 39
console.log(ages.get(person2));  // Output: 22
```
**Explanation:**
- Maps allow objects to be used as keys.
- In the example, `person1` and `person2` are objects used as keys to store ages.

### Explanation of `...map.keys()`

In JavaScript, the spread operator (`...`) is used to expand elements of an iterable (like an array or a map) into individual elements. When used with `map.keys()`, the spread operator converts the iterator returned by `map.keys()` into an array.

### Example: Using the Spread Operator with `map.keys()`

```javascript
let map = new Map();
map.set("b", "B value

");
map.set("a", "A value");
map.set("c", "C value");

console.log([...map.keys()]); // Output: ["b", "a", "c"]
```

**Explanation:**
- **Creating a Map**: A new `Map` is created and populated with three key-value pairs.
- **Using `map.keys()`**: The `map.keys()` method returns an iterator that contains the keys of the map.
- **Spread Operator (`...`)**: The spread operator is used to convert the iterator into an array.
- **Result**: The keys are listed in the order they were added to the map.

## Treating Plain Objects as Maps

If you need to use a plain object as a map, use `Object.keys` to get only the object's own keys or `Object.hasOwn` to check for its own properties.

### Example: Using Object.keys and Object.hasOwn
```javascript
console.log(Object.keys({x: 1})); // Output: ["x"]
console.log(Object.hasOwn({x: 1}, "x")); // Output: true
console.log(Object.hasOwn({x: 1}, "toString")); // Output: false
```
**Explanation:**
- `Object.keys(obj)` returns an array of the object's own keys.
- `Object.hasOwn(obj, key)` checks if the object has a specific key as its own property, ignoring inherited properties.
- In the example, `x` is a key in the object, but `toString` is not.

## Conclusion
Maps are useful for linking keys to values. While you can use plain objects as maps, they have limitations and risks. The `Map` class in JavaScript provides a better alternative, allowing any type of keys and offering simple methods for managing key-value pairs. Use `Object.create(null)` or `Object.hasOwn` when you need to safely use plain objects as maps.