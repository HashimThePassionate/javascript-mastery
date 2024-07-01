
### Optional Arguments

The following code is allowed and executes without any problem:

```javascript
function square(x) {
  return x * x;
}
console.log(square(4, true, "hedgehog"));
// → 16
```

We defined `square` with only one parameter. Yet when we call it with three, the language doesn’t complain. It ignores the extra arguments and computes the square of the first one.

JavaScript is extremely broad-minded about the number of arguments you can pass to a function. If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters are assigned the value `undefined`.

The downside of this is that it is possible—likely, even—that you’ll accidentally pass the wrong number of arguments to functions. And no one will tell you about it. The upside is that you can use this behavior to allow a function to be called with different numbers of arguments. For example, this `minus` function tries to imitate the `-` operator by acting on either one or two arguments:

```javascript
function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}
console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5
```

If you write an `=` operator after a parameter, followed by an expression, the value of that expression will replace the argument when it is not given. For example, this version of `roundTo` makes its second argument optional. If you don’t provide it or pass the value `undefined`, it will default to one:

```javascript
function roundTo(n, step = 1) {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
}
console.log(roundTo(4.5));
// → 5
console.log(roundTo(4.5, 2));
// → 4
```

The next chapter will introduce a way in which a function body can get at the whole list of arguments it was passed. This is helpful because it allows a function to accept any number of arguments. For example, `console.log` does this, outputting all the values it is given:

```javascript
console.log("C", "O", 2);
// → C O 2
```
