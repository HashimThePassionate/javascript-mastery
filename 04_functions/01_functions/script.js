const square = function(x) {
    return x * x;
};

console.log(square(12));
// → 144


const makeNoise = function() {
    console.log("Pling!");
};

makeNoise();
// → Pling!

const roundTo = function(n, step) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(23, 10));
// → 20

const doNothing = function() {
    return;
};

console.log(doNothing());
// → undefined

const add = function(a, b) {
    return a + b;
};

console.log(add(5, 3));
// → 8