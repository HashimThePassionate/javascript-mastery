# 📦 ES Modules in JavaScript

## What are ES Modules? 🤔
- **ES Modules** are a standardized module system introduced in **ECMAScript 2015 (ES6)**.
- They allow you to **export** functions, objects, or primitive values from a module so they can be used by other programs with the **import** statement.
- Each module has its own **scope**, which means variables and functions declared in one module are not accessible in another unless explicitly exported and imported.

### Benefits

- **Isolation of Scope**: Prevents global namespace pollution.
- **Dependency Management**: Clearly defines dependencies between modules.
- **Improved Maintainability**: Easier to manage and update code.
- **Enhanced Reusability**: Modules can be reused across different parts of an scriptlication or even in different projects.

## Why Use ES Modules? 🎯

### 1. Avoiding Conflicts 🚫

By encapsulating code within modules, you prevent variables and functions from unintentionally interfering with each other. This is especially important in large scriptlications where multiple developers might define variables with the same name.

### 2. Organized Code 📚

Modules help break down a complex scriptlication into manageable pieces. Each module handles a specific functionality, making the codebase easier to understand and navigate.

### 3. Reusability 🔄

Modules can be reused in different parts of the scriptlication or even in other projects. This promotes code reuse and reduces duplication.

### 4. Maintainability 🛠️

With modules, you can update or fix code in one place without affecting other parts of the scriptlication. This makes it easier to manage large codebases.

### 5. Collaboration 🤝

Multiple developers can work on different modules simultaneously without stepping on each other's toes, improving teamwork and productivity.

## How Do ES Modules Work? 🛠️

### Exporting

- **Exporting** is how a module makes certain functions, objects, or values available to other modules.
- There are two types of exports:
  - **Named Exports**: Export multiple bindings (variables, functions) by name.
  - **Default Exports**: Export a single value or to have a fallback value for your module.

### Importing

- **Importing** is how you include exported bindings from other modules into your module.
- You can import named exports, default exports, or all exports at once.

---

## Example: Day Names Module 🗓️

Let's dive deep into an example module that deals with day names.

### Creating the Module: `dayname.js`

```javascript
// dayname.js

// A private constant not exported
const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"];

// Exported function to get day name from number
export function dayName(number) {
  return names[number];
}

// Exported function to get day number from name
export function dayNumber(name) {
  return names.indexOf(name);
}
```

#### Explanation:

1. **Private Constant `names`**

   ```javascript
   const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
                  "Thursday", "Friday", "Saturday"];
   ```

   - This array contains the names of the days of the week.
   - It is **not exported**, so it's private to the module.
   - Other modules cannot access `names` directly.

2. **Exported Function `dayName`**

   ```javascript
   export function dayName(number) {
     return names[number];
   }
   ```

   - The `export` keyword makes this function available to other modules.
   - **Purpose**: Given a day number (0-6), it returns the corresponding day name.
   - **Usage**: If you pass `3`, it returns `"Wednesday"`.

3. **Exported Function `dayNumber`**

   ```javascript
   export function dayNumber(name) {
     return names.indexOf(name);
   }
   ```

   - Also exported for use in other modules.
   - **Purpose**: Given a day name, it returns the corresponding day number.
   - **Usage**: If you pass `"Friday"`, it returns `5`.

### Using the Module: `script.js`

```javascript
// script.js

// Importing the dayName function from dayname.js
import { dayName } from "./dayname.js";

let now = new Date();
console.log(`Today is ${dayName(now.getDay())}`);
// Outputs: Today is Monday (or whatever the current day is)
```

#### Explanation:

1. **Import Statement**

   ```javascript
   import { dayName } from "./dayname.js";
   ```

   - **Syntax**: `import { exportedMember } from "modulePath";`
   - We're importing the `dayName` function from `dayname.js`.
   - The path `"./dayname.js"` tells the module loader where to find the module.

2. **Using the Imported Function**

   ```javascript
   let now = new Date();
   console.log(`Today is ${dayName(now.getDay())}`);
   ```

   - `now.getDay()` returns the day of the week as a number (0-6).
   - `dayName(now.getDay())` converts that number into the corresponding day name.
   - The result is logged to the console, e.g., "Today is Monday".

---

## Key Concepts 🔑

### 1. Exporting Members

You can export variables, functions, or classes from a module so they can be used in other modules.

#### Exporting Functions and Variables

```javascript
// math.js

// Exporting a function
export function add(a, b) {
  return a + b;
}

// Exporting a variable
export const PI = 3.1416;
```

- **Exported Members**: `add`, `PI`.
- Other modules can import these exported members.

### 2. Importing Members

You can import exported members from other modules into your current module.

#### Importing Specific Members

