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

// console.log(person2)