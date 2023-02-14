function Vehicle(id, name, batchNo, price){
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;
    this.company = "moce.inc";
    this.printVehicle = function(){
        console.log(`${this.id}. ${this.name}, BATCH ${this.batchNo}, ${this.price}`)
    }
}

// function WheeledVehicle(id, name, batchNo, price, wheels){
function WheeledVehicle(id, batchNo, price, name, wheels){
    Object.setPrototypeOf(this, new Vehicle(id, name, batchNo, price))
    this.wheels = wheels;
    this.drive = function(){
        console.log(`Driving on ${this.wheels} wheels!`);
    }
}

// let someWheeledVehicle = new WheeledVehicle(1, "bmw", "f84", 900, 4);
let someWheeledVehicle = new WheeledVehicle(1, "f84", 900, "bmw", 4);

console.log(someWheeledVehicle);
console.log(someWheeledVehicle.name);
someWheeledVehicle.drive();
someWheeledVehicle.printVehicle();

function Car(id, batchNo, price, name, doors, fuelCapacity){
    Object.setPrototypeOf(this, new WheeledVehicle(id, batchNo, price, name, 4))
    this.name = name;
    this.doors = doors;
    this.fuelCapacity = fuelCapacity;
    this.drift = function(){
        console.log(`The ${this.name} is drifting!`)
    }
}

let someCar = new Car(99, "b2", 2000000, "Ferrari", 3, 100);
console.log(someCar);
someCar.printVehicle();
someCar.drive();
someCar.drift();

let newVehicle = new someCar.constructor(1, "plane", "fh4", 999999) //new vehicle
console.log(newVehicle);

function Person(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.getFullName = function(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

function Student(academyName, id, first, last, age){
    Object.setPrototypeOf(this, new Person(first, last, age));
    this.academyName = academyName;
    this.id = id;
    this.study = function(){
        console.log(`The student ${this.firstName} is studying in ${this.academyName} academy!`);
    }
}

let student1 = new Student("Code", 1, "Toso", "Petrov", 20);
let student2 = new Student("Data Science", 2, "Ivo", "Ribar", "Bing", 30);
console.log(student1);
console.log(student2);
student1.getFullName();
student2.study();

function CodeStudent(id, first, last, age){
    Object.setPrototypeOf(this, new Student("Code", id, first, last, age))
    this.hasIndividualProject = false;
    this.hasGroupProject = false;
    this.doProject = function(type){
        if(type === "individual") this.hasIndividualProject = true;
        if(type === "group") this.hasGroupProject = true;
    }
}

let student3 = new CodeStudent(3, "Mario", "Metodievski", 19);
console.log(student3);
console.log(student3.hasIndividualProject);
student3.doProject("individual");
console.log(student3.hasIndividualProject)


// DesignStudent
// NetworkStudent