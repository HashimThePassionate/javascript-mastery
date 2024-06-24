# Automatic Type Conversion in JavaScript

### Overview
JavaScript often tries to convert values to the expected type automatically when they are of the "wrong" type for an operation. This process is called type coercion.

### Examples of Type Coercion
```javascript
console.log(8 * null);     // → 0
console.log("5" - 1);      // → 4
console.log("5" + 1);      // → 51
console.log("five" * 2);   // → NaN
console.log(false == 0);   // → true
```

### Explanation
- **`8 * null`**: `null` is converted to `0`, so the result is `0`.
- **`"5" - 1`**: The string `"5"` is converted to the number `5`, so the result is `4`.
- **`"5" + 1`**: The `+` operator tries string concatenation before numeric addition, so the number `1` is converted to the string `"1"`, resulting in `"51"`.
- **`"five" * 2`**: The string `"five"` cannot be converted to a number, resulting in `NaN`.
- **`false == 0`**: `false` is converted to `0`, so the comparison is `true`.

### Handling NaN
When a value that doesn't map to a number is coerced to a number, it results in `NaN` (Not a Number). Further arithmetic operations on `NaN` continue to produce `NaN`.

Example:
```javascript
console.log("five" * 2); // → NaN
console.log(NaN + 1);    // → NaN
```

### Comparison Operators and Type Coercion
When comparing values of different types using the `==` operator, JavaScript uses type coercion to try to make the types match.

Examples:
```javascript
console.log(null == undefined); // → true
console.log(null == 0);         // → false
console.log(0 == false);        // → true
console.log("" == false);       // → true
```
- `null` and `undefined` are only equal to each other.
- `0` and `false` are considered equal due to type coercion.

### Strict Comparison
To avoid type coercion during comparisons, use the strict equality (`===`) and strict inequality (`!==`) operators.

Examples:
```javascript
console.log("" === false); // → false
console.log(0 === false);  // → false
console.log(null === undefined); // → false
```

### Recommendation
To prevent unexpected type conversions, use the three-character comparison operators (`===` and `!==`) defensively. When certain that the types on both sides of the comparison are the same, using the shorter operators (`==` and `!=`) is acceptable.