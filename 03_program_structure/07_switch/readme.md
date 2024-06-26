# Dispatching on a Value with `switch`

## Introduction

In programming, **dispatching** means selecting and executing specific code based on the value of a variable or expression. This is often used to handle different conditions or cases in a program. In JavaScript, the `switch` statement is used to dispatch the correct block of code based on the value of an expression.

## When to Use `if-else` vs. `switch`

### `if-else`

- Use `if-else` statements when you have a few conditions to check.
- `if-else` is more flexible, allowing complex conditions and logical expressions.
- `if-else` can handle conditions that are not strictly equal (e.g., using comparison operators).

### `switch`

- Use `switch` statements when you have multiple specific values to check against a single variable.
- `switch` is more readable and cleaner for dispatching based on a single variable with many possible values.
- `switch` can be easier to maintain and understand when dealing with multiple discrete cases.

## Example: Using `if-else` Statements

It is not uncommon for code to look like this:

```javascript
if (x == "value1") {
  action1();
} else if (x == "value2") {
  action2();
} else if (x == "value3") {
  action3();
} else {
  defaultAction();
}
```

## Example: Using `switch` Statement

There is a construct called `switch` that is intended to express such a “dispatch” in a more direct way. Here is an example:

```javascript
// Define the action functions
function actionRainy() {
  console.log("Remember to bring an umbrella.");
}

function actionSunny() {
  console.log("Dress lightly.");
}

function actionCloudy() {
  console.log("Go outside.");
}

function defaultAction() {
  console.log("Unknown weather type!");
}

// Using switch statement
switch (prompt("What is the weather like?")) {
  case "rainy":
    actionRainy();
    break;
  case "sunny":
    actionSunny();
    // No break statement here, so it falls through to the next case
  case "cloudy":
    actionCloudy();
    break;
  default:
    defaultAction();
    break;
}
```

### Explanation

- You may put any number of `case` labels inside the block opened by `switch`.
- The program will start executing at the label that corresponds to the value that `switch` was given, or at `default` if no matching value is found.
- It will continue executing, even across other labels, until it reaches a `break` statement.

### Example Breakdown

- If the prompt returns "rainy":
  - `actionRainy();` will execute.
  - The `break` statement stops further execution.
- If the prompt returns "sunny":
  - `actionSunny();` will execute.
  - It continues executing the next case because there is no `break`.
  - `actionCloudy();` will also execute.
- If the prompt returns "cloudy":
  - `actionCloudy();` will execute.
  - The `break` statement stops further execution.
- If the prompt returns any other value:
  - `defaultAction();` will execute.
  - The `break` statement stops further execution.

## Pattern Matching in `switch` Cases

JavaScript `switch` cases are limited to strict equality (`===`) checks. This means you cannot directly use pattern matching or conditions inside `switch` cases. For more complex pattern matching, you should use `if-else` statements.

## Complete Code Example with Action Functions

Here is a complete example that shows both the `if-else` structure and the `switch` statement, with action functions defined for handling weather conditions:

### Using `if-else` Structure

```javascript
// Define action functions
function actionRainy() {
  console.log("Remember to bring an umbrella.");
}

function actionSunny() {
  console.log("Dress lightly.");
}

function actionCloudy() {
  console.log("Go outside.");
}

function defaultAction() {
  console.log("Unknown weather type!");
}

// Prompt the user for the weather
let weather = prompt("What is the weather like?");

// Dispatch using if-else
if (weather == "rainy") {
  actionRainy();
} else if (weather == "sunny") {
  actionSunny();
  actionCloudy(); // Falls through to the next action for demonstration
} else if (weather == "cloudy") {
  actionCloudy();
} else {
  defaultAction();
}
```

### Using `switch` Statement

```javascript
// Define action functions
function actionRainy() {
  console.log("Remember to bring an umbrella.");
}

function actionSunny() {
  console.log("Dress lightly.");
}

function actionCloudy() {
  console.log("Go outside.");
}

function defaultAction() {
  console.log("Unknown weather type!");
}

// Prompt the user for the weather
let weather = prompt("What is the weather like?");

// Dispatch using switch
switch (weather) {
  case "rainy":
    actionRainy();
    break;
  case "sunny":
    actionSunny();
    // No break statement here, so it falls through to the next case
  case "cloudy":
    actionCloudy();
    break;
  default:
    defaultAction();
    break;
}
```

## Important Note

Be careful with `switch` statements—it is easy to forget a `break`, which will cause the program to execute code you do not want executed.
