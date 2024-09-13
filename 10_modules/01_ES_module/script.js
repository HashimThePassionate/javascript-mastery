import { dayName } from "./dayname.js";
import { dayNumber as getDayNumber } from "./dayname.js";
import { formatDate, capitalize, generateRandomNumber } from "./utils.js";
import {add, PI} from "./math.js";
import greeting from "./greeting.js";
import User from "./user.js";
import { getProductById, getAllProducts, addProduct } from "./product.js";

console.log(getDayNumber(3)); 
let now = new Date();
console.log(`Today is ${dayName(now.getDay())}`)
console.log(`Addition of 2 and 3 = ${add(2, 3)}`); // Outputs: 5
console.log(`Value of PI = ${PI}`); // Outputs: 3.1416
console.log(greeting('Muhammad Hashim')); // Outputs: Hey Muhammad Hashim
console.log(`Today Number ${getDayNumber('monday')}`); 

const today = new Date();
console.log(`Today's date is ${formatDate(today)}`);
// Outputs: Today's date is 2023-10-15 (example date)
const name = "hashim";
console.log(`Hello, ${capitalize(name)}!`);
// Outputs: Hello, Hashim!
console.log(`Random number: ${generateRandomNumber(100)}`);
const user = new User("Muhammd Hashim", "hashiimtahir@example.com");
console.log(user.getProfile());
// Outputs: Alice <alice@example.com>
user.sendEmail("Welcome!", "Thank you for joining our platform.");
const product = getProductById(2);
console.log(`Product: ${product.name}, Price: $${product.price}`);
// Outputs: Product: Smartphone, Price: $599

// Get all products
const allProducts = getAllProducts();
allProducts.forEach(p => {
  console.log(`${p.id}: ${p.name} - $${p.price}`);
});
addProduct({ id: 4, name: "Headphones", price: 199 });
console.log("After adding a new product:");

// Get updated list of products
const updatedProducts = getAllProducts();
updatedProducts.forEach(p => {
  console.log(`${p.id}: ${p.name} - $${p.price}`);
});

