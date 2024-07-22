function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my fur and whiskers");
// → The white rabbit says 'Oh my fur and whiskers'

hungryRabbit.speak("Got any carrots?");
// → The hungry rabbit says 'Got any carrots?'


console.log('Arrows and this');
let finder = {
    value: 5,
    find(array) {
        return array.some(v => v == this.value);
    }
};

console.log(finder.find([4, 5])); // true