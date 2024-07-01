### What is Closure in JavaScript?

A **closure** in JavaScript is a function that remembers and accesses variables from the outer scope (or environment) in which it was created, even after that outer scope has finished executing. This allows the inner function to maintain access to the variables and parameters of its enclosing function.

### How Closures Work

To understand closures, consider the following example:

```javascript
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log('Outer Variable:', outerVariable);
    console.log('Inner Variable:', innerVariable);
  };
}

const newFunction = outerFunction('outside');
newFunction('inside');
```

**Explanation:**

1. **outerFunction**: This function takes one argument (`outerVariable`) and returns an `innerFunction`.
2. **innerFunction**: This inner function takes one argument (`innerVariable`) and logs both `outerVariable` and `innerVariable` to the console.
3. **Creating a Closure**: When `outerFunction` is called with the argument `'outside'`, it returns `innerFunction`. At this point, `outerFunction` has finished executing.
4. **Calling the Closure**: The returned `innerFunction` is stored in `newFunction`. When `newFunction` is called with the argument `'inside'`, it logs the `outerVariable` (which is `'outside'`) and the `innerVariable` (which is `'inside'`).

Despite the fact that `outerFunction` has finished executing, `innerFunction` still has access to `outerVariable` because it forms a closure over the `outerFunction` scope.

### Key Features of Closures

1. **Persistent Scope**: Closures allow a function to retain access to variables from its containing scope even after that scope has returned.
2. **Encapsulation**: They can be used to create private variables or methods. Since the inner function has access to the outer function’s variables, you can hide certain data and expose only what is necessary.
3. **Higher-order Functions**: Closures are often used in higher-order functions (functions that return other functions or take functions as arguments).

### Practical Example

Here’s a practical example of closures used for data encapsulation:

```javascript
function createCounter() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

**Explanation:**

- `createCounter` creates a local variable `count` and returns a function that increments and returns `count`.
- The returned function forms a closure over `count`.
- Each time the returned function is called, it updates and logs the `count` variable.

### Closure

The ability to treat functions as values, combined with the fact that local bindings are recreated every time a function is called, brings up an interesting question: what happens to local bindings when the function call that created them is no longer active?

The following code shows an example of this. It defines a function, `wrapValue`, that creates a local binding. It then returns a function that accesses and returns this local binding:

```javascript
function wrapValue(n) {
  let local = n;
  return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2
```

This is allowed and works as you’d hope—both instances of the binding can still be accessed. This situation is a good demonstration of the fact that local bindings are created anew for every call, and different calls don’t affect each other’s local bindings.

This feature—being able to reference a specific instance of a local binding in an enclosing scope—is called closure. A function that references bindings from local scopes around it is called a closure. This behavior not only frees you from having to worry about the lifetimes of bindings, it also makes it possible to use function values in some creative ways.

With a slight change, we can turn the previous example into a way to create functions that multiply by an arbitrary amount:

```javascript
function multiplier(factor) {
  return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
// → 10
```

The explicit local binding from the `wrapValue` example isn’t really needed since a parameter is itself a local binding.

Thinking about programs like this takes some practice. A good mental model is to think of function values as containing both the code in their body and the environment in which they are created. When called, the function body sees the environment in which it was created, not the environment in which it is called.

In the previous example, `multiplier` is called and creates an environment in which its `factor` parameter is bound to 2. The function value it returns, which is stored in `twice`, remembers this environment so that when that is called, it multiplies its argument by 2.

