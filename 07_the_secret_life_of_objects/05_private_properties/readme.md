# Private Properties in JavaScript

## Introduction
Private properties in JavaScript are used to define properties and methods that are meant for internal use within a class. These properties and methods are not part of the object's external interface and cannot be accessed from outside the class.

## Defining Private Methods

### Using the `#` Symbol
To declare a private method, put a `#` sign in front of its name. Private methods can only be called from inside the class that defines them.

### Example
```javascript
class SecretiveObject {
    #getSecret() {
        return "I ate all the plums";
    }

    interrogate() {
        let shallISayIt = this.#getSecret();
        return "never";
    }
}

let secret = new SecretiveObject();
console.log(secret.interrogate()); // never
console.log(secret.#getSecret());  // Error: Private field '#getSecret' must be declared in an enclosing class
```

### Explanation
- **Private Method**: `#getSecret` is a private method.
- **Public Method**: `interrogate` is a public method that can access the private method.
- **Error**: Trying to access `#getSecret` from outside the class results in an error.

## Private Properties

### Declaring Private Properties
Private properties must be declared with the `#` symbol and can only be accessed within the class.

### Example
This class generates a random whole number below a given maximum value. It has one public method `getNumber` and a private property `#max`.

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

### Explanation
- **Private Property**: `#max` is a private property.
- **Constructor**: Initializes the private property `#max`.
- **Public Method**: `getNumber` returns a random number using the private property.
- **Error**: Trying to access `#max` from outside the class results in an error.

## Summary

1. **Private Methods**: Use the `#` symbol to define methods that can only be called from within the class.
2. **Private Properties**: Use the `#` symbol to declare properties that can only be accessed within the class.
3. **Access Restrictions**: Private methods and properties cannot be accessed from outside the class, ensuring encapsulation and data hiding.

### Key Points
- **Encapsulation**: Private properties and methods help keep internal details hidden, making the class interface clean and secure.
- **Usage of `#`**: Always use the `#` symbol to declare private methods and properties.
- **Constructor**: Private properties must be declared in the class and initialized in the constructor.