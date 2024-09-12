# Dynamically Creating Regular Expressions 🧩

Sometimes, you may not know the exact pattern you need to match ahead of time. In these cases, you can **dynamically create a regular expression** using the `RegExp` constructor.

## Example: Finding a User’s Name in Text 🕵️‍♂️

Imagine you want to check if a user's name appears in a piece of text. The user's name can be entered dynamically, and the pattern should be case-insensitive and match the name at the start, end, or surrounded by spaces.

```javascript
let name = "harry";  // User-provided name
let regexp = new RegExp("(^|\\s)" + name + "($|\\s)", "gi");

console.log(regexp.test("Harry is a dodgy character.")); // → true
```

📝 **Explanation:**
- **`(^|\\s)`**: Matches the **start of the line** (`^`) or a **whitespace** (`\\s`).
- **`name`**: Matches the user’s name (`"harry"` in this case).
- **`($|\\s)`**: Matches the **end of the line** (`$`) or a **whitespace** (`\\s`).
- **`"gi"`**: The **global** (`g`) and **case-insensitive** (`i`) flags ensure the regex is case-insensitive and matches all occurrences.

## Handling Special Characters 🔒

What if the user's name contains special characters like `"dea+hl[]rd"`? Special characters in regex need to be **escaped** to be treated literally.

```javascript
let name = "dea+hl[]rd";  // User-provided name with special characters
let escaped = name.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let regexp = new RegExp("(^|\\s)" + escaped + "($|\\s)", "gi");

let text = "This dea+hl[]rd guy is super annoying.";
console.log(regexp.test(text)); // → true
```

📝 **Explanation:**
- **`name.replace(/[\\[.+*?(){|^$]/g, "\\$&")`**: Escapes special regex characters so that they are treated as **literal characters**.

### The `search` Method 🔍

The `search` method in JavaScript allows you to **search for a pattern** in a string using a regular expression. Unlike `indexOf`, `search` can use a regex and returns the **index** of the first match or **-1** if no match is found.

```javascript
console.log(" word".search(/\S/)); // → 2
console.log(" ".search(/\S/)); // → -1
```

📝 **Explanation:**
- **`\S`**: Matches any **non-whitespace character**.
- In `" word"`, the first non-whitespace character is `"w"`, which is at index `2`.
- In `" "`, there are no non-whitespace characters, so it returns `-1`.

### The `lastIndex` Property 🕵️‍♂️

The `lastIndex` property in a regex controls where the next match will start, but it only works with the **global** (`g`) or **sticky** (`y`) flags.

## Example: Using `lastIndex` with `exec` Method

```javascript
let pattern = /y/g;
pattern.lastIndex = 3;

let match = pattern.exec("xyzzy");
console.log(match.index);  // → 4
console.log(pattern.lastIndex);  // → 5
```

📝 **Explanation:**
- The `lastIndex` is set to `3`, so the search starts from index `3`.
- The first `"y"` after index `3` is at index `4`.
- After a match, `lastIndex` is automatically updated to **point after the match** (`5`).

### `match` and `matchAll` Methods 🔍

The `match` method with a **global** regex returns **all matches** in an array. The `matchAll` method returns an **iterator** for all matches, providing more details.

## Example: Finding All Occurrences of a Pattern

```javascript
let input = "A string with 3 numbers in it... 42 and 88.";
let matches = input.matchAll(/\d+/g);

for (let match of matches) {
  console.log("Found", match[0], "at", match.index);
}
// → Found 3 at 14
// → Found 42 at 33
// → Found 88 at 40
```

📝 **Explanation:**
- **`/\d+/g`**: Matches one or more digits (`\d+`), with the `g` flag to find all matches.
- **`matchAll`** provides an iterator that includes **detailed information** about each match.

### Parsing an INI File 📄

An **INI file** is a simple file format used for configuration. Let’s parse an INI file to convert it into a JavaScript object.

```javascript
function parseINI(string) {
  let result = {};
  let section = result;

  for (let line of string.split(/\r?\n/)) {  // Splitting lines for different OS
    let match;
    if (match = line.match(/^(\w+)=(.*)$/)) {  // Property line
      section[match[1]] = match[2];
    } else if (match = line.match(/^\[(.*)\]$/)) {  // Section header line
      section = result[match[1]] = {};
    } else if (!/^\s*(;|$)/.test(line)) {  // Invalid line
      throw new Error("Line '" + line + "' is not valid.");
    }
  }
  return result;
}

console.log(parseINI(`
name=Vasilis
[address]
city=Tessaloniki`));
// → {name: "Vasilis", address: {city: "Tessaloniki"}}
```

📝 **Explanation:**
- **`/^(\w+)=(.*)$/`**: Matches property lines (`key=value`) and stores them in the current section.
- **`/^\[(.*)\]$/`**: Matches section headers (`[section]`) and creates a new sub-object.
- **`/^\s*(;|$)/`**: Matches **comments** or **empty lines** and ignores them.

### Unicode and Regular Expressions 🌐

Regular expressions in JavaScript match **code units** by default. To work with **Unicode characters** properly, use the `u` (Unicode) flag.

## Example: Matching Emojis Correctly

```javascript
console.log(/🍎{3}/.test("🍎🍎🍎")); // → false
console.log(/🍎{3}/u.test("🍎🍎🍎")); // → true
```

📝 **Explanation:**
- Without `u`, the `{3}` is applied to a **code unit**, not the emoji character.
- With `u`, the regex treats each emoji as a **single character**.

### Summary ✨

- **Dynamic Regex**: Use `RegExp` constructor to create regex patterns dynamically.
- **Escaping Special Characters**: Escape special characters in dynamic patterns to avoid errors.
- **`search` Method**: Use for simple regex-based searches.
- **`lastIndex` Property**: Controls search positions for global/sticky regex.
- **`matchAll` Method**: Provides detailed match information.
- **INI Parsing**: Use regex to process configuration files.
- **Unicode Handling**: Use the `u` flag for proper Unicode support.
