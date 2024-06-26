# Binding Names Capitalization and Comments 

## Capitalization

Binding names (variables) may not contain spaces, yet it is often helpful to use multiple words to clearly describe what the binding represents. Here are your choices for writing a binding name with several words in it:

1. `fuzzylittleturtle`
2. `fuzzy_little_turtle`
3. `FuzzyLittleTurtle`
4. `fuzzyLittleTurtle`

### Styles Explained

- **`fuzzylittleturtle`**: This style can be hard to read.
- **`fuzzy_little_turtle`**: This style uses underscores and is clearer but can be painful to type.
- **`FuzzyLittleTurtle`**: This style is called PascalCase and is often used for constructor functions.
- **`fuzzyLittleTurtle`**: This style is called camelCase and is the standard for JavaScript functions and variables. It capitalizes every word except the first.

**Recommended Convention**
The standard JavaScript convention is to use camelCase for variables and functions (fuzzyLittleTurtle). It is not hard to get used to little things like that, and code with mixed naming styles can be jarring to read, so we follow this convention.

### Special Case: Constructors

In some cases, such as the `Number` function, the first letter of a binding is also capitalized. This is done to mark this function as a constructor. It will become clear what a constructor is in upcoming classes concept. For now, the important thing is to not be bothered by this apparent lack of consistency.

## Comments

Often, raw code does not convey all the information you want a program to convey to human readers, or it conveys it in such a cryptic way that people might not understand it. At other times, you might just want to include some related thoughts as part of your program. This is what comments are for.

A comment is a piece of text that is part of a program but is completely ignored by the computer. JavaScript has two ways of writing comments.

### Single-Line Comments

To write a single-line comment, you can use two slash characters (`//`) followed by the comment text:

```javascript
let accountBalance = calculateBalance(account);
// It's a green hollow where a river sings
accountBalance.adjust();
// Madly catching white tatters in the grass.
let report = new Report();
// Where the sun on the proud mountain rings:
addToReport(accountBalance, report);
// It's a little valley, foaming like light in a glass.
```

A `//` comment goes only to the end of the line.

### Multi-Line Comments

A section of text between `/*` and `*/` will be ignored in its entirety, regardless of whether it contains line breaks. This is useful for adding blocks of information about a file or a chunk of program:

```javascript
/*
I first found this number scrawled on the back of an old
notebook. Since then, it has often dropped by, showing up in
phone numbers and the serial numbers of products that I've
bought. It obviously likes me, so I've decided to keep it.
*/
const myNumber = 11213;
```