```javascript
// script.js

import { add, PI } from "./math.js";

console.log(add(2, 3)); // Outputs: 5
console.log(PI);        // Outputs: 3.1416
```

- **Syntax**: `import { member1, member2 } from "modulePath";`
- Imports the `add` function and `PI` constant from `math.js`.

### 3. Default Exports

A module can have one default export, which is the main exported value.

#### Defining a Default Export

```javascript
// greeting.js

export default function greet(name) {
  return `Hey, ${name}!`;
}
```

- The `export default` keyword is used.
- The default export can be a function, class, object, or any value.

#### Importing a Default Export

```javascript
// script.js

import greet from "./greeting.js";

console.log(greet("Muhammad Hashim")); // Outputs: Hey, Muhammad Hashim!
```

- **Syntax**: `import name from "modulePath";`
- No braces are used when importing a default export.
- You can name the imported value whatever you like.

### 4. Renaming Imports

You can rename imported members using the `as` keyword.

#### Renaming an Import

```javascript
import { dayName as getDayName } from "./dayname.js";

console.log(getDayName(3)); // Outputs: Wednesday
```

- `dayName` is imported and renamed to `getDayName`.
- Useful to avoid naming conflicts or for clarity.

### 5. Importing All Members

You can import all exported members of a module as properties of an object.

#### Importing Everything

```javascript
import * as day from "./dayname.js";

console.log(day.dayName(3)); // Outputs: Wednesday
console.log(day.dayNumber("Friday")); // Outputs: 5
```

- **Syntax**: `import * as name from "modulePath";`
- All exports from `dayname.js` are available as properties of the `day` object.

---

## How Module Names are Resolved 🧐

- **In Browsers**: Module paths are treated as URLs.

  ```javascript
  import { something } from "/modules/someModule.js";
  ```

- **In Node.js**: Module paths are resolved to file system paths.

  ```javascript
  import { something } from "./someModule.js";
  ```

- **Note**: The way module paths are resolved can differ depending on the environment. Always ensure the paths are correct for your setup.

---

## Rules for Import and Export 📏

- **Top-Level Declarations**: `import` and `export` statements must be at the top level of your module, not inside functions or blocks.

  ```javascript
  // Valid
  export function myFunction() { /*...*/ }

  // Invalid
  if (condition) {
    export function anotherFunction() { /*...*/ }
  }
  ```

- **Static Resolution**: Imports and exports are resolved at load time, before the code runs.

---

## Real-World Examples 🌍

### 1. Utility Functions Module

**File:** `utils.js`

```javascript
// utils.js

// Exporting multiple utility functions
export function formatDate(date) {
  // Formats a date object into YYYY-MM-DD string
  const year = date.getFullYear();
  const month = (`0${date.getMonth() + 1}`).slice(-2); // Months are zero-based
  const day = (`0${date.getDate()}`).slice(-2);
  return `${year}-${month}-${day}`;
}

export function capitalize(str) {
  // Capitalizes the first letter of a string
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function generateRandomNumber(max) {
  // Generates a random integer between 0 and max - 1
  return Math.floor(Math.random() * max);
}
```

#### Explanation:

- **Purpose**: Provides common utility functions used across the scriptlication.
- **Functions Exported**:
  - `formatDate`: Converts a `Date` object into a string formatted as `YYYY-MM-DD`.
  - `capitalize`: Capitalizes the first character of a given string.
  - `generateRandomNumber`: Returns a random integer between `0` and `max - 1`.

**Usage:**

```javascript
// script.js

import { formatDate, capitalize, generateRandomNumber } from "./utils.js";

const today = new Date();
console.log(`Today's date is ${formatDate(today)}`);
// Outputs: Today's date is 2023-10-15 (example date)

const name = "john";
console.log(`Hello, ${capitalize(name)}!`);
// Outputs: Hello, John!

console.log(`Random number: ${generateRandomNumber(100)}`);
// Outputs a random number between 0 and 99
```

#### Detailed Explanation:

1. **Importing Functions**

   - We import `formatDate`, `capitalize`, and `generateRandomNumber` from `utils.js`.
   - This allows us to use these utility functions in `script.js`.

2. **Using `formatDate`**

   ```javascript
   const today = new Date();
   console.log(`Today's date is ${formatDate(today)}`);
   ```

   - Creates a new `Date` object representing the current date.
   - Passes `today` to `formatDate`, which returns a formatted string.
   - The formatted date is interpolated into a string and logged.

3. **Using `capitalize`**

   ```javascript
   const name = "hashim";
   console.log(`Hello, ${capitalize(name)}!`);
   ```

   - Defines a string `name` with the value `"john"`.
   - Passes `name` to `capitalize`, which returns `"John"`.
   - The capitalized name is included in a greeting message.

4. **Using `generateRandomNumber`**

   ```javascript
   console.log(`Random number: ${generateRandomNumber(100)}`);
   ```

   - Calls `generateRandomNumber` with `100` as the maximum value.
   - Generates a random integer between `0` and `99`.
   - The random number is logged to the console.

### 2. Class Module

**File:** `user.js`

```javascript
// user.js

