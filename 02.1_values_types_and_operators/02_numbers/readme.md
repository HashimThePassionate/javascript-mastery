# Numbers in JavaScript

### What are Number Values?
Number values are numeric values used in JavaScript programs. For example, writing `13` in a program creates the bit pattern for the number 13 in the computer's memory.

### How Numbers are Stored
JavaScript uses 64 bits to store a single number value. With 64 bits, you can create \(2^{64}\) different patterns, which equals about 18 quintillion different numbers.

### Handling Large Numbers
In the past, smaller memory sizes meant numbers were often stored using 8 or 16 bits, making overflow common. Modern computers, even those in your pocket, have ample memory, so 64-bit numbers are standard, and overflow is rare.

### Whole Numbers and Limits
Not all whole numbers less than 18 quintillion fit in a JavaScript number because some bits are used for:
- **Negative Numbers**: One bit indicates the sign.
- **Decimal Points**: Some bits represent the position of the decimal point.

The maximum whole number that can be stored is around 9 quadrillion, which is still very large.

### Fractional Numbers
Fractional numbers are written with a dot, like `9.81`. For very large or very small numbers, scientific notation can be used, such as `2.998e8` (which equals 299,800,000).

### Precision in Calculations
- **Integers**: Calculations with whole numbers less than 9 quadrillion are always precise.
- **Fractional Numbers**: Calculations may lose precision due to the 64-bit limit. This is similar to how π (pi) cannot be precisely expressed with finite decimal digits. Thus, treat fractional digital numbers as approximations, not exact values.