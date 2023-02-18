// OBJECTS part 2

//  key : value
// const dog = {
//     name: 'Blacky',
//     age: 7,
//     breed: 'Sharplaninec',
//     hasOwner: true
// }

// let dogKeys = Object.keys(dog) // return is always array of strings

// console.log(dogKeys)

// let dogValues = Object.values(dog)

// console.log(dogValues)

// let obj = {}

// console.log('Is this a truthy value?', !!obj)

// let isObjEmpty = Object.keys(obj).length > 0

// console.log(isObjEmpty)

// let dogEntries = Object.entries(dog)

// console.log(dogEntries)
// console.log(dogEntries[2][1]) // how to access value in array in array

// Object freeze

// const dog = {
//     name: 'Blacky',
//     age: 7,
//     breed: 'Sharplaninec',
//     hasOwner: true
// }

// console.log('1. dog', dog)

// Object.freeze(dog)

// dog.name = 'Sparky'
// dog.age = 8
// delete dog.hasOwner
// dog.hasTail = true

// console.log('2. dog', dog)

// Object.seal(dog)

// dog.name = 'Sparky'
// dog.age = 8
// delete dog.hasOwner
// dog.hasTail = true

// console.log('2. dog', dog)

// Object create

// const obj1 = {} // literal notation
// const dog = new Dog() // constructor function

// const obj = Object.create({})

// console.log(obj)

// const person = {
//     isHuman: false,
//     name: "Alien",
//     printIntroduction: function () {
//         console.log(`My name is ${this.name} and I'm ${this.isHuman ? 'a human' : 'not a human'}`)
//     }
// }

// person.printIntroduction()

// const person2 = Object.create(person);

// console.log('1.', person2)
// person2.name = 'Mike'
// person2.isHuman = true

// person2.printIntroduction()

// console.log(person)
// console.log(person2)

// Object assign

// const target = { a: 1, b: 2 }
// const source = { c: 3, d: 4 }

// const resultObj = Object.assign(target, source)

// console.log('target', target)
// console.log('source', source)
// console.log('resultObj', resultObj)

// const target = { a: 1, b: 2 }
// const source = { c: 3, d: 4 }

// const resultObj = { ...target, ...source }

// console.log('target', target)
// console.log('source', source)
// console.log('resultObj', resultObj)

// Heroes

// function Hero(name, level) {
//     this.name = name;
//     this.level = level;
// }

// let martin = new Hero('Martin', 1)

// console.log(martin)

// Hero.prototype.greet = function () {
//     console.log(`Hi my name is ${this.name}`)
// }

// martin.greet()

// function Healer(name, level, spell) {
//     Hero.call(this, name, level)
//     this.spell = spell;
// }

// Healer.prototype = Object.create(Hero.prototype)

// const mike = new Healer('Mike', 2, 'Magic')

// console.log(mike)

// mike.greet();

// Healer.prototype.heal = function () {
//     console.log(`${this.name} is casting a ${this.spell} spell.`)
// }

// mike.heal()
// martin.heal()

// function Vehicle (id, name, batchNo, price) {
//     this.id = id;
//     this.name = name;
//     this.batchNo = batchNo;
//     this.price = price;
//     this.company = 'Move Inc.'
//     this.printVehicle = function () {
//         console.log(`${this.id}. ${this.name}, Batch No.: ${this.batchNo} - ${this.price}$`)
//     }
// }

// let wheeledVehicle = Object.create(new Vehicle(1, 'Opel', '123', 1000));
// console.log(wheeledVehicle)
// wheeledVehicle.printVehicle()
// wheeledVehicle.drive = function () {
//     console.log(`Started driving!`);
// }
// let car = Object.create(wheeledVehicle);
// car.name = 'Peugeot'
// car.id = 2;
// console.log(car)
// car.drive()
// car.printVehicle()

// function WheeledVehicle(id, name, batchNo, price, wheels) {
//     Vehicle.call(this, id, name, batchNo, price);
//     this.wheels = wheels;
// }

// Vehicle.prototype.drive = function () {
//     console.log(`Started driving!`);
// }

// WheeledVehicle.prototype = Object.create(Vehicle.prototype)

// let car = new WheeledVehicle(4, 'VW', 'abc', 2000, 4)

// let car2 = new Vehicle(2, 'Yugo', 'uiyot', 500)

// console.log(car)

// // car.__proto__.__proto__.drive()
// car.drive()

// WheeledVehicle.prototype.stop = function () {
//     console.log('Stopped driving.')
// }

// car.stop()

// car2.drive()

// // car2.stop()

// console.log(car2)

// Classes

function Vehicle (id, name, batchNo, price) {
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;
    this.company = 'Move Inc.'
    this.printVehicle = function () {
        console.log(`${this.id}. ${this.name}, Batch No.: ${this.batchNo} - ${this.price}$`)
    }
}

// class Vehicle {
//     constructor(id, name, batchNo, price) {
//         this.id = id;
//         this.name = name;
//         this.batchNo = batchNo;
//         this.price = price;
//         this.company = 'Move Inc.'
//     }
//     #password = 'secret password';    

//     printVehicle() {
//         console.log(`${this.id}. ${this.name}, Batch No.:${this.batchNo} - ${this.price}$`)
//     }

//     printPassword() {
//         console.log(this.#password)
//     }
// }

// class WheeledVehicle extends Vehicle {
//     constructor(id, name, batchNo, price, wheels) {
//         super(id, name, batchNo, price)
//         this.wheels = wheels;
//     }
// }

// let boat = new Vehicle(2, 'Boat', 'SK123', 10000)

// let car = new WheeledVehicle(3, 'Yugo', 'BT123', 300, 4)

// console.log(boat)
// console.log(car)

// car.printVehicle()
// console.log(boat.company)
// console.log(boat.#password)
// boat.printVehicle()
// boat.printPassword()

// Get and Set

class Dog {
    constructor(name, age, breed, owner) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        // This value is set while initializing new instances of the Dog class
        // this.isPuppy = age < 1 ? 'This is a puppy' : 'This is not a puppy';
    }

    get isPuppy() {
        return this.age < 1 ? 'This is a puppy' : 'This is not a puppy';
    }
}

let mike = new Dog('Mike', 5, 'German Shepard', 'Ivo')
console.log(mike.owner)