export default class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getProfile() {
    return `${this.name} <${this.email}>`;
  }

  sendEmail(subject, message) {
    // Simulate sending an email
    console.log(`Sending email to ${this.email}...`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
  }
}
```

#### Explanation:

- **Purpose**: Defines a `User` class representing a user in the scriptlication.
- **Class Exported**:
  - Exported as the default export, so it can be imported without braces.
- **Class Methods**:
  - `constructor(name, email)`: Initializes a new user with `name` and `email`.
  - `getProfile()`: Returns a formatted string with the user's name and email.
  - `sendEmail(subject, message)`: Simulates sending an email to the user.

**Usage:**

```javascript
// script.js

import User from "./user.js";

const user = new User("Muhammad Hashim", "hashiimtahir@gmail.com");
console.log(user.getProfile());

user.sendEmail("Welcome!", "Thank you for joining our platform.");
// Simulates sending an email to the user
```

#### Detailed Explanation:

1. **Importing the `User` Class**

   - We import the default export from `user.js`, naming it `User`.
   - Since it's a default export, we don't use braces in the import statement.

2. **Creating a New User Instance**

   ```javascript
   const user = new User("Alice", "alice@example.com");
   ```

   - Instantiates a new `User` object with the name `"Alice"` and email `"alice@example.com"`.

3. **Using `getProfile` Method**

   ```javascript
   console.log(user.getProfile());
   ```

   - Calls `getProfile()` on the `user` instance.
   - The method returns a string in the format `"Alice <alice@example.com>"`.
   - The result is logged to the console.

4. **Using `sendEmail` Method**

   ```javascript
   user.sendEmail("Welcome!", "Thank you for joining our platform.");
   ```

   - Calls `sendEmail()` with a subject and message.
   - The method simulates sending an email by logging details to the console.

5. **Console Output**

   ```
   Alice <alice@example.com>
   Sending email to alice@example.com...
   Subject: Welcome!
   Message: Thank you for joining our platform.
   ```

   - Shows the output from the `getProfile()` and `sendEmail()` methods.

### 3. Constants Module

**File:** `constants.js`

```javascript
// constants.js

// Exporting mathematical constants
export const PI = 3.1416;
export const EULER = 2.7183;
export const GOLDEN_RATIO = 1.6180;
```

#### Explanation:

- **Purpose**: Provides common mathematical constants.
- **Constants Exported**:
  - `PI`: The mathematical constant π.
  - `EULER`: The base of natural logarithms (e).
  - `GOLDEN_RATIO`: An irrational number often encountered in mathematics and art.

**Usage:**

```javascript
// mathOperations.js

import { PI, EULER, GOLDEN_RATIO } from "./constants.js";

export function calculateCircumference(radius) {
  // Calculates the circumference of a circle
  return 2 * PI * radius;
}

export function exponentialGrowth(rate, time) {
  // Calculates exponential growth
  return EULER ** (rate * time);
}

export function goldenRectangle(width) {
  // Calculates the height of a golden rectangle given its width
  return width * GOLDEN_RATIO;
}
```

#### Detailed Explanation:

1. **Importing Constants**

   - We import `PI`, `EULER`, and `GOLDEN_RATIO` from `constants.js`.
   - These constants are used in mathematical calculations.

2. **Defining `calculateCircumference` Function**

   ```javascript
   export function calculateCircumference(radius) {
     return 2 * PI * radius;
   }
   ```

   - Calculates the circumference of a circle using the formula `C = 2πr`.
   - Uses the imported `PI` constant.

3. **Defining `exponentialGrowth` Function**

   ```javascript
   export function exponentialGrowth(rate, time) {
     return EULER ** (rate * time);
   }
   ```

   - Calculates exponential growth using the formula `e^(rt)`.
   - Uses the imported `EULER` constant.

4. **Defining `goldenRectangle` Function**

   ```javascript
   export function goldenRectangle(width) {
     return width * GOLDEN_RATIO;
   }
   ```

   - Calculates the height of a golden rectangle given its width.
   - Uses the imported `GOLDEN_RATIO` constant.

**Using the Functions:**

```javascript
// script.js

import { calculateCircumference, exponentialGrowth, goldenRectangle } from "./mathOperations.js";

const radius = 5;
console.log(`Circumference of circle: ${calculateCircumference(radius)}`);
// Outputs: Circumference of circle: 31.416

