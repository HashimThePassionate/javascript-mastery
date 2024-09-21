# Short-Circuiting of Logical Operators in JavaScript

### Overview
Logical operators `&&` and `||` handle values of different types uniquely. They convert the left-hand value to a Boolean to decide what to do but return either the original left-hand value or the right-hand value based on the operator and the result of the conversion.

### The `||` Operator
The `||` operator returns the left value if it can be converted to `true`; otherwise, it returns the right value.

Examples:
```javascript
console.log(null || "user");   // → "user"
console.log("Agnes" || "user"); // → "Agnes"
```
This can be used to provide default values:
```javascript
let username = null;
let displayName = username || "Guest";
console.log(displayName); // → "Guest"
```

### The `??` Operator
The `??` operator (nullish coalescing) returns the right value only if the left value is `null` or `undefined`, not if it is any other falsy value.

Examples:
```javascript
console.log(0 || 100);     // → 100
console.log(0 ?? 100);     // → 0
console.log(null ?? 100);  // → 100
```
This operator is useful when you want to treat `null` and `undefined` differently from other falsy values like `0` or `""`.

### The `&&` Operator
The `&&` operator returns the left value if it can be converted to `false`; otherwise, it returns the right value.

Examples:
```javascript
console.log(0 && "Hello");   // → 0
console.log(1 && "Hello");   // → "Hello"
```

### Short-Circuit Evaluation
Both `&&` and `||` use short-circuit evaluation. This means the right-hand side of the operator is only evaluated if necessary:
- **`||`**: If the left value is `true`, the right value is not evaluated.
- **`&&`**: If the left value is `false`, the right value is not evaluated.

Examples:
```javascript
function sideEffect() {
    console.log("Side effect!");
    return true;
}

console.log(true || sideEffect());  // → true (sideEffect is not called)
console.log(false && sideEffect()); // → false (sideEffect is not called)
```

### The Conditional (Ternary) Operator
The conditional operator (`? :`) also uses short-circuit evaluation. Only the selected value is evaluated.

Example:
```javascript
let isMember = true;
console.log(isMember ? "Welcome back!" : "Sign up now!"); // → "Welcome back!"
```

In summary, short-circuiting can optimize performance and prevent unnecessary evaluations, making logical expressions more efficient and safer.