console.log("PURE FUNCTION")
//PURE FUNCTION

function addNumbers(numberOne, numberTwo){
  let result = numberOne + numberTwo
  return result
}


let addtions = addNumbers(2,5);

console.log(addtions)


// IMPURE FUNCTION

let counter = 0;

function incrementNumber(number){
  counter += number
};

incrementNumber(5);

console.log(counter);

console.log("RECAP");


function IdFactory(){
  this.id = 1;

  this.generate = function(){
    this.id += 1

    return this.id
  }
}

const ID_GENERATOR = new IdFactory()

function Product(name, price, dateOfProduction, exparationDate, weight ){
  this.id = ID_GENERATOR.generate();
  this.name = name;
  this.price = price;
  this.dateOfProduction = dateOfProduction;
  this.exparationDate = exparationDate;
  this.weight = weight
};

console.log(new Date().toDateString())

const bread = new Product("Homemade bread", "40mkd", new Date().toDateString(), "13.02.2023", "400grams")

console.log(bread);

function MeatProducts(name, price, dateOfProduction, exparationDate, weight, origin = "Macedonia"){

  Object.setPrototypeOf(this, new Product(name, price,dateOfProduction,exparationDate,weight))


  this.origin = origin;
  this.type = "Meat";
};


let meatProductOne = new MeatProducts("Chicken from the village", 250, new Date().toDateString(), "13.02.2023", "1kg", "Gevgelija")

console.log(meatProductOne)

console.log(meatProductOne.exparationDate)


function MilkProducts(name, price, dateOfProduction, exparationDate, weight, origin, type){

  Object.setPrototypeOf(this, new Product(name, price,dateOfProduction,exparationDate,weight))


  this.origin = origin;
  this.type = type;
};
