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

let wheeledVehicle = Object.create(new Vehicle(1, 'Opel', '123', 1000));

console.log(wheeledVehicle)
wheeledVehicle.printVehicle()

wheeledVehicle.drive = function () {
    console.log(`Started driving!`);
}

let car = Object.create(wheeledVehicle);

car.name = 'Peugeot'
car.id = 2;

console.log(car)

car.drive()
car.printVehicle()