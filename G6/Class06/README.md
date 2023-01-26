# Functions pt2 🍊

## Functions as first class citizens

Functions are first-class citizens in the JavaScript language. But what does a first-class citizen mean? Well simply put, if some entity in a programming language has the power to be used as any other entity in that language, it is considered a first-class citizen. Why are functions in JavaScript considered first-class citizens? Because they can act and be used as any other entity such as:

* Stored in a variable
* Stored in an array
* Used as an argument to another function
* Used as a return value from another function
* Have properties like objects
* Have methods like objects

If you don't believe it here are some crazy examples of what JavaScript functions are capable of:

### Storing function as a variable

```javascript
let sayHello = function(name) { console.log(`Hello there ${name}!`) };
// we call the function from the variable the same as we do with functions
sayHello("Bob")
```

### Storing functions in an array and using them

```javascript
let numberStatsFunctions = [
(num) => num > 0 ? "Positive" : "Negative",
(num) => num % 2 === 0 ? "Odd" : "Even",
(num) => num >= 0 ? num.toString().length : num.toString().length - 1
];
// We can call the functions from the array
// We can loop it with for as well
numberStatsFunctions[0](2); // Positive
numberStatsFunctions[1](2); // Even
numberStatsFunctions[2](2); // 1
```

### Using function as an argument

```javascript
function calculator(calculateFunc, number1, number2){
	return calculateFunc(number1, number2);
}
function sum(number1, number2){ return number1 + number2 };
function difference(number1, number2){ return number1 - number2 };
// We send functions sum and difference to the calculator function
// We can send anonymous functions as well
console.log(calculator(sum, 3, 6)); // 9
console.log(calculator(difference, 40, 12)); // 28
```

### Returning a function from another function

```javascript
function calculator(operation){
	switch(operation){  
		case  "+":  
		return function(number1, number2){ return number1 + number2 };
		break;  
		case  "-":  
		return function(number1, number2){ return number1 - number2 };
		break;  
		default:  
		console.log("ERROR")
		return null;
	}
}
// We call the calculator function and get back a function as a result
let result = calculator("+");
// We can call the result function now
console.log(result(2,5)); // 7
// We can also call the function right away
console.log(calculator("-")(7,2)); // 5
```

### A function with properties and a method

```javascript
function sayHello(name){
	return `Hello there ${name}!`;
}
// Adding a properties to a function
sayHello.defaultName = "Bob";
sayHello.description = "This is a function that greets a person.";
// Getting property value from the function
sayHello(sayHello.defaultName ); // Hello there Bob!
// Adding a method to a function
sayHello.differentGreeting = function(name){
	return `Hi ${name}!`;
}
// Calling the method from the function
sayHello.differentGreeting("Bob"); // Hi Bob!
```

## Function arguments

Every functions has a collection of all the arguments sent to that function when it was called. Since the person calling the function can send as much arguments as he wants, it's important to know how to check how many arguments were passed before continuing with your execution

```javascript
function longestString() {
	console.log(arguments[0]) // first argument
	console.log(arguments[1]) // second argument
	console.log(arguments[2]) // third argument
	let longest = '';
	for (let i=0; i < arguments.length; i++) {
		if (arguments[i].length > longest.length) {
			longest = arguments[i];
		}
	}
	return longest;
}
```

## Higher-order functions

Higher-order functions are just functions that take other functions as arguments. With these functions, we can make our code more readable and more organized. We can combine higher-order functions to get results that would otherwise cost us 10+ lines of code, to be written and compacted into only one or two

### forEach

forEach is a function that accepts a function as an argument and it runs it for every element in an array. This function does not return anything. It just runs a code for every element without any resul in return

```javascript
// Without higher order function
for (let i = 0; i < students.length; i++) {
    console.log(`${students[i].firstName} ${students[i].lastName}`);
}
  
// With higher order function using a function
function logFullNames(student){
	console.log(`${student.firstName} ${student.lastName}`);
}
students.forEach(logFullNames);

// With higher order function using annonimous function
students.forEach(function(student){ console.log(`${student.firstName} ${student.lastName}`)});

// With higher order function using arrow function
students.forEach(student => console.log(`${student.firstName} ${student.lastName}`));
```

### filter

Filter is a higher order function that accepts a function as an argument. That function has an expression that tests every value from the collection and returns a new collection with values that are true for the expression or statement in the argument function

```javascript
// Without higher order function
let above18 = [];
for (let i = 0; i < students.length; i++) {
    if (students[i].age >= 18) {
        above18.push(students[i]);
    }
  }
  
// With higher order function using a function
function above18check(student){
	return student.age >= 18; 
}
let above18 = students.filter(above18check);

// With higher order function using annonimous function
let above18 = students.filter(function(student){ return student.age >= 18});

// With higher order function using arrow function
let above18 = students.filter(student => student.age >= 18);
```

### map

Map is a higher order function that accepts a function as an argument as well. But this function will execute a code on every item of a collection and then return it. This means that we can modify or use every item in an array in a particular way with only one line of code

```javascript
// Without higher order function
let fiveGradeStudentsNames = [];
for (let i = 0; i < students.length; i++) {
    if (students[i].averageGrade === 5) {
        fiveGradeStudentsNames.push(`${students[i].firstName} ${students[i].lastName}`); 
    }
  }
  
// With higher order function using a function
function fiveGradeCheck(student){
	return student.averageGrade === 5; 
}
function fullName(student){
	return `${student.firstName} ${student.lastName}`;
}
let fiveGradeStudentsNames = students
.filter(fiveGradeCheck)
.map(fullName);

// With higher order function using annonimous function
let fiveGradeStudentsNames = students
.filter(function(student){ 
	return student.averageGrade === 5
})
.map(function(student){return `${student.firstName} ${student.lastName}`;});

// With higher order function using arrow function
let fiveGradeStudentsNames = students
.filter(student => student.averageGrade === 5)
.map(student => `${student.firstName} ${student.lastName}`);
```

### reduce

Reduce is a function that accepts a function with two parameters as an argument and a starting value. This function aggregates multiple values from a collection into one place. It does this with the function passed in with two parameters. The first parameter is always an aggregate variable. This means that in that all calculations and results will be combined there. And after that, you have the second parameter which is changed after every cycle and represents a value from the collection

```javascript
// Without higher order function
let allGradesExeptLowest = 0;
for (let i = 0; i < students.length; i++) {
    if (students[i].averageGrade > 1) {
        allGradesExeptLowest += students[i].averageGrade;
    }
  }
// With higher order function using a function
function lowestGradeCheck(student){
	return student.averageGrade > 1; 
}
function getGrades(student){
	return student.averageGrade;
}
function agregateGrades(sum, grade){
	return sum += grade;
}
let allGradesExeptLowest = students
.filter(lowestGradeCheck)
.map(getGrades)
.reduce(agregateGrades, 0);

// With higher order function using annonimous function
let allGradesExeptLowest = students
.filter(function(student){ return student.averageGrade > 1})
.map(function(student){ return student.averageGrade })
.reduce(function(sum, grade){ return sum += grade }, 0);

// With higher order function using arrow function
let allGradesExeptLowest = students
.filter(student => student.averageGrade > 1)
.map((student) => student.averageGrade)
.reduce((sum, grade) => sum += grade, 0);
```