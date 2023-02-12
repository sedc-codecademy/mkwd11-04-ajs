console.log("connected");

function Vehicle(id, name, batchNo, price){
  this.id = id;
  this.name = name;
  this.batchNo = batchNo;
  this.price = price;

  this.company = "company.inc";

  //abstraction
  this.printVehicle = function(){
    console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, PRICE: ${this.price}`)
  }
};

// #1 We create object out ov Vehicle constructor function
let vehicle = new Vehicle(12, "Yugo", "11B", 500);
console.log("Vehicle:", vehicle)

// #2 We inherit from the object vehicle
let wheeledVehicle = Object.create(vehicle);
wheeledVehicle.drive = function(){console.log("Driving!!")}
wheeledVehicle.name = "Lada Niva"

console.log("Wheeled Vehicle:", wheeledVehicle);
console.log(wheeledVehicle.name);

// #3 We inherit from the object wheeledVehicle
let carOne = Object.create(wheeledVehicle)
console.log('the third child that inherited:', carOne)
carOne.drive()
carOne.printVehicle()

// Polymorphisam
console.log('Car one before change name: ',carOne.name);
carOne.name = "Jaguar";
console.log(carOne);
console.log('Car one after change name: ',carOne.name);

console.log(Object.keys(carOne));

console.log(wheeledVehicle.name) // Lada Niva

