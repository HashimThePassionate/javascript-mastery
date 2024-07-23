# Getters, Setters, and Static Methods 

## Introduction
In JavaScript, interfaces often include plain properties in addition to methods. Properties that require computation can use getters and setters to manage access and updates. Static methods are associated with the class itself rather than instances.

## Key Concepts

### Getters
Getters are methods that get the value of a specific property. They are defined by using the `get` keyword before the method name. Getters allow you to run code when a property is accessed.

**Example: Getter for Random Size**
```javascript
let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  }
};

console.log(varyingSize.size); // Output: Random number, e.g., 73
console.log(varyingSize.size); // Output: Another random number, e.g., 49
```

**Explanation:**
- **Get Size**: The `size` property is defined with a getter that returns a random number between 0 and 99.
- **Accessing the Getter**: Each time `varyingSize.size` is accessed, the getter method is called, producing a different random number.

### Setters
Setters are methods that set the value of a specific property. They are defined by using the `set` keyword before the method name. Setters allow you to run code when a property is changed.

**Example: Temperature Class with Getter and Setter**
```javascript
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit); // Output: 71.6
temp.fahrenheit = 86;
console.log(temp.celsius); // Output: 30
```

**Explanation:**
- **Constructor**: The `Temperature` class stores the temperature in Celsius.
- **Getter for Fahrenheit**: The `fahrenheit` getter converts Celsius to Fahrenheit.
- **Setter for Fahrenheit**: The `fahrenheit` setter converts Fahrenheit to Celsius and updates the `celsius` property.
- **Static Method**: The `fromFahrenheit` static method creates a `Temperature` instance from a Fahrenheit value.

### Static Methods
Static methods are associated with the class itself rather than instances. They are defined with the `static` keyword and cannot access instance properties directly.

**Example: Static Method in Temperature Class**
```javascript
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let boil = Temperature.fromFahrenheit(212);
console.log(boil.celsius); // Output: 100
```

**Explanation:**
- **Static Method**: The `fromFahrenheit` method is a static method that creates a `Temperature` instance from a Fahrenheit value.
- **Usage**: `Temperature.fromFahrenheit(212)` creates a `Temperature` instance representing the boiling point of water.

## Summary

- **Getters**: Methods to get the value of a property, defined using the `get` keyword.
- **Setters**: Methods to set the value of a property, defined using the `set` keyword.
- **Static Methods**: Methods associated with the class itself, defined using the `static` keyword.

Getters and setters provide a way to define computed properties, and static methods offer additional functionality that is not tied to specific instances of a class. Understanding these concepts helps you write more flexible and maintainable code.