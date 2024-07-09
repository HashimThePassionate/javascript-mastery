# Abstraction 

## What is Abstraction?
In programming, **abstractions** are special ways to talk about problems without getting into too many details. They help us focus on the main idea and ignore the small stuff.

## Example: Recipes for Pea Soup

### Detailed Recipe
Here’s a very detailed recipe for pea soup:

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

### Simplified Recipe
Here’s a shorter version of the same recipe:

- Per person: 1 cup dried split peas, 4 cups of water, half a chopped onion, a stalk of celery, and a carrot.
- Soak peas for 12 hours.
- Simmer for 2 hours.
- Chop and add vegetables.
- Cook for 10 more minutes.

The second recipe is easier to understand because it uses cooking terms like soak, simmer, chop, and vegetable.

## Abstraction in Programming
In programming, we can’t always find the words we need in a dictionary. Sometimes, we write detailed steps for the computer to follow, like the first recipe.

It’s useful to know when you are being too detailed and need a higher-level view.

## Abstracting Repetition

### Using Functions for Abstraction
Functions help us make abstractions. For example, if you want to repeat something a number of times:

#### Using a For Loop
You can write a for loop like this:

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

#### Creating a Repeat Function
You can make a function to repeat an action:

```javascript
function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
```

### Passing Actions as Functions
If you want to do something other than logging numbers, you can pass the action as a function:

```javascript
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);
// → 0
// → 1
// → 2
```

You can also create a function on the spot:

```javascript
let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]
```

This setup is like a for loop. It describes the loop type and then gives the body as a function. If the body is small, you can write it on one line.
