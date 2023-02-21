//Imports
const functions = require("./functions");
const textService = require("./textService");

// console.log(functions);
// functions.reciCao("Ivan");
// functions.reciZdravo("Bojan");
// console.log(functions.rezultat);

console.log(functions);
functions.sayHello("Ivan");
functions.sayGoodbye("Bojan");
console.log(functions.result);

textService.addText(
  "Zdravo od posledniot cas so se uci novo od prviot semestar."
);
textService.appendText("\nI 4 chupi ke ni odat na Node trakata.");

textService.appendText("\nAma ostanatite decki, ke mi ostanat :)");

textService.addTextJson([{ hehe: "hehe" }]);
textService.appendTextJson({ hihi: "hihi" });
