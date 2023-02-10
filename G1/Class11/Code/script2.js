// function Vehicle(id, name, batchNo, price){
//     this.id = id;
//     this.name = name;
//     this.batchNo = batchNo;
//     this.price = price;
//     this.company = "moce.inc";
//     this.printVehicle = function(){
//         console.log(`${id}. ${name}, BATCH: ${batchNo}, ${price}`);
//     }
// }

// let wheeeledVehicle = Object.create(new Vehicle(12, "Yugo", "25B", 500));
// console.log(wheeeledVehicle);
// wheeeledVehicle.drive = function(){console.log("WROM")}
// let car = Object.create(wheeeledVehicle);
// car.fuelTank = 32;
// car.drive();
// car.printVehicle();
// console.log(car);

// let wheeledVehicle1 = new Vehicle(13, "stojadin", "44s", 400);
// console.log(wheeledVehicle1);
// let wheeledVehicle2 = {};
// wheeledVehicle2.__proto__ = new Vehicle(12, "Lada", "48z", 800);
// console.log(wheeledVehicle2);



function Vehicle(id, name, batchNo, price){
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;
    this.company = "moce.inc";
    this.printVehicle = function(){
        console.log(`${id}. ${name}, BATCH: ${batchNo}, ${price}`);
    }
}

function WheeeledVehicle(wheels, name){
    this.wheels = wheels;
    this.name = name;
    this.drive = function(){
        console.log(`Dricing on ${this.wheels} wheels!`);
    }
}

WheeeledVehicle.prototype =  Object.create(new Vehicle());
let car = new WheeeledVehicle(4, "Skoda");
car.price = 500;
car.id = 2;
car.batchNo = "24a";
car.printVehicle();

console.log(car);

WheeeledVehicle.prototype.stop = function(){
    console.log(`The vehicle ${this.name} stopped.`)
}

car.stop();