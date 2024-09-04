let phonePattern = /\+\d+/; // Matches '+' followed by one or more digits

console.log(phonePattern.test("+123456789")); // Valid phone number
// → true ✅

console.log(phonePattern.test("+")); // No digits after '+'
// → false ❌



let numberPattern = /\s*\d+\s*/; // Matches one or more digits with optional spaces around

console.log(numberPattern.test("  42 ")); // Matches with spaces around
// → true ✅

console.log(numberPattern.test("42")); // Matches without spaces
// → true ✅

console.log(numberPattern.test("   ")); // Only spaces, no digits
// → false ❌



let colorPattern = /colou?r/; // Matches both 'color' and 'colour'

console.log(colorPattern.test("color")); // American spelling
// → true ✅

console.log(colorPattern.test("colour")); // British spelling
// → true ✅

console.log(colorPattern.test("coler")); // Incorrect spelling
// → false ❌


let postalCodePattern = /^\d{5}$/; // Matches exactly 5 digits

console.log(postalCodePattern.test("12345")); // Valid postal code
// → true ✅

console.log(postalCodePattern.test("123")); // Too few digits
// → false ❌

console.log(postalCodePattern.test("123456")); // Too many digits
// → false ❌



let strongPasswordPattern = /.{8,}/; // Matches 8 or more characters

console.log(strongPasswordPattern.test("mypassword")); // Strong password
// → true ✅

console.log(strongPasswordPattern.test("pass")); // Too short
// → false ❌


let datePattern = /\d{1,2}\/\d{1,2}\/\d{4}/;

console.log(datePattern.test("12/09/2023")); // Valid date format
// → true ✅

console.log(datePattern.test("5/7/2021")); // Valid with single-digit day and month
// → true ✅

console.log(datePattern.test("12-09-2023")); // Invalid format (slashes required)
// → false ❌