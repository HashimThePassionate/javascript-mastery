const usernamePattern = /^[a-zA-Z][a-zA-Z0-9_]*$/; // Pattern to ensure it starts with a letter

console.log(usernamePattern.test("John_Doe")); // ✅ True - Valid username
console.log(usernamePattern.test("1JohnDoe")); // ❌ False - Starts with a number
console.log(usernamePattern.test("_JohnDoe")); // ❌ False - Starts with an underscore

const imagePattern = /\.(jpg|png|gif)$/; // Pattern to match image extensions

console.log(imagePattern.test("picture.jpg")); // ✅ True - Ends with ".jpg"
console.log(imagePattern.test("document.pdf")); // ❌ False - Ends with ".pdf"
console.log(imagePattern.test("photo.png ")); // ❌ False - Extra space after ".png"

const wordPattern = /\bcat\b/; // Pattern to match the whole word "cat"

console.log(wordPattern.test("I have a cat.")); // ✅ True - Matches "cat" as a whole word
console.log(wordPattern.test("I caught a fish.")); // ❌ False - "cat" is part of "caught"
console.log(wordPattern.test("My caterpillar is big.")); // ❌ False - "cat" is part of "caterpillar"

const discountPattern = /DISCOUNT(?=\d+)/; // Pattern to match "DISCOUNT" followed by a number

console.log(discountPattern.test("Use DISCOUNT50 to save!")); // ✅ True - "DISCOUNT" followed by "50"
console.log(discountPattern.test("No DISCOUNT for you.")); // ❌ False - No number after "DISCOUNT"
console.log(discountPattern.test("DISCOUNT CODE")); // ❌ False - No number after "DISCOUNT"

const applePattern = /apple(?! pie)/; // Pattern to match "apple" not followed by "pie"

console.log(applePattern.test("I like apple juice.")); // ✅ True - "apple" is not followed by "pie"
console.log(applePattern.test("I love apple pie.")); // ❌ False - "apple" is followed by "pie"
console.log(applePattern.test("apple trees are beautiful.")); // ✅ True - "apple" is not followed by "pie"

