# Summary 

## Program Structure

- A program is built out of statements, which themselves sometimes contain more statements.
- Statements often contain expressions, which can be built out of smaller expressions.
- Writing statements one after another gives you a program that is executed from top to bottom.

## Control Flow

- **Conditional Statements**: Use `if`, `else`, and `switch` to introduce disturbances in the flow of control.
- **Looping Statements**: Use `while`, `do`, and `for` to repeat sections of code.

## Bindings

- Bindings (variables) are used to file pieces of data under a name.
- They are useful for tracking state in your program.
- The environment is the set of bindings that are defined.
- JavaScript systems always put a number of useful standard bindings into your environment.

## Functions

- Functions are special values that encapsulate a piece of program.
- You can invoke functions by writing `functionName(argument1, argument2)`.
- Such a function call is an expression and may produce a value.

### Example

```javascript
// Define a function
function greet(name) {
  return "Hello, " + name + "!";
}

// Call the function with an argument
let message = greet("Alice");

// Output the result
console.log(message); // → "Hello, Alice!"
```

In this example:
- The function `greet` takes one argument (`name`).
- It returns a string that greets the person.
- The function is called with the argument `"Alice"`.
- The result is stored in the binding `message` and then logged to the console.
