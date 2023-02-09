import Dog from "./dog.js";

export default class Pudlica extends Dog {
    constructor(name, age, gender) {
        super(name, age, gender);
    }

    bark(whatToBark){
        super.bark(whatToBark);
        this.showsTeeth = true;
    }
}