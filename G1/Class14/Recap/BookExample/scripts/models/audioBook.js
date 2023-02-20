import { Book } from "./book.js";

export default class AudioBook extends Book {
    constructor(id, name, isbn, price, audioPublisher) {
        super(id, name, isbn, price);
        this.audioPublisher = audioPublisher;
    }

    static printSomething(something){
        // return something;
        return this.printSomethingElse(something);
    }

    static printSomethingElse(somethingElse){
        return somethingElse;
    }
}