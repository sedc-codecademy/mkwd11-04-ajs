console.log('We are live')

//Наследување
//ЈЅ - прототипно наследување

// let x = {}
// let y = new Object()

// console.log('Object x', x)
// console.log('Object y', y)


// function Vehicle(id, name, price, batchNo) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.batchNo = batchNo;
//     this.company = 'move.inc'
//     this.printVehicle = function(){
//         console.log(`Product: ${id}, ${name}, Batch: ${batchNo}, Price: ${price}$`)
//     }
// }


// let wheeledVehicle = Object.create(new Vehicle(1, 'Yugo', 500, 'b8'))
// console.log('Wheeled vehicle', wheeledVehicle)
// wheeledVehicle.printVehicle()
// wheeledVehicle.numberOfwheels = 4;
// wheeledVehicle.drive = function(){console.log('Whooom whoom')}

// let car = Object.create(wheeledVehicle)
// car.fuelThank = 32;
// car.numberOfDoors = 4;
// console.log('Car', car)
// car.drive()
// car.printVehicle()

// Exercise 1

// 1.Create a Person constructor function that has:
// firstName
// lastName
// age
// getFullName - method


// 2.Create a Student constructor function that inherits from Person and has:
// academyName
// studentId
// study - method that writes in the console: The student firstName is studying in the academyName

// 3.Create two Student objects

//Exercise 1 - solution 1
// function Person(firstName, lastName, age){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.getFullName = function(firstName,lastName){
//         let fullName = `firstName: ${firstName}, lastName: ${lastName}`
//         console.log(fullName)
//     }
// }
// let student1 = Object.create(new Person('Tode', 'Temov', 44))
// student1.academyName  = 'SEDC'
// student1.studentId = '255554'
// student1.study = function(){
// console.log(`The student ${firstName}is studying in the ${academyName} `)
// }
// let student2 = Object.create(student1);







// function Vehicle(id, name, price, batchNo) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.batchNo = batchNo;
//     this.company = 'move.inc'
//     this.printVehicle = function(){
//         console.log(`Product: ${this.id}, ${this.name}, Batch: ${this.batchNo}, Price: ${this.price}$`)
//     }
// }

// function WheeledVehicle(name, wheels) {
//     this.wheels = wheels;
//     this.name = name;
//     this.drive = function() {
//         console.log(`Driving on ${this.wheels} wheels`)
//     }
// }

// WheeledVehicle.prototype = Object.create(new Vehicle())
// let car = new WheeledVehicle('Yugo', 4)
// console.log('Car', car)
// car.price = 600;
// car.id = 2;
// car.batchNo = '24a'
// car.printVehicle()


// Vehicle.prototype.stop = function() {
//     console.log(`The vehicle is ${this.name} stopped`)
// }

// car.stop()

// // //__proto__
// console.log(car.__proto__.__proto__.company)
// console.log(car.company)






function Vehicle(id, name, price, batchNo, serialNo) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.batchNo = batchNo;
    this.serialNo = serialNo;
    this.company = 'move.inc'
    this.printVehicle = function(){
        console.log(`Product: ${this.id}, ${this.name}, Batch: ${this.batchNo}, Price: ${this.price}$`)
    }
}





function WheeledVehicle(id, name, price, batchNo, wheels, serialNo) {
    // this.__proto__ = Object.create(new Vehicle(id, name, price, batchNo))
    Object.setPrototypeOf(this, new Vehicle(id, name, price, batchNo, serialNo))
    this.wheels = wheels;
    this.drive = function(){
        console.log(`Driving on ${this.wheels} wheels`)
    }
}


function Car(id, name, price, batchNo, wheels, doors, fuelCapacity, serialNo){
    Object.setPrototypeOf(this, new WheeledVehicle(id, name, price, batchNo, wheels, serialNo))
    this.doors = doors;
    this.fuelCapacity = fuelCapacity;
    this.drift = function(){
        console.log(`The ${this.name} is drifting`)
    }
}

