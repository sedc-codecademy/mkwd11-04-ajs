console.log("We are live!")

// Anonymous functions
let func1 = function() { console.log("Hello") };
func1();
let array = [2, 4, 5, function() { return 2 + 5 - 7 }];
console.log(array);
console.log(array[3]());

// Arrow functions
let someResult = num => num + 10;
console.log(someResult(25));
let sumFunc = (num1, num2) => num1 + num2;
console.log(sumFunc(25, 5));

let sumFunc1 = (num1, num2) => {
    let result = num1 + num2;
    console.log(`The result is: ${result}`)
    return result;
};
console.log(sumFunc1(22, 5));

let randomFunc = () => console.log("Hey guys!");
randomFunc();

// Self Invoked functions
let func = () => {
    let result = 5;
    console.log(result);
};

func();

let result = 5;
console.log(result);

result = 10;

(() => {
    let result = 5;
    console.log(result);
})();

(function(num1, num2) {
    console.log(num1 + num2);
})(2, 5);

let result2 = (function(num1, num2) {
    return num1 + num2;
})(7, 5);
console.log(result2);

function sum(num1, num2) {
    console.log(num1 + num2);
}

sum((function suma(num1, num2) {
    return num1 + num2;
})(7, 5), 5)

// Scope
// var y = 5;
// var y = 6;
// console.log(y);
let x = 5;
x = 6;
console.log(x);

let ten = 10; // Global scope
function sumPlusOne(num1, num2) {
    let one = 1; // Function sumPlusOne scope
    console.log(num1 + num2 + one);

    function add5(number) {
        console.log(one);
        let insideFunction = 100;
        console.log(number + 5); // Function add5 scope
    };
    //console.log(insideFunction); // WILL NOT WORK
    add5(one);

    function add10(number) {
        console.log(number + ten); // Function add10 scope
    };
    add10(ten);
}
sumPlusOne(ten, 7);

// Recursion
function sumTo(num) {
    if (num === 0) {
        return 0
    }
    return num + sumTo(num - 1)
}

// With an arrow function ( shorter )
let findSumTo = num => num === 0 ? 0 : num + findSumTo(--num);