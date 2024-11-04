# 📘 JavaScript Exercises 

## Table of Contents
1. [🌈 The Sum of a Range](#-the-sum-of-a-range)
2. [🔄 Reversing an Array](#-reversing-an-array)
3. [📝 Working with Lists](#-working-with-lists)
4. [🔍 Deep Comparison](#-deep-comparison)

## 🌈 The Sum of a Range

1. **`range` Function**  
   Create a `range` function that takes two arguments, `start` and `end`, and returns an array containing all numbers between these values, inclusive.
   
2. **`sum` Function**  
   Write a `sum` function that takes an array of numbers and calculates the sum of all elements.

3. **Adding a Step Argument**  
   Modify the `range` function to take an optional third argument, `step`, that allows the function to skip numbers. Ensure it works with both positive and negative values!

   **Hints**:
   - Think about how the `step` value changes the array construction.
   - Consider both forward and backward counting based on the step value.

## 🔄 Reversing an Array

1. **`reverseArray` Function**  
   Write a function that takes an array and returns a new array with its elements in reverse order.

2. **`reverseArrayInPlace` Function**  
   Create a function that reverses an array in place, meaning the original array is modified without creating a new array.

   **Tips**:
   - For `reverseArrayInPlace`, try using a loop to swap elements from the beginning and end until you reach the middle.
   - Avoid using JavaScript’s built-in `reverse` method to deepen your understanding of array manipulation.

## 📝 Working with Lists

1. **`arrayToList` Function**  
   Write a function that converts an array into a nested list structure. A list is an object where each element has a `value` and a `rest` property.

2. **`listToArray` Function**  
   Convert a list back into an array format. 

3. **`prepend` Helper Function**  
   Write a helper function that adds an element to the front of a list. This function should return a new list with the element prepended.

4. **`nth` Function**  
   Access a specific element in the list by its position (with zero being the first element). Return `undefined` if the element doesn’t exist.

5. **Recursive `nth` Function**  
   Write a recursive version of `nth` to practice recursive thinking!

   **Quick Note**:
   - Lists are often implemented as nested objects, which can be a fun departure from typical arrays. Try to think of each element in the list as a unique object in a chain.

## 🔍 Deep Comparison

1. **`deepEqual` Function**  
   Write a `deepEqual` function that checks if two values are "deeply equal." In other words, they should have the same values, and if they’re objects, all properties must match as well.

   **Tips**:
   - Use recursion to handle nested objects.
   - Remember that `deepEqual` should handle primitive types as well as objects.
   - Consider cases where one value is `null` or `undefined` to make your function more robust.

### 🌟 Happy Coding! 🌟

These exercises cover a range of essential JavaScript skills, from basic array manipulation to deeper object comparisons. Enjoy exploring these concepts, and remember to write code that’s not only functional but also clear and readable. Good luck! 🚀