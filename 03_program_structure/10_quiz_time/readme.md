## 📐 Looping a Triangle

For this exercise, you'll need to print a triangle that grows with each iteration of the loop.

### Solution Code:

```javascript
for (let line = "#"; line.length <= 7; line += "#") {
  console.log(line);
}
```

### Explanation:

1. **Starting Value**: We begin with a single `#` and bind it to `line`.
2. **Loop Condition**: The loop continues as long as `line.length` is 7 or less.
3. **Incrementing**: After each iteration, a `#` is added to `line` by setting `line = line + "#"`.

This will produce:
```
#
##
###
####
#####
######
#######
```

---

## 🔄 FizzBuzz

This classic problem requires checking divisibility and printing specific words for multiples.

### Solution Code:

```javascript
for (let number = 1; number <= 100; number++) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
}
```

### Explanation:

1. **Loop Setup**: The loop runs from 1 to 100.
2. **Conditions**:
   - If `number` is divisible by both 3 and 5, we print `"FizzBuzz"`.
   - If only divisible by 3, print `"Fizz"`.
   - If only divisible by 5, print `"Buzz"`.
3. **Default Case**: If none of the conditions are met, print the `number` itself.

---

## ♟ Chessboard

Here, you'll create a grid pattern that resembles a chessboard.

### Solution Code:

```javascript
let size = 8; // You can change this to any desired size
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 === 0) {
      board += "#";
    } else {
      board += " ";
    }
  }
  board += "\n";
}

console.log(board);
```

### Explanation:

1. **Define Size**: The `size` variable allows you to change the grid size dynamically.
2. **Outer Loop (Rows)**: The outer loop represents each row (`y`).
3. **Inner Loop (Columns)**: The inner loop represents each column (`x`).
4. **Condition**: `(x + y) % 2 === 0` alternates between `#` and a space:
   - When the sum of `x` and `y` is even, we add `#`.
   - When it’s odd, we add a space.
5. **Newline Character**: After each row (outer loop), we add `\n` to create a new row.

This code will output a grid pattern, similar to:

```
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
```

---
