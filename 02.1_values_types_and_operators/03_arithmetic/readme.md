# 🔢 Arithmetic operators in JavaScript

JavaScript provides a range of arithmetic operations that make it easy to work with numbers, from basic addition to calculating remainders. Here’s a complete guide to arithmetic in JavaScript, including a full operator precedence table! 🚀

---

## 📖 Table of Contents
1. [Basic Arithmetic Operations](#1-basic-arithmetic-operations-)
2. [Operator Precedence](#2-operator-precedence-)
3. [Other Operators](#3-other-operators-)
4. [Precedence Rules](#4-precedence-rules-)
5. [The Remainder Operator](#5-the-remainder-operator-)
6. [Complete Operator Precedence Table](#6-complete-operator-precedence-table-)

---

### 1. Basic Arithmetic Operations ➕

In JavaScript, arithmetic operations use symbols, or **operators**, to perform calculations on numbers. Here’s a quick look at the basics:

```javascript
100 + 4 * 11 // Output: 144
```

- **Addition (`+`)**: Adds two values together.
- **Multiplication (`*`)**: Multiplies two values together.

When you apply an operator between two numbers, it performs the operation and returns a new number as a result.

---

### 2. Operator Precedence 🔼

Operator precedence determines which operation happens first in a calculation. For example:

```javascript
100 + 4 * 11 // Output: 144
```

> 🔍 **Does it add or multiply first?**  
In this case, **multiplication** happens first (just like in standard math), so `4 * 11` is calculated before adding `100`.

#### 📝 Changing the Order with Parentheses
To change the order of operations, use parentheses:

```javascript
(100 + 4) * 11 // Output: 1144
```

Using parentheses clarifies the calculation and forces JavaScript to add `100 + 4` before multiplying by `11`.

---

### 3. Other Operators ➖➗

JavaScript includes additional arithmetic operators for common calculations:

- **Subtraction (`-`)**: Subtracts the second value from the first.
- **Division (`/`)**: Divides the first value by the second.

Example:

```javascript
50 - 20  // Output: 30
100 / 4  // Output: 25
```

---

### 4. Precedence Rules 📐

When several operators appear together without parentheses, JavaScript follows **precedence rules** to decide the order:

- **Multiplication (`*`)** and **division (`/`)** have higher precedence and are calculated first.
- **Addition (`+`)** and **subtraction (`-`)** have lower precedence and are calculated after.

If operators with the same precedence appear together, JavaScript processes them **from left to right**. For example:

```javascript
1 - 2 + 1 // Output: 0, as it’s evaluated as (1 - 2) + 1
```

> 🧠 **Tip**: When in doubt, use parentheses to clarify the order of operations!

---

### 5. The Remainder Operator `%` 

The `%` symbol represents the **remainder operation**, also known as **modulo**. It gives the remainder after dividing one number by another:

```javascript
314 % 100 // Output: 14 (remainder of 314 divided by 100)
144 % 12  // Output: 0 (144 is evenly divisible by 12)
```

> 🔹 **Note**: The `%` operator has the same precedence as multiplication and division, so it’s evaluated alongside these operators.

---

### 6. Complete Operator Precedence Table 📊

Here’s the **complete JavaScript operator precedence table** from highest to lowest precedence:

| **Operator**               | **Description**                                  | **Precedence** | **Associativity** |
|----------------------------|--------------------------------------------------|----------------|--------------------|
| `()`                       | Parentheses                                      | 20             | N/A               |
| `.` `[]` `()`              | Member access, computed member access, function call | 19         | Left-to-right     |
| `new`                      | Constructor without arguments                    | 18             | Right-to-left     |
| `++` `--`                  | Post-increment, post-decrement                   | 17             | N/A               |
| `++` `--` `+` `-` `~` `!`  | Pre-increment, pre-decrement, unary plus/minus, bitwise NOT, logical NOT | 16 | Right-to-left |
| `*` `/` `%`                | Multiplication, division, remainder              | 15             | Left-to-right     |
| `+` `-`                    | Addition, subtraction                            | 14             | Left-to-right     |
| `<<` `>>` `>>>`            | Bitwise shift (left, right, unsigned right)      | 13             | Left-to-right     |
| `<` `<=` `>` `>=` `in` `instanceof` | Comparison, 'in' checks, instanceof   | 12             | Left-to-right     |
| `==` `!=` `===` `!==`      | Equality and inequality                          | 11             | Left-to-right     |
| `&`                        | Bitwise AND                                      | 10             | Left-to-right     |
| `^`                        | Bitwise XOR                                      | 9              | Left-to-right     |
| `|`                        | Bitwise OR                                       | 8              | Left-to-right     |
| `&&`                       | Logical AND                                      | 7              | Left-to-right     |
| `||`                       | Logical OR                                       | 6              | Left-to-right     |
| `?:`                       | Ternary (conditional) operator                   | 5              | Right-to-left     |
| `=` `+=` `-=` `*=` `/=` `%=` `<<=` `>>=` `>>>=` `&=` `^=` `|=` | Assignment operators | 4 | Right-to-left |
| `yield`                    | Yield in generators                              | 3              | Right-to-left     |
| `,`                        | Comma (sequential evaluation)                    | 2              | Left-to-right     |

> **Note**: Higher numbers in precedence mean the operator executes earlier in expressions without parentheses.

---

> 🧠 **In Summary**:
> - **Operators**: JavaScript includes a wide range of operators with specific precedence.
> - **Precedence**: Controls the order of execution, ensuring operations occur as intended.
> - **Parentheses**: Use them to clarify and control complex calculations when multiple operators are involved.

Understanding operator precedence in JavaScript helps you write clearer, more accurate code! 🎉