let cartoonCrying = /boo+(hoo+)+/i;

console.log(cartoonCrying.test("Boohoooohoohooo")); // Matches cartoon crying sounds
// → true ✅

console.log(cartoonCrying.test("Boohooho")); // Matches fewer "hoo" groups
// → true ✅

console.log(cartoonCrying.test("Booha")); // Does not match because "ha" is not "hoo"
// → false ❌



let laughPattern = /(ha)+/i; // Matches one or more occurrences of "ha"

console.log(laughPattern.test("haha")); // Matches "haha"
// → true ✅

console.log(laughPattern.test("hahaha")); // Matches "hahaha"
// → true ✅

console.log(laughPattern.test("ha ha ha")); // Does not match because of spaces
// → false ❌



let hashtagPattern = /#(\w+)/g; // Matches hashtags like #JavaScript, #coding

let tweet = "Learning #JavaScript and #coding is fun!";
let hashtags = tweet.match(hashtagPattern);

console.log(hashtags); // Extracts hashtags from the tweet
// → [ '#JavaScript', '#coding' ] ✅


let emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/i;

console.log(emailPattern.test("user@gmail.com")); // Matches Gmail
// → true ✅

console.log(emailPattern.test("user@yahoo.com")); // Matches Yahoo
// → true ✅

console.log(emailPattern.test("user@hotmail.com")); // Does not match Hotmail
// → false ❌


