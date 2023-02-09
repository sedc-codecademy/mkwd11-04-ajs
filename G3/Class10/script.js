console.log(typeof(document)); // -> object
console.log(typeof(document.getElementById)); // -> function
console.log(typeof([])); // -> object
console.log(typeof(console)); // -> object
console.log(typeof(console.log)); // -> function
console.log(console);

// console.log(window.location);

function sayHello(name) {
    console.log(`Hey there ${name}`);
}

// sayHello("Trajan");
// window.sayHello("Todor");

// let something = "Its ,a thing";
// console.log(something);
// console.log(window.something);

// var somethingElse = "Its something else";
// console.log(window.somethingElse);

// swapi people 
function Person(name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films,
        species, vehicles, starships, created, edited, url) {
    this.name = name;
    this.height = height;
    this.mass = mass;
    this.hairColor = hair_color;
    this.skinColor = skin_color;
}


function Dog(name ,color, age, favoriteFood) {
    this.name = name === undefined ? "unnamed" : name;
    //this.name = name ?? 'unnamed';
    this.color = color;
    this.age = age;
    this.hasOwner = false; // this is default value
    this.favoriteFood = favoriteFood;
    this.bark = function() {
        console.log("Bark bark");
    };
    this.eat = function(food) {
        this.favoriteFood.forEach(fav => 
            console.log(fav));
    }
}



