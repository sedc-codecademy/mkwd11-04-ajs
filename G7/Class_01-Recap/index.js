console.log("Connected");

/**
 * Objects are collection of properties and behaveurs;
 * Properties are variables ;), behaveurs refer to methods;
 */

console.log("**** Plain objects/Object literal ****");

let game = {
  // properties are represented
  // as key value pairs
  // separeted by :
  name: "World of Warcraft",
  company: "Blizzard",
  released: 2004
};

console.log("Type of the game object is: ", typeof(game));
console.log(game);

console.log("**** Acessing Object properties ****");

console.log("** DOT NOTATION **");
console.log("One of the best games is: ", game.name);

console.log("** SQUARE BRACKETS **");

let gameInformation = `${game["name"]} was firstly released on ${game["released"]}`;
console.log(gameInformation);

console.log("**** Object with behaveurs ****");

let programingLanguage = {
  name: "Javascript",
  released: 1997,
  inventedBy: "Brendan Eich",
  isItGood: true,

  // BAD EXAMPLE!! DONT DO IT AT HOME!
  // info: function(){
  //   return `${programingLanguage.name} was invented by ${programingLanguage.inventedBy}`
  // }

  // GOOD EXAMPLE! =) 
  /**
   * When we acess properties of the same object, we do it with
   * the keyword this.
   * this refers to the object from where it was called.
   */
  info: function(){
    return `${this.name} was invented by ${this.inventedBy}`
  },


  //Methods with parameters

  whoLovesJS: function(personName){
    return `${personName} loves ${this.name}`
  }

};



console.log(programingLanguage);
console.log(programingLanguage.info())
console.log(programingLanguage.whoLovesJS("Bob"));
console.log(programingLanguage.whoLovesJS("John"));

console.log("**** Adding new props to the object ****");

let animal = {
  breed: "Dog"
}
console.log("Initial animal object", animal)

animal.name = "Bubi";
console.log("After adding property name", animal)

animal.age = 3
console.log("After adding property age", animal)

animal["favouriteToy"] = "Teddy Bear";
console.log("After adding favourite toy", animal)

animal.toHumanYears = function() { return `${this.name} in human years is ${this.age * 7}` };
//animal.toHumanYears = function() { return `${animal.name} in human years is ${animal.age * 7}` };

console.log(animal.toHumanYears());

console.log("**** UNDERSTANDING THIS ****");

// THIS, IN THE GLOBAL SCOPE
console.log("this used in the global scope ", this); // it refers to window;

// THIS, IN A FUNCTION
function returnThis(){
  return this
}

console.log('this used in func. ', returnThis()) // window

// THIS, IN A OBJECT
let dummyObject = {
  title: "I am dummy object",

  dummyMethod: function (){
    return this
  }
}

console.log("this used in object: ", dummyObject.dummyMethod()) // dummyObject

// THIS, IN AN EVENT
let myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", function(){
  console.log("I am clicked");
  console.log(this); //refers to the exact html element that invoked the event; 
});

console.log('**** Removing/Overwritting properties from object ****')

let secondAnimal = {
  type: "Cat",
  type: 'cat', // as this we overwrite the previous value of the same property
  
  breed: "Persian",
  name: "Batman"
}
console.log(secondAnimal)

delete secondAnimal.breed;
console.log('Removed property breed',secondAnimal);

secondAnimal.name = "Killer";
console.log("After overwritting the name property", secondAnimal);

secondAnimal["type"] = "A great cat";
console.log("After changing type with square bracked", secondAnimal);

//  ** Function that iterates through array of objects;

let musicians = [
  {name: "The Rolling Stones", yearOfForming: 1962},
  {name: "Led Zeppelin", yearOfForming: 1968},
  {name: "AC/DC", yearOfForming: 1973},
  {name: "Pink Floyd", yearOfForming: 1965}
]

console.log(musicians);

