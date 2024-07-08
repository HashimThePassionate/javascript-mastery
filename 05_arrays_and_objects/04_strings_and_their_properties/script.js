let kim = "Kim";
kim.age = 88;
console.log(kim.age); // → undefined


let string = "abc";
console.log(string.length); // → 3

console.log(string[1]); // → b


console.log("coconuts".slice(4, 7)); // → nut

console.log("coconut".indexOf("u")); // → 5
console.log("one two three".indexOf("ee")); // → 11


console.log(" okay \n ".trim()); // → okay

console.log(String(6).padStart(3, "0")); // → 006


let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words); // → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". ")); // → Secretarybirds. specialize. in. stomping


console.log("LA".repeat(3)); // → LALALA