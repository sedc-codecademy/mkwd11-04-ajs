console.log("Connected");

`expression ? do this : do that`;

function consoleDivider(title){
  console.log(`****** ${title} ******`)
}

consoleDivider("TERNARY OPERATOR");

// Ternary operator ? => if; : => else

// expression ? then return me this code : return me this code

// is this true ? then do this : otherwise do this


let checkIfUserIsAdult = function(personAge){
  let isAdult = "";

  isAdult = personAge >= 18  ? "Yes person is adult"  : "No person is not adult";

  return isAdult
}

let checkPersonOne = checkIfUserIsAdult(27);
console.log(checkPersonOne);

let checkPersonTwo = checkIfUserIsAdult(17);
console.log(checkPersonTwo);

let checkIfNumberIsNegative = (number) => {
  let isNumberNegative = "";

  isNumberNegative = number < 0 ? "Number is negative" : "Number is positive"

  return isNumberNegative

  // return number < 0 ? "Number is negative" : "Number is positive" // Same as above but with shorthand.
};

console.log(checkIfNumberIsNegative(2));
console.log(checkIfNumberIsNegative(-10));

// even shorter when using arrow function
let checkNumber = (number) => number < 0 ? "Number is negative" : "Number is positive";
console.log(checkNumber(10));
console.log(checkNumber(-10));

consoleDivider("FUNCTIONS AS FIRST CLASS CITIZENS");

/**
 *  Functions are fisrt class citizens;
 *    - Stored in a varible
 *    - Stored in an array
 *    - Used as an argument to another function
 *    - Used to return a value from another function
 *    - Have properties like objects =)
 *    - Have methods like objects =)
 */

// 1. Stored in a varible;
let greetings = function(name){
  console.log(`${name} says hi.`)
}
greetings("Ron");

// 2. Stored in an array;

function addition(numOne,numTwo){
  return numOne + numTwo
};

let substract = function(numberOne, numberTwo){
  return numberOne - numberTwo
};

let mathFunctions = [addition,  substract, function(a,b){return a * b}];

let resultOne = mathFunctions[0](5,10);
//addition
console.log(resultOne);

//substract
console.log(mathFunctions[1](45, 11));

//multiply (anonymous one)
console.log(mathFunctions[2](2,4));

// 3. Used as an argument to another function
function calculation( mathematicalFunction, numberOne, numberTwo ){
  return mathematicalFunction(numberOne, numberTwo)
  
}
/**
 * when we provide a function as an argument,
 * we provide only the NAME of the function,
 * which means, we are providing REFERENCE to the function
 * with other words: where the function is located in MEMORY =)
 */
let calculationResult = calculation(addition, 100, 15); 
console.log(calculationResult); //38

console.log(calculation(substract, 10, 2));

// 4. Used to return a value from another function
function multiplyWithTen(){
  return function(number){
    console.log(number * 10)
  }
}

let resultWithTen = multiplyWithTen();
console.log(resultWithTen);
resultWithTen(4) //40

// 5. Have properties like objects 
let sayHello = (name) => {
  return `Hello amigo ${name}`
}
console.log(sayHello("Bob"));
sayHello.helloWorld = "Hello World";

console.log(sayHello.helloWorld);
// 6. Have methods like objects
sayHello.description = () => "I am first class citizen ;)";
console.log(sayHello.description());

// 7. Function arguments
function dummyFunction(){
  console.log("Hello world, I do not expect any parameters");

  console.log(arguments);

  let firstArgument = arguments[0];
  console.log(firstArgument);
  document.write(firstArgument);

};

dummyFunction("Hamburger", "Beer", "Strawberries");