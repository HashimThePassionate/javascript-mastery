// let jsonString = JSON.stringify({
//   squirrel: false,
//   events: ["weekend"]
// });

// console.log(jsonString);
// // → {"squirrel":false,"events":["weekend"]}
// console.log(typeof(jsonString));

// let parsedData = JSON.parse(jsonString);
// console.log(typeof(parsedData))
// // → ["weekend"]



// Converting a JavaScript object to a JSON string
let journalEntry = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};

let jsonString = JSON.stringify(journalEntry);
console.log(typeof(jsonString));
console.log(jsonString);
// → {"squirrel":false,"events":["work","touched tree","pizza","running"]}

// Converting the JSON string back to a JavaScript object
let parsedEntry = JSON.parse(jsonString);
console.log(typeof(parsedEntry));
console.log(parsedEntry.events);
// → ["work", "touched tree", "pizza", "running"]