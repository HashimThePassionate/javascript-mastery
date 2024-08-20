// function promptDirection(question) {
//   let result = prompt(question);
//   if (result.toLowerCase() == "left") return "L";
//   if (result.toLowerCase() == "right") return "R";
//   throw new Error("Invalid direction: " + result);
// }

// function look() {
//   if (promptDirection("Which way?") == "L") {
//       return "a house";
//   } else {
//       return "two angry bears";
//   }
// }

// try {
//   console.log("You see", look());
// } catch (error) {
//   console.log("Something went wrong: " + error.message);
// }


// class InputError extends Error {}

// function promptDirection(question) {
//     let result = prompt(question);
//     if (result.toLowerCase() == "left") return "L";
//     if (result.toLowerCase() == "right") return "R";
//     throw new InputError("Invalid direction: " + result);
// }

// for (;;) {
//     try {
//         let dir = promptDirection("Where?");
//         console.log("You chose ", dir);
//         break;
//     } catch (e) {
//         if (e instanceof InputError) {
//             console.log("Not a valid direction. Try again.");
//         } else {
//             throw e; // Rethrow unexpected errors
//         }
//     }
// }

function firstElement(array) {
  if (array.length == 0) {
      throw new Error("firstElement called with an empty array");
  }
  return array[0];
}

console.log(firstElement([1, 2, 3])); // Outputs: 1
console.log(firstElement([])); // Throws an error