# Control Flow in JavaScript

When your program contains more than one statement, the statements are executed sequentially, as though they were a story, from top to bottom. This is known as **control flow**.

## Example

Consider the following program, which contains two statements:

```javascript
let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " + theNumber * theNumber);
```
1. **First Statement:**
   ```javascript
   let theNumber = Number(prompt("Pick a number"));
   ```
   - This statement prompts the user to enter a number.
   - The `prompt` function returns the input as a string.
   - The `Number` function converts the string to a number and assigns it to the variable `theNumber`.

2. **Second Statement:**
   ```javascript
   console.log("Your number is the square root of " + theNumber * theNumber);
   ```
   - This statement calculates the square of the number stored in `theNumber`.
   - It then logs the result to the console.

### Conversion Functions

- The `Number` function converts a value to a number.
- Similarly, there are functions called `String` and `Boolean` that convert values to those types.

## Schematic Representation

Here is a schematic representation of straight-line control flow:

<img src="./images/straightline.PNG" width="20%" alt="Straight Line">

In this representation, the arrow indicates the flow of control from one statement to the next, in a straight line from top to bottom.

## Conditional Execution in JavaScript

Not all programs are straight roads. We may, for example, want to create a branching road where the program takes the proper branch based on the situation at hand. This is called **conditional execution**.

Conditional execution is created with the `if` keyword in JavaScript. In the simple case, we want some code to be executed if, and only if, a certain condition holds. We might, for example, want to show the square of the input only if the input is actually a number:

```javascript
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
}
```

### Explanation

- **Condition Check:**
  ```javascript
  if (!Number.isNaN(theNumber)) {
  ```
  - The `if` keyword executes or skips a statement depending on the value of a Boolean expression.
  - The `Number.isNaN` function returns `true` only if the argument it is given is `NaN`.

- **Statement Execution:**
  ```javascript
  console.log("Your number is the square root of " + theNumber * theNumber);
  ```
  - If the condition is true (i.e., the input is a valid number), this statement calculates and logs the square of the number.

If you enter a non-number (e.g., "parrot"), no output is shown.

### Using Braces

The statement after the `if` is wrapped in braces (`{}`) in this example. The braces group any number of statements into a single statement, called a block. You could omit them if they hold only a single statement, but most JavaScript programmers use them consistently to avoid errors.

Example with braces omitted for a single statement:
```javascript
if (1 + 1 == 2) console.log("It's true");
// → It's true
```

### Else Keyword

You often won’t just have code that executes when a condition holds true but also code that handles the other case. This alternate path is represented by the second arrow in the diagram. You can use the `else` keyword, together with `if`, to create two separate, alternative execution paths:

```javascript
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}
```

<img src="./images/conditionalexecution.PNG" width="20%" alt="Straight Line">

## Chaining Conditional Execution in JavaScript

If you have more than two paths to choose from, you can chain multiple `if/else` pairs together.

## Example

Here's an example:

```javascript
let num = Number(prompt("Pick a number"));
if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}
```

### Explanation

1. **First Condition:**
   ```javascript
   if (num < 10) {
     console.log("Small");
   }
   ```
   - The program checks whether `num` is less than 10.
   - If it is, it prints "Small" and ends.

2. **Second Condition:**
   ```javascript
   } else if (num < 100) {
     console.log("Medium");
   }
   ```
   - If the first condition is not met, the program checks if `num` is less than 100.
   - If it is, it prints "Medium" and ends.

3. **Else Condition:**
   ```javascript
   } else {
     console.log("Large");
   }
   ```
   - If neither condition is met, the program prints "Large".

### Schematic Representation

Here is a schematic representation of chained conditional execution:

<img src="./images/medium.PNG" width="20%" alt="Straight Line">