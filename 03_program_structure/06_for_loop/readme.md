# For Loops 
Many loops follow a common pattern: 
1. A “counter” binding is created to track the progress of the loop.
2. A `while` loop is used, with a test expression that checks whether the counter has reached its end value.
3. At the end of the loop body, the counter is updated to track progress.

Because this pattern is so common, JavaScript provides a shorter and more comprehensive form called the `for` loop.

## Basic `for` Loop Example

Here is an example of a `for` loop that prints all even numbers from 0 to 12:

```javascript
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
// → 0
// → 2
// … etcetera
```

This program is equivalent to the earlier even-number-printing example using `while`. The `for` loop groups all the statements related to the “state” of the loop together.

## Structure of a `for` Loop

The parentheses after a `for` keyword must contain two semicolons:
- The part before the first semicolon initializes the loop, usually by defining a binding.
- The second part is the expression that checks whether the loop must continue.
- The final part updates the state of the loop after every iteration.

In most cases, this is shorter and clearer than a `while` construct.

## Example: Computing \(2^{10}\) Using `for`

Here is the code that computes \(2^{10}\) using `for` instead of `while`:

```javascript
let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
// → 1024
```

## Breaking Out of a Loop

A loop can finish by having the looping condition produce `false`, or by using the `break` statement. `break` immediately jumps out of the enclosing loop.

### Example: Finding a Number

This program finds the first number that is both greater than or equal to 20 and divisible by 7:

```javascript
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
// → 21
```

The `for` construct in the example does not have a part that checks for the end of the loop, so it will never stop unless the `break` statement inside is executed.

## Avoiding Infinite Loops

If you remove the `break` statement or write an end condition that always produces `true`, your program would get stuck in an infinite loop, which is usually a bad thing.

## Using `continue`

The `continue` keyword is similar to `break` in that it influences the progress of a loop. When `continue` is encountered in a loop body, control jumps out of the body and continues with the loop’s next iteration.

## Updating Bindings Succinctly

Often, a program needs to “update” a binding to hold a value based on that binding’s previous value. 

### Example

```javascript
counter = counter + 1;
```

JavaScript provides a shortcut for this:

```javascript
counter += 1;
```

Similar shortcuts work for many other operators, such as `result *= 2` to double `result` or `counter -= 1` to count downward.

### Shortened Counting Example

```javascript
for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}
```

For `counter += 1` and `counter -= 1`, there are even shorter equivalents: `counter++` and `counter--`.
