// Basic function that we all know and love
function sumOfTwoNumber(number1, number2) {
  // it has 2 parameters, the first is number1 and the second is number2
  let result = number1 + number2;
  console.log(result); //console.logs the result in the console
}

sumOfTwoNumber(5, 6); //5 and 6 are arguments that we pass to the function

let greeting = "Hello";

function sumOfTwoNumberWithReturn(number1, number2) {
  // it has 2 parameters, the first is number1 and the second is number2
  let result = number1 + number2; //we can not use result, number1 and number2 outside of the function sumOfTwoNumberWithReturn, because it's in the function scope, outside of that scope it doesn't exist !!! But we can use it inside the function sayHello.
  console.log(greeting); //this greeting is from the global scope (outside of the function) and we can use it inside this one.
  function sayHello(helloWorld) {
    //this is inside the function scope, of the function sumOfTwoNumberWithReturn
    let greetingInsideSecondFunction = `${helloWorld} from the inside function sayHello()`;
    return greetingInsideSecondFunction;
  }
  let hello = sayHello(greeting); // we can only call this function inside of sumOfTwoNumberWithReturn, because outside it doesn't exist
  console.log(hello);
  return result; //returns the result
}

// Notice that I use the same variable names, that is why each function has it's own scope, outside of the function those variables don't exist.

let resultOfSecondFunction = sumOfTwoNumberWithReturn(6, 7);
console.log(resultOfSecondFunction);

class Person {
  constructor(firstName, lastName) {
    this.personFirstName = firstName;
    this.personLastName = lastName;
  }
  info() {
    console.log(`${this.personFirstName} ${this.personLastName}`);
  }
}

let boki = new Person("Bojan", "Damchevski");
boki.info();

// ANONYMOUS FUNCTIONS
//it's a function with no name, BUT IT IS SAVED INSIDE A VARIABLE !!!
let func1 = function (name) {
  console.log(`Hello from an anonymous function from ${name}`);
  return name;
};

console.log(func1("Ivan"));

let myArray = [
  "test",
  2,
  5,
  3,
  function () {
    return 2 + 3 + 5;
    console.log(2 + 3 + 5);
  },
];

console.log(myArray[4]());
//Here we invoke the function with the () brackets/zagradi

let ifElseFunc = function (n1, n2) {
  if (n1 > n2) {
    return n1;
    //if this is executed the function stops here
  }
  if (n1 < n2) {
    return n2;
    //if this is executed the function stops here
  }
  return 0;
  //if this is executed the function stops here
};

console.log(ifElseFunc(5, 3));
console.log(ifElseFunc(5, 6));
console.log(ifElseFunc(2, 2));
console.log(ifElseFunc());

// Arrow functions

// basic function
function someFuncWithABasicFunction(num) {
  return num + 10;
}

// the same basic function but made with arrow functions
const someFuncWithAnArrowFunction = (num) => num + 10;

console.log(someFuncWithABasicFunction(5));
console.log(someFuncWithAnArrowFunction(6));

const sayHelloWithAnArrowFunction = () => console.log("Hello from SEDC.");

sayHelloWithAnArrowFunction();

const arrowFuncWithMoreParams = (num1, num2) => num1 + num2;
//that after the => (arrow) is the return

console.log(arrowFuncWithMoreParams(4, 5));

const arrowFuncComplicated = (num1, num2) => {
  let result = num1 + num2;
  //if we have more lines of code, we have to tell it what to return ! If we have one line, like the prev function, that one line is the return !!!
  return result;
};

console.log(arrowFuncComplicated(4, 6));

// Self invoked function
(() => {
  let result = 5;
  console.log(result + 25);
})();

let selfInvokedFunc = ((num1, num2) => {
  return num1 + num2;
})(100, 60);

console.log(selfInvokedFunc);

const someSelfInvokedFuncButComplicated = ((person) => {
  person.info();
  let ivan = new Person("Ivan", "Jamandilovski");
  ivan.info();
  return `This is ${person.personLastName} ${person.personFirstName} and this is ${ivan.personLastName} ${ivan.personFirstName}`;
})(boki);

console.log(someSelfInvokedFuncButComplicated);

// Recursion

function sumTo(num) {
  if (num === 0) {
    return 0;
  }

  return num + sumTo(num - 1);
}

console.log(sumTo(5));

function factorialFunc(num) {
  if (num === 0) {
    return 1;
  }

  return num * factorialFunc(num - 1);
}

console.log(factorialFunc(5));

let arrowOfSumTo = (num) => (num === 0 ? 0 : num + arrowOfSumTo(--num));

let arrowOfFactorial = (num) => (num === 0 ? 1 : num * arrowOfFactorial(--num));

console.log(arrowOfSumTo(5));
console.log(arrowOfFactorial(5));