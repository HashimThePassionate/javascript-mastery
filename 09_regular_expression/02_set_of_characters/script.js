console.log(/[0123456789]/.test("in 1992")); // Outputs: true
console.log(/[0-9]/.test("in 1992"));        // Outputs: true


let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20")); // Outputs: true
console.log(dateTime.test("30-jan-2003 15:20")); // Outputs: false


let nonBinary = /[^01]/;
console.log(nonBinary.test("1100100010100110")); // Outputs: false
console.log(nonBinary.test("0111010112101001")); // Outputs: true

let pattern = /[\d.]/;
console.log(pattern.test("3.14")); // Outputs: true
console.log(pattern.test("pi"));   // Outputs: false