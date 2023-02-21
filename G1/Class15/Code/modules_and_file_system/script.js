let num1 = 2;
let num2 = 3;

console.log(num1 + num2);

const saySomething = require("./say");
const textService = require("./txtService");

// console.log(saySomething);
// console.log(saySomething.hello("Petre"));
// console.log(saySomething.bye("Petre"));

textService.addText("Hello, this is the first line");
textService.appendText("\nThis is another line of text");
// textService.addText("new text added");