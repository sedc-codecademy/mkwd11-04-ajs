# Functions pt1 🍋

## What are functions 

Functions are named blocks of code that we can store in memory for later use. We always try and use functions and wrap pieces of logic in functions as much as we can. This is a good practice because functions make our code:
* More organized
* More readable
* Reusable ( We can use one piece of code multiple times)
* Scalable ( We can build upon it easy )

Functions have two phases. The declaration phase ( when we write the function ) and the execution phase ( when we call the function )

### Function declaration

When we write a function that is the moment where we declare it. When we declare a function we tell JavaScript that we have a block of code that we named and that it is ready to be executed when somebody calls it. Keep in mind that when we declare a function we just write it in memory. **THE CODE IS NOT EXECUTED**

``` javascript
// Declaration of a function
function getFullName(firstName, lastName){
    return result = `${firstName} ${lastName}`;
}
```

### Parameters

Everything that a function needs should be passed( given ) to the function. We do that with parameters. Parameters are a point of entry of the function. They are variables that are acting as placeholders for values that we anticipate the caller to enter when calling the function. The parameters in the function above are firstName and lastName. When the person calls the function they will enter the first name in the first position and last name in the second position. That is how javascript knows which one is which, by the positions. Those names will then be replaced by the firstName and lastName placeholders in the whole function. If we call the function with more values than parameters the extra will be ignored. If we call a function with fewer values than parameters the ones that don't have a value will be undefined

### Return

Return is a keyword that means two things:
* End of the execution of the function
* Giving back value to the outside world ( the place that it was called )

The return keyword is the single point of the output of the function. If we want to get something from the function we must put that thing in return. Any value that is not in the return will be inaccessible to the outside world. Because it returns something outside of the function it means it is done with executing and that anything after the return keyword will not execute. If we write 10 lines of code after the return, they will never be executed

### Function execution

When we declare a function, none of the code is executed. If we want to execute the code we have to call the function. When we call a function on a certain line, the code execution goes to the line where the function is declared, it runs the code there and then gets back to the line in which it was executed with a result from the function. In simple terms when we call a function it will run all the code and give us a result that will be added in the same spot where we called the function. That means that if we call a function in a variable the function will first execute and whatever it returned will be stored in the variable. ( the whole function will not be stored in the variable after calling it )

#### Calling of a function ( the result will not be used, nothing will happen )

``` javascript
getFullName("Eric", "Praline"); 
```

#### Calling of a function in variable initialization

``` javascript
// The function will execute and the result then will be stored in the variable
let fullName = getFullName("Eric", "Praline"); 
```

#### Calling a function inside if statement ( if the full name is longer than 20 letters )

``` javascript
if(getFullName("Eric", "Praline The Third").length >= 20){
    console.log("That's a long name!");
}
```

#### Calling a function inside another function

``` javascript
function printPersonDetails(firstName, lastName, age, address){
    return `The person ${getFullName(firstName, lastName)} age ${age} lives on ${address}!`;
}
```

#### How not to call function inside a function

``` javascript
// This will not work because you are declaring a function inside this function, not calling it.
function printPersonDetails(firstName, lastName, age, address){
    let fullName;
    function getFullName(firstName, lastName){
        fullName = `${firstName} ${lastName}`;
    }
    return `The person ${fullName} age ${age} lives on ${address}!`;
}
```

### Parameters vs Arguments

Parameters and Arguments are two different terms in programming. Like we said parameters are the variables which we anticipate values in a function ( Placeholders for the caller values ). The variables ( placeholders ) themselves are called parameters. But the values that the caller passes are called a different name. They are called arguments. So the variables that wait for a value are called parameters and the values given later are called arguments

```javascript
// num1 and num2 are parameters
function sum(num1,num2){
    return num1 + num2;
}
// 2 and 3 are arguments
console.log(sum(2,3));
```

## Anonymous functions

Anonymous functions or more precisely function expressions are functions that are not declared. They are written on the spot where we want them to be executed and when the code runs and gets to the line where they are written, they immediately execute the code that they hold and return a value at the same spot. We use these functions every time we need a function to be executed at some point in time once

#### Anonymous function in a variable

```javascript
let greeting = function(name) {
    return `Hello ${name}`;
}
// The variable becomes the function
greeting("Bob");
```

#### Anonymous function in an event listener

```javascript
let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function(){
    console.log("Button is clicked!");
})
```

## Arrow Functions
Arrow functions are a somewhat new addition to the javascript language. They are a shorter version of the anonymous functions we discussed above. We can use them to simplify and shorten our code. Because they were added in the javascript standard in 2015 they may not be supported in very old browsers ( ex: internet explorer ). There are almost no differences between the two except that the one is shorter than the other. Arrow functions don't need **{ }** if they have only one expression or even a return. If you have more than one expression you will need { } and return. Parameters are put in **( )** only if there is more than one. One parameter doesn't need ( )

