console.log("works");

// Basic way of defining functions
function printFullName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
}

console.log(addTwoNumbers(100, 150));

function addTwoNumbers(numOne, numTwo) {
  return numOne + numTwo;
}

const resultOne = addTwoNumbers(30, 20);
console.log(resultOne);
console.log(addTwoNumbers(30, 50));

// Saving an anonymous function in a variable

const multiplyTwoNumbers = function (numOne, numTwo) {
  //   console.log(numOne * numTwo);
  return numOne * numTwo;
};

console.log(multiplyTwoNumbers);
console.log(multiplyTwoNumbers(2, 100));

// Calling one function inside another one
const calculator = function (operator, numOne, numTwo) {
  // "+", "*"
  if (operator === "+") {
    return addTwoNumbers(numOne, numTwo);
  }

  if (operator === "*") {
    return multiplyTwoNumbers(numOne, numTwo);
  }

  return "Invalid Operator";
};

console.log(calculator("+", 3, 2));
console.log(calculator("*", 5, 5));
console.log(calculator("1", 3, 2));

// Arrow functions

const sayHello = () => {
  console.log("Hello from an arrow function");
};

sayHello();

// Arrow functions without funciton body brackets
const subtractTwoNumbers = (numOne, numTwo) => numOne - numTwo;

console.log(subtractTwoNumbers(100, 99));

// Identical as arrow func below but with classic definition
// const printMoneyFunc = function (money) {
//   return `You have a total of ${money}$`;
// };

const printMoney = money => `You have a total of ${money}$`;

console.log(printMoney(10000));

// Arrow functions as anonymous functions in event listners
const btnEL = document.querySelector(".btn");

btnEL.addEventListener("click", event => {
  console.log(event.target);
  console.log("i was clicked");
});

// Arrow functions as methods in objects

const person = {
  firstName: "Borche",
  lastName: "Borisovski",
  money: 6500,

  //   In normal methods this refers to the parent object
  //   printFullName: function () {
  //     console.log(`${this.firstName} ${this.lastName}`);
  //   },
  printFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },

  //   In arrow functions this refers to the window object always
  printMoney: () => {
    console.log(this);

    console.log(`You have ${this.money}$`);
  },
};

person.printFullName();
person.printMoney();

// IIFE - Immediately invoked function expression

(function () {
  const securityKey = "asdlkjahwkjh2k31h2kj3";

  console.log("I am called from an IIFE");
})();

(test => console.log(test))("This is the test");

// Recursion

function sumTo(num) {
  if (num === 0) {
    return 0;
  }

  return num + sumTo(num - 1);
}

console.log(sumTo(10000));

// Scope - Block Scope

const playGame = () => {
  const currentScore = 10;

  printScore(currentScore);
};

const printScore = currentScore => {
  console.log(currentScore);
  const printScoreResult = "Testing score";
  console.log(printScoreResult);
};

playGame();

// Block scope
const checkScore = score => {
  if (score <= 50) {
    const resultLossMessage = "Sorry, you lose!";
    var test = "I AM GOING TO BREAK YOUR CODE!!!!";
    console.log(resultLossMessage);
  }

  if (score > 50) {
    const resultWinMessage = `Congratulations, you win!`;
    console.log(resultWinMessage);
  }
  // !WONT WORK BECAUSE OF BLOCK SCOPE
  console.log(test);
  //   console.log(resultLossMessage);
  //   console.log(resultWinMessage);
};

checkScore(60);
checkScore(20);

// Hoisting
// Variables declared with var and normal functions are hoisted

console.log(test);
printSomething();

var test = "G4 SEDC";

console.log(test);

function printSomething() {
  console.log("I am printing something");
}

console.log(String(9990));
