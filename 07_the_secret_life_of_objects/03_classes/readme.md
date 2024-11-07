# Classes in JavaScript

## Introduction
JavaScript's class system provides a structured way to define objects and their behaviors. Classes define the shape of an object, including its methods and properties. Objects created from a class are called instances of that class.

## Prototypes and Classes

### Prototypes Recap
Prototypes are used to share methods and properties among all instances of a class. For example, if all rabbits share a `speak` method, it can be defined on the prototype.

### Example with Prototypes
```javascript
let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};

function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

let whiteRabbit = makeRabbit("white");
whiteRabbit.speak("Oh my fur and whiskers");
// The white rabbit says 'Oh my fur and whiskers'
```

### Explanation
- **Prototype Object**: `protoRabbit` contains the `speak` method.
- **Factory Function**: `makeRabbit` creates a new rabbit object with a specific type.

## Using Classes

### Class Notation
JavaScript's class notation simplifies defining prototypes and constructors.

### Example with Classes
```javascript
class Rabbit {
    constructor(type) {
        this.type = type;
    }

    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
killerRabbit.speak("I am fear and darkness");
// The killer rabbit says 'I am fear and darkness'
```

### Explanation
- **Class Declaration**: The `Rabbit` class has a constructor and a `speak` method.
- **Constructor**: `constructor(type)` initializes the `type` property.
- **Method**: `speak(line)` is a method shared by all instances.

### Creating Instances
To create an instance of a class, use the `new` keyword.

```javascript
let killerRabbit = new Rabbit("killer");
```

### Explanation
- **Instance Creation**: `new Rabbit("killer")` creates a new instance with the type "killer".

## Old Way: Functions as Constructors

### Constructor Functions
Before classes, functions were used as constructors.

### Example with Constructor Function
```javascript
function ArchaicRabbit(type) {
    this.type = type;
}

ArchaicRabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};

let oldSchoolRabbit = new ArchaicRabbit("old school");
oldSchoolRabbit.speak("Back in my day...");
// The old school rabbit says 'Back in my day...'
```

### Explanation
- **Constructor Function**: `ArchaicRabbit` initializes the `type` property.
- **Prototype Method**: `ArchaicRabbit.prototype.speak` adds the `speak` method to the prototype.

## Prototype and Constructors

### Prototype Property
The prototype of a constructor is `Function.prototype`, but the constructor's prototype property is used for instances.

### Example
```javascript
console.log(Object.getPrototypeOf(Rabbit) === Function.prototype); // true
console.log(Object.getPrototypeOf(killerRabbit) === Rabbit.prototype); // true
```

### Explanation
- **Function Prototype**: `Rabbit`'s prototype is `Function.prototype` because it's a function.
- **Instance Prototype**: `killerRabbit`'s prototype is `Rabbit.prototype`.

## Class Properties

### Declaring Properties in Class
You can declare properties directly in the class.

### Example
```javascript
class Particle {
    speed = 0;

    constructor(position) {
        this.position = position;
    }
}

let particle = new Particle({ x: 10, y: 20 });
console.log(particle.speed); // 0
console.log(particle.position); // { x: 10, y: 20 }
```

### Explanation
- **Class Property**: `speed` is declared directly in the class.
- **Constructor Property**: `position` is set in the constructor.

## Class Expressions

### Using Class as an Expression
Classes can also be used as expressions.

### Example
```javascript
let object = new class { 
    getWord() { 
        return "hello"; 
    } 
};

console.log(object.getWord()); // hello
```

### Explanation
- **Class Expression**: A class can be used as an expression without a name.
- **Instance Method**: `getWord` returns "hello".

## Summary

1. **Classes**: Define the structure and behavior of objects.
2. **Prototypes**: Share methods and properties among instances.
3. **Constructor Functions**: The old way to create objects before classes.
4. **Instance Creation**: Use the `new` keyword to create an instance.
5. **Class Properties**: Declare properties directly in the class.

### Key Points
- **Classes simplify object creation**: Making it easier to define methods and properties.
- **Use `new` to create instances**: This sets up the prototype and initializes properties.
- **Understand prototypes**: They help in sharing methods and properties efficiently.
