# Objects pt1 &#x1F34E;
## What are objects
We program using code. But we solve business problems and build solutions as humans with our own logic. In order to translate these solutions and problems in code more clear and organised we use lot of different mechanics. We put values in variables, executable actions in functions and multiple values in arrays. In order to translate more complex entities such as users or products we use objects. Objects are used to encapsulate and organize entities from our business logic, group different features as modules and even used as modules for organizing functions and values. Objects can hold two types of data:
* Properties - Simple or complex values ( ex: string, number, array, another object )
* Methods - Functions
### Everything is an object
In JavaScript everything is an object. All the functions and values that are native to JavaScript are one way or another object or connected to some object. If we look at the DOM or **document** we can see that it's not some special type of entity. It's actually an object. All methods like **getElementById** and **querySelector** are actually methods of the object document. We also know the **window**, the representation of our browser window. From that object we access all sorts of features such as **console** which is an object as well and has a method called **log**. Every **array** is actually an object, **length** is a property of that array object and **push** and **pop** are methods. 
```javascript
typeof(document) // object
typeof(document.getElementById) // function 
typeof([]) // object
typeof([].push) // function 
typeof(console) // object
typeof(console.log) // function 
typeof(window) // object
```
Since everything comes from the window object, the window object is left out and we don't have to write it. But make no mistake, all the functions and objects that we use in our script such as alert, prompt, document, console etc. are properties and methods of the window object. 
```javascript
console.log("hey"); // hey
window.console.log("hey"); // hey

console.log(document); // [document]
console.log(window.document); // [document]

alert("hey"); // hey
window.alert("hey"); // hey
```
Our functions and variables declared with var are also inside of the window.
```javascript
function sayHello(name){
	console.log(`Hey there ${name}!`);
}
sayHello("Bob"); // Hey there Bob!
window.sayHello("Bob"); // Hey there Bob!
var something = "a thing!";
console.log(something); // a thing!
console.log(window.something); // a thing!
```

## Constructor Notation Templates
Constructor notation even tho not used as much for creating new plain objects, it definitely has it's uses for creating templates that we can use to create objects of the same type. This is useful when we have multiple objects with the same properties and methods. We don't want to create objects over and over again with the same properties and methods, so we create one template with constructor notation that will be a guideline for all other objects created from it. For example if we need to manipulate with multiple dog objects, we create a template for a dog. We use that template then to create as much dogs as we need without creating the objects with the properties and methods all over again. Templates similar as these are called classes in other languages. As a convention, templates are named with an uppercase first letter, so we can distinguish which one is a template and which one is an object. 
```javascript
function Dog(name, color, age, favoriteFood){
	this.name = name === undefined ? "unnamed" : name; // in case tehre is no name
	this.color = color;
	this.age = age;
	this.hasOwner = false; // default value for all
	this.favoriteFood = favoriteFood;
	this.bark = function(){
		console.log("BARK BARK BARK");
		};
	this.eat = function(food){
		dog.favoriteFood.forEach(fav => 
		fav.toLowerCase() === food.toLowerCase() ? console.log("*My favorite!*") : "");
		console.log("NOM NOM NOM");
		}
}

let sparky = new Dog("Sparky", "Brown", 1, ["Chicken", "Cucumber"]);
let doggy = new Dog(); // will have name unnamed
```

