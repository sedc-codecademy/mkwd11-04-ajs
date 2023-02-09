function Vehicle(id, name, batchNo, price){
  this.id = id;
  this.name = name;
  this.batchNo = batchNo;
  this.price = price;

  this.company = "company.inc";

 
  this.printVehicle = function(){
    console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, PRICE: ${this.price}`)
  }
};


function WheeledVehicle(id, name, batchNo, price, wheels){

  /**
   * The object created of WheeledVehicle 
   * will inherit from Vehicle =)
   * 
   * this => refers to the object that is going 
   * to be created out of WheeledVehicle
   * 
   * every object created out of WheeledVehicle
   * is going to inherit from Vehicle
   */
  Object.setPrototypeOf(this, new Vehicle(id, name, batchNo,price));


  this.wheels = wheels
  this.drive = function (){
    console.log("I am drifting =)")
  }

};


let car = new WheeledVehicle("1", "Lada Niva", "0011", 4000, 4)

console.log(car)
car.drive();


function Car(id, name, batchNo, price, wheels, engine){
  Object.setPrototypeOf(this, new WheeledVehicle(id, name, batchNo, price, wheels))

  this.engine = engine
}


function ElectircCar(id, name, batchNo, price, wheels, engine, model){
  Object.setPrototypeOf(this, new Car(id, name, batchNo, price, wheels, engine))

  this.model = model
}

const electricCar = new ElectircCar("1", "Tesla", 0011, "20000", 4, "electric", "Hyper X");

console.log(electricCar)