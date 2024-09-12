const numberPattern = /^([01]+b|[\da-f]+h|\d+)$/;

console.log(numberPattern.test("1010b")); // ✅ True - Matches binary number
console.log(numberPattern.test("3a9h")); // ✅ True - Matches hexadecimal number
console.log(numberPattern.test("103")); // ✅ True - Matches decimal number
console.log(numberPattern.test("103b")); // ❌ False - Invalid binary formaconst numberPattern = /^([01]+b|[\da-f]+h|\d+)$/;

console.log(numberPattern.test("1010b")); // ✅ True - Matches binary number
console.log(numberPattern.test("3a9h")); // ✅ True - Matches hexadecimal number
console.log(numberPattern.test("103")); // ✅ True - Matches decimal number
console.log(numberPattern.test("103b")); // ❌ False - Invalid binary forma

const pattern = /^.*x/;

console.log(pattern.test("abcxe")); // ✅ True - Matches from "abcx"
console.log(pattern.test("abc")); // ❌ False - No "x" in the string


const problematicPattern = /([01]+)+b/;

console.log(problematicPattern.test("000000000000000000")); // ❌ Extremely slow - Backtracking overload