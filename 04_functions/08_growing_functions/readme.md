# 🌱 Growing Functions in JavaScript 🌱

Functions help structure code, avoid repetition, and encapsulate specific tasks. Let’s look at how to create functions, enhance them for new needs, and make decisions about their side effects!

## 📖 Table of Contents 📚

1. [✂️ Refactoring Repeated Code](#-refactoring-repeated-code)
2. [🔧 Adding New Functionality](#-adding-new-functionality-)
3. [🚜 Example: Farm Inventory Printing](#-example-farm-inventory-printing-)
4. [🔍 Breaking Down Tasks with Helper Functions](#-breaking-down-tasks-with-helper-functions-)
5. [📝 Functions and Side Effects](#-functions-and-side-effects-)

## ✂️ Refactoring Repeated Code

When you notice similar code blocks appearing multiple times, it’s best to **refactor** these repetitions into a reusable function. This reduces errors, simplifies code, and makes it easier to maintain!

### Example

If we need to print animal counts in a farm inventory, we’d rather not repeat the same code for each type of animal.

## 🔧 Adding New Functionality 💡

Sometimes, a function is created to handle **new functionality**. We might write code using the function before defining it, allowing us to focus on naming and structuring before implementing the function itself.

## 🚜 Example: Farm Inventory Printing 🐄🐔🐖

Imagine a farm inventory where we need to display counts of cows, chickens, and pigs with zeros padded to a three-digit width:

```javascript
function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);

  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);
```

This version works for two animals, but if we want to add more types, copying and pasting code isn't ideal.

## 🔍 Breaking Down Tasks with Helper Functions 🔍

To avoid repetition, let’s create helper functions. Here’s an improved version with `printZeroPaddedWithLabel`, which handles padding and labeling for any type of animal:

```javascript
function printZeroPaddedWithLabel(number, label) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }
  console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs");
}
printFarmInventory(7, 11, 3);
```

While this works well, the name `printZeroPaddedWithLabel` is quite specific. Let's refactor once more by extracting the **zero-padding logic** into its own function, `zeroPad`:

```javascript
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}
printFarmInventory(7, 16, 3);
```

Now, `zeroPad` can be used in many contexts beyond the farm example.

## 📝 Functions and Side Effects ⚡

### Types of Functions

1. **Value-Producing Functions** ✨
   - Functions like `zeroPad` return a value and **do not affect** other parts of the program.
   - Value-producing functions can be reused and combined easily.

2. **Side-Effect Functions** 💥
   - Functions like `console.log` or `printFarmInventory` perform actions that affect the program's environment, such as printing output.
   - While these are useful, they are less versatile than pure functions.

### Pure Functions vs. Impure Functions 🌈

- **Pure Functions** return values and do not rely on or modify external states. Given the same inputs, they always return the same output.
- **Impure Functions** may rely on or modify external variables or states, causing their results to vary depending on the context.

### Why Pure Functions? 🧪

- **Consistency**: They produce the same result every time.
- **Testability**: Pure functions are easier to test since they have no external dependencies.
  
However, side effects are often essential, especially for interacting with users (e.g., `console.log`).
