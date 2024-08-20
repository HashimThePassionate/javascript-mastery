let reConstructor = new RegExp("a\\+b");
let reLiteral = /a\+b/;

let testString = "The pattern a+b is in this text.";
console.log(reConstructor.test(testString)); // true
console.log(reLiteral.test(testString));     // true


console.log(/abc/.test("abcde")); // Outputs: true
console.log(/abc/.test("abxde")); // Outputs: false


let aPlus = /A\+/;
console.log(aPlus.test("A+"));   // Outputs: true
console.log(aPlus.test("AA"));   // Outputs: false


