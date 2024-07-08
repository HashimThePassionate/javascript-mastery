# Exercises

## The Sum of a Range

1. Write a `range` function that takes two arguments, `start` and `end`, and returns an array containing all the numbers from `start` up to and including `end`.
2. Write a `sum` function that takes an array of numbers and returns the sum of these numbers.
3. Modify the `range` function to take an optional third argument that indicates the “step” value used when building the array. Ensure that it works with both positive and negative step values.

## Reversing an Array

1. Write a function `reverseArray` that takes an array as an argument and produces a new array that has the same elements in the inverse order.
2. Write a function `reverseArrayInPlace` that modifies the array given as an argument by reversing its elements without using the standard `reverse` method.

## A List

1. Write a function `arrayToList` that builds up a list structure like the one shown when given `[1, 2, 3]` as an argument.
2. Write a function `listToArray` that produces an array from a list.
3. Write a helper function `prepend` that takes an element and a list and creates a new list that adds the element to the front of the input list.
4. Write a function `nth` that takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or `undefined` when there is no such element.
5. Write a recursive version of `nth`.

## Deep Comparison

1. Write a function `deepEqual` that takes two values and returns `true` only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to `deepEqual`.