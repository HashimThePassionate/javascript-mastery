# Exceptions 🚨

When writing programs, there are situations where things go wrong, and you need a mechanism to handle these errors gracefully. This is where **exceptions** come into play. Exceptions allow your program to stop what it’s doing when an error occurs and jump to a place in the code that knows how to handle the problem.

## 🧩 What Are Exceptions?

Exceptions are a way for your program to deal with unexpected situations by "throwing" an error. When an exception is thrown, it immediately stops the current function's execution and jumps back through the call stack until it finds a place that can handle the exception, known as "unwinding the stack."

### 🔍 Example: Throwing and Catching Exceptions

Consider the following example where we have a function `promptDirection` that asks the user to input a direction:

```javascript
function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result);
}

function look() {
    if (promptDirection("Which way?") == "L") {
        return "a house";
    } else {
        return "two angry bears";
    }
}

try {
    console.log("You see", look());
} catch (error) {
    console.log("Something went wrong: " + error.message);
}
```

### 💡 Explanation:

- **Throwing an Exception**: The `throw` keyword is used to raise an exception. In this case, if the user inputs something other than "left" or "right," an `Error` object is thrown with a message indicating the problem.
- **Catching an Exception**: The `try` block contains the code that might throw an exception. If an exception occurs, the `catch` block handles it. The error object is passed to the `catch` block, where you can decide what to do with it—in this case, logging an error message.

### 🖥️ Console Output:

If the user inputs "up," the output would be:

```
Something went wrong: Invalid direction: up
```

If the user inputs "left," the output would be:

```
You see a house
```

---

## 🛑 The Power of Exceptions

Exceptions are powerful because they allow you to handle errors only at the point where they occur and where they are handled, leaving the functions in between to focus on their primary tasks. This separation of concerns simplifies the code and makes it easier to maintain.

### 🛠️ Example: Exception Handling in Action

Consider a more complex example involving money transfer between accounts:

```javascript
const accounts = {
    a: 100,
    b: 0,
    c: 20
};

function getAccount() {
    let accountName = prompt("Enter an account name");
    if (!Object.hasOwn(accounts, accountName)) {
        throw new Error(`No such account: ${accountName}`);
    }
    return accountName;
}

function transfer(from, amount) {
    if (accounts[from] < amount) return;
    accounts[from] -= amount;
    try {
        accounts[getAccount()] += amount;
    } catch (error) {
        console.log(error.message);
        accounts[from] += amount; // Revert the transaction if an error occurs
    }
}

transfer('a', 50);
console.log(accounts); // Check the account balances after the transfer
```

### 💡 Explanation:

- **Error Propagation**: If `getAccount` throws an error (e.g., the user enters an invalid account name), the `catch` block inside `transfer` will handle it by reverting the transaction. This ensures that money doesn’t disappear from the system due to an error.
- **Rollback Mechanism**: By adding the amount back to the original account when an error occurs, the function prevents an inconsistent state.

### 🖥️ Console Output:

If the user enters a valid account name, the transfer succeeds. If an invalid name is entered, the transfer is rolled back, and an error message is displayed.

---
Let's break down the provided JavaScript code with a step-by-step explanation, using beautiful emojis to make it engaging and easy to understand!

### 🏦 **Accounts Object**

```javascript
const accounts = {
    a: 100,
    b: 0,
    c: 20
};
```

- 🗂️ **What is this?** We have an object called `accounts` that represents three bank accounts: `a`, `b`, and `c`.
- 💰 **Balances:** 
  - Account `a` has a balance of 100.
  - Account `b` has a balance of 0.
  - Account `c` has a balance of 20.

### 🏷️ **getAccount Function**

```javascript
function getAccount() {
    let accountName = prompt("Enter an account name");
    if (!Object.hasOwn(accounts, accountName)) {
        throw new Error(`No such account: ${accountName}`);
    }
    return accountName;
}
```

- 📝 **What does this do?** 
  - This function prompts the user to enter an account name (e.g., `a`, `b`, or `c`).
  - It checks if the entered account name exists in the `accounts` object.
  - 🚫 **Error Handling:** If the account name doesn't exist, it throws an error with the message `"No such account: <accountName>"`.
  - ✅ **If valid:** It returns the account name.

