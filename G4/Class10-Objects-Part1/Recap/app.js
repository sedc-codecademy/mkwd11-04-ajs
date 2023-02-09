console.log("works");

// Ways of creating object

// Literal notation
const car = {
  brand: "Honda",
  model: "Civic",
  year: 2008,

  horsePower: 140,

  //   this here will be the window object again
  fullName: this,

  printCarInfo() {
    console.log(
      `Make: ${this.brand} ${this.model}, Year: ${this.year}, Horsepower: ${this.horsePower}`
    );
  },
};

car.printCarInfo();

// Constructor function
function Person(firstName, lastName, age, country) {
  this.firstName = firstName;
  this.lastName = lastName;
  //   good place to use this is contstructor functions and classes
  this.fullName = `${this.firstName} ${this.lastName}`;
  this.age = age;
  this.country = country;

  this.printFullName = function () {
    // best place is to use in methods in objects
    console.log(this.fullName);
  };
}

const borche = new Person("Borche", "Borisovski", 30, "Macedonia");
const danilo = new Person("Danilo", "Borozan", 25, "Macedonia");

console.log(borche);
console.log(danilo);

borche.printFullName();
danilo.printFullName();

// this keyword

// Global scope = window object
console.log(this);

function sayHello() {
  // This in functons is window object
  console.log(this);
  console.log("Hello world");
}

sayHello();

// this in properties of literal notation objectis is again window objec
console.log(car.fullName);
