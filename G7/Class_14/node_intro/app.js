const importsFromIndex = require("./index.js"); //we import the exported modules from index.js

const greeting = importsFromIndex.greetings("John");
console.log(greeting);

const resultOne = importsFromIndex.sumOfNumbers(10, 20)
console.log(resultOne);