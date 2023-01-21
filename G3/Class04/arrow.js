// regular function

// definition
function nameOfTheFunction(parametersOfThefunction) {
    // body of the function
}

//call
nameOfTheFunction();

// arrow func without parameters
// definition
let funcArrowWithoutParams = () => console.log("Hello");
//call
funcArrowWithoutParams();

// arrow func with one parameter
let funcArrowOneParam = num => num + 1;
let funcNoArrow = function(num) { return num + 1 };

let funcArrowWithMoreParams = (num1, num2) => num1 + num2;
console.log(funcArrowWithMoreParams(2, 2));

// arrow with more that one line of code

let funcArrowWithMoreLines = () => {
    // lots of code
    console.log("Hello from multiple line arrow fnction");
    // more code....
    // we must use return here if we want to return a result
}

let basicArithmeticOperations = (num1, num2, calculation) => calculation(num1, num2);

let result = basicArithmeticOperations(5, 5, (a, b) => a * b);
console.log(result);


let num1 = 10;
let num2 = 20;
let calculation = (a, b) => {
    let c = 30;
    return a + b + c;
}

let result1 = basicArithmeticOperations(num1, num2, calculation);
console.log(result1);

