# Optional Property Access 

## Introduction
Optional property access in JavaScript provides a safe way to access properties or call methods on objects that might be null or undefined. This feature helps avoid runtime errors by returning undefined when the object is not present.

## Optional Chaining with Dot Notation

### Syntax
The optional chaining operator `?.` allows you to access properties of an object without having to check if the object exists. 

### Example: Accessing Nested Properties
The following function safely accesses the `city` property of the `address` object:

```javascript
function city(object) {
  return object.address?.city;
}

console.log(city({address: {city: "Toronto"}})); // → Toronto
console.log(city({name: "Vera"})); // → undefined
```

### Explanation
- `object.address?.city` accesses `city` only if `object.address` is not null or undefined.
- If `object.address` is null or undefined, the expression evaluates to undefined without throwing an error.

## Optional Chaining with Bracket Notation

### Example: Accessing Array Elements
Optional chaining can also be used with bracket notation for arrays:

```javascript
console.log({}.arrayProp?.[0]); // → undefined
```
- In this example, `{}.arrayProp?.[0]` tries to access the first element of `arrayProp`.
- Since `arrayProp` is not defined, the expression returns undefined without throwing an error.

## Optional Chaining with Function Calls

### Example: Calling Methods
You can use optional chaining with function calls to safely invoke methods that might not exist:

```javascript
console.log("string".notAMethod?.()); // → undefined
```
- `"string".notAMethod?.()` attempts to call `notAMethod` on the string.
- Since `notAMethod` is not a valid method, the expression returns undefined without throwing an error.

## Combining Optional Chaining

### Example: Nested Access and Method Calls
Optional chaining can be combined for complex objects and methods:

```javascript
let user = {
  profile: {
    getName: () => "Alice"
  }
};

console.log(user.profile?.getName?.()); // → Alice
console.log(user.account?.getBalance?.()); // → undefined
```
- `user.profile?.getName?.()` calls `getName` if `profile` and `getName` are both defined.
- `user.account?.getBalance?.()` returns undefined without error because `account` is not defined.

## Conclusion
Optional property access provides a convenient way to safely access properties and methods on objects that may be null or undefined. This reduces the need for explicit null checks and makes the code more concise and readable.
