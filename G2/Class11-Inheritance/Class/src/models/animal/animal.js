import Mammal from "../mammal.js";

export default class Animal extends Mammal {
    constructor(name, age, gender) {
        super(name, age, gender);

        this.speaks = false;
        this.hasFur = true;
    }
}