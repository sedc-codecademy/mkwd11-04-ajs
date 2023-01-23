//Annonymous function in a variable
let greeting = function(name) {
    return `Hello ${name}`;
}

greeting("Jane");

//Annonymous function in an event listener
let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function() {
    console.log("Button is clicked!");
})


//no parameter, one expression
//Annonymous function
let logSomething = function() {
    console.log("Hello world!");
}
logSomething();

//Arrow function
let logSomethingWithArrowFunc = () => console.log("Hello world from arrow function!");
logSomethingWithArrowFunc();


//one parameter, one expression
//Annonymous function
let sumWith10 = function(num) {
    return num + 10;
}

//Arrow function
let sumArrow = num => num + 10;

// multiple parameters, one expression
//Annonymous function
let sumAnnon = function(num1, num2) {
    return num1 + num2;
}

//Arrow function
let sumArrowFunc = (num1, num2) => num1 + num2;


//multiple parameters, multiple expressions
//Annonymous function
let sumAnnonMultipleExp = function(num1, num2) {
    let result = num1 + num2;
    console.log(`The result from Anon func is: ${result}`);
    return result;
}

//Arrow function
let sumArrowMultipleExp = (num1, num2) => {
    let resultArrow = num1 + num2;
    console.log(`The result from Arrow func is: ${resultArrow}`);
    return resultArrow;
}

//Arrow function in an event listener
let buttonArr = document.getElementsByTagName("button")[0];
button.addEventListener("click", () => {
    console.log("Arrow function is saying button is clicked!");
})

//Self invoked functions
//Annonimous
let sayHello = function(name) {
    console.log(`Hello there ${name}`);
}
sayHello("Jane Doe");

let name = 'Jane Doe';
(function(name) { console.log(`Hello there ${name} from self invoked`) });

// Self invoked function result as variable
let fullName = ((firstName, lastName) => `${firstName} ${lastName}`)("Jane", "Doe");

// Self invoked function result as an argument
function sum(num1, num2) {
    return num1 + num2;
}
let number1 = 25;
let number2 = "15";
let result = sum(number1, (num => parseInt(num))(number2));

// Self invoked function result as a return of another function
function sayHello(inputName) {
    return (name => {
        if (name.length <= 0) { return "No name" } else if (name.length < 2) { return "Too short" } else { return `Hello there ${name}` }
    })(inputName)
}
console.log(sayHello("Jane"));