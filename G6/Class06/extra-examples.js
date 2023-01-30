// SORT

// Without higher order function
function sortFunc(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].grade < arr[j].grade) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

let sorted = sortFunc(students);

//With higher order function using a function
function sortGradesDesc(student1, student2) {
    return student2.grade - student1.grade; // descending
}

function sortGradesAsc(student1, student2) {
    return student1.grade - student2.grade; // ascending
}
console.log("With higher order function using a function DESC ");
console.log(students.sort(sortGradesDesc));

console.log("With higher order function using a function ASC ");
console.log(students.sort(sortGradesAsc));

// With higher order function using annonimous function
students.sort(function(student1, student2) {
    return student2.grade - student1.grade; // Descending
});
students.sort(function(student1, student2) {
    return student1.grade - student2.grade; // Ascending
});

// With higher order function using arrow function
console.log(students.sort((student1, student2) => student2.grade - student1.grade)); // Descending
console.log(students.sort((student1, student2) => student1.grade - student2.grade)); // Ascending

//Keeping the original array
function copyArray(array) {
    let copied = [];
    array.forEach(x => copied.push(x));
    return copied;
}
let sortedStudents = copyArray(students);
console.log("With higher order function using a function DESC ");
console.log(sortedStudents.sort((student1, student2) => student2.grade - student1.grade)); // Descending
console.log("With higher order function using a function ASC ");
console.log(sortedStudents.sort((student1, student2) => student1.grade - student2.grade)); // Ascending

// let sortedStudents = students;
// sortedStudents.sort((student1, student2) => student2.grade - student1.grade);

console.log(sortedStudents);
console.log(students);
console.log('Array sort is successfull!');

// CALL BY VALUE VS BY REFERENCE
function callByValue(numOne, numTwo) {
    console.log("Inside Call by Value Method");
    numOne = 100;
    numTwo = 200;
    console.log("numOne = " + numOne + " numTwo = " + numTwo);
}
let numOne = 10;
let numTwo = 20;
console.log("Before Call by Value Method");
console.log("numOne = " + numOne + " numTwo = " + numTwo);
callByValue(numOne, numTwo)
console.log("After Call by Value Method");
console.log("numOne = " + numOne + " numTwo = " + numTwo);

//   output will be : 
//   --------------- 
//   Before Call by Value Method 
//   varOne = 10 varTwo = 20 
//   Inside Call by Value Method 
//   varOne = 100 varTwo = 200 
//   After Call by Value Method 
//   varOne = 10 varTwo = 20

function callByReference(students) {
    console.log("Inside Call by Reference Method");
    students.forEach(student => student.grade += 1);
    console.log(students);
}

console.log("Before Call by Reference Method");
console.log(students);
callByReference(students)
console.log("After Call by Reference Method");
console.log(students);
console.log("");

// PURE FUNCTIONS

//pure func

function add(a, b) {
    return a + b
}
console.log(add(4, 5))

//impure func

var addNew = 0;

function add(a, b) {
    addNew = 1;
    return a + b + addNew
}

console.log(add(4, 5));


//Impure function

// let obj = { a: 0 }

// const impure = (input) => {
//   // Modifies input.a
//   input.a = input.a + 1;
//   return input.a;
// }

// let b = impure(obj)
// console.log(obj) // Logs { "a": 1 }
// console.log(b) // Logs 1

// // The function changed the obj.a value that is outside it's scope.

// Pure function

let obj = { a: 0 }

const pure = (input) => {
    //Does not modify obj
    let output = input.a + 1;
    return output;
}

let b = pure(obj)
console.log(obj) // Logs { "a": 0 }
console.log(b) // Logs 1
    //The function did not change the object obj values


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Pure function
function increaseByOne(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] + 1)
    }
    return result;
}

//Impure function  ( using a variable from the outside )
let one = 1

function increaseByOne(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] + one)
    }
    return result;
}

//Impure function ( mutating data from the outside )
function increaseByOne(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] += 1
    }
    return numbers;
}

//Impure function ( changing the DOM outside of the function )
function increaseByOne(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] + 1)
        document.getElementById("result") += numbers[i] + " ";
    }
    return result;
}

// USE STRICT TYPING

// // Using a variable, without declaring it, is not allowed:
//'use strict';
console.log(x = 3.14); // will throw an error

// // Objects are variables too.
// Using an object, without declaring it, is not allowed:
'use strict';
// // Will throw an error
console.log(x = { p1: 10, p2: 20 });

//'use strict';
let x = 3.14;
// //Will throw an error
delete x;

// // Deleting a function is also not allowed
//'use strict';
function x(p1, p2) {};
// //Will throw an error
delete x;

// //Duplicating a parameter name is not allowed
'use strict';
// // Will throw an error
let p1 = 10;

function x(p1, p1) { return (p1 + p1); };
console.log(x(p1, p1));

// // Using reserved key words as variable or function names
'use strict';
// // Will throw an error
let private = 3.14;
console.log(private);


'use strict';

function longestString(num1) {
    console.log(arguments)
    let longest = "";
    for (let i = 0; i < arguments.length; i++) {
        //console.log(i + 1 + ": " + arguments[i])
        if (arguments[i].length > longest.length) {
            longest = arguments[i];
        }
    }
    return longest;
}

console.log("Result:" + longestString("Hello", "Yo", "Super", "Hello SEDC", "HelLo SEDC", 2, true));