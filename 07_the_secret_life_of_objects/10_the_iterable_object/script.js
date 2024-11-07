// Step 1: Define the List class
class List {
    constructor(value, rest) {
      this.value = value;
      this.rest = rest;
    }
  
    get length() {
      return 1 + (this.rest ? this.rest.length : 0);
    }
  
    // Step 2: Define a static method to create a list from an array
    static fromArray(array) {
      let result = null;
      for (let i = array.length - 1; i >= 0; i--) {
        result = new this(array[i], result);
      }
      return result;
    }
  }
  
  // Step 3: Define the ListIterator class
  class ListIterator {
    constructor(list) {
      this.list = list;
    }
  
    next() {
      if (this.list == null) {
        return { done: true };
      }
      let value = this.list.value;
      this.list = this.list.rest;
      return { value, done: false };
    }
  }
  
  // Step 4: Make List iterable
  List.prototype[Symbol.iterator] = function() {
    return new ListIterator(this);
  };
  
  // Example Usage
  let list = List.fromArray([1, 2, 3]);
  for (let element of list) {
    console.log(element);
  }
  // Output:
  // 1
  // 2
  // 3
  
  // Using the spread operator with an iterable
  console.log([..."PCI"]); // Output: ["P", "C", "I"]