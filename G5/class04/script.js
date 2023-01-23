console.log('Conected')


function getFullName(name, surname) {
    let result = `${name} ${surname}`
    return result
}
getFullName('Monika', 'Sazdova') //резултатот не ни е достапен
let fullName = getFullName('Petar', 'Stojanovski') //резултатот ни е достапен преку варијаблата fullName
console.log('Full name:', fullName)


//лоша пракса
let result1 = 'Angel Mitrov'
function getFullName2(firstName, secondName) {
    result1 =  `${firstName} ${secondName}`
}
console.log('Before calling getFullName2:', result1) //Angel Mitrov
getFullName2('Ana', 'Peeva')
console.log('After calling getFullName2:', result1) //Ana Peeva


//повикување функција во if statement
if(getFullName('VeryLongFirstName', 'VeryLongLastName').length >= 20) { 
    console.log("That's a very long name")
}

//повикување функција во функција
function getPersonalDetails(fName, lName, age, address) {
    // return `The person ${firstName} ${lastName}: age ${age} and lives on ${address}`
    return `The person ${getFullName(fName, lName)}: age ${age} and lives on ${address}`
}

let details = getPersonalDetails('Todor', 'Petrov', 30, 'Jordan Filiposki 20')
console.log('Details', details)



//не можеме да дефинираме функција во функција, можеме само да повикаме функција во функција
// // function printPersonalDetails(firstName, lastName, age, address) {
// //     let fullName;
// //     function getFullName(firstName, lastName) {
// //         fullName = `${fistName} ${lastName}`
// //     }
// //     return `The person ${fullName}: age ${age} and lives on ${address}`
// // }



console.log('*********Exercise 1*************')
// // Make 3 functions:

// // Function that takes a number through a parameter and returns how many digits that number has
// // Function that takes a number through a parameter and returns if its even or odd
// // Function that takes a number through a parameter and returns if its positive or negative
// // Create a function that takes a number through a parameter and calls all three 
// //functions for the number that was passed. It should show the results in the console.

// // Ex:
// // Code: getNumberStats(-25); Console: 2 Digits, Odd, Negative

//Exercise 1 solution
function getDigits(number){
    if(number < 0){
      return number.toString().length -1;
    }
    return number.toString().length;
  }
  
  function oddOrEven(number){
     if (number % 2 === 0 ) {
        return "even"
     }
     return "odd";
  }
  
  function positiveOrNegative(number){
   if ( number < 0) {
    return "negative"
   } else {
    return "positive";
   } 
  }
  
  function getStats(mainNumber){
    return `Number: ${mainNumber}, Digits: ${getDigits(mainNumber)}, ${oddOrEven(mainNumber)}, ${positiveOrNegative(mainNumber)}`
    }
  
  console.log(getStats(25));
  console.log(getStats(-252));
  console.log(getStats(3));
  console.log(getStats(0));
  console.log(getStats(-7));


// // '-25'.length - 1 //3 - 1 = 2
// // '25'.length //2

// // Math.abs(-100) //100

// function getDigits(num) { //-123
//    return Math.abs(num).toString().length //123.toString() // '123'.length //3
// }

// let number = getDigits(-123)
// console.log('NUMBER', number)

// function checkNum(num) {
//    return num < 5 ? 'Lower than 5' : num === 5 ? 'Number is 5' : 'Higher than 5'
// }
// let result = checkNum(7)
// console.log('Result:', result)



//Анонимни функции
let button1 = document.getElementById('btn1')

//во EventListener
button1.addEventListener('click', function(){
    console.log('Btn was clicked')
})

//во варијабла
let greeting = function(name) {
    return `Hello ${name}`
}
console.log(greeting('Tamara'))


//Arrow functions

//без параметри, една линија
let logSomething = function(){
    console.log('Log me');
}
logSomething()

let logSomethingArrow = () => console.log('Log me again')
logSomethingArrow()

//со еден параметар, една линија
let sumWith10 = function(num) {
    return num + 10;
}
let sumWith10Arrow = num => num + 10;

//со два параметри, една линија
let sumNumbers = function(num1, num2) {
    return num1 + num2;
}

let sumNumbersArrow = (num1, num2) => num1 + num2;

//со два параметри, повеќе линии
let sumAndLogNumbers = function(num1, num2) {
    let sum = num1 + num2
    console.log(sum)
    return sum
}

let sumAndLogNumbersArrow = (num1, num2) => {
    let sum = num1 + num2  
    console.log(sum)
    return sum
}


//arrow function во EventListener
let button2 = document.getElementById('btn2')
// button2.addEventListener('click', function(){
//     console.log('Btn was clicked')
// })

button2.addEventListener('click', () => console.log('Btn was clicked from arrow func'))


console.log('******Exercise 2*********')
//Refactor exercise 1 using arrow functions and ternary operators

//Exercise 2 solution
let numOfDigits = num => num < 0 ? num.toString().length - 1 : num.toString().length
let isOddOrEven = num => num % 2 === 0 ? "even" : "odd";
let isPositiveOrNegative = num => num < 0 ? "negative" : "positive";
let statsResult = mainNumber => `Number: ${mainNumber}, Digits: ${getDigits(mainNumber)}, ${oddOrEven(mainNumber)}, ${positiveOrNegative(mainNumber)}`

  
  console.log(statsResult(25));
  console.log(statsResult(-252));
  console.log(statsResult(3));
  console.log(statsResult(0));
  console.log(statsResult(-7));