let num = 5;
num = num + 3; // This creates a new number, it does not change the original number
console.log(num); // → 8

let str = "cat";
str[0] = "r"; // This won't change the string
console.log(str); // → "cat"


let bool = true;
bool = !bool; // This creates a new boolean value, it does not change the original value
console.log(bool); // → false


let object1 = {value: 10}; // Create an object with a property 'value' set to 10
let object2 = object1;     // object2 now references the same object as object1
let object3 = {value: 10}; // Create a new, separate object with 'value' set to 10

console.log(object1 == object2); // → true (object1 and object2 reference the same object)
console.log(object1 == object3); // → false (object1 and object3 reference different objects)

object1.value = 15; // Change the 'value' property of the object referenced by object1

console.log(object2.value); // → 15 (object2 references the same object as object1, so it sees the updated value)
console.log(object3.value); // → 10 (object3 references a different object, so its value remains unchanged)



const score = {visitors: 0, home: 0};
score.visitors = 1; // This is allowed
score = {visitors: 1, home: 1}; // This isn't allowed


// let object1 = {value: 10};
// let object2 = {value: 10};
// console.log(object1 == object2); // → false