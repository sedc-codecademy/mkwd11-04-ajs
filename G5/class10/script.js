console.log('Live')

// //DOM
// // console.log(typeof(document))
// console.log(typeof(window.document.getElementById))

// //Window
// // console.log(typeof(console))
// // console.log(typeof(console.log))
// console.log(typeof(window))


// //Alert
// // alert('Hey')
// // window.alert('Hey there!')

// function sayHello(name) {
//     console.log(`Hey there ${name}`)
// }
// window.sayHello('Bob')

// var someName = 'Joe'
// console.log(window.someName)

// var sayHelloAgain = (name) => {
//     console.log(`Hello ${name}`)
// }
// window.sayHelloAgain('Ana')

// console.log(typeof([]))
// console.log(typeof([].push))


// //Constructor notation

// function Dog(name, color, age, favouriteFood) {
//     this.name = name === undefined ? 'unnamed' : name
//     this.color = color
//     this.age = age
//     this.hasOwner = false
//     this.favouriteFood = favouriteFood
//     this.bark = function() {
//         console.log('Bark bark bark')
//     }
//     this.eat = function(food) {
//         this.favouriteFood.forEach(fav => {
//             fav.toLowerCase() === food.toLowerCase() ? console.log(`My favourite food!`) : console.log("I never tried that!")
//         })
//     }
// }


// let sparky = new Dog('Sparky', 'white', 2, ['fish', 'chicken'])
// console.log('Sparky:', sparky)
// let doggy = new Dog()
// console.log('Doggy', doggy)
// sparky.bark()
// sparky.eat('chicken')

// //This keyword

// //1. In global scope
// // console.log(this)


// //2. In function
// function whatIsThis() {
//     console.log('In function', this)
// }
// whatIsThis()

// //3. In object
// let thisObject = {
//     whatIsThis: this,
//     thisInAMethod: function() {
//         console.log('This in a method', this)
//     }
// }
// console.log('In object', thisObject.whatIsThis)
// thisObject.thisInAMethod()



// function ThisTemplate(description){
// 	console.log('Inside constructor', this);
// 	this.description = description;
// 	this.whatsThis = this;
// 	this.whatsThisFunc = function(){
// 		console.log('In method', this)
// 	};
// }

// ThisTemplate()
// let newObject = new ThisTemplate('We are testing this')
// console.log('What is this', newObject.whatsThis)
// newObject.whatsThisFunc()



//Object Destructuring
// let dog = {
//     dogName: 'Buggy',
//     dogColor: 'black',
//     dogAge: 3
// }
// console.log(dog.dogName)
// console.log(dog.dogColor)
// console.log(dog.dogAge)


// let {dogName, dogColor, dogAge} = dog;
// console.log(dogName)
// console.log(dogColor)
// console.log(dogAge)

// let studentObj = {
//     name: 'Jon Doe',
//     age: 19,
//     scores: {
//         javaScript: 74,
//         advancedJs: 92,
//         cSharp: 80
//     }
// }

// let displaySummaryWithDestructuring = ({name, age, scores: {javaScript, advancedJs, cSharp}}) => {
//     console.log(`2.Hello ${name}`)
//     console.log('2.Age:', age)
//     console.log('2.Your JavaScript score is ' + javaScript)
//     console.log('2.Your advancedJS score is ' + advancedJs)
//     console.log('2.Your cSharp score is '  + cSharp)
// }

// displaySummaryWithDestructuring(studentObj)



// let displaySummary = (student) => {
//     console.log(`Hello ${student.name}`)
//     console.log('Age:', student.age)
//     console.log('Your JavaScript score is ' + student.scores.javaScript)
//     console.log('Your advancedJS score is ' + student.scores.advancedJs)
//     console.log('Your cSharp score is '  + student.scores.cSharp)
// }
// displaySummary(studentObj)


// //Exercise 1 - Destructure this object (make a function that will log a summary of the student)
// let studentObj2 = {
//     name: 'Jon Doe',
//     age: 19,
//     scores: {
//         javaScript: 74,
//         advancedJs: 92,
//         cSharp: 80,
//         projects: {
//             project1: 90,
//             project2: 79
//         }
//     }
// }



// let person = {
//     name: 'Bob Doe',
//     country: 'Canada'
// }
// console.log(person.name)
// console.log(person.country)
// console.log(person.age) //undefined

// let showPerson = (obj) => {
//     const {name, country, age = 25} = obj
//     console.log('Person is:', name, country, age)
// }
// showPerson(person)


//Array destructuring
// const rgb = [255, 200, 0]
// const [red, green, blue] = rgb;
// // rgb[0] //255
// // rgb[1] //200
// // rgb[2] //0

// console.log(`Color: ${red}, ${green}, ${blue}`)

// const color = ['#FF00FF', [255, 255, 0], 'rgb(255, 200, 0)']
// const [hexC, [redC, greenC, blueC], rgbC] = color;
// console.log('Colors:', hexC, redC, greenC, blueC, rgbC)


// //Exercise 2
// const complexString = ['string', 3, ['one', 'two', ['three', 'four']], 'string2']


//Spread operator
// let numbers = [1, 2, 3, 4, 5, 6]
// let sumThree = (num1, num2, num3) => num1 + num2 + num3
// // console.log(sumThree(numbers[0], numbers[1], numbers[2]))
// console.log(sumThree(...numbers))



//Object constructor
//1. Create 
let dog = {
    isHappy: true, 
    bark: function() {
        console.log('Bark, bark bark')
    }
}

let barnie = Object.create(dog)

barnie.name = 'Barnie',
barnie.age = 2;
// console.log('Barnie:', barnie)
let twinOfBarnie = Object.create(barnie)
console.log('Twin:', twinOfBarnie)




//2. Assign
let infoAddress = {
    street: 'Doggie street',
    streetNumber: 3,
    contactPerson: '7634763246'
}


let barnieChip = Object.assign(barnie, infoAddress)
console.log('Chip:', barnieChip)



//3.Methods for getting keys and values
//3.1. Keys method - returns an array of all keys of an object
console.log(Object.keys(infoAddress))

//3.2. Values method - returns an array of all values of an object
console.log(Object.values(infoAddress))

//3.3 Entries 
console.log(Object.entries(infoAddress))


//Dynamically create properties and values
let newDog = {}
let nameProperty = 'dogName'
newDog[nameProperty] = 'Sniffy'

let food = ['bacon', 'fish', 'beef']
food.forEach(item => newDog[item] = true)
console.log(newDog)


//4. Methods for locking/freezing an object
//4.1. Freeze
// Object.freeze(infoAddress)
// infoAddress.ownerName = 'Some name'
// infoAddress.streetNumber = 436
// console.log(infoAddress.ownerName)
// console.log(infoAddress.streetNumber)

//4.2. Seal 
// Object.seal(infoAddress)
infoAddress.ownerName = "Some other name"
console.log('Owner name', infoAddress.ownerName)
infoAddress.streetNumber = 7857
infoAddress.street = 'Cat street maew'
console.log('Street number', infoAddress.streetNumber)
console.log('Street 1', infoAddress.street)
infoAddress.secondStreet = 'Another street'
console.log('Second street', infoAddress.secondStreet)









