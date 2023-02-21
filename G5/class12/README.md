# Objects pt3 🥜

## Classes in JavaScript

Inheritance with prototypes can be a hassle. JavaScript was not built with object-oriented functionalities in mind from the beginning and it was pretty hard to work with prototypes. This is why in ES6 JavaScript finally got classes and object-oriented features. From that point forward we can use classes instead of constructor functions and use inheritance and constructors very easily. We could also access the parent constructor pretty easy as well. This is a huge change for the language that made developer's lives very easy. So classes are just like constructor classes but they are written in a different manner and have a few neat features. They can be created by just writing the keyword **class**. Note that these changes did not change how JavaScript, the new classes still work with prototypes behind the scenes. It is just better structured and made easier and more convenient to use

```javascript
class Vehicle {
    constructor(id, name, batch, price) {
        this.id = id;
		this.name = name;
		this.batchNo = batch;
		this.price = price;
		this.company = "move.inc";
    }
    printVehicle() {
		console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`);
    }
}
let boat = new Vehicle(33, "Boat", "2z3", 50000);
console.log(boat);
boat.printVehicle();
```

## Inheritance with classes

When using inheritance with prototypes in JavaScript, we needed to do a lot of the connecting and setting up by ourselves. But when using classes this has changed. We can now inherit very easily with one keyword. When creating classes we can just add the **extends** keyword next to the class name and write another class. This will tell the class that we are creating that it inherits from the class after the extends keyword. Nothing to connect or write extra code, it connects by itself

```javascript
class WheeledVehicle extends Vehicle {
    constructor(id, name, batch, price, wheels) {
	    super(id, name, batch, price)
        this.wheels = wheels;
    }
    driveVehicle() {
		console.log(`We are driving a ${this.name} on ${this.wheels} wheels!`);
    }
}
let bike = new WheeledVehicle(87, "Bike", "12g", 700, 2);
console.log(bike);
bike.printVehicle();
bike.driveVehicle();
console.log(Object.getPrototypeOf(bike));
```

## Constructors

Classes also contain a keyword for their constructor. We can use it to dictate what the person needs to enter when they try and create a new instance of an object from the class. This can be done with the **constructor()** keyword. We can also access the constructor of the parent if we inherit from another class. This can be written inside the constructor with the keyword **super()**. Inside the super constructor, we can pass values as we would pass for the constructor of the parent class

```javascript
class Car extends WheeledVehicle {
    constructor(id, name, batch, price, doors, ac) {
	    super(id, name, batch, price, 4);
        this.doors = doors;
        this.airConditioning = ac;
        if(ac) this.price += 400;
    }
    buyCar(money) {
	    money >= this.price ? console.log("Congrats! You bought a car") : 
		console.log(`You need ${this.price - money} more to buy this car!`);
    }
}
let car = new Car(99, "Car", "22k", 7800, 4, false);
console.log(car);
car.printVehicle();
car.driveVehicle();
car.buyCar(5000);
console.log(Object.getPrototypeOf(car));
```

## Static methods

When we write methods in a class, the methods are stored in the prototype. These functions can be called only if we create an object from the class. But if we want to create a method on the class itself, that can be called without creating an object, we can with the keyword **static**. The static methods are great for creating utility and service methods on the class itself

```javascript
class Car extends WheeledVehicle {
    constructor(id, name, batch, price, doors, ac) {
	    super(id, name, batch, price, 4);
        this.doors = doors;
        this.airConditioning = ac;
        if(ac) this.price += 400;
    }
    buyCar(money) {
	    money >= this.price ? console.log("Congrats! You bought a car") : 
		console.log(`You need ${this.price - money} more to buy this car!`);
    }
    static addAc(car){
		if(!car.airConditioning){
			car.airConditioning = true;
			car.price += 400;
			console.log(`The car has AC now and it costs ${car.price}`);
		} else {
			console.log(`The car already has AC!`);
		}
	}
}
```

## Get / Set

Getters and Setters are not a new concept in programming. When we create properties on objects there are two things that can happen after we create the object: try and get a value from a property or try to set a value to a property. There are functions that handle the getting and setting of these properties behind the scenes and we can use them in classes if we need to change the way we get or set a property. This is useful when we want to validate something on setting or log something on setting or getting. We can also structure the data that comes from our getter or setter

```javascript
class ElectricCar extends Car {
    constructor(id, name, batch, price, doors, owner) {
        super(id, name, batch, price, doors, true);
		this.owner = owner;
    }
    get owner() {
		console.log("We are getting the name of the owner. Please wait...");
        return "The car is owned by:" + this._owner;
    }
	set owner(ownerName){
		console.log("We are setting the name of the owner. Please wait...")
		ownerName.length > 1 ? this._owner = ownerName : (()=> {throw new Error("Owner name too short!")})();
	}
}

let myElectricCar = new ElectricCar(12, "Tesla", "23n", 30000, 5, "Petko");
console.log(myElectricCar);
console.log(myElectricCar.owner);
let myOtherElectricCar = new ElectricCar(13, "Electra", "51q", 25000, 3, "I");
```

#### Check if an object is an instance of a class

```javascript
console.log(myElectricCar instanceof ElectricCar);
console.log(myElectricCar instanceof Car);
console.log(myElectricCar instanceof Vehicle);
```

## Organizing code in separate scripts

JavaScript as a language has long been a language executed in the browser, and most of the time, the files were divided in different scripts which were loaded one by one. This made a chain of scripts executed with the developers foresight of what classes and functions were actually needed in each and every one of them. The rise of JavaScript as a back-end made the need for a better system. So the idea of importing and exporting modules became a thing. So now, with this feature we can actually divide our code in different scripts and export or import functions, values and objects wherever we need them. The system is simple. We divide the code in multiple js files. We export only the things that we want to expose to other files. We import whatever we need from those files. We use the imported functions, objects or values. 
> Note: The main script needs to have type="module" in order for this to work
> Note: The system does not work locally, so you would have to use some local server. You can try Live Server for Visual Studio Code

#### Folder Structure
```txt
index.html
script.js
modules
-- messageService.js
-- sayService.js
```

#### index.html
```html
<script type="module" src="script.js"></script> 
```

#### script.js
```js
import { sayHello, sayGoodbye } from "./modules/sayService.js";

sayHello("Bob");
console.log("How are ya?");
sayGoodbye("Bob");
```

#### modules/messageService.js
```js
// Exporting can be done bundled together
export { words, getRandomWord }

let words = {
    helloVariatns: ["Hey", "Hi", "Hello", "Yo"],
    goodbyeVariants: ["Bye", "Goodbye", "Cheers", "Peace"]
}

function getRandomWord(words){
    return words[ Math.floor( Math.random() * words.length )];
}
```

#### modules/sayService.js
```js
// Exporting can be done separately
import { getRandomWord, words } from "./messageService.js";

export function sayHello(name){
  let hello = "Hey";
  console.log(`${getRandomWord(words.helloVariatns)} there ${name}!`);
}

export function sayGoodbye(name){
  let bye = "Bye";
  console.log(`${getRandomWord(words.goodbyeVariants)} there ${name}!`);
}
```


## Extra materials 📘
* [Class syntax explained](https://javascript.info/class)
* [From prototypes to Classes](https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript)
* [JavaScript classes under the hood](https://medium.com/tech-tajawal/javascript-classes-under-the-hood-6b26d2667677)
* [Documentation on exporting and importing modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
