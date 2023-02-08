class Vehicle {
    constructor(id, name, batch, price) {
        console.log('calling constructor of Vehicle');
        this.id = id;
        this.name = name;
        this.batchNo = batch;
        this.price = price;
        this.company = 'Move.inc';
    }

    printVehicle() {
        console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}`);
    }
}

let yugo = new Vehicle(1, "yugo", '123ASd0', 300);
console.log(yugo);


class WheeledVehicle extends Vehicle {
    constructor(id, name, batch, price, wheels){
        console.log('first calling constructor of WheeledVehicle');
        super(id, name, batch, price);
        console.log('after calling constructor of Vehicle');
        this.wheels = wheels;
    }

    driveVehicle() {
        console.log(`We are driving a ${this.name} on ${this.wheels} wheels!`);
    }
}

let bike = new WheeledVehicle(12, 'Bike', '12g', 700, 2);

console.log(bike);
bike.driveVehicle();
bike.printVehicle();

class Car extends WheeledVehicle {
    constructor(id, name, batch, price, doors, ac) {
        console.log('calling constructor of Car');
        super(id, name, batch, price, 4);
        console.log('after calling constructor of Car');
        this.doors = doors;
        this.airConditioning = ac;

        if(ac) {
            this.price += 400;
        }
    }

    buyCar(money) {
        if(money >= this.price) {
            console.log('Congrats! You bought a car');
        } else {
            console.log(`You need ${this.price - money} more to buy this car!`);
        }
    }

    static addAc(car) {
        if(!car.airConditioning) {
            car.airConditioning = !car.airConditioning;
            car.price += 400;
            console.log(`The car has AC now and it costs ${car.price}`);
        } else {
            console.log(`The car already has AC!`);
        }
    }

}

let acar = new Car(99, "Yugo", 'A12', 500, 4, true);
acar.buyCar(800);

Car.addAc(acar);

console.log(acar);


class ElectricCar extends Car {
    constructor(id, name , batch, price, doors, owner) {
        super(id, name, batch, price, doors, true); 
        this.owner = owner;
    }

    get owner() {
        console.log('We are getting the name of the owner. Please wait...');
        return 'The car is owned by: ' + this._owner;
    }

    set owner(ownerName) {
        console.log('We are setting the name of the owner. Please wait...');
        ownerName.length > 1 ? 
            this._owner = ownerName : 
            (() => { throw new Error('Owner name too short') })();
    }
}

let myElectricCar = new ElectricCar(100, 'Tesla', 'ZX22', 20000, 3, 'Petko');

console.log(myElectricCar);

console.log(myElectricCar.owner);

myElectricCar.owner = "Trajan";
