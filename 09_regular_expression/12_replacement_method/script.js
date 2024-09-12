console.log("Hashim".replace("H", "B")); // → "Bashim"

console.log("Muhammad".replace(/[aeiou]/, "x")); // → "Mxhammad"

console.log("Muhammad".replace(/[aeiou]/g, "x")); // → "Mxhxmmxd"

console.log(
    "Ali, Muhammad\nHashim, Ali\nAli, Hashim"
    .replace(/(\p{L}+), (\p{L}+)/gu, "$2 $1")
  );
  // → "Muhammad Ali\nAli Hashim\nHashim Al

  