# Arithmetic in JavaScript

### Basic Arithmetic Operations
In JavaScript, arithmetic operations like addition and multiplication take two number values and produce a new number. Here are some examples:

```javascript
100 + 4 * 11
```

- **Operators**: The `+` symbol stands for addition and the `*` symbol stands for multiplication. Applying an operator between two values will perform the operation and produce a new value.

### Operator Precedence
Does `100 + 4 * 11` mean "Add 4 to 100 and then multiply by 11", or "Multiply 4 by 11 and then add 100"? The multiplication is done first, just like in standard mathematics. To change the order, use parentheses:

```javascript
(100 + 4) * 11
```

### Other Operators
- **Subtraction**: Use the `-` operator.
- **Division**: Use the `/` operator.

### Precedence Rules
When operators appear together without parentheses, their order is determined by precedence:
- Multiplication (`*`) and division (`/`) have the same precedence.
- Addition (`+`) and subtraction (`-`) have the same precedence.
- Operators with the same precedence are applied from left to right.

For example:

```javascript
1 - 2 + 1 // Evaluates to (1 - 2) + 1
```

When in doubt, use parentheses to clarify the order of operations.

### The Remainder Operator
The `%` symbol represents the remainder operation, also known as modulo. It gives the remainder of dividing one number by another:

```javascript
314 % 100 // Produces 14
144 % 12  // Produces 0
```

The `%` operator has the same precedence as multiplication and division.