let aCar = new Car(1, 'Tesla', 460000, '21a', 4, 5, 50, 234)
let anotherCar = new Car(2, 'Yugo', 500, '23b', 4, 4, 20, 454)
console.log('The car', aCar)
console.log('Second car', anotherCar)


//Exercise 1 solution 2 (refactored)
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function() {
        console.log(`${firstName} ${lastName}`);
    };
};
function Student(firstName, lastName, age, academyName, studentId) {
    Object.setPrototypeOf(this, new Person(firstName, lastName, age));
    this.academyName = academyName;
    this.studentId = studentId;
    this.study = function() {
        console.log(`The student ${firstName} is studying in the ${academyName}`);
    };
};
let student1 = Object.create(new Student('Angel', 'Prezimenovski', 26, 'Code', 9));
let student2 = Object.create(new Student('Monika', 'Prezimenova', 29, 'Dizajn', 10));



// Vehicle.prototype.stop = function() {
//     console.log(`The vehicle is ${this.name} stopped`)
// }



//Exercise 2 - part 1
//Create a method on the Person prototype that accepts a Student of any academy and returns the academy that that student is in.

//Create a method on the Person prototype
Person.prototype.checkForAcademy = function(studentObj){ //accepts a Student
    console.log(studentObj.academyName)
}

console.log(student1);
console.log(student2);
student1.checkForAcademy(student2)
student2.checkForAcademy(student1)
student1.checkForAcademy(student1)




//Exercise 2 - part 2
// Create DesignStudent, CodeStudent and NetworkStudent constructor functions that inherit from Student.

// DesignStudent
// isStudentOfTheMonth - boolean
// attendAdobeExam - method that writes in console: The student firstName is doing an adobe exam!

// CodeStudent
// hasIndividualProject - boolean
// hasGroupProject - boolean
// doProject(type) - method that accepts string. If the string is individual or group it should write that the person is working on the project of that type and set the value to true on the property of the project

// NetworkStudent
// academyPart - number
// attendCiscoExam - method that writes in console: the student firstNAme is doing a cisco exam!

// Note: For all students, the academyName property should be auto generated based on which Student we are creating ( design, code or network )

function DesignStudent (firstName,lastName,age, studentId, isStudentOfTheMonth){
    Object.setPrototypeOf(this, new Student(firstName,lastName,age,'design', studentId))
    this.isStudentOfTheMonth = isStudentOfTheMonth;
    this.attendAdobeExam = function (){
        return console.log(`The student ${this.firstName} is doing an adobe exam! `)
    }
}

function CodeStudent (firstName,lastName,age, studentId,hasIndividualProject,hasGroupProject){
    Object.setPrototypeOf(this, new Student(firstName,lastName,age,'code', studentId))
    this.hasIndividualProject = hasIndividualProject;
    this.hasGroupProject = hasGroupProject;
    this.doProject = function(string){
        if (string === 'individual'){
            console.log('The person is working on individual project')
            this.hasIndividualProject = true;
        }
        else if (string === 'group'){
            console.log('The person is working on group project')
            this.hasGroupProject = true;
        }
    }
}

function NetworkStudent (firstName,lastName,age, studentId, academyPart){
    Object.setPrototypeOf(this, new Student(firstName,lastName,age, 'network', studentId))
    this.academyPart = academyPart
    this.attendCiscoExam = function (){
        return console.log(`the student ${this.firstName}  is doing Cisco exam.`)
    }
}

let student3 = new DesignStudent ('marko','markovski', 22, 873, true)
let student4 = new CodeStudent ('vasko', 'vaskovski',45, 221, true, false )
let student5 = new NetworkStudent ('stojan', 'stojanovski', 33, 345, 7)
student3.checkForAcademy(student3)
student1.checkForAcademy(student4)
student3.checkForAcademy(student5)