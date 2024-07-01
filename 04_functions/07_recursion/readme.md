### Recursion

It is perfectly okay for a function to call itself, as long as it doesn’t do it so often that it overflows the stack. A function that calls itself is called recursive. Recursion allows some functions to be written in a different style. Take, for example, this power function, which does the same as the `**` (exponentiation) operator:

```javascript
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
console.log(power(2, 3));
// → 8
```

This is rather close to the way mathematicians define exponentiation and arguably describes the concept more clearly than the loop we used in Chapter 2. The function calls itself multiple times with ever smaller exponents to achieve the repeated multiplication.

However, this implementation has one problem: in typical JavaScript implementations, it’s about three times slower than a version using a for loop. Running through a simple loop is generally cheaper than calling a function multiple times.

The dilemma of speed versus elegance is an interesting one. You can see it as a kind of continuum between human-friendliness and machine-friendliness. Almost any program can be made faster by making it bigger and more convoluted. The programmer has to find an appropriate balance.

In the case of the power function, an inelegant (looping) version is still fairly simple and easy to read. It doesn’t make much sense to replace it with a recursive function. Often, though, a program deals with such complex concepts that giving up some efficiency in order to make the program more straightforward is helpful.

Worrying about efficiency can be a distraction. It’s yet another factor that complicates program design, and when you’re doing something that’s already difficult, that extra thing to worry about can be paralyzing. Therefore, you should generally start by writing something that’s correct and easy to understand. If you’re worried that it’s too slow—which it usually isn’t since most code simply isn’t executed often enough to take any significant amount of time—you can measure afterward and improve it if necessary.

Recursion is not always just an inefficient alternative to looping. Some problems really are easier to solve with recursion than with loops. Most often these are problems that require exploring or processing several “branches,” each of which might branch out again into even more branches.

Consider this puzzle: by starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite set of numbers can be produced. How would you write a function that, given a number, tries to find a sequence of such additions and multiplications that produces that number? For example, the number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all.

Here is a recursive solution:

```javascript
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ??
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}
console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)
```

Note that this program doesn’t necessarily find the shortest sequence of operations. It is satisfied when it finds any sequence at all. It’s okay if you don’t see how this code works right away. Let’s work through it since it makes for a great exercise in recursive thinking.

The inner function `find` does the actual recursing. It takes two arguments: the current number and a string that records how we reached this number. If it finds a solution, it returns a string that shows how to get to the target. If it can find no solution starting from this number, it returns `null`.

To do this, the function performs one of three actions. If the current number is the target number, the current history is a way to reach that target, so it is returned. If the current number is greater than the target, there’s no sense in further exploring this branch because both adding and multiplying will only make the number bigger, so it returns `null`. Finally, if we’re still below the target number, the function tries both possible paths that start from the current number by calling itself twice, once for addition and once for multiplication. If the first call returns something that is not `null`, it is returned. Otherwise, the second call is returned, regardless of whether it produces a string or `null`.

To better understand how this function produces the effect we’re looking for, let’s look at all the calls to `find` that are made when searching for a solution for the number 13:

```plaintext
find(1, "1")
find(6, "(1 + 5)")
find(11, "((1 + 5) + 5)")
find(16, "(((1 + 5) + 5) + 5)") // too big
find(33, "(((1 + 5) + 5) * 3)") // too big
find(18, "((1 + 5) * 3)") // too big
find(3, "(1 * 3)")
find(8, "((1 * 3) + 5)")
find(13, "(((1 * 3) + 5) + 5)") // found!
```

The indentation indicates the depth of the call stack. The first time `find` is called, the function starts by calling itself to explore the solution that starts with `(1 + 5)`. That call will further recurse to explore every continued solution that yields a number less than or equal to the target number. Since it doesn’t find one that hits the target, it returns `null` back to the first call. There the `??` operator causes the call that explores `(1 * 3)` to happen. This search has more luck—its first recursive call, through yet another recursive call, hits upon the target number. That innermost call returns a string, and each of the `??` operators in the intermediate calls passes that string along, ultimately returning the solution.
