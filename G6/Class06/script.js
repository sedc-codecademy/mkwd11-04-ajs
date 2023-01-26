// Storing function as variable
let sayHello = function(name) { console.log(`Hello there ${name}!`) };
// we call the function from the variable the same as we do with functions
sayHello("Jane")

// Storing function in an array
let numberStatsFuncstions = [
    (num) => num > 0 ? "Positive" : "Negative",
    (num) => num % 2 === 0 ? "Odd" : "Even",
    (num) => num >= 0 ? num.toString().length : num.toString().length - 1
];

console.log(numberStatsFuncstions[0](2));
console.log(numberStatsFuncstions[1](2));
console.log(numberStatsFuncstions[2](2));

// using function as an argument
function calculator(calculateFunc, num1, num2) {
    return calculateFunc(num1, num2);
}

function sum(num1, num2) { return num1 + num2 };

function diff(num1, num2) { return num1 - num2 };

console.log(calculator(sum, 1, 2));
console.log(calculator(diff, 20, 3));

// return function from another function
function calculator(operation) {
    switch (operation) {
        case "+":
            return function(num1, num2) { return num1 + num2 };
        case "-":
            return function(num1, num2) { return num1 - num2 };
        default:
            console.log("ERROR")
            return null;
    }
}

let result = calculator("+");
console.log(result(2, 5));

console.log(calculator("-")(7, 2));

// function with properties and a method
function sayHello(name) { return `Hello there ${name}!` };

sayHello.defaultName = "Bob";
sayHello.description = "This a function that says Hello to someone";

console.log(sayHello(sayHello.defaultName));
sayHello.differentHello = function(name) {
    return `Hi ${name}!`;
}
console.log(sayHello.differentHello("Bob"));

let students = [
    { firstName: "Bob", lastName: "H", grade: 5, age: 19 },
    { firstName: "Mel", lastName: "B", grade: 2, age: 33 },
    { firstName: "Jill", lastName: "M", grade: 3, age: 15 },
    { firstName: "Lucky", lastName: "J", grade: 5, age: 18 },
    { firstName: "Strike", lastName: "K", grade: 4, age: 16 },
    { firstName: "Eric", lastName: "I", grade: 1, age: 17 }
]

//Higher-order functions
// forEach

//without higher-order func
function getAllStudentsNames(students) {
    for (let i = 0; i < students.length; i++) {
        console.log(`${students[i].firstName} ${students[i].lastName}`);
    }
}
getAllStudentsNames(students);

// with higher-order func using a function
function logFullNames(student) {
    console.log(`${student.firstName} ${student.lastName}`);
}
students.forEach(logFullNames);
//with arrow function
students.forEach(student => console.log(`${student.firstName} ${student.lastName}`));

//filter

function getAllAbove18(students) {
    let above18 = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].age >= 18) {
            console.log(students[i].firstName)
            above18.push(students[i]);
        }
    }
    return above18;
}
getAllAbove18(students);

//with higher-order func
function checkAbove18(student) {
    return student.age >= 18;
}
let above18 = students.filter(checkAbove18);

//annonimous func
let above18Anon = students.filter(function(student) { return student.age >= 18 });

//arrow func
let above18Arrow = students.filter(student => student.age >= 18);

above18.forEach(x => console.log(`${x.firstName} ${x.lastName}`));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(number => console.log(number));

let filteredNumbers = numbers.filter(number => number > 3).forEach(x => console.log(x));

console.log(filteredNumbers);

// map
// without higher-order
function getFiveGradeStudents(students) {
    let fiveGradeStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade === 5) {
            fiveGradeStudents.push(`${students[i].firstName} ${students[i].lastName}`);
        }
    }
    fiveGradeStudents.forEach(x => console.log(`${x}`));
    return fiveGradeStudents;
}
let fiveGrade = getFiveGradeStudents(students);

// with higher-order arrow
let fiveGradeStudentsNames = students.filter(student => student.grade === 5) // tuka student se uste gi sodrzi site propertija kako i pocetno vo array-ot, t.e.{ firstName: "Bob", lastName: "H", grade: 5, age: 19 } i moze da go pristapime sekoe property
    .map(student => `${student.firstName} ${student.lastName}`) // tuka vekje posle .map() imame STRING sto e sostaven od vrednosta na zadadenite propertija vo ovoj slucaj firstName i lastName i ima vrednost Bob H 
    .forEach(student => console.log(student)); // zatoa tuka moze da go logirame celoto ime 'Bob H' samo so student, namesto ${student.firstName} ${student.lastName} kako vo prethodnite scenarija

// reduce

let allGradesExceptLowest = 0;

function gradesExceptLowest(students) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade > 1) {
            allGradesExceptLowest += students[i].grade;
        }
    }
    console.log(allGradesExceptLowest);
}

gradesExceptLowest(students);

// with higher-order func with arrow

let allGradesExceptLowestHoArrow = students.filter(student => student.grade > 1).map((student) => student.grade)
    .reduce((sum, studentGrade) => sum += studentGrade, 0);
console.log(allGradesExceptLowestHoArrow);

// // step 1: sum = 0; student = {name: "Bob", grade: 5}
// // step 2: sum(0) = sum(0) + student.grade(5)
// // step 3: sum = 5; student = {name: "Mel", grade: 2}
// // step 4: sum(5) = sum(5) + student.grade(2)
// // step 5: sum = 5; student = {name: "Jill", grade: 3}
// // step 6: sum(5) = sum(5) + student.grade(3)
// // itn. itn.
// // step 16: sum = 19;
// // step 17 return suma;