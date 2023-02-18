# Objects pt2 🌰

## Inheritance
One of the core principles of object-oriented programming is inheritance.  We use inheritance to easily create objects, organize them, and reuse properties and methods for multiple objects at a time. We do this by creating objects from a template or schematic that has most of the parts that the object needs. With this, we create an inheritance chain. The object inherits from another entity. The object has everything that the entity has. We can inherit multiple times or even from multiple templates or schematics ( classes ) depending on the language that we are using. There is no clear programming rule on which entity should inherit from which. The inheritance logic is always derived from the business logic and from the requirements of the thing that we are building. A nice example would be a vehicle company. The company works with vehicles. Every vehicle has a name, price, unique identifier, and series name. No matter the vehicle, plane, car, or bike, it will always have these properties. From the vehicle entity, we can create another entity called a wheeled vehicle. Here we can have properties like a number of wheels and other properties that are relevant for wheeled vehicles. This entity inherits from vehicle so it would also have a name, price, unique identifier, and series name. From the wheeled entity, we can create a car entity. The car entity has a number of doors and fuel capacity properties. It also has everything that wheeled vehicle and vehicle. Now we have an inheritance chain

![Inheritance Image](https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/inheritance.jpg?raw=true)

## Inheritance in JavaScript

When we talk about the inheritance we usually talk about inheriting from some template or schematic entities like classes. But in JavaScript, the inheritance is a bit different. JavaScript objects inherit directly from other objects. So unlike most object-oriented languages where we inherit from a class and build an object from the class, in JavaScript we only have objects and they can inherit from themselves. A similar entity to a class is the constructor function which got a new shiny overhaul in ES6

```javascript
function Vehicle(id, name, batchNo, price){
	this.id = id;
	this.name = name;
	this.batchNo = batchNo;
	this.price = price;
	this.company = "move.inc";
	this.printVehicle = function(){
		console.log(`${id}. ${name}, BATCH: ${batchNo}, ${price}$`);
	}
}

let wheeledVehicle = Object.create(new Vehicle(12, "Yugo", "25B", 500));
wheeledVehicle.drive = function(){console.log("WROOM!")}
let car = Object.create(wheeledVehicle);
car.fuelTank = 32;
car.drive(); // WROOM!
car.printVehicle(); // Prints vehicle
```

With the create method, we create a new object that inherits from the object given 

## Prototypes 

In order to inherit from another object, we have to keep the information from the parent object, the object that we inherit from. JavaScript does this in a very sneaky way. Every time we create an object, JavaScript sticks a new property to that object called \__proto\__. This prototype property keeps all the information about the object that we inherited from. This way we can use properties and methods from the object that we inherited from and also keep track of which object is inheriting from which. So if we request for a property or a method for our object, the object tries to find it in its properties and methods. If it can't it goes to the \__proto\__. If it can't find it there it goes to the \__proto\__ of the prototype and so on. We can see and access an object prototype by accessing the **\__proto\__** property of the object

```javascript
function Vehicle(id, name, batchNo, price){
	this.id = id;
	this.name = name;
	this.batchNo = batchNo;
	this.price = price;
	this.company = "move.inc";
	this.printVehicle = function(){
		console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`);
	}
}
function WheeledVehicle(wheels, name){
	this.wheels = wheels;
	this.name = name;
	this.drive = function(){
		console.log(`Driving on ${this.wheels} wheels!`);
	}
}
WheeledVehicle.prototype = Object.create(new Vehicle());
let car = new WheeledVehicle(4, "Yugo");
car.price = 500;
car.id = 2;
car.batchNo = "24a";
car.printVehicle(); // prints Yugo
```

#### Adding methods on to the prototype

```javascript
WheeledVehicle.prototype.stop = function(){
	console.log(`The vehicle ${this.name} stopped.`);
}
car.stop(); // the car Yugo stopped.
```

#### Accessing prototype

```javascript
WheeledVehicle.prototype.stop = function(){
	console.log(`The vehicle ${this.name} stopped.`);
}

console.log(car.__proto__.__proto__.company); // move.inc
car.stop(); // the vehicle Yugo stopped.
car.__proto__.stop(); // The vehicle undefined stopped
```

### The prototype chain

We can inherit from one entity and that entity can inherit from some other entity and so on. This process creates a chain of objects that inherit one from the other. In order for the objects to be chained like this and know the order in which they are inheriting we use the prototypes. Every object has a prototype and when we open the prototype object and that object inherited from another object as well, that object would also have a prototype. This is called a prototype chain. It is important to note that in the prototype we keep information about the object that it was inherited from. This does not mean that that object in the prototype is a new object held in memory. All prototypes are just references to the original objects in memory. So if we create a vehicle object and a car object inheriting from vehicle, the car object will have vehicle as a prototype. But it will not have a new object of vehicle, only a reference to the vehicle object

```javascript
function Vehicle(id, name, batchNo, price){
	this.id = id;
	this.name = name;
	this.batchNo = batchNo;
	this.price = price;
	this.company = "move.inc";
	this.printVehicle = function(){
		console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`);
	}
}
function WheeledVehicle(id, batch, price, name, wheels){
	//this.__proto__= Object.create(new Vehicle(id, name, batch, price));
	Object.setPrototypeOf(this,new Vehicle(id, name, batch, price))
	this.wheels = wheels;
	this.drive = function(){
		console.log(`Driving on ${this.wheels} wheels!`);
	}
}
function Car(id, batch, price, name, doors, fuelCapacity){
	//this.__proto__= Object.create(new WheeledVehicle(id, batch, price, name, 4));
	Object.setPrototypeOf(this, new WheeledVehicle(id, batch, price, name, 4))
	this.name = name;
	this.doors = doors;
	this.fuelCapacity= fuelCapacity;
	this.drift = function(){
		console.log(`The ${this.name} is drifting!`);
	}
}
let aCar = new Car(2, "b8", 1800, "someCar", 3, 34);
aCar.printVehicle(); // Prints someCar
aCar.drive(); // Drives
aCar.drift(); // Drifts
```

#### Check for some object's prototype

```javascript
Object.getPrototypeOf(aCar); // Prototype
```

### Constructor

Constructor is a function that constructs other objects by some rules and logic. These constructor functions are basically looking at a blueprint, they build the object as the blueprint requires and they return the newly created object. Objects constructed by such functions, always have a reference to the constructor function in their prototype. With this, we can always know which object was created from which constructor function. We can access the constructor of an object by going inside of its prototype. There we can find a method called **constructor**. Constructor functions have the **prototype** property. With this property, we can inherit from another constructor function

```javascript
console.log(aCar.constructor);
let newVehicle = new aCar.constructor(1, "plane", "fh4", 999999);
```

## Extra materials 📘
* [Prototypes explained](https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript)
* [Inheritance in JavaScript](https://hackernoon.com/understanding-javascript-prototype-and-inheritance-d55a9a23bde2)