### this keyword
The this keyword is nothing more than a pointer to the current object. It's a short pointer to the thing that you are working with at the moment. In different situations, this points to different object depending on where we execute the code. For instance:
#### this in the global scope
If we write this in the global scope we will get the window object
```javascript
console.log(this);
```
#### this in a function
If we write this in a function and call the function in our script we would also get the window object. That is because that function is still in the same execution context
```javascript
function whatIsThis(){
  console.log(this);
}
```
#### this in an object
If we create an object in our script and give it a property with the value **this**, we can see that this is still the window object. We are still in the same execution context.
```javascript
let thisObj = {
	whatsThis: this
}
console.log(thisObj.whatsThis);
```
#### this in a method
Now in methods, the execution context is changing. We are executing the function in the object. That's why in the method declared with function **this** will get the value of the current object from which it was called from. 
```javascript
let thisObj = {
	whatsThis: this,
	whatsThisMethod: function(){
		console.log(this);
	}
}
console.log(thisObj.whatsThis); // window
thisObj.whatsThisMethod(); // thisObj
```
#### this in a constructor template
When we are writing a constructor template, we are actually writing a function. When we want to create a new object from that function, we use the new keyword and from the parameters of the function we add some internal properties of the function ( remember, functions as first class citizens can have properties ). This means that if we just call a function in our script, **this** will still be the window object. But if we create a new instance then the **this** binds to the newly created object. 
```javascript
function thisTemplate(description){
	console.log(this);
	this.description = description;
	this.whatsThis = this;
	this.whatsThisFunc = function(){
		console.log(this)
	};
}
thisTemplate();
let whatsThisTemplate = new thisTemplate("we are testing this");
console.log(whatsThisTemplate.whatsThis);
whatsThisTemplate.whatsThisFunc();
```
## Destructuring
**Destructuring simply implies breaking down a complex structure into simpler parts**. In JavaScript, this complex structure is usually an **object** or an **array**. With the destructuring syntax, you can extract smaller fragments from arrays (items) and objects (properties). Destructuring syntax can be used for variable declaration or variable assignment. You can also handle nested structures by using nested destructuring syntax. So if we add a simple example for destructuring an object it will look something like this:
```javascript
let dog = {
    dogName: "Bugsy",
    dogColor: "Black",
    dogAge: 4
    }
//If we want to console our dog's object proerties we can do this:
console.log(dog.dogName); //Bugsy
console.log(dog.dogColor); //Black
console.log(dog.dogAge); //4

//If we use destructuring on our object it will look like:
const {name, color, age} = dog;
console.log(name); //Bugsy
console.log(color); //Black
console.log(age); //4
```
So what is done in the previous example is that we declare an object and give to it three variables name, color and age, but we initialize it to our existing dog object, and since the **dog** object contains only three properties they will stored in **name, color and age** respectively.

### Why Destructuring?
To explain the why of destructuring, it's better to look at a scenario. In the code below, we have a simple student object that has properties **name, age** and has a nested object of **scores** in three subjects(Maths, Elementary Science, English). Imagine we need to display some information based on this data and for that purpose we declare a displlaySymmary function that accepts one input parameter that should be a student object. 

```javascript
const student = {
    name: 'John Doe',
    age: 19,
    scores: {
        JavaScript: 74,
        AdvancedJS: 63,
        CSharp: 85
    }
};

// A function that just displays some info about the student object for us.
function displaySummary(student) {
    console.log('Hello, ' + student.name);
    console.log('Your JavaScript score is ' + (student.scores.JavaScript || 0));
    console.log('Your AdvancedJS score is ' + (student.scores.AdvancedJS || 0));
    console.log('Your CSharp score is ' + (student.scores.CSharp || 0));
}

displaySummary(student);
//This will display the following:
// Hello, John Doe
// Your JavaScript score is 74
// Your AdvancedJS score is 63
// Your CSharp score is 85
```

So just for getting the scores and display it we should write **student.scores.JavaScript**, which is not much an issue, but what if there is a need to access some properties even more deep level of nesting? Of course, the chances of making a syntax error are very high, and probably somewhere you will enter **score** instead of **scores**. And again, if the scores object we are accessing is deeply nested in another object, the object access chain becomes longer which could mean more typing and making more error prone code. That's why destructuring is used, because with destructuring we can do the same in a more expressive and compact syntax.

Imagine the previous example but now, by using destructuring. Everythng is the same except for the function displaySummary()

