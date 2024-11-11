// Define the List class
class List {
  constructor(value, rest) {
    this.value = value;
    this.rest = rest;
  }
}

// Define the LengthList class that extends List
class LengthList extends List {
  #length;

  constructor(value, rest) {
    super(value, rest);
    this.#length = super.length;
  }

  get length() {
    return this.#length;
  }
}

// Create instances
let lengthListInstance = new LengthList(1, null);
let listInstance = new List(2, null);

// Check instances using instanceof
console.log(lengthListInstance instanceof LengthList); // Output: true
console.log(lengthListInstance instanceof List);       // Output: true
console.log(listInstance instanceof LengthList);       // Output: false
console.log([1] instanceof Array);                     // Output: true