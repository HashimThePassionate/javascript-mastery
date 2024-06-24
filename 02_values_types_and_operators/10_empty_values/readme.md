# Empty Values in JavaScript

### Overview
JavaScript uses two special values to denote the absence of a meaningful value: `null` and `undefined`. These values carry no information but are themselves valid values.

### `null` and `undefined`
- **`null`**: Represents the intentional absence of any object value.
- **`undefined`**: Indicates that a variable has been declared but not yet assigned a value.

### Examples
#### `null`
```javascript
let emptyValue = null;
console.log(emptyValue); // → null
```

#### `undefined`
```javascript
let notAssigned;
console.log(notAssigned); // → undefined

function doNothing() {}
console.log(doNothing()); // → undefined
```

### When are they used?
- **`undefined`**: Often returned by operations that do not produce a meaningful value.
  ```javascript
  let value;
  console.log(value); // → undefined (variable declared but not assigned)
  
  function doNothing() {}
  console.log(doNothing()); // → undefined (function with no return statement)
  ```

- **`null`**: Used to explicitly indicate "no value."
  ```javascript
  let empty = null;
  console.log(empty); // → null
  ```

### Treating `null` and `undefined` as Interchangeable
The difference between `undefined` and `null` is mostly an accident of JavaScript's design. In most cases, they can be treated as interchangeable.

Example:
```javascript
function example(value) {
  if (value == null) {
    console.log("No meaningful value provided");
  } else {
    console.log("Value provided:", value);
  }
}

example(null);        // → No meaningful value provided
example(undefined);   // → No meaningful value provided
example(42);          // → Value provided: 42
```

In this example, both `null` and `undefined` are treated similarly, allowing the function to handle the absence of a value gracefully.v