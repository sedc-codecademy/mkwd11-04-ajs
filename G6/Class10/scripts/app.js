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

function Dog(name, color, age, favoriteFood, ownerName, city) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.favoriteFood = favoriteFood;
    this.ownerName = ownerName;
    this.city = city;
}