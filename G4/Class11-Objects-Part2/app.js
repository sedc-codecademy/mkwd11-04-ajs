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
    // the super function always refers to the parent's constructor function
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

// Checking if objects are instances of some class
// Returns true for any class that the parent class inherits for the object
console.log(danilo instanceof Programmer); //true
console.log(danilo instanceof Professional); //true
console.log(workerOne instanceof Programmer); //false
console.log(workerOne instanceof Person); //true

class Doctor extends Professional {
  constructor(
    firstName,
    lastName,
    age,
    yearsOfExperience,
    specialization,
    isCertified
  ) {
    super(firstName, lastName, age, yearsOfExperience, "Medicine");

    this.specialization = specialization;
    this.isCertified = isCertified;
  }

  helpPatient(patientName) {
    if (this.isCertified) {
      console.log(`Dr.${this.fullName} is helping ${patientName}`);
    } else {
      console.log(
        ` ${this.fullName} can't help ${patientName} because doctor is not certified`
      );
    }
  }

  static checkCertification(doctor) {
    if (doctor instanceof Doctor) {
      return doctor.isCertified
        ? `Doctor is certified`
        : `Doctor is not certified`;

      //   if (doctor.isCertified) {
      //     return `Doctor is certified`;
      //   } else {
      //     return `Doctor is not certified`;
      //   }
    }
  }
}

const doctorRandall = new Doctor(
  "Randall",
  "Jackson",
  54,
  30,
  "Trauma Surgeon",
  true
);

const doctorZhan = new Doctor("Zhan", "Mitrev", 25, 0, "Everything", false);

doctorRandall.helpPatient("Bob");

// You call static methods on the class definition itself
console.log(Doctor.checkCertification(doctorZhan));
console.log(Doctor.checkCertification(doctorRandall));

// Private fields in classes
class BankAccount {
  // Defining private properties
  #accountHolder;
  #balance;
  #accountNumber;

  constructor(accountHolder, balance, accountNumber) {
    // Assigning values to private properties
    this.#accountHolder = accountHolder;
    this.#balance = balance;
    this.#accountNumber = accountNumber;
  }

  //   getter returns a property with the name of the getter func
  get accountHolder() {
    console.log("Fetching account holder name");
    return this.#accountHolder;
  }

  //   setter sets a property with the name of the setter func
  set accountHolder(value) {
    console.log("From setter func", value);
    if (value.length < 3) return console.log("Invalid name, please try again");

    this.#accountHolder = value;
  }

  // Use getters and setters to validate the change of the account number , it must be exactly 15 characters
}

const accountOne = new BankAccount("Borche Borisovski", 100, 20003212312323);

console.log(accountOne);

// Using getters
// console.log(accountOne.accountHolder);
// Using setters
accountOne.accountHolder = "Da";

accountOne.accountHolder = "Danilo Borozan";

console.log(accountOne.accountHolder);
