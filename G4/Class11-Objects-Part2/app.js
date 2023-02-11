console.log("works");

// 1. Inheritance using prototypes in javascript

// Starting constructor function in inheritance chain
function Vehicle(name, price, serialNumber) {
  this.name = name;
  this.price = price;
  this.serialNumber = serialNumber;

  this.printVehicleStats = function () {
    console.log(
      `Name: ${this.name}, Price: ${this.price}, Serial #: ${this.serialNumber}`
    );
  };
}

const vehicleOne = new Vehicle("Yacht", 10000, "A121312k1l322");

vehicleOne.printVehicleStats();

// Inhering using prototype
function WheeledVehicle(name, price, serialNumber, wheels) {
  this.wheels = wheels;

  this.__proto__ = new Vehicle(name, price, serialNumber);
}

const wheeledVehicleOne = new WheeledVehicle("Truck", 15000, "A213912929", 18);

console.log(wheeledVehicleOne.name, wheeledVehicleOne.serialNumber);

wheeledVehicleOne.printVehicleStats();

console.log(wheeledVehicleOne);

// Reading an objects prototype
console.log(wheeledVehicleOne.__proto__);

function Car(name, price, serialNumber, wheels, doors, euroStandard, brand) {
  this.doors = doors;
  this.euroStandard = euroStandard;
  this.brand = brand;

  this.__proto__ = new WheeledVehicle(name, price, serialNumber, wheels);

  this.printCarInfo = function () {
    console.log(
      `Car has ${this.doors}, Is euro standard ${this.euroStandard} and is made by ${this.brand}`
    );
  };
}

const vwPassat = new Car("Passat", 2500, "A21391293912", 4, 5, 4, "VW");

console.log(vwPassat);

vwPassat.printVehicleStats();

// 2. Classes

// Creating a class definition
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = `${this.firstName} ${this.lastName}`;
  }
  // Methods in classes are added below the constructor
  printPersonInfo() {
    console.log(this.fullName, this.age);
  }
}

// Creating an instance of a class
const personOne = new Person("Bob", "Marley", 110);

personOne.printPersonInfo();

// Using inheritance with classes
// extends is the keyword of inheritance of classes
class Professional extends Person {
  constructor(firstName, lastName, age, yearsOfExperience, industry) {
    // super() always needs to be called for classes that inherit from others
    super(firstName, lastName, age);

    this.industry = industry;
    this.yearsOfExperience = yearsOfExperience;
  }

  printWorkerInfo() {
    console.log(
      `${this.fullName} works in the ${this.industry} industry, and has ${this.yearsOfExperience} years of experience `
    );
  }
}

const workerOne = new Professional("Jack", "Dorsey", 54, 15, "Construction");

workerOne.printPersonInfo();
workerOne.printWorkerInfo();

class Programmer extends Professional {
  constructor(
    firstName,
    lastName,
    age,
    yearsOfExperience,
    languages,
    jobTitle
  ) {
    super(firstName, lastName, age, yearsOfExperience, "IT");

    this.languages = languages;
    this.jobTitle = jobTitle;
    this.hasIndividualProject = false;
  }

  printProgrammerInfo() {
    console.log(
      `${this.fullName}'s current job title is: ${
        this.jobTitle
      } and knows these languages: ${this.languages.join(", ")}`
    );
  }
}

const danilo = new Programmer(
  "Danilo",
  "Borozan",
  25,
  1,
  ["C", "Fortran", "Clojure", "Kotlin", "Objecive C"],
  "Software Engineer"
);

console.log(danilo);

danilo.printPersonInfo();
danilo.printWorkerInfo();
danilo.printProgrammerInfo();
