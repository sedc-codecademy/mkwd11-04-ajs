// Everything in JS in an Object

// console.log(typeof window)
// console.log(typeof document)
// console.log(typeof window.document)
// console.log(typeof {})
// console.log(typeof [])
// console.log(typeof 'ivo kostovski')
// console.log(typeof 'ivo kostovski'.split(''))

// Shorthand method calls
// window.console.log('test')
// console.log('window', window)
// console.log('console', window.console)
// console.log()
// console.error()
// console.table()
// alert('test')
// window.alert('test 2')

// Global scope

// function sayHello() {
//     console.log('hello')
// }
// sayHello()
// window.sayHello()

// let letVariable = 'let Variable';
// const constVariable = 'const variable'
// var varVariable = 'var variable'

// console.log(letVariable)
// console.log(window.letVariable)
// console.log(window.constVariable)
// console.log(window.varVariable)

// Constructor functions

// function Dog(name, color, age, favoriteFood, ownerName, city) {
//     this.name = name;
//     this.color = color;
//     this.age = age;
//     this.favoriteFood = favoriteFood;
//     this.ownerName = ownerName;
//     this.city = city;
// }

// Dog.favoriteToy = 'Ball'

// let murdzo = new Dog('Murdzo', 'Bela', 5, 'Meso', 'Ivo', 'Skopje')

// let blacky = new Dog('Blacky', 'black', 3, 'meat', 'Ivo', 'Skopje')

// let emptyDog = new Dog()

// let largeDog = new Dog('Large', 'yellow', 2, 'meat', 'Ivo', 'Skopje', 'Ball')

// console.log(murdzo)

// blacky.favoriteToy = 'Ball'

// console.log(Dog.favoriteToy)

// console.log(blacky)
// console.log(emptyDog)
// console.log(largeDog)

function Dog(name = 'N/A', color, age, favoriteFood, ownerName, city) {
    this.name = name;
    this.color = color || 'Colorful';
    this.age = age ?? 'N/A';
    this.favoriteFood = favoriteFood;
    this.ownerName = ownerName;
    this.hasOwner = !!ownerName;
    this.city = city;

    this.bark = function() {
        console.log('Av Av')
    }
}

// let noNameDog = new Dog()
// console.log(noNameDog)

// let puppy = new Dog('Blacky', 'White', 0)
// console.log(puppy)

// let mike = new Dog('Mikey', 'Brown', 2, 'meat', 'Ivo')

// console.log(mike)

// noNameDog.bark()
// mike.bark()

// THIS
// window.surname = 'window obj surname';
// window.firstName = 'window obj firstName';
// window.whatIsThis = 'window obj this value'

// let thisObj = {
//     firstName: 'this obj name',
//     whatIsThis: this.surname, // references to the Window object
//     whatIsThisMethod: function() {
//         console.log('Inside function this', this.firstName);
//         console.log('global this', globalThis)
//     },
//     whatIsThisArrowMethod: () => {
//         console.log('Inside arrow function this', this.firstName)
//     }
// }

// console.log(thisObj.whatIsThis)

// thisObj.whatIsThisMethod()
// thisObj.whatIsThisArrowMethod()

// Destructuring

// const blacky = new Dog('Blacky', null, null, 'meat', 'Kristijan', 'Tetovo');

// console.log(blacky)

// console.log(blacky.name)

// // const { name, age } = blacky;

// const name = blacky.name
// const age = blacky.age

// console.log(name, age)

// const color = 'yellow';

// const { age = 'N/A', color: dogColor } = blacky

// console.log(age, dogColor)


// const rgb = [255, 200, 100];

// const green = rgb[1]

// const [ red, green, blue ] = rgb
// const [ , , blue ] = rgb

// console.log('red', 'green', 'blue')
// console.log(red, green, blue)

