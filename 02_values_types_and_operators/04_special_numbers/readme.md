# Special Numbers in JavaScript

### Special Numeric Values
JavaScript has three special values that are considered numbers but behave differently from regular numbers:

1. **Infinity**: Represents positive infinity.
2. **-Infinity**: Represents negative infinity.
3. **NaN (Not a Number)**: Represents a value that isn't a meaningful number.

### Infinity and -Infinity
- **Infinity**: Any positive number added to or multiplied by Infinity remains Infinity. For example:

```javascript
console.log(Infinity - 1); // Output: Infinity
console.log(1 / 0);        // Output: Infinity
```

- **-Infinity**: Any negative number added to or multiplied by -Infinity remains -Infinity. For example:

```javascript
console.log(-Infinity + 1); // Output: -Infinity
console.log(-1 / 0);        // Output: -Infinity
```

### NaN (Not a Number)
NaN stands for "not a number" and is returned when an operation doesn't yield a meaningful numeric result. Examples include:

- Division by zero where the numerator is also zero.
- Subtracting Infinity from Infinity.

Example code:

```javascript
console.log(0 / 0);            // Output: NaN
console.log(Infinity - Infinity); // Output: NaN
```

### Summary
- **Infinity** and **-Infinity** are used to represent positive and negative infinities, respectively.
- **NaN** is used to represent an invalid number result from certain operations.

Use these special numbers with caution, as they can lead to unexpected results in calculations.