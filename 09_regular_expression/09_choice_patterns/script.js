let animalCount = /\d+ (pig|cow|chicken)s?/; // Pattern to match a number followed by one of the animals

console.log(animalCount.test("15 pigs")); // ✅ True - "15 pigs" matches the pattern
console.log(animalCount.test("3 cow")); // ✅ True - "3 cow" matches the pattern
console.log(animalCount.test("12 chickens")); // ✅ True - "12 chickens" matches the pattern
console.log(animalCount.test("15 pugs")); // ❌ False - "pugs" is not one of the specified animals


let genrePattern = /(fantasy|mystery|thriller)/; // Pattern to match one of the specified genres

console.log(genrePattern.test("A fantasy novel")); // ✅ True - Matches "fantasy"
console.log(genrePattern.test("A mystery story")); // ✅ True - Matches "mystery"
console.log(genrePattern.test("A romance novel")); // ❌ False - Does not match any specified genre


let fruitPattern = /\b(apple|banana|orange)\b/; // Pattern to match whole words "apple", "banana", or "orange"

console.log(fruitPattern.test("I have an apple.")); // ✅ True - Matches "apple"
console.log(fruitPattern.test("Banana is yellow.")); // ✅ True - Matches "banana"
console.log(fruitPattern.test("I like oranges.")); // ✅ True - Matches "orange"
console.log(fruitPattern.test("I have a pineapple.")); // ❌ False - "pineapple" is not a separate word


