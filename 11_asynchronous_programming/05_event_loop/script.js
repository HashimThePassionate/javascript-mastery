try {
  setTimeout(() => {
    throw new Error("Woosh");
  }, 20);
} catch (e) {
  // This will not run
  console.log("Caught", e);
}

try {
    throw new Error("Woosh");
} catch (e) {
  // This will not run
  console.log("Caught", e);
}


let start = Date.now();
setTimeout(() => {
  console.log("Timeout ran at", Date.now() - start);
}, 20);

// Blocking the event loop for 50 milliseconds
while (Date.now() < start + 50) {}

console.log("Wasted time until", Date.now() - start);
// Output:
// Wasted time until 50
// Timeout ran at 55
Promise.resolve("Done").then(console.log);
console.log("Me first!");

