import Animal from "./animal.js";

export default class Horse extends Animal {
    constructor(name, age, gender) {
        super(name, age, gender);

        this.numberOfLegs = Horse.NumberOfLegs.FOUR_LEGGED;
        this.gallops = true;
        this.hasGrive = true;
    }

    gallop(soundOfGalloping = 'tk tk tk') {
        console.log(soundOfGalloping);
    }

    run(soundOfRunnig = 'tgdk tgdk tgdk') {
        console.log(soundOfRunnig);
    }

    die(causeOfDeath) {
        super.die(causeOfDeath);
        this.gallops = false;
    }

}