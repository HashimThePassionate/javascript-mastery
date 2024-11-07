class Rabbit {
    constructor(type) {
        this.type = type;
    }

    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
killerRabbit.speak("I am fear and darkness");
// The killer rabbit says 'I am fear and darknes

let blackRabbit = new Rabbit("black");
blackRabbit.speak("I am the night");
// The black
