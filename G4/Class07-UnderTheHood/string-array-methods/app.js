// STRING

// Accessing charcters using indexes
const firstName = "Borche";

console.log(firstName[0]);
console.log(firstName[2]);

// Slicing parts of string

const fullName = "Danilo Borozan";

const firstNameSlice = fullName.slice(0, 6);
const lastNameSlice = fullName.slice(7);

console.log(firstNameSlice);
console.log(lastNameSlice);

const country = "Macedonia";
const city = "SKOPJE";

console.log(country.toUpperCase());
console.log(city.toLowerCase());

// Objective: Given a lowercase string make only the first letter uppercase

const test = "marko"; // Marko

const searchTerm = "MACe";

// Searching if one string exsits in another using .includes

const isSearchValid = country.toLowerCase().includes(searchTerm.toLowerCase());

console.log(isSearchValid);

// To generate an array from a string with easily seperated words

const namesStr = "John Jane Rick Bobby Alex";

const namesArr = namesStr.split(" ");

console.log(namesArr);

// ARRAYS

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Objective: create arrays from left side of array and right side

const leftSide = numbers.slice(0, 5);
const rightSide = numbers.slice(5);

console.log(leftSide);
console.log(rightSide);

const htmlArr = [
  "<li>Test One</li>",
  "<li>Test Two</li>",
  "<li>Test Three</li>",
];

const htmlStr = htmlArr.join("");

console.log(htmlArr);
console.log(htmlStr);

// Creating a new copy in memory using map

const numbersCopy = numbers.map(num => num);
