import Sarplaninec from "./sarplaninec.js";

export default class StarZenskiSarplaninec extends Sarplaninec {
    constructor(name, age) {
        super(name, age, 'Female');

        if (age < 10)
            console.error('The dog is too young to be called ', this.type)

    }
}