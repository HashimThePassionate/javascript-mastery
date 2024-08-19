# 🎯 Debugging 🛠️

Debugging is the process of identifying and fixing errors in your code. When your program misbehaves or produces errors, it’s crucial to figure out what went wrong. This section will guide you through the debugging process, including how to effectively use tools like `console.log` and browser debuggers.

---

## 🧩 Identifying the Problem

Once you notice something is wrong with your program, the first step is to identify the problem. Sometimes the issue is obvious—the error message might point directly to the line of code causing the issue. For example:

```javascript
let result = numberToString(13, 10);
console.log(result); 
```

If this line throws an error, it might clearly indicate where the problem lies.

### 🚩 Misleading Error Locations

However, sometimes the error might not be where the problem originates. The error might occur because of a value that was incorrectly calculated elsewhere in the program. In such cases, the line indicated by the error message is merely the first place where the problem manifests, not where it was created.

---

## 🛠️ Debugging with `console.log`

A common and straightforward way to debug a program is to insert `console.log` statements at strategic points in your code. This allows you to see the values of variables at different stages of execution.

### 🔍 Example Program with a Bug

Consider the following program, which attempts to convert a number to a string in a given base (e.g., decimal, binary):

```javascript
function numberToString(n, base = 10) {
    let result = "", sign = "";
    if (n < 0) {
        sign = "-";
        n = -n;
    }
    do {
        result = String(n % base) + result;
        n /= base;
    } while (n > 0);
    return sign + result;
}

console.log(numberToString(13, 10));
// → 1.5e-3231.3e-3221.3e-3211.3e-3201.3e-3191.3…-3181.3
```

### 💡 Problem Breakdown

The program is supposed to convert the number `13` to its string representation in base `10`. However, instead of returning `"13"`, it produces a strange output: `1.5e-3231.3e-3221.3e-321...`.

Let’s debug this step by step:

1. **🔍 Understanding the Code**:
   - The code takes a number `n` and repeatedly calculates `n % base` (which gives the remainder of `n` divided by `base`).
   - It then divides `n` by `base` and continues the loop until `n` is `0`.
   - The result is built by appending each digit to a string.

2. **🚨 Identifying the Issue**:
   - The line `n /= base;` divides `n` by `base`, but it doesn’t ensure that `n` is a whole number after division. This causes `n` to take on fractional values, leading to the strange output.

3. **🔧 Using `console.log` to Inspect Values**:
   - Let’s add a `console.log` inside the loop to check the value of `n`:

   ```javascript
   function numberToString(n, base = 10) {
       let result = "", sign = "";
       if (n < 0) {
           sign = "-";
           n = -n;
       }
       do {
           console.log(n); // Log the value of 'n' at each step
           result = String(n % base) + result;
           n /= base;
       } while (n > 0);
       return sign + result;
   }

   console.log(numberToString(13, 10));
   ```

   **📋 Console Output**:
   ```
   13
   1.3
   0.13
   0.013…
   1.5e-323
   ```

   The output reveals that `n` is being divided into smaller and smaller fractions, which isn’t what we want.

4. **🔨 Fixing the Bug**:
   - To fix this, we should ensure that `n` is always a whole number after division by using `Math.floor()`:

   ```javascript
   function numberToString(n, base = 10) {
       let result = "", sign = "";
       if (n < 0) {
           sign = "-";
           n = -n;
       }
       do {
           result = String(n % base) + result;
           n = Math.floor(n / base); // Ensure 'n' is an integer
       } while (n > 0);
       return sign + result;
   }

   console.log(numberToString(13, 10));
   // → "13"
   ```

   Now, the program correctly outputs `"13"`.

---

## 🛑 Using the Browser Debugger

Another powerful tool for debugging is the browser’s built-in debugger. Instead of manually inserting `console.log` statements, you can set **breakpoints** directly in your code. When the program execution reaches a breakpoint, it pauses, allowing you to inspect the current state of variables and step through the code line by line.

### 🔧 Setting Breakpoints:

1. **Open Developer Tools**:
   - In most browsers, you can open the developer tools by pressing `F12` or right-clicking on the page and selecting "Inspect".

2. **Set a Breakpoint**:
   - Navigate to the "Sources" tab in the developer tools.
   - Find the JavaScript file you want to debug.
   - Click on the line number where you want to pause execution. This sets a breakpoint.

3. **Run the Code**:
   - Run your program. When the execution reaches the breakpoint, it will pause.
   - You can now inspect the values of variables, watch expressions, and step through the code.

### 🔍 Example Using `debugger` Statement:

You can also pause the execution of your program by inserting a `debugger` statement directly into your code:

```javascript
function numberToString(n, base = 10) {
    let result = "", sign = "";
    if (n < 0) {
        sign = "-";
        n = -n;
    }
    do {
        debugger; // Pauses execution here if the debugger is open
        result = String(n % base) + result;
        n = Math.floor(n / base);
    } while (n > 0);
    return sign + result;
}

console.log(numberToString(13, 10));
```

When you run this code with the developer tools open, the program will pause at the `debugger` statement, allowing you to inspect and step through the code.

---

## 🚀 Conclusion

Debugging is an essential skill for any programmer. By methodically analyzing your code and using tools like `console.log` and browser debuggers, you can identify and fix errors more effectively. Remember, the key to successful debugging is understanding the problem, forming a hypothesis, and then testing that hypothesis with additional observations.
