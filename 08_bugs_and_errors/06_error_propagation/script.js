function promptNumber(question) {
  let result = Number(prompt(question));
  if (Number.isNaN(result)) return null;
  else return result;
}

console.log(promptNumber("How many trees do you see?"));


function lastElement(array) {
  if (array.length == 0) {
      return {failed: true};
  } else {
      return {value: array[array.length - 1]};
  }
}

// Handling the result
let result = lastElement([]);
if (result.failed) {
  console.log("Array was empty.");
} else {
  console.log("Last element:", result.value);
}

result = lastElement([1, 2, 3]);
if (result.failed) {
  console.log("Array was empty.");
} else {
  console.log("Last element:", result.value); // Outputs: Last element: 3
}