### 💸 **transfer Function**

```javascript
function transfer(from, amount) {
    if (accounts[from] < amount) return;
    accounts[from] -= amount;
    try {
        accounts[getAccount()] += amount;
    } catch (error) {
        console.log(error.message);
        accounts[from] += amount; // Revert the transaction if an error occurs
    }
}
```

- 🛠️ **What does this do?**
  - The `transfer` function attempts to transfer an amount of money from one account to another.

- 🏁 **Steps Involved:**
  1. **Check Balance:**
     - 💵 **Sufficient Funds?** The function first checks if the `from` account has enough money for the transfer.
     - ⛔ **If not:** The function immediately stops (`return`).

  2. **Deduct Amount:**
     - 🏦 **Deduct:** It subtracts the amount from the `from` account's balance.

  3. **Prompt for Target Account:**
     - 📢 **User Input:** It calls `getAccount()` to ask the user which account to transfer the money to.

  4. **Error Handling:**
     - 🛑 **Try-Catch Block:** 
       - If everything goes smoothly, the money is added to the target account.
       - 😓 **If an error occurs:** (e.g., the user enters an invalid account name), it catches the error, prints the error message, and **reverts** the transaction by adding the amount back to the `from` account.

### 🎉 **Example Usage**

```javascript
transfer('a', 50);
console.log(accounts);
```

- 🎬 **What happens?**
  - 🚀 **Transfer Begins:** We attempt to transfer 50 units from account `a` (which has 100).
  - 👩‍💻 **User Input:** The program prompts the user to enter a target account name.
  - 🟢 **Successful Transfer:** If the user enters `b`, then account `b` gets the 50 units, and account `a` ends up with 50 units.
  - ❌ **Failed Transfer:** If the user enters an invalid account name, an error is thrown, and account `a` remains unchanged at 100 units.

### 📊 **Final Account Balances:**

- After running the `transfer` function, the `accounts` object will be updated based on the successful or failed transfer.

```javascript
console.log(accounts); 
```

- This will print out the updated balances of all accounts, showing the results of the transfer.

## 🌀 Cleaning Up with `finally`

Sometimes, you need to perform cleanup actions regardless of whether an error occurred. This is where the `finally` block comes in. The `finally` block always executes after the `try` block, whether an exception was thrown or not.

### 🔍 Example: Using `finally` for Cleanup

```javascript
function transfer(from, amount) {
    if (accounts[from] < amount) return;
    let progress = 0;
    try {
        accounts[from] -= amount;
        progress = 1;
        accounts[getAccount()] += amount;
        progress = 2;
    } finally {
        if (progress == 1) {
            accounts[from] += amount; // Rollback if the transfer was incomplete
        }
    }
}

transfer('a', 50);
console.log(accounts);
```
Let's break down this updated JavaScript code, focusing on the `transfer` function and using beautiful emojis to explain it clearly! 🎨

### 🏦 **Accounts Object Reminder**

```javascript
const accounts = {
    a: 100,
    b: 0,
    c: 20
};
```

- 🗂️ **Account Balances:**
  - Account `a`: 100
  - Account `b`: 0
  - Account `c`: 20

### 💸 **Updated transfer Function**

```javascript
function transfer(from, amount) {
    if (accounts[from] < amount) return;
    let progress = 0;
    try {
        accounts[from] -= amount;
        progress = 1;
        accounts[getAccount()] += amount;
        progress = 2;
    } finally {
        if (progress == 1) {
            accounts[from] += amount; // Rollback if the transfer was incomplete
        }
    }
}
```

#### 🏁 **Step-by-Step Explanation**

1. **Balance Check:**
   - 🏦 **Sufficient Funds?** The function first checks if the `from` account has enough money (`amount`). If not, it exits the function immediately (`return`).

2. **Progress Tracking:**
   - ⏳ **Progress Variable:** A variable named `progress` is initialized to `0`. This will help track the stages of the transfer process and ensure proper rollback if something goes wrong.

