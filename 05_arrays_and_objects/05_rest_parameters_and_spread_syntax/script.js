function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
      if (number > result) result = number;
    }
    return result;
  }
  
console.log(max(4, 1, 9, -2)); // → 9

let numbers = [5, 1, 7];
console.log(max(...numbers)); // → 7


console.log(max(9, ...numbers, 2)); // → 9


let words = ["never", "fully"];
console.log(["will", ...words, "understand"]); 
// → ["will", "never", "fully", "understand"]


let coordinates = {x: 10, y: 0};
console.log({...coordinates, y: 5, z: 1}); 
// → {x: 10, y: 5, z: 1}


