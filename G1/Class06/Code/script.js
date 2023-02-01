// normal if else statement 
function isPositive(number){
    if(number > 0){
        return "number is positive";
    }
    else{
        return "number is negative";
    }
}

console.log(isPositive(2));

let isPositiveArrow  = number => number > 0 ? "number is positive" : "number is negative";
console.log(isPositiveArrow(-9));

// storing function as a variable 
let sayHello = function(name){
    console.log(`Hello there ${name}`);
}
sayHello("Petre");

//storing function in an array
let numberStateFunctions = [
    number => number > 0 ? "number is positive" : "number is negative",
    number => number % 2 === 0 ? "number is even" : "number is odd",
    number => number >= 0 ? number.toString().length : number.toString().length - 1,
    function(num){return `Test ${num}`;}
]

console.log(numberStateFunctions[0](-6));
console.log(numberStateFunctions[0](0));
console.log(numberStateFunctions[1](2));
console.log(numberStateFunctions[2](356));
console.log(numberStateFunctions[2](-356));
console.log(numberStateFunctions[3](3));

//using function as an argument

function calculator(calculateFunc, number1, number2){
    return calculateFunc(number1, number2);
}

function sum(input1, inpu2){
    return input1 + inpu2;
}

function difference(input1, input2){
    return input1 - input2;
}

let result = calculator(difference, 10, 2);
console.log(result);

let resultSum = calculator(sum, 3, 16);
console.log(resultSum);

function calculator2(calculateFunc1, calculatorFunc2, number1, number2){
    return calculateFunc1(number1, number2) + " " + calculatorFunc2(number1, number2);
}

let resultCalc = calculator2(sum, difference, 2, 6);
console.log(resultCalc);

let result2 = calculator(function(number1, number2) {
    return number1 * number2;
}, 5, 10)

console.log(result2);

// with self invoked function and arrow function
let resultArrow = calculator((number1, number2) => number1 / number2, 10, 2);
console.log(resultArrow)


// function with properties and methods
let sayHello2 = function(name){
    return `Hello there ${name}`;
}

sayHello2.defaultName = "Bob"; //this function gets property as an object
console.log(sayHello2(sayHello2.defaultName));
console.log(sayHello2("some text"));

sayHello2.differentGreeting = function(name){
    return `Hi ${name}`
}
console.log(sayHello2.differentGreeting(sayHello2.defaultName));

this.test = "Test string";
console.log(this.test);
console.log(this);

// function argument

function longestString(){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[2]);
}
longestString("str1", "str2", "str3", "str4");

function testFunction(){
    // return " test string";
    return arguments;
}
