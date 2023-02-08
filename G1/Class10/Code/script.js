//object literals

let person = {
    name: "John",
    surname: "Dow",
    age: 30,
    isEmployed: true,

    printInfo: function() {
        console.log(`${this.name} ${this.surname} is ${this.age} years old and is ${
            this.isEmployed ? "employed" : "not employed"
        }`)
    }
}

person.printInfo();


// constructor function

function Dog(name, color, age, favouriteFood) {
    this.name = name === undefined ? "unnamed" : name;
    this.color = color;
    this.age = age;

    this.favouriteFood = 
    favouriteFood === undefined ? [new Food("Bacon", "red")] : favouriteFood;

    this.bark = function() {
        console.log("BARK BARK")
    }

    this.eat = function(food) {
        this.favouriteFood.forEach(fav => {
            fav.name.toLowerCase() === food.name.toLowerCase()
            ? console.log("MY FAVOURITE!!!")
            : ""
        })
        console.log("NOM NOM NOM");
    }
}

function Food(name, color) {
    this.name = name;
    this.color = color;
}

let majlo = new Dog("Majlo", "black", 4, [
    new Food("beef", "red"),
    new Food("bread", "white")
])

console.log(majlo);

majlo.breed = "German Shepard"
console.log(majlo);

majlo.bark();

majlo.eat(new Food("beef", "red"));
majlo.eat(new Food("orange", "orange"));

let newDog = new Dog();
console.log(newDog);

let food1 = new Food("apple", "red");
let food2 = new Food("apple", "red");

console.log(food1 === food2);
console.log(food1.name === food2.name);

//this keyword

//this in global scope
console.log(this);

//this in function
function whatIsThis() {
    console.log(this);
}

whatIsThis();

let obj = {
    whatIsThis: this,
    whatIsThisMethod: function(){
        console.log(this);
    },
    arrowThis: () => console.log(this)
}

console.log(obj.whatIsThis);
obj.whatIsThisMethod();
obj.arrowThis();

function ThisTemplate(description) {
    console.log(this);
    this.description = description;
    this.whatIsThis = this;

    this.whatIsThisFunc = function(){
        console.log(this);
    }
}

let template = new ThisTemplate("random description")
console.log(template.whatIsThis)
template.whatIsThisFunc();