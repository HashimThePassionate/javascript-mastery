### Bindings and Scopes

Each binding (variable or function) has a scope, which is the part of the program in which the binding is visible.

- **Global Scope**: Bindings defined outside any function, block, or module are visible throughout the whole program. These are called global bindings.

```javascript
let x = 10; // global
```

- **Local Scope**: Bindings created for function parameters or declared inside a function can only be referenced within that function. These are known as local bindings. Every time the function is called, new instances of these bindings are created.

```javascript
const halve = function(n) {
  return n / 2;
};
let n = 10;
console.log(halve(100)); // → 50
console.log(n); // → 10
```

- **Block Scope**: Bindings declared with `let` and `const` are local to the block in which they are declared. For example, if you create one inside a loop, the code before and after the loop cannot see it.

```javascript
if (true) {
  let y = 20; // local to block
  var z = 30; // also global
}
```

In pre-2015 JavaScript, only functions created new scopes. Bindings created with the `var` keyword are visible throughout the whole function in which they appear—or throughout the global scope if they are not in a function.

Each scope can “look out” into the scope around it, so `x` is visible inside the block in the example above. The exception is when multiple bindings have the same name. In that case, code can see only the innermost one.

### Nested Scope

JavaScript allows for creating blocks and functions inside other blocks and functions, producing multiple degrees of locality.

For example, the following function outputs the ingredients needed to make a batch of hummus. It has another function inside it:

```javascript
const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};
```

The code inside the `ingredient` function can see the `factor` binding from the outer function, but its local bindings, such as `unit` or `ingredientAmount`, are not visible in the outer function. The set of bindings visible inside a block is determined by the place of that block in the program text. Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope. This approach to binding visibility is called lexical scoping.