```javascript
//By using destructuring
function displaySummary({ name, scores: { JavaScript = 0, AdvancedJS = 0, CSharp = 0 } }) {
    console.log('Hello, ' + name);
    console.log('Your JavaScript score is ' + JavaScript);
    console.log('Your AdvancedJS score is ' + AdvancedJS);
    console.log('Your CSharp score is ' + CSharp);
}
displaySummary(student)
//Compared to the previous one, that does not use destructuring

function displaySummary(student) {
    console.log('Hello, ' + student.name);
    console.log('Your JavaScript score is ' + (student.scores.JavaScript || 0));
    console.log('Your AdvancedJS score is ' + (student.scores.AdvancedJS || 0));
    console.log('Your CSharp score is ' + (student.scores.CSharp || 0));
}
displaySummary(student)
```
From the comparison, we can see that the function declaration with destructuring is more clear, and simple.

### Default Values
Trying to assign a variable corresponding to a key that does not exist on the destructured object will cause the value **undefined** to be assigned instead. You can pass default values that will be assigned to such variables instead of undefined. Here is a simple example.

```javascript
let person = {
    name: 'John Doe',
    country: 'Canada'
};

// Assign default value of 25 to age if undefined
const { name, country, age = 25 } = person;

// Here I am using ES6 template literals
console.log(`I am ${name} from ${country} and I am ${age} years old.`);

// I am John Doe from Canada and I am 25 years old.'
```
### Array Destructuring
As for now we see how objects are destructed and why sometimes should we use object destructuring so that can make our code easier and clear. Except objects we can also destruct arrays and in the following lines and examples we can see how destcruct arrays is done.
In array destructuring, you use an array literal on the left-hand-side of an assignment expression. Each variable name on the array literal maps to the corresponding item at the same index on the destructured array. Here is an example.
```javascript
const rgb = [255, 200, 0];

// Array Destructuring
const [red, green, blue] = rgb;

console.log(`R: ${red}, G: ${green}, B: ${blue}`); // R: 255, G: 200, B: 0
```
 Also destructuring can be used to a nested arrays:
 ```javascript
const color = ['#FF00FF', [255, 0, 255], 'rgb(255, 0, 255)'];

// Use nested destructuring to assign red, green and blue
const [hex, [red, green, blue]] = color;

console.log(hex, red, green, blue); // #FF00FF 255 0 255
```

## Spread syntax
With spread syntax we can pass collection values as separate values in places. For instance if we have 3 numbers in an array and we want to send them all as parameters of a function, we can do it with one keyword. 
##### Spread as function parameters
```javascript
let numbers = [2,3,5];
function sumThree(num1,num2,num3){
    return num1 + num2 + num3;
}
// We can call the function with the array values separately with spread syntax
console.log(sumThree(...numbers));
```

## Object methods
The main constructor function from which every object inherits in JavaScript is the **Object**. This entity is not only used as a template for building new objects, but it can also serve other functions. On this entity there are methods attached that help us do some tasks on our objects. 

