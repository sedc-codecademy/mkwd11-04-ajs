const functions = require('./functions');
const textService = require('./textService');


// console.log(functions);

// functions.sayHello("Trajan");
// functions.sayGoodbye("Trajan");
// console.log(functions.result)


// textService.writeFile("Hello From SEDC!");

// textService.appendFile("Hello from g3");

// textService.readFile();

textService.addText("Some text");
textService.appendText("\\nMOREEEEE TEXT");

let animal = textService.readJson('animals.json');
console.log(animal);