#### no parameter, one expression

```javascript
// Anonymous function
let logSomething = function(){
    console.log("Hello there!");
}
// Arrow function
let logSomething = () => console.log("Hello there!");
```

#### one parameter, one expression

```javascript
// Anonymous function
let sumWith10 = function(num){
    return num + 10;
}
// Arrow function
let sumFunc = num => num + 10;
```

#### multiple parameters, one expression

```javascript
// Anonymous function
let sumFunc = function(num1, num2){
    return num1 + num2;
}
// Arrow function
let sumFunc = (num1, num2) => num1 + num2;
```

#### multiple arguments, multiple expressions

```javascript
// Anonymous function
let sumAndLogFunc = function(num1, num2){
    let result = num1 + num2;
    console.log(`The result is: ${result}`)
    return result;
}
// Arrow function
let sumFunc = (num1, num2) => {
    let result = num1 + num2;
    console.log(`The result is: ${result}`)
    return result;
};
```

#### Arrow function in an event listener

```javascript
let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", ()=>{
    console.log("Button is clicked!");
})
```

## Self invoked functions

Self-invoked functions or immediately-invoked function expressions (IIFE) are functions that are not just written on the spot but also called and executed at the same time. Basically what we usually do to create a function like this, is we create an anonymous function at some point in our code and if we want to call it and execute it immediately we put brackets around it and brackets after it just like calling a function. This makes our anonymous functions handy not only when we want to declare at the spot but call it on the spot as well. These functions help us organize and use variables in enclosed spaces where they will not affect or pollute the rest of our code. We can write code in our self-invoked functions that will run at the moment and we will be sure that it will be contained in that function at that moment only. 
**Note:** We can name self invoked functions but there is no point in doing so most of the time

```javascript
// Anonymous functions
let sayHello = function(name) { console.log(`Hello there ${name}!`)}
let sayHelloArrow = name => console.log(`Hello there ${name}!`);
sayHello("Bob"); // calling of anonymous function

// Self invoked functions
(function(name){console.log(`Hello there ${name}!`)})("bob");
(name => console.log(`Hello there ${name}!`))("bob");
```

### Using self invoked functions

```javascript
// Self invoked function result as variable
let fullName = ((first, last) => `${first} ${last}`)("Cave", "Johnson");

// Self invoked function result as an argument
function sum(num1, num2){
	return num1 + num2;
}
let number1 = 25;
let number2 = "15";
let result = sum(number1, (num=> parseInt(num))(number2));

// Self invoked function result as a return of another function
function sayHello(inputName){
	return (name => {
		if(name.length <= 0) { return "No name"}
		else if(name.length < 2) { return "Too short"}
		else { return `Hello there ${name}`}
	})(inputName)
}
console.log(sayHello("Bob"));
```

## Recursion

Functions can call other functions inside of them. But functions can also call themselves inside of their block of code. And because the function is calling itself and itself contains another call to the same function we can easily tell that recursion can have some unwanted effects right away. That is why when we are doing recursion ( calling the same function inside of itself) we always make a condition, so at some point, our function can stop calling itself. 
```javascript
// With function ( standard )
function sumTo(num) {
    if(num === 0) {
        return 0
    }
    return num + sumTo(num - 1)
}

// With an arrow function ( shorter )
let sumTo = num => num === 0 ? 0 : num + sumTo(--num)
```

## Scope

The scope is nothing more than a barrier. This barrier doesn't let anyone access the code in the barrier from the outside but allows the code that is inside it to access things outside of it. In JavaScript, there are three types of scopes. Global, Function, and Block scope

### Function scope ( local scope )

In JavaScript, every function creates a scope around its code. So everything inside the function **{ }** and the parameters are included in the scope of a function. Because everything is in the function scope, we can use variables that are declared inside of it only in the function. For the outside, those variables do not exist. When we declare a variable with the keyword **var** inside of a function, that variable is bound only to that function. Nobody can call it from the outside, because to the outside, it doesn't exist

```javascript
function getFullName(firstName, lastName) {
	var result = `${firstName} ${lastName}`;
	console.log(result);
}
getFullName("Cave", "Johnson"); // Will log Cave Johnson in the console
console.log(result); // Will throw an Uncaught Reference Error
// It throws this error because it can't find a variable named result
```

