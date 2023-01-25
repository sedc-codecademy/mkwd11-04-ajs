console.log("Connected");

console.log("**** SCOPE ****");

/**
 * 3 SCOPES
 * - Global Scope
 * - Functional Scope
 * - Block Scope => ES6/2015
 */


// **** GLOBAL SCOPE => Each variable declared in our script is living in the global scope;

let myFavouriteFood = "Sarma"; // => Declared in the global scope
console.log(myFavouriteFood);

// Literal object animal is in the Global scope =)
let animal = {
  type: "Dog",
  breed: "Border Colie",
  name: "Bubi"
};
console.log("variable accesed in global scope:", animal); //accessed in global scope
console.log(animal.name);


// **** FUNCTIONAL SCOPE => 
// 1.The variables that are declared and initialized in the function 
// are only accessable in the function itself (the function body).
// 2.Has access to the variables declared and initialized in the global scope.

function personInfo(firstName){
  console.log('The animal object accessed in the functional scope', animal);

  let fullSentence = `${firstName} has pet.`

  console.log(fullSentence)
} 



personInfo("John");

let printFullName = () => {
  console.log("Arrow function ", animal)
  let randomValue = 100
}
printFullName()

//console.log(randomValue) //error

// we get an error
//console.log("Trying to access fullSentence variable that has been declared in the function personInfo", fullSentence)

function calculateNumbers(numberOne, numberTwo){
  let resultTwo = numberOne + numberTwo; // is in the top of the functional scope

  // only for the purpose of the demo code
  function multiplyTheNumberOne(){

    console.log("1.", resultTwo)
    let resultOne = numberOne * 5
    console.log("2.", resultOne)

    function thirdNestedFunction(){
      console.log("3.", animal)
      console.log("4.", resultTwo)
      console.log("5.", resultOne)
      let myNameIs = "Bob"
      console.log("6.", myNameIs)
    }

    thirdNestedFunction()
    //console.log("7.", myNameIs) // error 

  }

  multiplyTheNumberOne();
  // console.log("3.", resultOne)


}

calculateNumbers(2, 2)
//console.log(resultTwo) //error

// **** Block scope; => main difference between let & var; 2015
// the keyword creates a BLOCK SCOPE

function getFullName(firstName, lastName){

  if(firstName.length > 1 && lastName.length > 1){
    var resultWithVar = `${firstName} ${lastName}`;
    let resultWithLet = `${firstName} ${lastName}`;

    console.log("Block result with var in if:", resultWithVar) // Full name results =)
    console.log("Block result with let in if:", resultWithLet) // Full name results =)
  }

  console.log("Block result with var in if:", resultWithVar) // Full name result =)
  //console.log("Block result with let in if:", resultWithLet) // Error
} 

getFullName("John", "Doe");
// console.log("Block result with var in if:", resultWithVar) // err
// console.log("Block result with let in if:", resultWithLet) // err

console.log("**** RECURSION ****");

function getUserInput(){
  let userInput = prompt("Please enter you status");
  console.log(userInput);

  // we must have an exit point in recursions
  if(userInput === "admin"){
    return; // if this statement is fullfilled; i will exit/break the recursion
  }

  getUserInput()
}
// getUserInput()

function sumTo(num){
  console.log(num);

  if(num === 0){
    return 0;
  }

  return num + sumTo(num - 1) // 5 - 1 = 4
}

console.log(sumTo(5)) 