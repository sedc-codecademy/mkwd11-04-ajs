# Looking back at objects 🚚🚛🚚

When working with data it is really important to organize it and structure it accordingly for the application to be easily accessed, readable and scalable. For this reason, there is a need for entities that exist in the real world and their characteristics to be represented in our code and applications. That is why objects exist. Objects are complex data structures that can hold multiple characteristics and functions that work for those objects alone

## Features

* Objects in JavaScript are written with **{ }** brackets
* Objects can hold only two things:
	* **Properties** - Characteristics of the object that can hold any data type such as string, object, array, number, etc. They always explain the object. 
	* **Methods** - Functions that can access and use the object properties and use them to automate or do some action
* Properties and methods are accessed by typing the name of the object + **.** character and the name of the property or method
* Properties and methods can be added any time on an object
* All properties that do not exist always return undefined

### Object literal

```javascript
let dog = {
	name: "Sparky",
	color: "Brown",
	age: 1,
	favoriteFood: ["Carrot", "Watermellon", "Bacon"],
	bark: function(){
		console.log("BARK BARK BARK");
	},
	eat: function(food){
		this.favoriteFood.forEach(fav => 
		fav.toLowerCase() === food.toLowerCase() ? console.log("*My favorite!*") : "");
		console.log("NOM NOM NOM");
	}
}
```

### new Object()

```js
let dog = new Object();
dog.name = "Sparky";
dog.color = "Brown";
dog.age = 1;
dog.favoriteFood = ["Carrot", "Watermellon", "Bacon"];
dog.bark = function(){
		console.log("BARK BARK BARK");
	};
dog.eat = function(food){
		dog.favoriteFood.forEach(fav => 
		fav.toLowerCase() === food.toLowerCase() ? console.log("*My favorite!*") : "");
		console.log("NOM NOM NOM");
		}
```

## Using and changing objects
```javascript
console.log(dog.name); // Sparky
dog.name = "Scooby";
console.log(dog.name); // Scooby
dog.bark() // BARK BARK BARK
dog.bark = function(){
	console.log("AF AF AF");
}
dog.bark() // AF AF AF
```

## Constructor Notation Templates

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
