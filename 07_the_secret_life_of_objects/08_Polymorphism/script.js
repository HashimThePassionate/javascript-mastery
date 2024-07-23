function Rabbit(type) {
    this.type = type;
  }
  
  Rabbit.prototype.toString = function() {
    return `a ${this.type} rabbit`;
  };
  
  let killerRabbit = new Rabbit("killer");
  console.log(String(killerRabbit)); // Output: a killer rabbit


// ----------------------------------------------------------------------------------------------------------------
Array.prototype.forEach.call({
    length: 2,
    0: "A",
    1: "B"
  }, elt => console.log(elt));
  
  // Output:
  // A
  // B

// ----------------------------------------------------------------------------------------------------------------
function printName(entity) {
    console.log(entity.getName());
  }
  
  let person = {
    firstName: "John",
    lastName: "Doe",
    getName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  
  let company = {
    name: "TechCorp",
    getName: function() {
      return this.name;
    }
  };
  
  printName(person);   // Output: John Doe
  printName(company);  // Output: TechCorp

  