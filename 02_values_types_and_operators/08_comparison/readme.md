# Comparison in JavaScript

### Producing Boolean Values
Comparison operators are used to produce Boolean values. They compare two values and return `true` or `false`.

Examples:
```javascript
console.log(3 > 2); // → true
console.log(3 < 2); // → false
```
- **`>`**: Greater than
- **`<`**: Less than

### String Comparisons
Strings can be compared in the same way as numbers. The comparison is roughly alphabetic, based on Unicode values.

Examples:
```javascript
console.log("Aardvark" < "Zoroaster"); // → true
```
- Uppercase letters are less than lowercase letters: `"Z" < "a"`.
- Nonalphabetic characters are also included in the ordering.

### Understanding Unicode
Unicode is a standard that assigns a unique code to virtually every character from various languages and scripts around the world, including Greek, Arabic, Japanese, and more. JavaScript uses Unicode to represent characters in strings. When comparing strings, JavaScript compares the Unicode values of the characters from left to right.

Example of Unicode comparison:
```javascript
console.log("A" < "a"); // → true
console.log("a" < "b"); // → true
console.log("Z" < "a"); // → true
```
Here, `"A"` has a lower Unicode value than `"a"`, and `"Z"` has a lower Unicode value than `"a"`.

### Other Comparison Operators
- **`>=`**: Greater than or equal to
- **`<=`**: Less than or equal to
- **`==`**: Equal to
- **`!=`**: Not equal to

Examples:
```javascript
console.log("Garnet" != "Ruby"); // → true
console.log("Pearl" == "Amethyst"); // → false
```

### Special Case: NaN
`NaN` (Not a Number) is a special value in JavaScript that is not equal to itself.

Example:
```javascript
console.log(NaN == NaN); // → false
```
`NaN` denotes the result of an invalid or nonsensical computation, and as such, it isn't considered equal to any other value, including itself.