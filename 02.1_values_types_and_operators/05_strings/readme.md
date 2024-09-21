# Strings in JavaScript

### What are Strings?
Strings are used to represent text in JavaScript. They are written by enclosing the content in quotes. You can use:
- Single quotes: `'Text'`
- Double quotes: `"Text"`
- Backticks: `` `Text` ``

### Creating Strings
Examples:
```javascript
'Down on the sea'
"Lie on the ocean"
`Float on the ocean`
```
The quotes at the start and end must match. You can include almost anything between the quotes to make a string.

### Special Characters
Some characters need special handling:
- **Quotes inside quotes**: Can be tricky as they may end the string.
- **Newlines**: Can only be included with backticks (`` ` ``).

To include special characters, use a backslash (`\`), which escapes the character following it:
- **Escaping quotes**: A backslash before a quote makes it part of the string, not the end.
- **Newline (`\n`)**: Represents a new line.
- **Tab (`\t`)**: Represents a tab character.

Example:
```javascript
"This is the first line\nAnd this is the second"
```
Actual text:
```
This is the first line
And this is the second
```

To include a backslash itself, use double backslashes:
```javascript
"A newline character is written like \"\\n\"."
```

### String Representation
JavaScript strings are based on the Unicode standard, assigning a number to virtually every character (Greek, Arabic, Japanese, etc.). JavaScript uses 16 bits per character, but some characters (like emojis) take up two character positions.

### Operations on Strings
- **Concatenation (`+`)**: Glues two strings together.
  ```javascript
  "con" + "cat" + "e" + "nate" // "concatenate"
  ```

### Template Literals
Strings with backticks can:
- **Span multiple lines**.
- **Embed other values** using `${}`.

Example:
```javascript
`half of 100 is ${100 / 2}` // "half of 100 is 50"
```

This computes the value inside `${}`, converts it to a string, and includes it in the text.