const growth = exponentialGrowth(0.05, 10);
console.log(`Exponential growth after 10 units: ${growth}`);
// Outputs a calculated value based on the rate and time

const width = 10;
console.log(`Height of golden rectangle: ${goldenRectangle(width)}`);
// Outputs: Height of golden rectangle: 16.18
```

#### Detailed Explanation:

1. **Importing Functions**

   - We import `calculateCircumference`, `exponentialGrowth`, and `goldenRectangle` from `mathOperations.js`.

2. **Using `calculateCircumference`**

   ```javascript
   const radius = 5;
   console.log(`Circumference of circle: ${calculateCircumference(radius)}`);
   ```

   - Sets `radius` to `5`.
   - Calls `calculateCircumference(5)` which computes `2 * PI * 5`.
   - Logs the result: `31.416`.

3. **Using `exponentialGrowth`**

   ```javascript
   const growth = exponentialGrowth(0.05, 10);
   console.log(`Exponential growth after 10 units: ${growth}`);
   ```

   - Calls `exponentialGrowth` with a rate of `0.05` and time `10`.
   - Computes `EULER` raised to the power of `(0.05 * 10)`.
   - Logs the calculated growth value.

4. **Using `goldenRectangle`**

   ```javascript
   const width = 10;
   console.log(`Height of golden rectangle: ${goldenRectangle(width)}`);
   ```

   - Sets `width` to `10`.
   - Calls `goldenRectangle(10)` which computes `10 * GOLDEN_RATIO`.
   - Logs the result: `16.18`.

### 4. Data Module

**File:** `products.js`

```javascript
// products.js

// Private array of products (not exported)
const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Smartphone", price: 599 },
  { id: 3, name: "Tablet", price: 399 },
];

// Exported functions to interact with products
export function getProductById(id) {
  return products.find(product => product.id === id);
}

export function getAllProducts() {
  return products;
}

export function addProduct(newProduct) {
  // Adds a new product to the array
  products.push(newProduct);
}
```

#### Explanation:

- **Purpose**: Manages product data for an e-commerce scriptlication.
- **Private Data**:
  - `products` array is private to the module and not exported.
- **Functions Exported**:
  - `getProductById`: Retrieves a product by its `id`.
  - `getAllProducts`: Returns a copy of all products.
  - `addProduct`: Adds a new product to the collection.

**Usage:**

```javascript
// script.js

import { getProductById, getAllProducts, addProduct } from "./products.js";

// Get a product by ID
const product = getProductById(2);
console.log(`Product: ${product.name}, Price: $${product.price}`);
// Outputs: Product: Smartphone, Price: $599

// Get all products
const allProducts = getAllProducts();
allProducts.forEach(p => {
  console.log(`${p.id}: ${p.name} - $${p.price}`);
});
// Outputs a list of all products

// Add a new product
addProduct({ id: 4, name: "Headphones", price: 199 });
console.log("After adding a new product:");

// Get updated list of products
const updatedProducts = getAllProducts();
updatedProducts.forEach(p => {
  console.log(`${p.id}: ${p.name} - $${p.price}`);
});
// Now includes the new product
```

#### Detailed Explanation:

1. **Importing Functions**

   - We import `getProductById`, `getAllProducts`, and `addProduct` from `products.js`.

2. **Using `getProductById`**

   ```javascript
   const product = getProductById(2);
   console.log(`Product: ${product.name}, Price: $${product.price}`);
   ```

   - Calls `getProductById(2)` to retrieve the product with `id` `2`.
   - Logs the product's `name` and `price`.

3. **Using `getAllProducts`**

   ```javascript
   const allProducts = getAllProducts();
   allProducts.forEach(p => {
     console.log(`${p.id}: ${p.name} - $${p.price}`);
   });
   ```

   - Calls `getAllProducts()` to retrieve all products.
   - Iterates over the array and logs each product's details.

4. **Using `addProduct`**

   ```javascript
   addProduct({ id: 4, name: "Headphones", price: 199 });
   console.log("After adding a new product:");
   ```

   - Calls `addProduct` with a new product object.
   - Adds the new product to the `products` array in `products.js`.

5. **Verifying the Addition**

   ```javascript
   const updatedProducts = getAllProducts();
   updatedProducts.forEach(p => {
     console.log(`${p.id}: ${p.name} - $${p.price}`);
   });
   ```

   - Calls `getAllProducts()` again to get the updated list.
   - The new product is now included in the array.
   - Logs the updated list to verify the addition.

6. **Console Output**

   ```
   Product: Smartphone, Price: $599
   1: Laptop - $999
   2: Smartphone - $599
   3: Tablet - $399
   After adding a new product:
   1: Laptop - $999
   2: Smartphone - $599
   3: Tablet - $399
   4: Headphones - $199
   ```

   - Shows the product details before and after adding the new product.


