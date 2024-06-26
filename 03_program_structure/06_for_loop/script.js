for (let number = 0; number <= 12; number = number + 2) {
  console.log(number); // Print the current value of number
}
// → 0
// → 2
// … etcetera



let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2; // Multiply result by 2 in each iteration
}
console.log(result); // Print the final result
// → 1024


for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current); // Print the first number >= 20 that is divisible by 7
    break; // Exit the loop
  }
}
// → 21


for (let number = 0; number <= 12; number += 2) {
  console.log(number); // Print the current value of number
}
