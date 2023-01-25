
function fnc1 () {
    console.log("Fnc");
}

let fnc = function() {
    console.log("Fnc");
}

console.log(typeof(fnc));
console.log(fnc)
console.log(typeof(fnc1));
console.log(fnc1)

// fnc();

let fncWithParams = function(num1, num2, calculation) {
    let result = calculation(num1, num2);
    return result;
}

let result = fncWithParams(1, 2, function(a, b) {
    return a + b;
});

console.log(result);

let result1 = fncWithParams(2, 4, (a, b) => b - a);

console.log(result1);

let calculationFnc = (a, b) => a * b;

let result2 = fncWithParams(5, 5, calculationFnc);


function generateArithmeticCalculationFunction(sign) {
    if(sign === "+") {
        return (a, b) => a + b;
    } else if(sign === "-") {
        return function(a, b) {
            return a - b;
        }
    } else if (sign === "*") {
        return (a, b) => a * b;
    } else if (sign === "/") {
        return (a, b) => {
            if(a === 0 || b === 0) {
                return 0;
            }
            return a / b;
        }
    }
}

let sumFnc = generateArithmeticCalculationFunction('+');
console.log(sumFnc(2, 2));


function generateArithmeticCalculationFunctionSwitch(sign) {
    switch(sign) {
        case '+':
            return (a, b) => a + b;
        case '-':
            return function(a, b) {
                return a - b;
            }
        case '*':
            return (a, b) => a * b;
        case '/':
            return (a, b) => {
                if(a === 0 || b === 0) {
                    return 0;
                }
                return a / b;
            }
        default:
            return null;
    }
}

function generateArithmeticCalculationFunctionObj(sign) {
    let arithmetichOperations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    }
    return arithmetichOperations[sign];
}

let multiply = generateArithmeticCalculationFunctionSwitch('*');
let substract = generateArithmeticCalculationFunctionObj('-');

console.log(multiply(2, 10));
console.log(substract(40, 27));



function one(a) {
    let result = 0;

    return function (b) {
        result = a + b;

        return function (c) {
            result = result + c;

            return function (d) {
                result = result + d;

                return function (e) {
                    return result + e;
                }
            }
        }
    }
}

let result12 = one(5)(4)(3)(2)(1);
console.log(result12);


let arithmetichOperationsArray = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => a / b
]

// for(let fnc12 of arithmetichOperationsArray) {
//     console.log(fnc12(2,2));
// }


function showMessage(element, gender) {
    let greetMessage = `Welcome ${gender === 'm' ? 'mr. ' : 'mrs. '}`;
    return function(name) {
        element.innerText = greetMessage + name;
    }
}

let greetWithName = showMessage(document.getElementById('wellcome'), 'm');
let greetWithNameFemale = showMessage(document.getElementById('wellcome'), 'f');

greetWithName('Trajan');
greetWithNameFemale('Trajan');



// Pure functions

// not pure functions
let numbers = [1, 2, 3, 4, 5,];
function multiplyArray() {
    let sum = 0;
    for(let num of numbers) {
        sum += num;
    }
    return sum;
}

let num = 1;
function sumThreeNumbers(a, b) {
    return num + a + b;
}

// pure function

function sum(a, b) {
     return a + b;
}