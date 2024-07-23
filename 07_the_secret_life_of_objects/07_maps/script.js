// Creating unique symbols
const id = Symbol("id");
const secret = Symbol("secret");

let person = {
    name: "Alice",
    age: 30,
    [id]: 12345,         // Using a symbol as a property key
    [secret]: "mySecret" // Using another symbol as a property key
};

console.log(person.name); // Output: Alice
console.log(person.age);  // Output: 30

// Accessing the symbol properties
console.log(person[id]);      // Output: 12345
console.log(person[secret]);  // Output: mySecret

// Symbols do not appear in normal property enumeration
for (let key in person) {
    console.log(key); // Output: name, age
}

console.log(Object.keys(person)); // Output: ["name", "age"]

// But you can still access symbols using Object.getOwnPropertySymbols()
console.log(Object.getOwnPropertySymbols(person)); // Output: [Symbol(id), Symbol(secret)]





// ----------------------------------------------------------------------------------------------------------------
let obj = {
    name: "Alice",
    42: "The answer"
};

console.log(obj["name"]); // Output: Alice
console.log(obj[42]); // Output: The answer

// Using a symbol as a key
let sym = Symbol("key");
obj[sym] = "Symbol value";
console.log(obj[sym]); // Output: Symbol value


// ----------------------------------------------------------------------------------------------------------------
let map = new Map();
let objKey = { name: "Alice" };
let funcKey = function() {};

map.set(objKey, "Object value");
map.set(funcKey, "Function value");

console.log(map.get(objKey)); // Output: Object value
console.log(map.get(funcKey)); // Output: Function v

// ----------------------------------------------------------------------------------------------------------------
let obj = {
    b: "B value",
    a: "A value",
    c: "C value"
};

console.log(Object.keys(obj)); // Output: ["b", "a", "c"]
// ----------------------------------------------------------------------------------------------------------------

let map_ = new Map();
map_.set("b", "B value");
map_.set("a", "A value");
map_.set("c", "C value");

console.log([...map_.keys()]); // Output: ["b", "a", "c"]
// ----------------------------------------------------------------------------------------------------------------


