function sayHello(name) {
  console.log(`Hello ${name}.`);
}

function sayGoodbye(name) {
  console.log(`Bye ${name}.`);
}

function sum(n1, n2) {
  return n1 + n2;
}

let result = sum(7, 8);

//Exports
// module.exports = {
//   reciZdravo: sayHello,
//   reciCao: sayGoodbye,
//   rezultat: result,
// };

module.exports = {
    sayHello,
    sayGoodbye,
    result
  };
  