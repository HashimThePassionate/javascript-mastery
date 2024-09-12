function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}

console.log(stripComments("1 + /* 2 */3")); // → "1 + 3"
console.log(stripComments("x = 10;// ten!")); // → "x = 10;"
console.log(stripComments("1 /* a */+/* b */ 1")); // → "1 1

function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}

console.log(stripComments("1 /* a */+/* b */ 1")); // → "1 + 1

function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}

console.log(stripComments("1 /* a */+/* b */ 1")); // → "1 + 1"

let htmlCode = "<div>Hello <!-- comment1 --> World <!-- comment2 --></div>";

// Greedy removal (wrong)
function stripHTMLCommentsGreedy(code) {
  return code.replace(/<!--.*-->/g, "");
}

console.log(stripHTMLCommentsGreedy(htmlCode)); // → "<div>Hello </div>" (WRONG)

// Non-Greedy removal (correct)
function stripHTMLCommentsNonGreedy(code) {
  return code.replace(/<!--.*?-->/g, "");
}

console.log(stripHTMLCommentsNonGreedy(htmlCode)); // → "<div>Hello  World </div>" (CORRECT)