3. **Try Block - Where the Magic Happens:**
   - 💸 **Deduct Amount:** 
     - The money (`amount`) is subtracted from the `from` account's balance.
     - 🔄 **Progress Update:** `progress` is set to `1`, indicating that the amount has been deducted.
   - 📢 **User Input:**
     - The function then prompts the user to enter a target account name using the `getAccount()` function.
     - If the account name is valid, the amount is added to the target account.
     - 🚀 **Final Progress:** `progress` is set to `2`, indicating that the transfer was successful.

4. **Finally Block - Handling Incomplete Transfers:**
   - 🛑 **Rollback Mechanism:** 
     - The `finally` block checks the `progress` variable.
     - 😓 **Incomplete Transfer?** 
       - If `progress` is `1` (meaning the money was deducted but not added to the target account), the function rolls back the deduction by adding the money back to the `from` account.
     - ✅ **Why is this important?** This ensures that the account balances remain consistent, even if an error occurs during the transfer process.

### 🎉 **Example Usage**

```javascript
transfer('a', 50);
console.log(accounts);
```

- 🎬 **What happens?**
  - 🚀 **Transfer Attempt:** We attempt to transfer 50 units from account `a` (which has 100).
  - 👩‍💻 **User Prompt:** The program prompts the user to enter a target account name.
  - 🟢 **Success:** 
    - If the user enters a valid account name (e.g., `b`), then account `b` receives 50 units, and account `a` now has 50 units.
  - ❌ **Error Handling:**
    - If an invalid account name is entered, the error is caught, and the amount is rolled back to account `a` to maintain the original balance.

### 📊 **Final Account Balances:**

```javascript
console.log(accounts); 
```

- This command prints the updated balances of all accounts, showing the final result of the transfer operation.

### 🚨 **What Happens?**

1. **Initial Setup:**
   - Account `a` starts with 100 units.
   - We attempt to transfer 50 units from account `a`.

2. **User Prompt:**
   - The `getAccount()` function asks for a target account name.
   - The user enters "z", which doesn't exist in the `accounts` object.

3. **Error Occurs:**
   - Since "z" is not a valid account, the `getAccount()` function throws an error with the message `"No such account: z"`.
   - At this point, the transfer process is interrupted.

4. **Rollback Mechanism:**
   - The `finally` block detects that the `progress` was at `1` (meaning the amount was deducted from `a` but not added to any other account).
   - The function then rolls back the transaction by adding the 50 units back to account `a`.

### 📊 **Final Account Balances After Error:**

```javascript
console.log(accounts); 
```

- **Output:**
  - Account `a`: 100 (rollback occurred, so the balance is restored)
  - Account `b`: 0 (unchanged)
  - Account `c`: 20 (unchanged)

This shows that the rollback worked as expected, keeping the account balances consistent even when an error occurred during the transfer process.

---

## 🛡️ Selective Catching of Exceptions

In JavaScript, you can’t directly catch specific types of exceptions, but you can check the type of the exception in the `catch` block and handle it accordingly. This is useful when you want to handle certain exceptions while letting others pass through.

### 🔄 Example: Custom Error Types

```javascript
class InputError extends Error {}

function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new InputError("Invalid direction: " + result);
}

for (;;) {
    try {
        let dir = promptDirection("Where?");
        console.log("You chose ", dir);
        break;
    } catch (e) {
        if (e instanceof InputError) {
            console.log("Not a valid direction. Try again.");
        } else {
            throw e; // Rethrow unexpected errors
        }
    }
}
```

### 💡 Explanation:
Let’s break down the provided JavaScript code step by step, using simple words and emojis to make it engaging and easy to understand! 😊

### 🆕 **Custom Error Class: `InputError`**

```javascript
class InputError extends Error {}
```

- **What is this?**
  - 🚨 **Custom Error:** This line defines a new error class called `InputError` that extends the built-in `Error` class. 
  - 🛠️ **Purpose:** By creating a custom error, you can handle specific types of errors (like invalid user input) differently from other errors.

### 📢 **Function: `promptDirection`**

