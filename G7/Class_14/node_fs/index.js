const fs = require("fs");

const my_file = "my_text.txt";

const addText = (file, text) => {
    fs.writeFileSync(file, text) //will always overwrite the content of a file
}

addText(my_file, "Hello from node js");
addText(my_file, "Is this Spanish village?");

const appendToText = (file, text) => {
    fs.appendFileSync(file, text);
}

appendToText(my_file, "No, this is a Macedonian village");

const favouriteMovies = "movies.txt";

const movies = [
    "Harry Potter",
    "John Wick",
    "Lord of the Rings"
];

movies.forEach((movie) => {
    appendToText(favouriteMovies, `\n${movie}`)
});

const readFromFile = (file) => {
    return fs.readFileSync(file, {encoding: "utf-8"})
};

const contentFromFile = readFromFile("story.txt");
console.log(contentFromFile)
