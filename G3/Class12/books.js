class Book {
    constructor(id, author, year) {
        this.id = id;
        this.author = author;
        this.year = year;
    }
}




class BookDatabase {
    constructor(){
        this.books = [];
        this.generateBooks();
    }

    generateBooks() {
        for(let i = 0; i < 10; i++) {
            this.addBook(new Book(
                `Book${i}`,
                `${i % 2 === 0 ? 'B' : 'A'}uthor${i}`,
                1990 + (i * 2)));
        }
    }

    getBooks() {
        return this.books;
    }

    getBookById(id) {
        for(let index = 0; index < this.books.length; index += 1) {
            let book = this.books[index];
            if(book.id === id) {
                return book;
            }
        }
        return null;
    }

    addBook(book) {
        let oldLength = this.books.length; //10
        this.books.push(book);
        return oldLength !== this.books.length; //10 !== 11
    }

    deleteBook(id) {
        let indexForRemoval = -1;

        let index = 0;
        while(index < this.books.length) {
            let book = this.books[index];
            if(book.id === id) {
                indexForRemoval = index;
                break;
            }

            index++;
        }

        if(indexForRemoval === -1) {
            return null;
        }

        let deletedBooks = this.books.splice(indexForRemoval, 1);
        return deletedBooks[0];
    }
}


let bookDatabaseEnglish = new BookDatabase();
let bookDatabaseJapan = new BookDatabase();
let bookDatabaseMacedonia = new BookDatabase();

console.log(bookDatabaseEnglish.getBookById('Book5'));