let rabbitPrototype = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};

let whiteRabbit = Object.create(rabbitPrototype);
whiteRabbit.type = "white";
whiteRabbit.speak("Oh my fur and whiskers");
// The white rabbit says 'Oh my fur and whiskers'

let blackRabbit = Object.create(rabbitPrototype);
blackRabbit.type = "black";
blackRabbit.speak("I am fear and darkness");
// The black rabbit says 'I am fear and darkness'



let empty = {};
console.log(empty.toString); // function toString() {...}
console.log(empty.toString()); // [object Object]


let obj = {};
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null


console.log(Object.getPrototypeOf(Math.max) === Function.prototype); // true
console.log(Object.getPrototypeOf([]) === Array.prototype); // true