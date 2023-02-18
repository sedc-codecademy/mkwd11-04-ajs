import AudioBook from "./models/audioBook.js";

let audioBook = new AudioBook(
    2,
    "Audio Book Something",
    11111,
    500,
    "Audio Inc."
);

console.log(audioBook);
console.log(AudioBook.printSomething("Hello World ;)"));