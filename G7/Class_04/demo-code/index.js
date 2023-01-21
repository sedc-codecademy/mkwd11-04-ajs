console.log("connected");

// Declaration of function;

function multliplyNumbers(numberOne, numberTwo){
  let result = numberOne * numberTwo;
  // console.log(result);

  return result;
}

// Invocation of function;
console.log(multliplyNumbers(3, 6));
// Returned result of the function, stored in a variable;
let resultTwo =  multliplyNumbers(10, 2);
let resultThree = multliplyNumbers(30, 100);
let resultFour = multliplyNumbers(4, 7);
console.log(resultTwo, resultThree, resultFour);

function checkResult(numOne, numTwo){
  // invoking a function in a function
  if(multliplyNumbers(numOne, numTwo) >= 100) {
    return `The result is more then 100`
  }
}

let checkedResult = checkResult(5, 80);
console.log(checkedResult);

console.log("**** ANONUMOUS FUNCTIONS / FUNCTION EXPRESSIONS ****");

let buttons = document.getElementsByTagName("button");

let anonymousGreetings = function(fullName){
  return `${fullName} says hi 😄`;
};

console.log(anonymousGreetings("Bob Bobski"))
console.log(anonymousGreetings("John Bobski"))
let greetingMsg = anonymousGreetings("John Doe");
console.log(greetingMsg);

let bucketList = ["Avocado", "Pineapple", "Milk"];
let bucketResult = document.getElementById("bucketResult");

let printBucket = function(bucket){
  for(let i = 0; i < bucket.length; i++){
    bucketResult.innerHTML += `<p> ${bucket[i]} </p>`
  }
}

printBucket(bucketList)

// Anonymous functions in event listeners

let firstButtom = buttons[0];
//event listeners have anonymous function
firstButtom.addEventListener("click", function(){
  console.log("clicked")
})

console.log("**** ARROW FUNCTIONS ****");
/**
 * From es6 / 2015
 * They are the same as anonymous functions, but their syntax is shorter =)
 */

console.log("** NO PARAMETERS, ONE EXPRESSION **");

//Anonymous function
let costumLogger = function(){
  console.log("Hello my friends; anonymous");
};
costumLogger();
//Arrow function => the arrow is replacing the function keyword =)
let costumLoggerArrow = () => {
  console.log("Hello my friends; arrow");
}
costumLoggerArrow();

//Arrow function, even shorter only if we have one expression
let costumLoggerArrowShorter = () => console.log("Hello my friends, even shorter arrow");
costumLoggerArrowShorter();

console.log("** ONE PARAMETERS, ONE EXPRESSION **");

//Anonymous function
let favouriteMovieName = function(movieName){
  return `My favourite movie name is: ${movieName}`
}
let favMovieOne = favouriteMovieName("John Wick");
console.log(favMovieOne);

//Arrow function

// let favouriteMovieNameArrow = (movieName) => {
//   return `My favourite movie name from arrow func. is: ${movieName}`
// }

/**
 * RULE #1
 * When the arrow function accepts ONLY 1 parameter
 * we can (optional) remove the initial small brackets ();
 * 
 * SAME AS ABOVE
 */

let favouriteMovieNameArrow = movieName => {
  return `My favourite movie name from arrow func. is: ${movieName}`
};
console.log(favouriteMovieNameArrow("Harry Potter"));

//Shorter Arrow function
/**
 * RULE #2
 * When we return only one expression
 * we can write it in the following syntax
 * 
 * same as the above function but shorter
 */

let favouriteMovieNameArrowShorter = (movieName) => `My favourite movie name from arrow func. shorter is: ${movieName}`  

console.log(favouriteMovieNameArrowShorter("Zombieland"));

console.log("** TWO PARAMETERS, ONE EXPRESSION **");

//Anonymous function
let substractNumbers = function(numberOne, numberTwo){
  return numberOne - numberTwo
}
console.log(substractNumbers(10,5))

//Arrow function
let substractNumbersArror = (numberOne, numberTwo) => {
  return numberOne - numberTwo
}
console.log(substractNumbersArror(13, 7));

//Arrow function shorter
let substractNumbersArrorShorter = (numberOne, numberTwo) => numberOne - numberTwo;
console.log(substractNumbersArrorShorter(30, 13))

console.log("** MULTIPLE PARAMETERS, MULTIPLE EXPRESSION **");

//Anonymous function
let divideNumbers = function(numberOne, numberTwo){
  let result = numberOne / numberTwo;
  
  if(result > 50){
    return `Result is greater then 50`
  }else {
    return `Result is less then 50`
  }

  
}
let resultOne = divideNumbers(98, 3);
console.log(resultOne)

//Arrow function
let divideNumbersArrow = (numberOne, numberTwo) => {
  let result = numberOne / numberTwo;
  
    if(result > 50){
      return `Result is greater then 50`
    }else {
      return `Result is less then 50`
    }

  
}
console.log(divideNumbersArrow(123123, 23));

// Arrow functions in event listeners
let secondBtn = buttons[1];

// Anonymous func
// secondBtn.addEventListener("click", function(){
//   console.log("Clicked Amigo")
// })

// Arrow func
// same as above but using arrow function for the event listener =)
secondBtn.addEventListener("click", (event) => {
  console.log(event);
  event.preventDefault();
  console.log("Clicked Amigo with arrow syntax")
});


// EXERCISE 
// Change the text size and the text color of the input
// using arrow functions;

let inputs = document.getElementsByTagName("input");

let headingOne = document.getElementsByTagName("h1")[0];
let sizeInput = inputs[0];
let colorINput = inputs[1];
let changeBtn = buttons[2];

let changeTextProperties = (element, size, color) => {
  element.style.color = color;
  element.style.fontSize = `${size}px`;
};

changeBtn.addEventListener("click", () => {
  changeTextProperties(headingOne, sizeInput.value, colorINput.value);
});

console.log("** IFFE / Self invoking functions **");

(function(){console.log("Hello from IFFE")})();


//Anonymous function
(
  function(name){
    console.log(`Hello from ${name}`)
  }
)("George");

//Arrow function
(
  (favouriteAnimal) => {
    console.log(`My fav. animal is ${favouriteAnimal}`)
  }
)("Dog");


console.log("**** HOISTING ****");
console.log("**** DIFFERENCE BETWEEN REGULAR FUNCTIONS AND FUNCTION EXPRESSION ****");

// we invoked the function before it's declaration
fullName("Pot", "Potter"); // Pot Potter

function fullName(firstName, lastName){
  console.log(`Regular function ${firstName} ${lastName}`)
}

// we invoked it after the function declaration
fullName("John", "Doe"); // John Doe

// ANONYMOUS FUNCTION 
// We cannot invoke anonymous functions before their initialization

// fullNameArrow("Harry", "Potter"); // ERROR
let fullNameArrow = (firstName, lastName) => {
  console.log(`Arrow function ${firstName} ${lastName}`)
}

// we invoked it after the function declaration
fullNameArrow("Bob", "Bobski") // Bob Bobski

console.log("**** HOISTING FOR VARIABLES ****");

console.log("Before", movieOne)
var movieOne = "Good fellas"
console.log("After",movieOne)

// console.log("Before", movieTwo)
let movieTwo = "Before the Rain"
console.log("After",movieTwo)