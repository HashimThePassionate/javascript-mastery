# Higher-Order Functions

## Introduction
Large programs are complicated and take a long time to build. Complex programs can confuse programmers, leading to mistakes (bugs). These bugs are hard to find in large programs.

## Example Programs

Let's look at two example programs.

### Example 1
This program is simple and has six lines:

```javascript
let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);
```

### Example 2
This program uses two helper functions and has one line:

```javascript
console.log(sum(range(1, 10)));
```

### Which One Has More Bugs?
Which program is more likely to have mistakes?

If we include the definitions of `sum` and `range`, the second program is actually bigger than the first. But, it is still more likely to be correct.

## Why is the Second Program Better?
The second program uses words (vocabulary) that match the problem. Adding up a range of numbers is not about loops and counters; it’s about ranges and sums.

The `sum` and `range` functions still use loops and counters, but they handle simpler ideas. This makes them easier to get right.

## Conclusion
Using higher-order functions (like `sum` and `range`) makes programs easier to understand and less likely to have mistakes, even if the code is longer. This leads to clearer and more manageable code.
