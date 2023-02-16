console.log("Connected");

console.log("**** Destructuring objects ****");

/**
 * Destructuring simply applies to breaking down a complex structrure
 * into smaller chunks.
 * In JS, the complex structure usually is the object or the array.
 */

let person = {
    firstName: "Bob",
    lastName: "Bobski",
    age: 35,
    haveDrivingLicense: true
};

let personTwo = {
    firstName: "John",
    lastName: "Doe",
    age: 35,
    haveDrivingLicense: false
}

console.log(person.firstName, person.lastName, person.age, person.haveDrivingLicense);

//using destructuring
console.log("USING DESTRUCTURING");

// let firstName = person.firstName;
// let lastName = person.lastName;
// let age = person.age;
// let haveDrivingLicense = person.haveDrivingLicense;

// same as above, but more elegant using destructuring
let {firstName, lastName, age, haveDrivingLicense} = person;
console.log(firstName, lastName, age, haveDrivingLicense);

//if the objects have the same properties and we destructure
// in the same scope we are going to have an error
// let {firstName, lastName, age, haveDrivingLicense} = personTwo;


const movie = {
    title: "Last of Us",
    rating: "10/10",
    releaseDate: "2023",
    mainCharacters: ["Pedro Pascal", "Bella Ramsey"]
};

movie.cast = "HBO" // we can add new property to the object =)
// movie = {} //error


let {title, rating, isFinished, mainCharacters} = movie;

console.log("Movie title is: ", title)
console.log("Rating is: ", rating)
// console.log(releaseDate) //error
console.log("Is serial finished", isFinished);

const movieInfo = document.getElementById("movieInfo");

const printMovie = (movieToPrint) => {
    console.log('1:', movieToPrint);
    //during destructuring if a property is undefined
    //we can assign a default value, as we do for the property
    //isFinished.
    const {title, rating, isFinished = false} = movieToPrint

    return `Movie name is: ${title} and has ${rating} rating, and is finished ${isFinished}`
}

movieInfo.innerText = printMovie(movie);

console.log("**** Destructuring array ****");
//Destructuring in array is usefull when we know
//exactly how many elements the array is containing

let fruits = ["Pineapple", "Apple", "Grapes"];

console.log(fruits[0], fruits[1], fruits[2]);

let [firstFruit, secondFruit, thirdFruit] = fruits;

console.log("Using destructuring in arr");
console.log(firstFruit, secondFruit, thirdFruit);

let basket = ["Bread", "Milk", "Butter", "Table Water"];
// basket[1] = "Sparkling water"

//When we destructure an array
//we can put whatever name we desire =)
let [bread, secondElement] = basket;
console.log(bread, secondElement)

let academies = [];

let [academyOne, academyTwo] = academies

console.log(academyOne, academyTwo);

//third element
// basket[2] => array[index] for third element
let [,,thirdElement] = basket;

console.log(thirdElement);

let complexArray = [['array one'], ['array two']];
console.log(complexArray)
const [arrayOne, arrayTwo] = complexArray
console.log(arrayOne)
console.log(arrayTwo)

let user = ["John", "Doe"];
// user[0] user[1]
let [fName, lName] = user;
console.log(fName, lName);

console.log("**** SPREAD OPERATOR ****")

let numbers = [2, 3 ,5];
//even if we add one more element, only the 1st three will be taken into consideration

function sumNumbers(numberOne, numberTwo, numberThree){
    let result = numberOne + numberTwo + numberThree;

    return result;
}

console.log(sumNumbers(1,1,1))
console.log("Spreading: ", sumNumbers(...numbers)) //spreading the arr numbers

console.log("**** SPREAD OPERATOR USING OBJECTS ****")
// ... => Spread operator 


let academy = {
    name: "SEDC"
}
console.log(academy);

let newAcademy = {...academy };
console.log("New academy:", newAcademy);

console.log("**** SPREAD OPERATOR USING ARRAYS ****")

let originalMoviesArray = ["Movie one", "movie two"];
console.log("Original One", originalMoviesArray);

let copyOfArr = [...originalMoviesArray]; //we will make a new copy our of the originalMoviesArray
console.log("copy of arr:",copyOfArr);

copyOfArr.push("Movie Three")
console.log("copy of arr #2:",copyOfArr);
console.log("original one #2", originalMoviesArray)


originalMoviesArray.push("harry potter");
originalMoviesArray.push("last of us");

console.log("original one #3", originalMoviesArray)
console.log("copy of arr #3:",copyOfArr);