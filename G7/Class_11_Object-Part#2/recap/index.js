console.log("connected");

const burger = {
  burgerType: "Big Mac",
  fries: true,
  souce: "Burger Chilly Souce",
  ingredients: ["Tomatoe", "Cucumber"],
  price: 200
};

console.log(burger);

console.log(`Burger is ${burger.burgerType} and it costs: ${burger.price}`);

let {burgerType, price} = burger;

let burgerDescription = `Burger is ${burgerType} and it costs: ${price}`;

console.log(burgerDescription);

let coffeeOne = {
  drinkName: "Cappucino",
  price: 100,
  hasMilk: true,
  hasSugar: false
}

let drinkDescription = (drink) => {
  console.log(drink)
  const {drinkName, price} = drink;

  return `${drinkName} is: ${price} mkd.`

};

let drinkOneDescription = drinkDescription(coffeeOne);
console.log(drinkOneDescription);

const result = document.getElementById("result");

const users = [
  {firstName: "Bob", lastName: "Bobski", age: 35, gender: "Male"},
  {firstName: "John", lastName: "Doe", age: 28, gender: "Male"},
  {firstName: "Boo", lastName: "Foo", age: 56, gender: "Female"},
];

function printUsers(listOfUsers){
  //Approach #1
  // listOfUsers.forEach((user) => {
  //   console.log(user)

  //   result.innerHTML += 
  //   `
  //   <li>${user.firstName}</li>
  //   <li>${user.lastName}</li>
  //   <hr />

  //   `
  // })

  //Approach #2
  // listOfUsers.forEach((user) => {
  //   console.log(user)
  //   //destructure the object of the current iteration
  //   let {firstName, lastName} = user; 
  //   result.innerHTML += 
  //   `
  //   <li>${firstName}</li>
  //   <li>${lastName}</li>
  //   <hr />

  //   `
  // })

  //Approach #3
  listOfUsers.forEach(({firstName, lastName}) => {

    result.innerHTML += 
    `
    <li>${firstName}</li>
    <li>${lastName}</li>
    <hr />

    `
  })
}

printUsers(users);

console.log("DESTRUCTURING ARRAYS")

let songs = ["Blank", "Song two", "Song three"];

const [elementOne, elementTwo, elementThree, elementFour] = songs;

console.log(elementOne, elementTwo, elementThree, elementFour);

console.log("SPREAD OPERATOR")

let origininalFruit = {
  fruitName: "Banana"
}

console.log("Original", origininalFruit);


let copyOfFruit = {
  ...origininalFruit,
  origin: "Ecuador"
}

console.log("Original #2", origininalFruit);
console.log("Copy of original", copyOfFruit);

let basket = ["Bread"];

let secondBasket = [...basket, "Milk"];
secondBasket.push("Grapes");

console.log("Original array", basket);
console.log("Copy of original", secondBasket);

const academy = {
  academyName: "Web development",
  price: "2500",
  semestars: "3semestars",
  duration: "12months",
  languages: ["Macedonian", "English"]
}

let {academyName, semestars, ...others} = academy;

console.log(academyName, semestars);
console.log("OTHERS:", others)

let subjects = ["HTML&CSS", "Basic Javascript", "Advanced JS", "Backend development with JS", "Backend development with C#"];

let [subjectOne, subjectTwo, ...rest ] = subjects;

console.log(subjectOne, subjectTwo);

console.log(rest);

console.log("OBJECT CREATE");

let familyName = {
 family: "Bobski",

 greetings: function(){
  console.log("Hello world")
 }
};

console.log(familyName);

let personOne = Object.create(familyName);
personOne.firstName = "Bob"

console.log("Inherited: ", personOne);
console.log(personOne.family)
personOne.greetings();

const personTwo = Object.create(familyName)
personTwo.firstName = "Foo";
console.log(personTwo)
console.log(personTwo.family)

let personThree = Object.create(personOne)
console.log(personThree)
console.log(personThree.family)

console.log(personThree.firstName)

console.log("**** OTHER OBJECT FUNCTIONS");

let person = {
  firstName: "Foo",
  lastName: "Boo",
  age: 18
}

console.log(person); 

/**
 * it will return the values of the 
 * properties of the provided object
 */
let personValues = Object.values(person);

console.log(personValues);

/**
 * it will return the keys/properties
 * of the provided object
 */
let personKeys = Object.keys(person);
console.log(personKeys);