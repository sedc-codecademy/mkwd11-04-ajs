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


function WheeledVehicle(wheels, name){
  this.wheels = wheels;
  this.name = name;

  this.drive = function(){
    console.log(`Driving on ${this.wheels}`)
  }
}

/**
 * every object created from the constructor func.
 * WheeledVehicle will inherit from Vehicle
 */
WheeledVehicle.prototype = Object.create(new Vehicle());

let car = new WheeledVehicle(4, "Yugo");

car.price = 750
car.id = 001122;
car.batchNo = "11B"
console.log(car);

console.log(car.company)



