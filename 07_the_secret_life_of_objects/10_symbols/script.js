let sym1 = Symbol("name");
let sym2 = Symbol("name");

console.log(sym1 == sym2); // Output: false

// -------------------------------------------------------------------------------------------------------------------
// Step 1: Define the Rabbit class
class Rabbit {
  constructor(type) {
    this.type = type;
  }

  toString() {
    return `a ${this.type} rabbit`;
  }
}

// Step 2: Create a symbol
let sym = Symbol("secret");

// Step 3: Add a property to the Rabbit prototype using the symbol
Rabbit.prototype[sym] = 55;

// Step 4: Create an instance of the Rabbit class
let killerRabbit = new Rabbit("killer");

// Step 5: Access the symbol property
console.log(String(killerRabbit)); // Output: a killer rabbit
console.log(killerRabbit[sym]);    // Output: 55

// Step 6: Verify that the symbol property is unique
let anotherSym = Symbol("secret");
console.log(killerRabbit[anotherSym]); // Output: undefined


// -------------------------------------------------------------------------------------------------------------------
const length = Symbol("length");

let myTrip = {
  length: 2,
  0: "Lankwitz",
  1: "Babelsberg",
  [length]: 21500
};

console.log(myTrip[length], myTrip.length); // Output: 21500 2
// -------------------------------------------------------------------------------------------------------------------
const length_ = Symbol("length");
Array.prototype[length] = 0;

console.log([1, 2].length); // Output: 2
console.log([1, 2][length_]); // Output: 