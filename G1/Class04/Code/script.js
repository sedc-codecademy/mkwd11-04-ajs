//Annonimus functions
let func = function(){console.log("Hello")};
func();
let array = [2, 4, 8, function(){ return 1 + 3}];
console.log(array);
console.log(array[3]());

//Arrow function
let someResultAnnonimus = function(num){
    return num + 10;
}
let resultAnn = someResultAnnonimus(4)
console.log(resultAnn)
let someResult = num => num + 10;
console.log(someResult(4));

let sumFunc1 = (num1, num2) => {
    let result = num1 + num2;
    console.log(`The result is : ${result}`);
    return result;
};
console.log(sumFunc1(22, 20));

let randomFunc = () => console.log("Hey guys!");
randomFunc();

//Self invoke function

let funcSI = () => {
    let result = 9;
    console.log(result);
};
funcSI();

let result = 9;
console.log(result);

result = 10;

(() => {
    let result = 9;
    console.log(result);
})();

((num1, num2) => {
    console.log(num1 + num2);
})(5, 10);

let resultSI = (function(num1, num2){
    return num1 + num2;
})(5, 10);
console.log(resultSI);

function sum(num1, num2){
    console.log(num1 + num2);
}


sum((function parameterNum1(num1, num2){
    return num1 + num2;
})(7, 8), 15); // parameter num1 is the function(self invoke)
                // parameter num2 is 15

let ten = 10 // Global scope
function sumPlusOne(num1, num2){
    console.log(ten);
    let one = 1; // Function sumPlusOne scope
    console.log(num1, num2 + one)
    function add5(number){
        let insideFunction = 100; //Function add5 scope
    }
    //console.log(insideFunction); //WILL NOT WORK
    function add10(number){
        console.log(number + ten); // Function add10 scope
    }
    add10(ten);
    add10(one);
}
sumPlusOne(ten, 30);
// sumPlusOne(one, 30); //WILL NOT WORK because one is inside the function

//Recursion
function sumTo(num){
    if(num === 0){
        return 0;
    }
    return num + sumTo(num-1)
}
console.log(sumTo(6));

// With an arrow function (shorter)
let sumToE = num => num === 0 ? 0 : num + sumToE(--num);
console.log(sumToE(6));


//Bonus Example
for(let i = 1; i < 10; i++)
{
    let flag1 = i; 
    let flag2 = i;
    console.log(--flag1); // first decrement by 1 then print
    console.log(flag2--); // first print then decrement by 1
    console.log(flag1, flag2);
    console.log("------");
}