class SecretiveObject {
    #getSecret() {
        return "I ate all the plums";
    }

    interrogate() {
        let shallISayIt = this.#getSecret();
        return `never  ${shallISayIt}`;
    }
}

let secret = new SecretiveObject();
console.log(secret.interrogate()); // never
// console.log(secret.#getSecret());  // Error: Private field '#getSecret' must be declared in an enclosing class


class RandomSource {
    #max;

    constructor(max) {
        this.#max = max;
    }

    getNumber() {
        return Math.floor(Math.random() * this.#max);
    }
}

let random = new RandomSource(10);
console.log(random.getNumber()); // A random number between 0 and 9
// console.log(random.#max);        // Error: Private field '#max' must be declared in an enclosing class