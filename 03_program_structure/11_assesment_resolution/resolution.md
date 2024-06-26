## Looping a Triangle

### Problem

Write a loop that makes seven calls to `console.log` to output the following triangle:

```
#
##
###
####
#####
######
#######
```

### Solution

```javascript
for (let line = "#"; line.length <= 7; line += "#") {
  console.log(line);
}
```

## FizzBuzz

### Problem

Write a program that uses `console.log` to print all the numbers from 1 to 100, with two exceptions:

1. For numbers divisible by 3, print "Fizz" instead of the number.
2. For numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

### Solution

```javascript
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
```

## Chessboard

### Problem

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid, there is either a space or a `#` character. The characters should form a chessboard pattern.

### Solution

```javascript
let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
```

### Advanced Solution

When you have a program that generates this pattern, define a binding `size = 8` and change the program so that it works for any size, outputting a grid of the given width and height.

```javascript
function createChessboard(size) {
  let board = "";
  
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x + y) % 2 == 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";
  }
  
  return board;
}

let size = 8;
console.log(createChessboard(size));
```


**Resource** to learn JS line By Line
-   **[UI Dev](https://ui.dev/javascript-visualizer)**
-   **[JSV](https://www.jsv9000.app/)**
-   **[JS Visualizer](https://pythontutor.com/javascript.html)**