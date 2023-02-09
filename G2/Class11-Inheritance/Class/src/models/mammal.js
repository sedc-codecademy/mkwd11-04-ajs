export default class Mammal {
    constructor(name, age, gender) {

        this.type = this.constructor.name
        this.numberOfLegs;

        this.gender = gender;
        this.name = name;
        this.age = age;

        this.drinksMilk = true;
        this.hasWarmBlood = true;
        this.numberOfEyes = 2;
        this.breaths = true;
        this.hasPulse = true;
        this.isAlive = true;
    }

    die(causeOfDeath = 'natural causes') {
        this.isAlive = false;
        this.hasPulse = false;
        this.breaths = false;
        this.causeOfDeath = causeOfDeath;
        console.warn(`CAUSE OF DEATH: ${this.causeOfDeath}`);
    }
}