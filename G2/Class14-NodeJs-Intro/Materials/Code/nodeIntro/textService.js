const fs = require("fs");
let file = "test.txt";
let fileJson = "test.json";

function addText(text) {
  fs.writeFileSync(file, text, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Text was written in the file.");
  });
}

function appendText(text) {
  fs.appendFileSync(file, text, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Text was written in the file.");
  });
}

function addTextJson(object) {
    fs.writeFileSync(fileJson, JSON.stringify(object), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Text was written in the file.");
    });
  }
  
  function appendTextJson(object) {
    let jsonString = fs.readFileSync(fileJson);
    let jsonParsed = JSON.parse(jsonString);
    jsonParsed.push(object);
    fs.writeFileSync(fileJson, JSON.stringify(jsonParsed), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Text was written in the file.");
    });
  }

module.exports = {
  addText,
  appendText,
  addTextJson,
  appendTextJson
};
