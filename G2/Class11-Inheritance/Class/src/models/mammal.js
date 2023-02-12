export default class Mammal {
    static Gender = {
        MALE: 'masko',
        FEMALE: 'female'
    }

    static NumberOfLegs = {
        TWO_LEGGED: 2,
        FOUR_LEGGED: 4,
    }

    constructor(name, age, gender) {

        this.type = this.constructor.name
        this.numberOfLegs;

        /**
         * @type {Mammal.Gender}
         */
        this.gender = gender; // type Gender

        this.name = name;
        this.age = age;

        this.drinksMilk = true;
        this.hasWarmBlood = true;
        this.numberOfEyes = 2;
        this.breaths = true;
        this.hasPulse = true;
        this.isAlive = true;
    }

    get currentTime() {
        return new Date();
    }

    die(causeOfDeath = 'natural causes') {
        this.isAlive = false;
        this.hasPulse = false;
        this.breaths = false;
        console.warn(`CAUSE OF DEATH: ${causeOfDeath}, has died on ${this.currentTime}`);
    }
}