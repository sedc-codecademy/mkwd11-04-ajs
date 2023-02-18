console.log('We are live!')

//Inicijalizacija
// let x = function() {}
// let y = class {}

// function Hero(name, level) {
//     this.name = name;
//     this.level = level;
// }

// Hero.prototype.greet = function() {
//     return `${this.name} says hello!`
// }


// class Hero {
//     constructor(name, level) {
//         this.name = name;
//         this.level = level;
//     }
//     greet() {
//         return `${this.name} says hello!`
//     }
// }

// let hero1 = new Hero('betmen', 1)
// console.log(hero1)


// class Superhero extends Hero {
//     constructor(name, level, spell) {
//         super(name, level);
//         this.spell = spell;
//     }
// }

// let superhero2 = new Superhero('Tor', 3, 'Tunder')
// console.log(superhero2)


// function Vehicle(id, name, batchNo, price){
// 	this.id = id;
// 	this.name = name;
// 	this.batchNo = batchNo;
// 	this.price = price;
// 	this.company = "move.inc";
// 	this.printVehicle = function(){
// 		console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`);
// 	}
// }

// let vehicle = Object.create(new Vehicle(12, "Yugo", "25B", 500));


class Vehicle {
    constructor(id, name, batchNo, price) {
        this.id = id;
        this.name = name;
        this.batchNo = batchNo;
	    this.price = price;
        this.company = "move.inc";
    }
    printVehicle() {
        console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`);
    }
}

let boat = new Vehicle(4, 'Boat', '22a', 550000)
// boat.printVehicle()



class WheeledVehicle extends Vehicle {
    constructor(id, name, batchNo, price, wheels) {
        super(id, name, batchNo, price)
        this.wheels = wheels;
    }
    driveVehicle() {
        console.log(`We are driving a ${this.name} on ${this.wheels} wheels`)
    }
}

let bike = new WheeledVehicle(21, 'Bike', '12r', 2000, 2)
// bike.driveVehicle()
// bike.printVehicle()


class Car extends WheeledVehicle {
    //во constuctor ги додаваме сите пропертија како параметри (и нови и наследени)
   constructor(id, name, batchNo, price, wheels, doors, ac) {
    //во super ги додаваме само наследените
    super(id, name, batchNo, price, wheels)
    this.doors = doors;
    this.airConditioning = ac;
    if(ac) this.price += 500;
   }
   buyCar(money) {
     money >= this.price ? console.log("Congrats! You can buy the car!") :
     console.log(`You need ${this.price - money} to buy the car!`)
   }
   static addAc(car) {
    if(!car.airConditioning) {
        car.airConditioning = true;
        car.price += 500;
        console.log('This car now has AC')
    } else {
        console.log('This car already has AC')
    }
   }
}

const car1 = new Car(9, 'Fikjo', '34s', 1000, 4, 4, false)
// console.log(car1)
// car1.printVehicle()
// car1.driveVehicle()
// car1.buyCar(800)

// Car.addAc(car1)
// console.log(car1)


class ElectricCar extends Car {
    constructor(id, name, batchNo, price, wheels, doors, ac, battery, owner) {
        super(id, name, batchNo, price, wheels, doors, ac)
        this.battery = battery;
        this.owner = owner;
    }

    get ownerAndBattery() {
        console.log('We are getting the name of the owner and battery capacity...Please wait')
        return `The car is owned by: ${this._owner} and has capacity of ${this._battery}`
    }

    set owner(ownerName) {
        console.log('We are setting the name of the new owner. Please wait...')
        ownerName.length > 1 ? this._owner = ownerName : (() => {throw new Error('Owner name too short')})
    }
}

let electricCar1 = new ElectricCar(1, 'Tesla', '2a', 100000, 4, 5, true, '50kw', 'Petko')
console.log(electricCar1.owner)
console.log(electricCar1)



console.log(electricCar1 instanceof Car)



//Exercise 1 - solution
class Animal {
    constructor (name,type, age, size){
        this.name = name
        this.type = type
        this.age = age
        this.size = size
        this.isEaten = false
    }
    eat (someAnimal){
        if (someAnimal instanceof Animal){
            if(this.type === 'herbivore'){
                console.log(`The animal ${this.name} is a ${this.type} and does not eat other animals!`)
            }
            else if (this.type !== 'herbivore'){
                if (someAnimal.size >= (2* this.size)){
                    console.log(`The animal ${this.name} tried to eat the ${someAnimal.name} but it was too large!`)
                }
                else {
                someAnimal.isEaten = true;
                console.log(`The animal ${this.name} ate the ${someAnimal.name}`)
                }
            }
        }
        else {
            console.log(`The animal ${this.name} is eating ${someAnimal}`)
        }
    }
}

let lion = new Animal ('lion', 'carnivore', 5, 100)
let elephant = new Animal ('elephant', 'herbivore', 15, 400)
let mouse = new Animal ('mouse', 'omnivore',1, 0.5 )
let horse = {
    name : 'horse',
    type : 'herbivore',
    age : 8,
    size: 200,
    isEaten: false
}
lion.eat (elephant)
elephant.eat(mouse)
lion.eat (horse)






//getters and setters
//Ако не користиме underscore (return this.name) го пристапуваме пропертито, што ќе ја тригерира гетер функцијата, која што го пристапува пропертито name, која што ја тригерира getter функцијата, итн, итн - се создава infinite loop
//За да го спречиме тој infinite loop, треба името на варијаблата да ни се разликува од името на методите - најдобра пракса за ова е додавање на _ пред името на варијаблата (return this._name)
//***Underscore variable is the standard for private variables and methods. There is no true class privacy in JavaScript. It signifies that these methods (beginning with _) should not be used outside your object. Technically, you can, but _ indicates that you shouldn’t.


class Person {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name + '!!!'
    }

    set name(newValue) {
        this._name = newValue;
    }
    
}

let somePerson = new Person('Petko')
console.log(somePerson.name)
somePerson.name = 'Mitko'
console.log(somePerson.name)





