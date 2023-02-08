// function Vehicle(id, name, batch, price) {
//     this.id = id;
//     this.name = name;
//     this.batchNo = batch;
//     this.price = price;
//     this.company = 'move.inc';

//     this.printVehicle = function() {
//         console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}`);
//     }
// }

// let vehicle = new Vehicle(1, "Yugo", "S120", 200);
// console.log(vehicle);

// function WheeledVehicle(wheels, name) {
//     this.wheels = wheels;
//     this.name = name;
// }

// let wheeledVehicle = new WheeledVehicle(4, "Mazda");
// wheeledVehicle.__proto__ = new Vehicle(2, 'Yugo', 'a234', 3000);

// console.log(wheeledVehicle);

// WheeledVehicle.prototype = new Vehicle(2, 'Yugo', 'a234', 3000);

// function WheeledVehicle1(wheels, name, id, batch, price) {
//     Object.setPrototypeOf(this, new Vehicle(id, name, batch, price));
//     this.wheels = wheels;
// }

// let inheritedVehicle = new WheeledVehicle1(4, 'Mercedes', 34, "ASD23", 5000);
// console.log(inheritedVehicle);

// function Car(doors, fuelCapacity, id, name, batch, price) {
//     Object.setPrototypeOf(this, new WheeledVehicle1(4, name, id, batch, price));

//     this.doors = doors;
//     this.fuelCapacity = fuelCapacity;
// }

// let newCar = new Car(5, 100, 12, "Yugo", "asd123", 1200);
// console.log(newCar);