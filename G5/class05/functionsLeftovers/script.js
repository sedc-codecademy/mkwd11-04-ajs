
var hoistedVar


console.log('We are live!');

// function sum(num1, num2) {
//     let result = num1 + num2
//     console.log('Result', result)
// }

// sum(2, 4)

// let sumArrow = (num1, num2) => {
//     let result = num1 + num2
//     // console.log(result)
//     return result
// }

// console.log(sumArrow(4, 9))

// let sumArrowOneRow = (num1, num2) => num1 + num2

// console.log(sumArrowOneRow(5, 5))

// let oneParamArrowFunc = name => `My name ${name}`


//Self invoked functions (Immediately invoced function expressions - IIFE)

// function sum(num1, num2) {
//     return num1 + num2
// }

// console.log(sum(2, 4))


(function(num1, num2){
    let result = num1 + num2;
    console.log('Self invoced func result:', result);
})(4, 8)

let arrowSelfInvocedSum = ((num1, num2) => console.log(num1 + num2))(10, 10)


function sayHello(name) {
    console.log(`Hello there ${name}`)
}
sayHello('Dragan');


(function sayHelloSelfInvoced(name) {
    console.log(`Hello ${name}`);
})('Bob')

let sayHelloSelfInvocedArrow = (name => console.log(`Hello ${name}`))('Mitko')


let sumNumbers = (num1, num2) => num1 + num2;
let number1 = 25;
let number2 = '15'
let result = sumNumbers(number1, (num => parseInt(num))(number2))
console.log('Sum result:', result)


//Рекурзија
//кога функцијата се повикува себеси

function sumNum(num) {
    if(num === 0) { //base case
        return 0
    }
    return num + sumNum(num-1)
}

console.log('Recursion result', sumNum(5))

//Step 1: num = 5 -> 5 + sumNum(4) //Step 11: 5 + 10 = 15
//Step 2: num = 4 -> 4 + sumNum(3) //Step 10: 4 + 6 = 10
//Step 3: num = 3 -> 3 + sumNum(2) //Step 9: 3 + 3 = 6
//Step 4: num = 2 -> 2 + sumNum(1) //Step 8: 2 + 1 = 3
//Step 5: num = 1 -> 1 + sumNum(0) //Step 7: 1 + 0 = 1
//Step 6: num = 0 -> 0

//5+4+3+2+1 = 15

//Exercise 1: Create a recursion for calculating factorial
// 5! = 5x4x3x2x1 = 120
// 4! = 4x3x2x1 = 24

function recursion(num) {
    if(num === 1) { //base case
        return 1
    }
    return num * recursion(num-1)
}

let recursionArrow = num => num === 1 ? 1 : num * recursionArrow(--num)


//Scope
//1. Global scope
//2. Function scope (local scope)
//3. Block scope


function varScoping() {
    var x = 1;
    if(true) {
        console.log('Var inside if, before assignment', x) //1
        var x = 2;
        console.log('Var inside if, after assignment', x) //2
    }
    console.log('Var outside if, inside function', x) //2
}
// varScoping()

function letScoping() {
    let x = 1;
    if(true) {
        console.log('Let inside if, before assignment', x) //error
        x = 2;
        console.log('Let inside if, after assignment', x)
    }
    console.log('Let outside if, inside function', x) //1
}

// letScoping()

var y = 10; //10

y = 20; //20

var y = 30; //30

// let f = 15;
// f = 25;
// let f = 30;

let someName = 'hello'; //hello
console.log('LET', someName)
const array = [1, 2, 3]; //hey
console.log('Array', array)
// console.log('CONST', nameConst)

// someName = 'hello there'
 array.push(4)
// console.log('LET after', someName)
console.log('Const after', array)


sayHello1()

//hoisting
function sayHello1() {
    console.log('Hello')
}

console.log('Hoisted var', hoistedVar) //undefined
console.log('Hoisted var', hoistedLet) 

var hoistedVar = 5;
let hoistedLet = 10;

console.log('Hoisted var', hoistedVar) 
console.log('Hoisted var', hoistedLet) 