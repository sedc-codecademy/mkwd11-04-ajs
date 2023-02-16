console.log("connected");

/**
 * - Objects are collection of properties and behaveours.
 * - Properties can have values; Behaveours/Methods are functions;
 * - The object should represent an entity from the real world;
 */

// In js more or less everything is an object;

console.log(typeof(window)); //object
console.log(typeof(document)); //object
console.log(typeof(document.getElementById)) //function
console.log(typeof([])) //object
console.log(typeof(console)) //object
console.log(typeof(console.log)) //function


/**
 * Since everything comes from the window object
 * and the window is the very parent
 * we don't have to write it and we can leave it out =)
 */

window.console.log("Hello here");
console.log("Hey =)");

function greet(name){
    console.log(`${name} says hi`);
};

greet("Bob");
window.greet("John");

console.log("**** KEYWORDS TO DECLARE VARIABLE ****");
let personOneName = "John";
console.log("1:", personOneName);
personOneName = "Foo"; // we have assigned a new value to the variable personOneName
console.log("2:", personOneName)

const personTwoName = "Boo";
console.log("3:" ,personTwoName);

// this is throwing an error,
//since we are not allowed to assign new value to a variable declared with the keyword const
// personTwoName = "George"; 


console.log("**** Constructor notation templates ****");

// by convension the first letter is uppercased
function Song(songName, songAuthor, songGenre){
   this.songName = songName;
   this.songAuthor = songAuthor;
   this.songGenre = songGenre;

   this.thisAsProperty = this;

   this.songInfo = function(){
    return `${this.songName} by ${this.songAuthor}`
   }
}

let songOne = new Song("You look good on the dance floor", "Arctic Monkeys", "Rock");
console.log(songOne);
console.log(songOne.songInfo());
//when the keyword this accessed from an object
//created out of constructor template
//the keyword this refers to the object itself
console.log("this in a function costructor", songOne.thisAsProperty ) // the object itself

console.log("**** This in objects ****");
console.log(this); //window

function whatIsThis(){
    console.log(this)
};
whatIsThis(); //window

let person = {
    name: "Bob",
    //when this is assigned as a value of a property
    //it will refer to the window
    thisAsProperty: this,

    //when this is used inside a method
    //it will refer to the object itself =)
    thisInMethod: function(){
        console.log(this)
    },

    //when used in arrow function
    //this will refer to the context
    //from where it was called
    thisInSecondMethod: () => {
        console.log(this) //refers to the window object
    }

};

console.log(person.thisAsProperty); // window
person.thisInMethod(); // person object
person.thisInSecondMethod() //window

let personTwo = {
    name: "John",
    whatIsThis: person.thisInSecondMethod() //this
}

console.log(personTwo.whatIsThis) //window

// IMPORANT! We cannot create constructor templates
// using function expressions

// const Movie = (movieName) => {
//     this.movieName = movieName
// }

// let movieOne = new Movie("Harry Potter");
// console.log(movieOne)