/**
 * 1. Create a function that is called printMusicians(); => DONE
 * 2. Apply a parametar to the function that it should be array of objects; => DONE
 * 3. Check if the given param. is empty, if so return error message; => DONE;
 * 4. Create a loop that iterates the array; => DONE;
 * 5. Console log each element of that iteration; => DONE
 */

// Step #1                Step #2
function printMusicians(arrayOfMusicians){

  // Step #3
  if(arrayOfMusicians.length === 0){
    console.warn("The provided array is empty");
    return;
  }

  // Step #4
  //let i = 0;
  for(let index = 0; index < arrayOfMusicians.length; index++ ){

    // Step #5
    // each element of the current iteration which is object
    console.log(arrayOfMusicians[index])

    // we access the name property of the each element of the current iteration,
    // which is object
    console.log(arrayOfMusicians[index].name, arrayOfMusicians[index]["yearOfForming"])

  }
}

printMusicians([]);
printMusicians(musicians);

console.log("FUNCTION #2")
/**
 * [
 * {model: "Asus ROG", price: 1000 }, 
 * {model: "Dell Inspiron", price: 400}, 
 * {model: "Toshiba", price: 350}
 * ]
 * 
 * budget: 400
 * 
 * the function output should be => You can afford ["Dell Inspiron", "Toshiba"]
 * 
 */

/**
 * 1. Create a function called printAffortableLaptops(); DONE 
 * 2. Apply parameters to the function, array of laptops, and ourBudget; DONE
 * 3. Check if the price is bigger then 50; DONE
 * 4. Check if the provided array is not empty; DONE
 * 5. Iterate through the array of objects; DONE
 * 6. Check if the provided budget is bigger then the price of the model;
 *    (the model is the element of the current iteration); DONE
 * 7. If condition is met, we should push the model anme in new created array; DONE
 * 8. return the array model names;
 */


// Step #1  & Step #2
function printAffortableLaptops(arrayOfLaptops, ourBudget){

  // Step #3
  if(ourBudget < 50){
    console.log("Sorry mate, you can buy a charger for your phone");
    return;
  }

  // Step #4
  if(arrayOfLaptops.length === 0){
    console.log("My friend, we do not have any laptops");
    return;
  }

  let affortableModels = [];

  // Step  #5
  for(let i = 0; i < arrayOfLaptops.length; i++){
    
    
    // Step #6
                                            // true === true; false === true
                                      // arrayOfLaptops[i].isInStock === true
    if(arrayOfLaptops[i].price <= ourBudget && arrayOfLaptops[i].isInStock){
      console.log(arrayOfLaptops[i])
      // Step #7
      affortableModels.push(arrayOfLaptops[i].model)
    }
  }

  return affortableModels
}

let laptops = [
  {model: "Asus ROG", price: 1000, isInStock: true }, 
  {model: "Dell Inspiron", price: 400, isInStock: false}, 
  {model: "Toshiba", price: 350, isInStock: true}
]

printAffortableLaptops([], 150);
printAffortableLaptops(laptops, 30);


let whatCanWeBuy = printAffortableLaptops(laptops, 401);
console.log(whatCanWeBuy);

console.log("**** CONSTRUCTOR FUNCTIONS ****");

function Book(bookName, bookAuthor, isbn, genre){
  this.bookName = bookName;
  this.bookAuthor = bookAuthor;
  this.isbn = isbn;
  this.genre = genre;

  this.bookInfo = function(){
    return `${this.bookName} is written by ${this.bookAuthor}`
  }
};

console.log(Book);

let harryPotter = new Book("Harry Potter","J.K. Rowling", 112233, "Fantasy");

console.log(harryPotter)
console.log(harryPotter.bookInfo());
console.log(harryPotter.bookName);

let jsNinja = new Book("Secrets of the Javascript Ninja", "Bear Bibeault, John Resig and Josip Maras", 00000, "education")

console.log(jsNinja)
console.log(jsNinja.bookInfo())