```javascript
function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new InputError("Invalid direction: " + result);
}
```

- **What does this do?**
  - **User Input:**
    - ❓ **Prompt:** This function asks the user a question (passed as `question`).
    - 📝 **Input:** It stores the user's input in the `result` variable.

- **Processing Input:**
  - ➡️ **Direction Check:**
    - If the user types `"left"` (case-insensitive), it returns `"L"`.
    - If the user types `"right"` (case-insensitive), it returns `"R"`.

- **Error Handling:**
  - 🚫 **Invalid Input:** 
    - If the input is anything other than `"left"` or `"right"`, the function throws a custom `InputError`, passing a message like `"Invalid direction: <input>"`.

### 🔄 **Infinite Loop with Error Handling**

```javascript
for (;;) {
    try {
        let dir = promptDirection("Where?");
        console.log("You chose ", dir);
        break;
    } catch (e) {
        if (e instanceof InputError) {
            console.log("Not a valid direction. Try again.");
        } else {
            throw e; // Rethrow unexpected errors
        }
    }
}
```

- **What is happening here?**

1. **Infinite Loop:**
   - 🔄 **Forever Loop:** The `for (;;) {}` creates an infinite loop that runs until the `break` statement is reached.
   
2. **Try-Catch Block:**
   - 🛑 **Try Block:**
     - The code inside the `try` block calls the `promptDirection("Where?")` function to ask the user for a direction.
     - If the user enters a valid direction (`"left"` or `"right"`), the function returns `"L"` or `"R"`, which is stored in the `dir` variable.
     - 🟢 **Success:** The program prints `"You chose L"` or `"You chose R"` and then exits the loop with `break`.

   - 🚨 **Catch Block:**
     - If the user enters an invalid direction, the `InputError` is thrown and caught here.
     - **Instance Check:** 
       - 🛠️ **Custom Error:** If the error is an instance of `InputError`, it prints `"Not a valid direction. Try again."` and the loop continues, asking the user again.
       - ❗ **Unexpected Error:** If the error is something else (not an `InputError`), it rethrows the error to be handled elsewhere, or it might stop the program.

### 🎬 **Summary:**

- This code prompts the user to enter a direction repeatedly until they enter a valid direction (`"left"` or `"right"`).
- If the user enters something invalid, like `"up"`, the program catches the custom `InputError` and asks the user to try again.
- The use of a custom error class (`InputError`) allows for specific handling of invalid inputs, making the code more robust and clear.

### **Example Interaction:**

- **User input:** `"up"`
  - 🔁 **Response:** `"Not a valid direction. Try again."`
- **User input:** `"left"`
  - 🟢 **Response:** `"You chose L"` and the loop ends.

### 🖥️ Console Output:

If the user inputs an invalid direction, the loop continues, prompting the user again. If another type of error occurs, it’s rethrown and handled by the environment or higher-level code.

---

## ✅ Assertions: Catching Programmer Mistakes

Assertions are checks inside your code that verify things are as they should be. They are primarily used to catch programmer mistakes, not to handle runtime errors.

### 🔍 Example: Using Assertions

```javascript
function firstElement(array) {
    if (array.length == 0) {
        throw new Error("firstElement called with an empty array");
    }
    return array[0];
}

console.log(firstElement([1, 2, 3])); // Outputs: 1
console.log(firstElement([])); // Throws an error
```

### 💡 Explanation:

- **Assertion**: The `if` statement checks whether the array is empty. If it is, an error is thrown, preventing the function from returning `undefined` and making it clear that something went wrong.
- **Purpose**: Assertions are used to catch errors early in the development process, making it easier to diagnose and fix bugs.

---

## 🚀 Conclusion

Exceptions are a powerful tool in JavaScript that allow you to manage errors effectively. By using `try`, `catch`, and `finally` blocks, you can handle unexpected situations without crashing your program. Remember to use custom error types for selective catching and assertions to catch programmer mistakes early.

---

This beautifully formatted section includes detailed explanations and visually engaging elements to help you understand how to use exceptions in your programs. If everything looks good, say "done," and I'll be ready for the next section! 😊