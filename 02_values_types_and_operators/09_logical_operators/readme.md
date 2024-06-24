# Logical Operators in JavaScript

### Overview
Logical operators can be applied to Boolean values to "reason" about them. JavaScript supports three logical operators: **and**, **or**, and **not**.

### Logical AND (&&)
The `&&` operator represents logical and. It is a binary operator, and its result is `true` only if both values given to it are `true`.

Examples:
```javascript
console.log(true && false); // → false
console.log(true && true);  // → true
```

### Logical OR (||)
The `||` operator denotes logical or. It produces `true` if either of the values given to it is `true`.

Examples:
```javascript
console.log(false || true);  // → true
console.log(false || false); // → false
```

### Logical NOT (!)
The `!` operator represents logical not. It is a unary operator that flips the value given to it. `!true` produces `false` and `!false` gives `true`.

Examples:
```javascript
console.log(!true);  // → false
console.log(!false); // → true
```

### Operator Precedence
When mixing Boolean operators with arithmetic and other operators, it is essential to understand their precedence. The order from lowest to highest precedence is:
1. `||` (logical or)
2. `&&` (logical and)
3. Comparison operators (`>`, `==`, etc.)
4. Arithmetic and other operators

This order helps minimize the need for parentheses in typical expressions. For example:
```javascript
1 + 1 == 2 && 10 * 10 > 50
```

### Conditional (Ternary) Operator (?:)
The conditional operator (also known as the ternary operator) operates on three values. It is written with a question mark and a colon: `a ? b : c`.

Examples:
```javascript
console.log(true ? 1 : 2);  // → 1
console.log(false ? 1 : 2); // → 2
```

The operator uses the value to the left of the question mark to decide which of the two other values to "pick". If you write `a ? b : c`, the result will be `b` when `a` is `true` and `c` otherwise.