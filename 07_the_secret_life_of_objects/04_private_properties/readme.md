# 🛡️🔒 **Private Properties in JavaScript** 📚✨

Private properties in JavaScript are essential for defining properties and methods that are intended for **internal use** within a class. These properties and methods are **not accessible** from outside the class, ensuring **encapsulation** and **data hiding**. This guide provides an in-depth look into how private properties work, how to define them, and their benefits in creating robust JavaScript classes. Let’s dive in! 🚀😊


## 📌 **Table of Contents**

1. [🌟 Introduction](#-introduction)
2. [🔒 What are Private Properties?](#-what-are-private-properties)
   - [📖 Basic Concept](#-basic-concept)
   - [🖼️ Example](#-example)
3. [🔧 Defining Private Methods](#-defining-private-methods)
   - [🔑 Using the `#` Symbol](#-using-the--symbol)
   - [📂 Example with Private Method](#-example-with-private-method)
   - [📝 Explanation](#-explanation)
4. [🔧 Defining Private Properties](#-defining-private-properties)
   - [🔑 Declaring Private Properties](#-declaring-private-properties)
   - [📂 Example with Private Property](#-example-with-private-property)
   - [📝 Explanation](#-explanation-1)
5. [🚫 Access Restrictions](#-access-restrictions)
   - [❌ Attempting to Access Private Members](#-attempting-to-access-private-members)
6. [📚 Summary](#-summary)
   - [🔑 Key Points](#-key-points)


## 🌟 Introduction

Private properties in JavaScript allow you to **encapsulate** data and methods within a class, making them **inaccessible** from outside the class. This ensures that the internal state of an object is **protected** and can only be manipulated through the class's public interface. 🛡️🔐


## 🔒 What are Private Properties?

### 📖 Basic Concept

A **private property** is a class property that cannot be accessed or modified from outside the class. Unlike public properties, which are part of the object's external interface, private properties are meant for **internal use** only. This promotes **data integrity** and **security** within your classes. 🛠️🔒

### 🖼️ Example

Imagine you’re creating a `BankAccount` class. You want to keep the account balance **private** so that it cannot be altered directly from outside the class. Instead, it can only be modified through methods like `deposit` and `withdraw`. 🏦💰

```javascript
class BankAccount {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount(100);
account.deposit(50);        // Deposited $50. New balance: $150
account.withdraw(30);       // Withdrew $30. New balance: $120
console.log(account.getBalance()); // 120
console.log(account.#balance);      // Error: Private field '#balance' must be declared in an enclosing class
```


## 🔧 Defining Private Methods

### 🔑 Using the `#` Symbol

To declare a **private method**, prefix its name with the `#` symbol. Private methods can **only be called** from within the class that defines them. They are **not accessible** from outside the class, ensuring that internal logic remains **hidden** and **protected**. 🔒🛠️

### 📂 Example with Private Method

Let’s extend the `BankAccount` class to include a private method that validates transaction amounts.

```javascript
class BankAccount {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    #validateAmount(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error("Amount must be a positive number.");
        }
    }

    deposit(amount) {
        try {
            this.#validateAmount(amount);
            this.#balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
        } catch (error) {
            console.log(error.message);
        }
    }

    withdraw(amount) {
        try {
            this.#validateAmount(amount);
            if (amount > this.#balance) {
                throw new Error("Insufficient funds.");
            }
            this.#balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this.#balance}`);
        } catch (error) {
            console.log(error.message);
        }
    }

    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount(100);
account.deposit(50);        // Deposited $50. New balance: $150
account.withdraw(30);       // Withdrew $30. New balance: $120
account.deposit(-20);       // Amount must be a positive number.
console.log(account.getBalance()); // 120
console.log(account.#validateAmount(50)); // Error: Private field '#validateAmount' must be declared in an enclosing class
```

### 📝 Explanation

1. **Private Method Definition:**

    ```javascript
    #validateAmount(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error("Amount must be a positive number.");
        }
    }
    ```

    - **`#validateAmount(amount)`**: Defines a private method to validate transaction amounts. 🛠️🔍
    - **Functionality:** Checks if the `amount` is a positive number. If not, it throws an error. ❌🔢

2. **Using the Private Method in `deposit`:**

    ```javascript
    deposit(amount) {
        try {
            this.#validateAmount(amount);
            this.#balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
        } catch (error) {
            console.log(error.message);
        }
    }
    ```

    - **`this.#validateAmount(amount)`**: Calls the private method to validate the deposit amount. 🕵️‍♂️✅
    - **Error Handling:** Uses a `try-catch` block to handle any errors thrown by the private method. 🚫🔄

3. **Attempting to Access the Private Method from Outside:**

    ```javascript
    console.log(account.#validateAmount(50)); // Error
    ```

    - **Error:** Trying to access `#validateAmount` from outside the class results in an error:
      ```
      Error: Private field '#validateAmount' must be declared in an enclosing class
      ```
    - **Reason:** Private methods cannot be accessed outside the class scope. 🚫🔐


## 🔧 Defining Private Properties

### 🔑 Declaring Private Properties

Private properties are declared by prefixing the property name with the `#` symbol. These properties are **only accessible** within the class they are defined in and **cannot be accessed** from outside the class. This ensures that the internal state of an object is **protected** and **encapsulated**. 🔒📦

### 📂 Example with Private Property

Consider a class that generates a random whole number below a given maximum value. It has one public method `getNumber` and a private property `#max`.

```javascript
class RandomSource {
    #max;

    constructor(max) {
        this.#max = max;
    }

    getNumber() {
        return Math.floor(Math.random() * this.#max);
    }
}

let random = new RandomSource(10);
console.log(random.getNumber()); // A random number between 0 and 9
console.log(random.#max);        // Error: Private field '#max' must be declared in an enclosing class
```

### 📝 Explanation

1. **Private Property Declaration:**

    ```javascript
    #max;
    ```

    - **`#max`**: Declares a private property named `#max`. 🛡️🔑
    - **Purpose:** Stores the maximum value for generating random numbers. 📊🔢

2. **Constructor Initialization:**

    ```javascript
    constructor(max) {
        this.#max = max;
    }
    ```

    - **`constructor(max)`**: Initializes the `RandomSource` object with a `max` value. 🏗️🔧
    - **`this.#max = max;`**: Sets the private property `#max` to the provided `max` value. 🛠️📦

3. **Public Method `getNumber`:**

    ```javascript
    getNumber() {
        return Math.floor(Math.random() * this.#max);
    }
    ```

    - **`getNumber()`**: A public method that returns a random whole number between `0` and `#max - 1`. 🎲🔢
    - **Functionality:** 
        - **`Math.random()`**: Generates a floating-point number between `0` (inclusive) and `1` (exclusive). 🌐🔢
        - **`Math.random() * this.#max`**: Scales the random number to the range `[0, #max)`. 📏📈
        - **`Math.floor(...)`**: Rounds down to the nearest whole number. ⬇️🔢

4. **Creating and Using an Instance:**

    ```javascript
    let random = new RandomSource(10);
    console.log(random.getNumber()); // A random number between 0 and 9
    console.log(random.#max);        // Error
    ```

    - **`new RandomSource(10)`**: Creates a new `RandomSource` instance with `#max` set to `10`. 🆕🔢
    - **`random.getNumber()`**: Calls the public method to generate and log a random number. 🎲✅
    - **`random.#max`**: Attempts to access the private property `#max` from outside the class, resulting in an error:
      ```
      Error: Private field '#max' must be declared in an enclosing class
      ```
    - **Reason:** Private properties cannot be accessed outside the class scope. 🚫🔐


## 🚫 Access Restrictions

### Attempting to Access Private Members

Private properties and methods are strictly **inaccessible** from outside the class. Attempting to do so will result in a **syntax error**. This enforcement ensures that the internal implementation details of a class remain **hidden** and **protected** from external manipulation. 🛡️❌

#### 📂 Example

```javascript
class Example {
    #privateProperty = "I am private";

    #privateMethod() {
        return "This is a private method.";
    }

    publicMethod() {
        console.log(this.#privateProperty);
        console.log(this.#privateMethod());
    }
}

let obj = new Example();
obj.publicMethod();        // Logs private property and method
console.log(obj.#privateProperty); // Error: Private field '#privateProperty' must be declared in an enclosing class
obj.#privateMethod();     // Error: Private field '#privateMethod' must be declared in an enclosing class
```

### 📝 Explanation

1. **Class Definition with Private Members:**

    ```javascript
    class Example {
        #privateProperty = "I am private";

        #privateMethod() {
            return "This is a private method.";
        }

        publicMethod() {
            console.log(this.#privateProperty);
            console.log(this.#privateMethod());
        }
    }
    ```

    - **`#privateProperty`**: A private property initialized with the string `"I am private"`. 📦🔒
    - **`#privateMethod()`**: A private method that returns a string. 🛠️🔐
    - **`publicMethod()`**: A public method that accesses and logs the private property and method. 🐰📢

2. **Creating an Instance and Calling Public Method:**

    ```javascript
    let obj = new Example();
    obj.publicMethod(); // Logs private property and method
    ```

    - **`new Example()`**: Creates a new instance of the `Example` class. 🆕🔑
    - **`obj.publicMethod()`**: Calls the public method, which successfully accesses and logs the private members:
      ```
      I am private
      This is a private method.
      ```
      ✅✅

3. **Attempting to Access Private Members from Outside:**

    ```javascript
    console.log(obj.#privateProperty); // Error
    obj.#privateMethod();              // Error
    ```

    - **`obj.#privateProperty`**: Attempts to access the private property directly, resulting in a syntax error:
      ```
      SyntaxError: Private field '#privateProperty' must be declared in an enclosing class
      ```
      ❌🔒
    
    - **`obj.#privateMethod()`**: Attempts to call the private method directly, resulting in a similar error:
      ```
      SyntaxError: Private field '#privateMethod' must be declared in an enclosing class
      ```
      ❌🔒

    - **Reason:** Private properties and methods are not accessible outside the class, enforcing **encapsulation** and **data hiding**. 🛡️🔐


## 📚 Summary

Let’s recap the key concepts covered in this guide:

1. **Prototypes:** Allow objects to share properties and methods, promoting **code reuse** and **efficiency**. 🐇🔧
2. **Object Linking:** Objects can be linked to prototypes, enabling **inheritance** of properties and methods. 🔗🧬
3. **Prototype Chain:** JavaScript traverses the prototype chain to find properties or methods not present on the object itself. 🔄🔍
4. **`Object.create`:** Creates new objects with a specified prototype, facilitating the creation of objects that share common functionalities. 🛠️📂
5. **Shared Methods:** Methods can be stored in a prototype to be shared among multiple objects, enhancing **memory efficiency**. 💾🔑

### 🔑 Key Points

- **Encapsulation:** Private properties and methods help keep internal details hidden, ensuring that the object's **external interface** remains **clean** and **secure**. 🛡️✨
  
- **Usage of `#`:** Always use the `#` symbol to declare private methods and properties, adhering to the **modern JavaScript** standards. 🔑🆕
  
- **Constructor Initialization:** Private properties must be declared within the class and initialized in the constructor, maintaining **control** over the object's state. 🏗️🔧

- **Access Restrictions:** Attempting to access private members from outside the class results in errors, enforcing **data protection** and **integrity**. 🚫🔐

Understanding and effectively utilizing private properties in JavaScript classes is crucial for building **robust**, **maintainable**, and **secure** applications. By encapsulating internal states and functionalities, you can prevent unintended interactions and safeguard the integrity of your objects. 🛡️🚀

