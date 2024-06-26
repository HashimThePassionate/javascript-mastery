# JavaScript Exercises

Submit this assignment  till tonight

## Looping a Triangle

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

### Hint

You can find the length of a string by writing `.length` after it.

```javascript
let abc = "abc";
console.log(abc.length); // → 3
```

## FizzBuzz

Write a program that uses `console.log` to print all the numbers from 1 to 100, with two exceptions:

1. For numbers divisible by 3, print "Fizz" instead of the number.
2. For numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

### Note

This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solve it, your labor market value just went up.

## Chessboard

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid, there is either a space or a `#` character. The characters should form a chessboard pattern.

### Example Output

Passing this string to `console.log` should show something like this:

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

### Advanced

When you have a program that generates this pattern, define a binding `size = 8` and change the program so that it works for any size, outputting a grid of the given width and height.
