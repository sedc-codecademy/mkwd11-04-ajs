export class Book {
    constructor(id, name, isbn, price) {
        console.log("Hello my friend :)");
        this.id = id;
        this.name = name;
        this.isbn = isbn;
        this.price = price;
    }

    printBookName() {
        return `Book name is ${this.name} and price is ${this.price}`;
    }
}