console.log(`The data class ${new Date()}`);

console.log(new Date(2009, 11, 9)); // 🗓 December is 11, not 12!
console.log(new Date(2009, 11, 9, 12, 59, 59, 999)); // 🕛 Almost Noon!
console.log(`The Data Class TimeStamp: ${new Date().getTime()}`);
console.log(new Date(1387407600000)); 
console.log(Date.now()); 

function getDate(string) {
    let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string); // 🔍 Extract date parts
    return new Date(year, month - 1, day); // 🗓️ Create Date object (months are 0-based)
  }
  
console.log(`getDate('1-30-2003'): ${getDate('1-30-2003')}`);


const eventDate = new Date(2024, 11, 25); // 🎄 Christmas on Dec 25, 2024!
const today = new Date();
const daysLeft = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24)); // 🧮 Calculate days left
console.log(`🎄 Days until Christmas: ${daysLeft} days! 🎁`);
