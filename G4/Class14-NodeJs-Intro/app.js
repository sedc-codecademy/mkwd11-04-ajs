// Useful terminal commands
// node -v in the terminal to check if you have node installed
// node filename.js - runs a file in node.js ex: node app.js
// cd (change directory) - shows current directory and can be used to move through the folders ex: cd ./src
// ls (list) - shows the files and folders in the currently opened folder in the terminal
// mkdir (makedirectory) - creates one or multiple folders ex: mkdir src assets
// touch - creates one or multiple files ex: touch app.js index.html app.css
// npm init -y creates a node project in the directory
// npm i {package name} installs a npm package

// Import with require syntax from a local file
const { v4: uuid } = require("uuid");
const { saveNotesToFile, readNotesFromFile } = require("./src/notes.service");

const firstName = "Danilo";
const lastName = "Borozan";

console.log(`${firstName} ${lastName}`);

// Creating note class
class Note {
  constructor(author, text) {
    this.id = uuid();
    this.author = author;
    this.text = text;
  }
}

const newNotes = [
  new Note("Borche", "Node js is fun"),
  new Note("Danilo", "Don't forget feedback"),
  new Note("John", "The notes app is amazing"),
];
const oldNotes = readNotesFromFile();
const notes = [...oldNotes, ...newNotes];
saveNotesToFile(notes);

// Saving the notes data in a file on the system
// We will comment this out for now to prevent overwriting the file
// saveNotesToFile(notes);

const printNotes = () => {
  const notes = readNotesFromFile();

  notes.forEach(note => {
    console.log(`Author: ${note.author} | Text: ${note.text}`);
  });
};

printNotes();
