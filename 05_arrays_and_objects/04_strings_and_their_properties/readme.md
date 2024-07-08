# Strings and Their Properties

## Introduction
Strings in JavaScript are primitive data types but have several built-in properties and methods that allow for manipulation and inspection. Despite being primitive, they behave similarly to objects in some ways, allowing the use of properties and methods.

## Immutable Nature of Strings

### Example: Attempting to Add Properties
Values of type string, number, and Boolean are immutable and not objects. Although you can attempt to set properties on them, those properties won't be stored.

#### Example
```javascript
let kim = "Kim";
kim.age = 88;
console.log(kim.age); // → undefined
```
As shown, trying to add a property like `age` to a string value does not work because strings are immutable.

## Built-in String Methods

### Length Property
The `length` property returns the number of characters in a string.

#### Example
```javascript
let string = "abc";
console.log(string.length); // → 3
```

### Accessing Characters
You can access individual characters in a string using bracket notation, similar to arrays.

#### Example
```javascript
console.log(string[1]); // → b
```

### slice Method
The `slice` method extracts a section of a string and returns it as a new string.

#### Example
```javascript
console.log("coconuts".slice(4, 7)); // → nut
```

### indexOf Method
The `indexOf` method returns the index within the calling string of the first occurrence of the specified value.

#### Example
```javascript
console.log("coconut".indexOf("u")); // → 5
console.log("one two three".indexOf("ee")); // → 11
```

### trim Method
The `trim` method removes whitespace from both ends of a string.

#### Example
```javascript
console.log(" okay \n ".trim()); // → okay
```

### padStart Method
The `padStart` method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.

#### Example
```javascript
console.log(String(6).padStart(3, "0")); // → 006
```

### split and join Methods
The `split` method divides a string into an ordered list of substrings, puts these substrings into an array, and returns the array. The `join` method joins all elements of an array into a string.

#### Example
```javascript
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words); // → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". ")); // → Secretarybirds. specialize. in. stomping
```

### repeat Method
The `repeat` method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

#### Example
```javascript
console.log("LA".repeat(3)); // → LALALA
```

## Conclusion
Strings in JavaScript, while immutable and primitive, come with a robust set of properties and methods that facilitate various string operations. These built-in functionalities make string manipulation straightforward and efficient.
