// Constructor
//Constructor is a function that constructs other objects by some rules ans logic

function Human(name, age){
    this.name = name;
    this.age = age;
}

// let person = new Human("Petre", 20);

// console.log(person);
// console.log(person.constructor.length);
// console.log(person.constructor.name);

//CLASSES

class Vehicle{
    constructor(id, name, batch, price){
        this.id = id;
        this.name = name;
        this.batch = batch;
        this.price = price;
        this.company = "G1 factory"
    }

    printVehicle(){
        console.log(`${this.name}, Batch ${this.batch}, price: ${this.price}`);
    }
}

let boat = new Vehicle(1, "Boat", "23534254c", 50000000);
console.log(boat);
boat.printVehicle();

//instance with classes
class WheeledVehicle extends Vehicle{
    constructor(id, name, batch, price, wheels){
        super(id, name, batch, price) // access to cunstructor of class that this class inherits

        this.wheels = wheels
    }

    driveVihicle(){
        console.log(`We are driving the ${this.name} on ${this.wheels} wheels`)
    }
}

let bike = new WheeledVehicle(2, "Bmw", "532454h", 1000, 2);

// console.log(bike);
// bike.printVehicle();
// bike.driveVihicle();

// console.log(Object.getPrototypeOf(bike));

// bike.name = "new name";
// console.log(bike.name);

class Car extends WheeledVehicle {
    constructor(id, name, batch, price, wheels, engineType, ac){
        super(id, name, batch, price, wheels)

        this.engineType = engineType;
        this.ac = ac;

        if(ac) this.price += 500;
    }

    buyCar(money){
        money >= this.price ?
        console.log("Congrats, you bought the car") :
        console.log(`You need ${this.price - money} to buy this car`)
    }

    // ----------static methids------------
    // keyword STATIC

    static addAc(car){
        if(!car.ac){
            car.ac = true;
            car.price += 500;
            console.log("The car now has AC");
        }
        else{
            console.log("The car already comes with AC")
        }
    }
}

let myCar = new Car(3, "Mercedes", "1234dg", 9000, 4, "diesel", true);

console.log(myCar);
myCar.printVehicle();
myCar.driveVihicle();
myCar.buyCar(5000);

Car.addAc(myCar);

let stojadin = new Car(99, "Zastava 101", "asaffdsvwr231", 300, 4, "petrol", false)
console.log(stojadin);
Car.addAc(stojadin);


class Calculation {
    static pi = 3.14;

    static sum(num1, num2){
        return num1 + num2;
    }

    static difference(num1, num2){
        return num1 - num2;
    }

    static circleArea(radius){
       return this.pi * radius * radius;
       //return Calculation.pi * radius * radius;
    }
}

console.log(Calculation.pi);
console.log(Calculation.sum(5, 8));
console.log(Calculation.difference(8, Calculation.pi));
console.log(Calculation.circleArea(2));

// ---------Getter and Setter ---------------

class ElectricCar extends Car {
    constructor(id, name, batch, price, wheels, engineType, owner){
        super(id, name, batch, price, wheels, engineType, true)

        this.owner = owner;
    }

    get nameN(){
         return this.name;
        //return this.name + " mojata";
    }

    set nameN(newName){
        this.name = newName;
    }

    get owner() {
        console.log("We are getting the name of the owner!!!")
        return `The owner od this car is ${this._owner}`
    }

    set owner(ownerName){
        console.log("We are setting the name of the owner!!!");
        ownerName.length > 1 ?
        this._owner = ownerName :
        (() => {throw new Error("The name is too short")})()
    }
}

let myElectricCar = new ElectricCar(133, "Toyota", "asas2", 300000, 4, "hybrid", "Petre");
console.log(myElectricCar.name);
console.log(myElectricCar.nameN);
myElectricCar.nameN = "Dani";
console.log(myElectricCar.nameN);

console.log(myElectricCar.owner);
//console.log(myElectricCar._owner);
myElectricCar.owner = "Ilija"
//myElectricCar.owner = "I";
