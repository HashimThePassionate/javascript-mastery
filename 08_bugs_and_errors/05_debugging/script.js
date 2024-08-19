// function numberToString(n, base = 10) {
//   let result = "", sign = "";
//   if (n < 0) {
//       sign = "-";
//       n = -n;
//   }
//   do {
//       result = String(n % base) + result;
//       n /= base;
//   } while (n > 0);
//   return sign + result;
// }

// console.log(numberToString(13, 10));

// function numberToString(n, base = 10) {
//   let result = "", sign = "";
//   if (n < 0) {
//       sign = "-";
//       n = -n;
//   }
//   do {
//       console.log(n); // Log the value of 'n' at each step
//       result = String(n % base) + result;
//       n /= base;
//   } while (n > 0);
//   return sign + result;
// }

// console.log(numberToString(13, 10));

function numberToString(n, base = 10) {
  let result = "", sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    console.log(n); // Log the value of 'n' at each step
      result = String(n % base) + result;
      n = Math.floor(n / base); // Ensure 'n' is an integer
  } while (n > 0);
  return sign + result;
}

console.log(numberToString(13, 10));
// → "13"