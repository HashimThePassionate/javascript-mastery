# 🌐 Abstraction in Programming

## 📖 Table of Contents 📚

1. [📋 What is Abstraction?](#-what-is-abstraction)
2. [🍲 Example: Recipes for Pea Soup](#-example-recipes-for-pea-soup)
   - [🔍 Detailed Recipe](#-detailed-recipe)
   - [📝 Simplified Recipe](#-simplified-recipe)
3. [🖥️ Abstraction in Programming](#-abstraction-in-programming)
4. [🔄 Abstracting Repetition in Code](#-abstracting-repetition-in-code)
   - [✨ Using Functions for Abstraction](#-using-functions-for-abstraction)
   - [👨‍💻 Using a For Loop](#-using-a-for-loop)
   - [🚀 Creating a Repeat Function](#-creating-a-repeat-function)
   - [📲 Passing Actions as Functions](#-passing-actions-as-functions)
5. [💡 Key Takeaways](#-key-takeaways)

## 📋 What is Abstraction?

In programming, **abstraction** is a way to simplify complex systems by focusing on the main ideas and ignoring unnecessary details. It’s like summarizing a task to its core concept, making it easier to work with. 

Abstraction helps us:
- Focus on the essential steps.
- Avoid getting lost in details.
- Write code that’s cleaner and easier to read. 

## 🍲 Example: Recipes for Pea Soup

Imagine a recipe for making pea soup. Let’s look at two different versions: a detailed step-by-step recipe and a simplified version.

### 🔍 Detailed Recipe

This version is very specific, listing every single action:

1. Put 1 cup of dried peas per person into a container.
2. Add water until the peas are well covered.
3. Leave the peas in water for at least 12 hours.
4. Take the peas out of the water and put them in a cooking pan.
5. Add 4 cups of water per person.
6. Cover the pan and simmer the peas for two hours.
7. Take half an onion per person, cut it into pieces, and add it to the peas.
8. Take a stalk of celery per person, cut it into pieces, and add it to the peas.
9. Take a carrot per person, cut it into pieces, and add it to the peas.
10. Cook for 10 more minutes.

### 📝 Simplified Recipe

Here’s a shorter, more abstract version of the same recipe:

- Per person: 1 cup dried split peas, 4 cups of water, half a chopped onion, a stalk of celery, and a carrot.
- Soak peas for 12 hours.
- Simmer for 2 hours.
- Chop and add vegetables.
- Cook for 10 more minutes.

In this simplified version, we’re using broader cooking terms, like *soak*, *simmer*, and *chop*. This makes the recipe easier to read and understand, focusing on key actions rather than every small detail.

## 🖥️ Abstraction in Programming

In programming, just as with recipes, simplifying tasks by focusing on the main actions is essential. Often, we need to write out every detail for the computer, but sometimes we can use **abstractions** to make our code simpler and more efficient.

Imagine if we had to repeat a set of instructions multiple times in different parts of our code. Instead of copying the same instructions over and over, we can use a function to abstract the repetitive task, making it more manageable.

## 🔄 Abstracting Repetition in Code

### ✨ Using Functions for Abstraction

Functions allow us to bundle a set of instructions into a single action, which can be reused. This way, we can avoid repeating the same code multiple times, making our code cleaner and reducing errors.

For example, if we want to print numbers from 0 to 9, we can write a loop for it.

### 👨‍💻 Using a For Loop

One way to repeat an action is by using a `for` loop:

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

### 🚀 Creating a Repeat Function

Alternatively, we can create a function to handle repetition. This `repeatLog` function can print any number of iterations without needing to rewrite the loop each time:

```javascript
function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
```

Now, we can use `repeatLog(n)` whenever we need to print numbers from 0 up to `n-1`, making it much easier to manage.

### 📲 Passing Actions as Functions

Sometimes, you want more flexibility in what you do during each repetition. In this case, you can pass a function as an argument to the loop, allowing it to perform different actions.

#### Example: Customizing the Action

Here’s a `repeat` function that takes both a number and an action to be performed for each iteration:

```javascript
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);
// Output:
// 0
// 1
// 2
```

In this example, `repeat(3, console.log)` runs `console.log` three times. You can also create a new action on the fly:

```javascript
let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);
// Output:
// ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]
```

This is similar to using a `for` loop, but it’s more flexible since you can specify different actions each time.

## 💡 Key Takeaways

- **Abstraction** simplifies code by focusing on the main concepts and ignoring small details.
- **Functions** allow us to group repeated tasks into a single action, making code cleaner and more reusable.
- **Passing actions as arguments** lets us customize behavior within loops, enhancing flexibility.

By using abstraction, functions, and flexible loops, you can write code that’s more readable, efficient, and adaptable for complex tasks. This approach helps you focus on the logic and structure of your code rather than on repetitive details.