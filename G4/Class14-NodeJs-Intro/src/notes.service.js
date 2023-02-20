// using require syntax to importe filesystem module
const fs = require("fs");

// fs is the node module that allows us to do file system operations

// 1. save notes to file
const saveNotesToFile = notes => {
  // Takes javascript object and turns it into valid json string
  const stringifiedNotes = JSON.stringify(notes);

  fs.writeFileSync("./data/notes.json", stringifiedNotes, {
    encoding: "utf-8",
  });
};

// 2. read notes from file
const readNotesFromFile = () => {
  const rawNotesData = fs.readFileSync("./data/notes.json", {
    encoding: "utf-8",
  });

  //   JSON.parse takes a json string and returns valid javascript objects
  return JSON.parse(rawNotesData);
};

module.exports = {
  saveNotesToFile,
  readNotesFromFile,
};
