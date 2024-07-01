
### Functions as Values

A function binding usually simply acts as a name for a specific piece of the program. Such a binding is defined once and never changed. This makes it easy to confuse the function and its name. But the two are different. A function value can do all the things that other values can do—you can use it in arbitrary expressions, not just call it. It is possible to store a function value in a new binding, pass it as an argument to a function, and so on. Similarly, a binding that holds a function is still just a regular binding and can, if not constant, be assigned a new value, like so:

```javascript
let launchMissiles = function() {
  missileSystem.launch("now");
};
if (safeMode) {
  launchMissiles = function() {/* do nothing */};
}
```

Here's the text formatted according to your specifications:

---

### Declaration Notation

There is a slightly shorter way to create a function binding. When the function keyword is used at the start of a statement, it works differently:

```javascript
function square(x) {
  return x * x;
}
```

This is a function declaration. The statement defines the binding `square` and points it at the given function. It is slightly easier to write and doesn’t require a semicolon after the function. There is one subtlety with this form of function definition.

```javascript
console.log("The future says:", future());
function future() {
  return "You'll never have flying cars";
}
```

The preceding code works, even though the function is defined below the code that uses it. Function declarations are not part of the regular top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope. This is sometimes useful because it offers the freedom to order code in a way that seems the clearest, without worrying about having to define all functions before they are used.

### Arrow Functions

There’s a third notation for functions, which looks very different from the others. Instead of the function keyword, it uses an arrow (`=>`) made up of an equal sign and a greater-than character (not to be confused with the greater-than-or-equal operator, which is written `>=`):

```javascript
const roundTo = (n, step) => {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};
```

The arrow comes after the list of parameters and is followed by the function’s body. It expresses something like “this input (the parameters) produces this result (the body)”.

When there is only one parameter name, you can omit the parentheses around the parameter list. If the body is a single expression, rather than a block in braces, that expression will be returned from the function. So, these two definitions of `square` do the same thing:

```javascript
const square1 = (x) => { return x * x; };
const square2 = x => x * x;
```

When an arrow function has no parameters at all, its parameter list is just an empty set of parentheses.

```javascript
const horn = () => {
  console.log("Toot");
};
```

There’s no deep reason to have both arrow functions and function expressions in the language. Apart from a minor detail, which we’ll discuss in Chapter 6, they do the same thing. Arrow functions were added in 2015, mostly to make it possible to write small function expressions in a less verbose way. We’ll use them often in Chapter 5.
