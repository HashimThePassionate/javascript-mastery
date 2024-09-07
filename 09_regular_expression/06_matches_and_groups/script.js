let isNumberPresent = /\d+/.test("one two 100");
console.log(isNumberPresent); 
// → true


let match = /\d+/.exec("one two 100");
console.log(match);        // → ["100"]
console.log(match.index);  // → 8
console.log(match.input);  // → "one two 100"



console.log("one two 100".match(/\d+/));
// → ["100"]
let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
// → ["'hello'", "hello"]


console.log(/bad(ly)?/.exec("bad"));
// → ["bad", undefined]


console.log(/(?:na)+/.exec("banana"));
// → ["nana"]


let datePattern = /(\d{4})-(\d{2})-(\d{2})/;
let dateString = "2024-09-08";
let matches = datePattern.exec(dateString);

console.log(matches);
// → ["2024-09-08", "2024", "09", "08"]

let year = matches[1];
let month = matches[2];
let day = matches[3];

let dateObject = new Date(year, month - 1, day); // Month is 0-based
console.log(dateObject);
// → Sun Sep 08 2024



let urlPattern = /(\w+):\/\/([\w\.]+)\/(.*)/;
let url = "https://www.example.com/path/to/page";
let m = urlPattern.exec(url);

console.log(m);
// → ["https://www.example.com/path/to/page", "https", "www.example.com", "path/to/page"]

let protocol = m[1];
let domain = m[2];
let path = m[3];

console.log(`Protocol: ${protocol}`);  // "https"
console.log(`Domain: ${domain}`);      // "www.example.com"
console.log(`Path: ${path}`);          // "path/to/pag