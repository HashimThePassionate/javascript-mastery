class Rabbit {
    constructor(type) {
        this.type = type;
    }
}

Rabbit.prototype.teeth = "small";

let killerRabbit = new Rabbit("killer");
console.log(killerRabbit.teeth); // small


killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth); // long, sharp, and bloody


console.log((new Rabbit("basic")).teeth); // small
console.log(Rabbit.prototype.teeth); // small