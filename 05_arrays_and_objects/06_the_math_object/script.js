console.log(Math.max(3, 7, 2, 8)); // → 8
console.log(Math.min(3, 7, 2, 8)); // → 2

console.log(Math.sqrt(16)); // → 4

function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle)
  };
}

console.log(randomPointOnCircle(2));
// → {x: 0.3667, y: 1.966}



console.log(Math.random()); // → 0.36993729369714856
console.log(Math.random()); // → 0.727367032552138
console.log(Math.random()); // → 0.40180766698904335


console.log(Math.floor(Math.random() * 10)); // → 2


console.log(Math.floor(3.9)); // → 3


console.log(Math.ceil(3.1)); // → 4


console.log(Math.round(3.5)); // → 4
console.log(Math.round(3.4)); // → 3


console.log(Math.abs(-5)); // → 5
console.log(Math.abs(5));  // → 5