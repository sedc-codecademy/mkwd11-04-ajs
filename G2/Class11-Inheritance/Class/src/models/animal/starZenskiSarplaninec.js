import Sarplaninec from "./sarplaninec.js";

export default class StarZenskiSarplaninec extends Sarplaninec {
    constructor(name, age) {
        super(name, age, StarZenskiSarplaninec.Gender.FEMALE);

        if (age < 10)
            console.error('The dog is too young to be called ', this.type)

    }
}