### Manipulating with the object structure
When building an object, we create properties and methods for that particular object. All the properties and methods create the structure of our object. This structure can be used for manipulating other objects, either by duplicating it or merging object structures together.
#### create
Create is a method that accepts an object as a parameter and will return a new object with the inherited entities from the object passed as the argument. 
```javascript
let dog = {
    isHappy: true,
    bark: function(){
        console.log("BARK BARK BARK!")
    }
}

let barnie = Object.create(dog); // barnie has everything dog has
barnie.name = "Barnie";
barnie.color = "White";
barnie.age = 2;
barnie.happyBirthday = function(){
    console.log("Happy birthday Barnie!");
    this.age++;
}

let barnieTwinBrother = Object.create(barnie); // the twin has everything barnie has
barnieTwinBrother.name = "Booch"; // This name is added on the twin
```
#### assign
Assign is a method that can merge two objects in to one. It accepts two objects and it tries to merge the second object in to the first one.
```javascript
let addressInfo = {
    street: "Dogge Street",
    streetNumber: 24,
    contactPerson: "0703452323"
}

let barnieChip = Object.assign(barnie, addressInfo); // copies from address to barnie

let anotherAddress = {
    street: "Other Street",
    streetNumber: 12,
    contactPerson: "072990002"
}

let barnieChipUpdate = Object.assign(barnieChip, anotherAddress); // overrides address values
let barnieChipUpdateReversed = Object.assign(anotherAddress, barnieChip); // we have barnie without the changed address
```
### Reading entities inside an object
Entities inside of the object such as properties and method names and their values can be accessed. We can get them as collections with different methods of the Object.
#### keys
The keys method returns all the property and method names of our object in an array.
```javascript
console.log(Object.keys(barnie));
let dog = {
    name: "Sparky",
    age: 1,
    bark: function(){
        console.log("BARK BARK BARK");
    },
    printProperties: function(){
        Object.keys(this).forEach(key => console.log(key));
    }
}
```
#### values
The values method returns all values from our properties and methods ( the whole functions ) in an array.
```javascript
console.log(Object.values(barnie));
dog.printValues: function(){
    Object.values(this).forEach(key => console.log(key));
}
```
#### entries
The entries method is actually a combination of both the keys and values methods. It returns an array of arrays that have a key and value pair. Basically it returns the keys and the values in smaller arrays of 2 elements. The first element is always the key and the second always the value.
```javascript
console.log(Object.entries(barnie))
dog.printOnlyProperties = function(){
    Object.entries(barnie).forEach(pair => typeof(pair[1]) === "function" ? "" : console.log(pair));
}
```
#### dynamically create properties and values
There is no method for dynamically creating properties. We can't make a variable and add it next to the object as property name. The object instead of taking the value of the variable and setting it as a name, it will take the name of the variable as it's property name. Dynamically adding properties is done through the **[ ]** brackets. 
```javascript
let newDog = {};
let nameProperty = "dogName";
newDog[nameProperty] = "Sniffy"; // will have dogName: Sniffy property

let food = ["bacon", "cucumber"];
food.forEach(food => newDog[food] = true);
console.log(newDog); // will have dogName, bacon and cucumber properties
```

### Manipulating the reading and writing accessibility of entities 
Objects in JavaScript can be very flexible. This can be a very good thing, but it can also make us regret having this freedom. That is why there are Object methods that give us the power to change the accessibility of our entities. 
#### freeze
The freeze method allows us to completely lock our object. This means that adding new properties or methods is not available ( it will not throw an error but it will not do any changes to the object it self ). It also means that we can't change the values of our properties and methods that already exist in our object.  
```javascript
Object.freeze(barnie);
barnie.friend = "Sparky";
console.log(barnie.friend); // barnie stays the same
barnie.name = "Bob";
console.log(barnie.name); // barnie.name is still barnie
console.log(Object.isFrozen(barnie)); // true
```
#### seal
The seal method allows us to lock the structure of our object. This means that we can't add new properties or methods, but we can change the existing ones. ( again, adding new properties will not throw an error, but it will not change the object it self )
```javascript
Object.seal(dog);
dog.friend = "Barnie";
console.log(dog.friend); // dog is still the same
dog.name = "Bill";
console.log(dog.name); // the name is changed to Bill
console.log(Object.isSealed(dog)); // true

console.log(Object.isSealed(barnie)); // true
console.log(Object.isFrozen(dog)); // false
```

## Extra materials &#x1F4D9;
* [Introduction and using objects](https://codetheweb.blog/2018/06/09/javascript-objects/)
* [What is THIS in javascript](https://blog.bitsrc.io/what-is-this-in-javascript-3b03480514a7)
* [Object methods](https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript)
* [How to use spread syntax](https://codeburst.io/javascript-es6-the-spread-syntax-f5c35525f754)
* [How To Use Object Destructuring in Modern Javascript](https://itnext.io/how-to-use-object-destructuring-in-modern-javascript-59758ebfb778)
