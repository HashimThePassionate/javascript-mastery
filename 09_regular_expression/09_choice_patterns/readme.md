# Choice Patterns 🐄🐔

When working with **regular expressions** (regex) in JavaScript, you often need to check for **multiple patterns** in a single match. This is where the **choice pattern** comes in handy! The **pipe character `|`** allows you to specify **choices** between different patterns. Let's dive into how it works and explore it with real-world examples! 🚀

## What are Choice Patterns? 📝

**Choice patterns** in regex allow you to match **one pattern out of several options**. The **pipe character `|`** is used to separate different pattern options. This is especially useful when you want to match a **single pattern** from **multiple alternatives**.

### Basic Syntax 🖊️

- **`pattern1|pattern2`** matches `pattern1` **or** `pattern2`.
- **`(pattern1|pattern2|pattern3)`** matches `pattern1`, `pattern2`, **or** `pattern3`.

## Real-World Example: Counting Animals on a Farm 🐷🐄🐔 

Suppose you want to find out if a text contains a **number** followed by the words **pig**, **cow**, or **chicken**, including their plural forms (**pigs**, **cows**, **chickens**). Instead of writing three separate regex patterns, you can use a **choice pattern** to combine them into one!

### Example Code 🧑‍💻

```javascript
let animalCount = /\d+ (pig|cow|chicken)s?/; // Pattern to match a number followed by one of the animals

console.log(animalCount.test("15 pigs")); // ✅ True - "15 pigs" matches the pattern
console.log(animalCount.test("3 cow")); // ✅ True - "3 cow" matches the pattern
console.log(animalCount.test("12 chickens")); // ✅ True - "12 chickens" matches the pattern
console.log(animalCount.test("15 pugs")); // ❌ False - "pugs" is not one of the specified animals
```

📝 **Explanation:**  
- **`\d+`**: Matches **one or more digits** (the number of animals).  
- **`(pig|cow|chicken)`**: Matches **either "pig", "cow", or "chicken"**. The **`|`** operator provides a choice between these words.  
- **`s?`**: Matches the letter **`s` zero or one time** to account for both singular (e.g., "pig") and plural (e.g., "pigs") forms.

This pattern allows you to check if a text contains a **number** followed by any of these **three animal names**, with an optional plural **"s"**.

## How Does the Pipe `|` Operator Work? 🚦

The **pipe operator `|`** in regex is used to indicate a choice between different patterns. The regex engine tries to match the **pattern on the left** first. If it doesn't match, it moves on to the **pattern on the right**.

### Using Parentheses to Group Choices 🎯

**Parentheses `()`** are used to **group multiple choices** together so that the pipe operator applies only to the patterns inside them. This allows you to create **complex patterns** easily.

### Example Code: Matching Multiple Words in a Sentence 🖊️

Imagine you are building a search tool for a library that needs to match books with titles containing specific genres, such as **"fantasy"**, **"mystery"**, or **"thriller"**:

```javascript
let genrePattern = /(fantasy|mystery|thriller)/; // Pattern to match one of the specified genres

console.log(genrePattern.test("A fantasy novel")); // ✅ True - Matches "fantasy"
console.log(genrePattern.test("A mystery story")); // ✅ True - Matches "mystery"
console.log(genrePattern.test("A romance novel")); // ❌ False - Does not match any specified genre
```

📝 **Explanation:**  
- **`(fantasy|mystery|thriller)`**: Matches any **one of these three genres**.
- This pattern helps you search for books that belong to **specific genres** without having to write multiple regular expressions.

## Advanced Use Case: Finding Multiple Alternatives in Text 📚

Imagine a scenario where you want to check if a text mentions any **fruit** names such as **"apple"**, **"banana"**, or **"orange"**. You can use choice patterns to create a single regex for this:

```javascript
let fruitPattern = /\b(apple|banana|orange)\b/; // Pattern to match whole words "apple", "banana", or "orange"

console.log(fruitPattern.test("I have an apple.")); // ✅ True - Matches "apple"
console.log(fruitPattern.test("Banana is yellow.")); // ✅ True - Matches "banana"
console.log(fruitPattern.test("I like oranges.")); // ✅ True - Matches "orange"
console.log(fruitPattern.test("I have a pineapple.")); // ❌ False - "pineapple" is not a separate word
```

📝 **Explanation:**  
- **`\b`**: Matches a **word boundary** to ensure we only match **whole words** like "apple" and not "pineapple".
- **`(apple|banana|orange)`**: Matches any **one of the specified fruits**.

## Summary ✨

- **Choice Patterns** using the pipe operator `|` allow you to match **one pattern out of several options**.  
- **Parentheses `()`** are used to **group choices** together to control how the `|` operator is applied.  
- Real-world uses include searching for specific words in text, validating input with multiple possibilities, and more!

Using **choice patterns** makes regex more powerful and flexible, helping you solve real-world problems with less code and more precision! 🛠️🌟