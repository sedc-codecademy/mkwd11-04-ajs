// regular funcion

// definition
function nameOfTheFunction(parametersOfThefunction) {
    // function body
}

// call
nameOfTheFunction();

// anonymous function

// definition
let anonymousFunc = function () {
    console.log("Hello");
}

//call
anonymousFunc();

let array = [1, 2, 3, function() { return 2 +2 }, 4, 5, 6, 7];

// function as parameter

let anonymousCalculations = function (num1, num2, calculation) {

    //input parameters
    // num1 = 1;
    // num2 = 2;
    // calculation = function(a, b) {
    //     return a + b;
    // }

    console.log("Input parameters");
    console.log("Num1 = ", num1); //-> number
    console.log("Num2 = ", num2); //-> number
    console.log("Calculation = ", calculation); //-> function

    let result = calculation(num1, num2);
    return result;
}


let result = anonymousCalculations(1, 2, function(a, b) {
    return a + b;
});

console.log(result);

let num1 = 5;
let num2 = 3;
let calculation = function(a, b) {
    return a - b;
}

let result1 = anonymousCalculations(num1, num2, calculation);
console.log(result1);

let result2 = anonymousCalculations(5, 5, function(a, b) {
    let obj = {
        name: "Trajan",
        age: 33
    };
    let array = [1, 2, 3 ,4 ,5, 6];
    let c = 10;

    return a + b + c + obj.name + array[5];
});

console.log(result2);

let result3 = anonymousCalculations(1, 2, function(a, b, c, d, e = 10) {
    let result = a + b + c + d + e;
    return result;
});

console.log(result3);


// let result4 = anonymousCalculations(1, 2, function(a, b, c = 3, d = 5) {

// })