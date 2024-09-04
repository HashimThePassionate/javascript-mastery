console.log('International characters');
console.log(/\w/.test("é")); // → false (é is not a word character)
console.log(/\W/.test("é")); // → true (é is considered a non-word character)

console.log('');

console.log(/\s/.test(" ")); // Regular space
// → true ✅

console.log(/\s/.test("\u00A0")); // Non-breaking space
// → true ✅

console.log(/\s/.test("\u180E")); // Mongolian vowel separator
// → true ✅

console.log(/\s/.test("a")); // Regular letter
// → false ❌

