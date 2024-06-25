# JavaScript Functions Overview Only

## Functions

A lot of the values provided in the default environment have the type `function`. A function is a piece of program wrapped in a value. Such values can be applied in order to run the wrapped program. 

For example, in a browser environment, the binding `prompt` holds a function that shows a little dialog box asking for user input. It is used like this:

```javascript
prompt("Enter passcode");
```

Executing a function is called invoking, calling, or applying it. You can call a function by putting parentheses after an expression that produces a function value. Usually, you’ll directly use the name of the binding that holds the function. The values between the parentheses are given to the program inside the function. 

In the example, the `prompt` function uses the string that we give it as the text to show in the dialog box. Values given to functions are called arguments. Different functions might need a different number or different types of arguments.

The `prompt` function isn’t used much in modern web programming, mostly because you have no control over the way the resulting dialog looks, but it can be helpful in toy programs and experiments.

## The `console.log` Function

In the examples, I used `console.log` to output values. Most JavaScript systems (including all modern web browsers and Node.js) provide a `console.log` function that writes out its arguments to some text output device. In browsers, the output lands in the JavaScript console. This part of the browser interface is hidden by default, but most browsers open it when you press F12 or, on a Mac, `command-option-I`. If that does not work, search through the menus for an item named Developer Tools or similar.

Though binding names cannot contain period characters, `console.log` does have one. This is because `console.log` isn’t a simple binding, but an expression that retrieves the `log` property from the value held by the `console` binding. We’ll find out exactly what this means in Chapter 4.

## Return Values

Showing a dialog box or writing text to the screen is a side effect. Many functions are useful because of the side effects they produce. Functions may also produce values, in which case they don’t need to have a side effect to be useful. For example, the function `Math.max` takes any amount of number arguments and gives back the greatest:

```javascript
console.log(Math.max(2, 4));
// → 4
```

When a function produces a value, it is said to return that value. Anything that produces a value is an expression in JavaScript, which means that function calls can be used within larger expressions. In the following code, a call to `Math.min`, which is the opposite of `Math.max`, is used as part of a plus expression:

```javascript
console.log(Math.min(2, 4) + 100);
// → 102
```

This is just a function overview we will cover in detail in upcoming docs