![Scopes Example](https://github.com/Drakso/AJS2019/blob/master/Class3/Img/scopeImage2.PNG?raw=true)

### Block scope

Block scope is a new barrier introduced in ES6. It is another type of scope that coexists with the function scope. So if the function scope created a barrier between the function and the outside world, the block scope creates a barrier between a block of code and the outside world. A block of code is code that is enclosed in **{ }**.  When we declare a variable with the keyword **let** inside any block of **{ }** that variable is bound only to that block. Nobody can call it from outside of that block. To the outside, this variable does not exist

```javascript
function getFullName(firstName, lastName) {
	if(firstName.length > 1 && lastName.length > 1){
		let blockResult = `${firstName} ${lastName}`;
		var functionResult = `${firstName} ${lastName}`;
		console.log(blockResult); // Will log full name in the console
	}
	console.log(functionResult); // Will log full name in the console
	console.log(blockResult ); // Will throw Uncaught Reference Error
}
getFullName("Cave", "Johnson"); // Will log Cave Johnson in the console
console.log(blockResult); // Will throw an Uncaught Reference Error
console.log(functionResult); // Will throw an Uncaught Reference Error
```

functionResult can be accessed anywhere in the function because it is declared with **var** and is contained only in the function **{ }**.  blockResult can be accessed only in the if block ( inside the if **{ }** ) because it is declared with **let**. It is always a good practice for our variables to be contained in the block that they are in so that is why let is always a smarter option to use

### Global scope

The global scope is the space of our script. Everything that is not inside a function or block scope, lives in the global scope. That is why sometimes you might hear people calling the variables declared outside of all functions, global variables

```javascript
let first = "Cave";
let last = "Johnson";
function getFullName(firstName, lastName) {
	if(firstName.length > 1 && lastName.length > 1){
		let result = `${firstName} ${lastName}`;
		console.log(result); // Will log full name in the console
	}
}
getFullName(first, last); // Will log Cave Johnson in the console
console.log(first); // Will log Cave in the console
console.log(last); // Will log Johnson in the console
console.log(result); // Will throw an Uncaught Reference Error
```

#### Multiple functions scopes example

```javascript
let ten =  10; // Global scope
function sumPlusOne(num1, num2){
	let one =  1; // Function sumPlusOne scope
	console.log(num1 + num2 + one);
	function add5(number){
		console.log(number +  5); // Function add5 scope
	};
	add5(one);
	function add10(number){
		console.log(number +  ten); // Function add10 scope
	};
	add10(ten);
}
sumPlusOne(ten,7);
```

![Scopes Example Colored](https://github.com/Drakso/AJS2019/blob/master/Class3/Img/scopeImage1.PNG?raw=true)

### Hoisting

Declaring variables and functions in JavaScript are not treated as other pieces of code. There is a special event that happens before the execution of the code. Before code is executed, all declarations of variables as well as all declarations of functions, are moved at the top of the document. This of course is behind the scene and it ONLY happens for declarations. This means that if we declare and initialize, the initialization will not be moved to the top of the document. The initialization will stay on the line it was initially written and will execute when the code gets to that line. But the variable itself will be declared at the top, even if the initialization is on some other line. This is called Hoisting. This process creates the possibility of calling functions for example, before they are declared. When you see the code, this would not make sense, but if you know what JavaScript does before code execution, then it makes perfect sense. We have to note that var, let and const all have different behavior when it comes to hoisting. Function declarations and function expressions also differ.

### Function declaration hoisting

```js
// We call the function before we declare it in the code
sayHello();

// This declaration is hoisted to the top before the code executes, so even if it seems like it is after the call, it is actually before
function sayHello(){
  console.log("Hello there user!");
}
```

```js
// This call will not work, since function expressions are not hoisted at the top. Only standard declarations.
sayHello();

let sayHello = () => console.log("Hello there user!");
```

### Variable declaration hoisting

```js
// Hoisting with var
// This will print undefined, and not "hoisted is not defined"
// This is beause the declaration will be hoisted => var hoisted;
console.log(hoisted);

// The hoisted = 5 initialization is not hoisted, so that is why we don't see 5
var hoisted = 5;
```


```js
// Hoisting with let and const
// let and const do not allow for variables to be declared after they are used
console.log(hoisted); // This will show "hoisted is not defined" error
let hoisted = 5;

// We can however do the declaration manually and this will give the same output as the var example
let hoisted;

console.log(hoisted); // This will return undefined
hoisted = 5;
```

## Extra materials 📘

* [A good piece about functions](https://dev.to/howtocodejs/an-overview-of-javascript-functions-47id?utm_source=digest_mailer&utm_medium=email&utm_campaign=digest_email)
* [When to use arrow functions](https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26)
* [Scopes explained](https://andy-carter.com/blog/variable-scope-in-modern-javascript)
* [Self invoked functions and how to use them](https://idiallo.com/javascript/self-invoking-anonymous-function)
* [Recursion in JS](https://medium.freecodecamp.org/recursion-in-javascript-1608032c7a1f)
