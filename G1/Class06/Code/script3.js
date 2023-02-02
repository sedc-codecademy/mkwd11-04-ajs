'use strict';

// ----------- higher order function additional parameters

let array = [1, 2, 3, 4, 5, 6, 7];

//map
// second parameter in map() function is the INDEX, third is the array

array.map((element, index, arr) => console.log(index));
console.log("--------------");

//filter
//second parameter in filter() function is the INDEX, third is the array

array.filter((element, index, arr) => console.log(arr));
array.filter((element, index, arr) => console.log(element));

//reduce
//third parameter in reduce is INDEX
//foutrth parameter is the array .reduce() is called on

array.reduce((accumulator, currentItem, index, arr) => {
    console.log("accumulator", accumulator)
    console.log("currentItem", currentItem)
    console.log("index", index)
    console.log("arr", arr)
    console.log("---------------");
})

//reduce has one paramether that is the function (the function has 4 parameters)

let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log("before calling the function", numbers);

//pure function
function increaseByOne(array){
    let result = [];

    for(let i = 0; i < array.length; i++){
        result.push(array[i] + 1);
    }
    return result;
}

//inpure function - DON'T do this when you can
let number = 5;

function increeByOneImpure(array){
    let result = [];
    for(let i = 0; i < array.length; i++){
        result.push(array[i] + number);
    }
    return result;
}

console.log(increeByOneImpure(numbers))

// strict typing

// randomNumber =  15;
// console.log(randomNumber);

// function sum(num, num){
//     return num + num;
// }
// console.log(sum(5, 25));

let color = "red";

function changeColor(){
    color = "blue";
    let color2 = "purple"
    console.log(color2);
}

changeColor();

letcolor2 = "orange";
console.log(color2);