// Generator function to generate powers of a number
function* powers(n) {
  for (let current = n;; current *= n) { // Infinite loop
    yield current; // Pause and return the current power of n
  }
}

// Using the generator
for (let power of powers(3)) {
  if (power > 50) break; // Stop when the power exceeds 50
  console.log(power); // Output the current power of 3
}


// Generator function to generate Fibonacci sequence
function* fibonacci(limit) {
  let [a, b] = [0, 1]; // Initialize first two Fibonacci numbers
  while (a <= limit) {
    yield a; // Yield the next Fibonacci number
    [a, b] = [b, a + b]; // Update Fibonacci numbers
  }
}

// Using the generator to get Fibonacci numbers up to 50
for (let num of fibonacci(50)) {
  console.log(num);
}

// Generator function to manage game states
function* gameControl() {
  console.log('Game Started');
  yield 'Game Paused'; // Pause the game

  console.log('Game Resumed');
  yield 'Game Over'; // End the game

  console.log('Game Ended');
}

// Using the generator to control the game states
const game = gameControl();

console.log(game.next().value); // Pauses the game
console.log(game.next().value); // Ends the game
console.log(game.next().done); // Check if the game is done


// Generator function to create unique IDs
function* generateID() {
  let id = 1; // Start ID from 1
  while (true) {
    yield id++; // Yield the current ID and then increment it
  }
}

// Using the generator to create unique IDs
const idGenerator = generateID();

console.log(idGenerator.next().value); // 1
console.log(idGenerator.next().value); // 2
console.log(idGenerator.next().value); // 3


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Generator function to simulate data fetching process
function* fetchData() {
  console.log('Fetching user data...');
  yield delay(1000); // Simulate delay for fetching user data
  
  console.log('Fetching user posts...');
  yield delay(2000); // Simulate delay for fetching posts

  console.log('Fetching user comments...');
  yield delay(1500); // Simulate delay for fetching comments

  console.log('All data fetched!');
  console.log('User data: Muhammad Hashim');
  console.log('User posts: 10');
  console.log('User comments: 20');
  
}

// Using the generator to simulate the data fetching process
async function runFetching() {
  const fetchProcess = fetchData();
  for (let step of fetchProcess) {
    await step; // Wait for each step to complete
  }
}

runFetching();