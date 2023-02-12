// ------------------ DESTRUCTURING------------------------
// Destructuring simply implies breaking down a complex structure into simpler parts.
//In JavaScript, this complex structure is usually an object or an array

const person ={
    firstName: 'John',
    lastName: 'Dow',
    age: 20
}

const person2 ={
    firstName: 'Bob',
    lastName: 'Bobski',
    age: 20
}

const namePerson = person.firstName;
const lastNamePerson = person.lastName;
console.log(namePerson, lastNamePerson);

// ------------------ object destructuring------------------------
console.log("--------- object destructuring------------");
const {firstName, lastName} = person;
console.log(firstName, lastName);

const {firstName: myName, lastName: lastName2} = person2;
console.log(myName, lastName2);

// ------------------ ARRAY DESTRUCTURING------------------------
console.log("--------- array destructuring------------");

const hobbies = ["Reading", "Hiking", "Biking"];

const hobby1 = hobbies[0];
const hobby2 = hobbies[1];
console.log(hobby1, hobby2)

const [hobby01, ,hobby02] = hobbies
console.log(hobby01, hobby02);

// ------------------ object Methods------------------------
const dog = {
    isHappy: true,
    bark: function() {
        console.log("WOOF WOOF")
    }
}

// ------------------ Object.create()------------------------
// Create is a method that accept and object as a parameter and will return a new object with inherited entities from the object passed as the argument

const barnie = Object.create(dog);
barnie.name = "Barnie";
barnie.breed = "Dzukela";
console.log("-------Object.create()-------", barnie);

// ------------------ Object.assign()------------------------
//Assign ia a method that can merge two objects in to one. It accepts two objects and it tries to merge the second object in to the first one.

const addressInfo = {
    street: "Dog Steet",
    streetNumber: 24,
    contactPerson: "075773399"
}

let barnieChip = Object.assign(barnie, addressInfo); // the fist is merged with the second
console.log("-------Object.assign()-------", barnieChip);
console.log(addressInfo);

const newObject = {
    random: "Hello"
}
barnieChip = Object.assign(barnieChip, newObject);

let anotherAddress = {
    street: "Other street",
    streetNumber: 14,
    contactPerson: "075999222"
}

const barnieChipUpdate = Object.assign(barnieChip, anotherAddress);
console.log(barnieChipUpdate);

// ------------- Object.keys(), Object.value(), Object.entries()----
const barnieKeys = Object.keys(barnie);
console.log("------Object.keys()------", barnieKeys)
//all property names in a array

const barnieValues = Object.values(barnie);
console.log("------Object.values()------", barnieValues)

const barnieEntries = Object.entries(barnie);
console.log("------Object.entries()------", barnieEntries);
//array of smaller arrays with two elements, one is the property and the other is the value

// ------------ Dynamicaly creating properties

const newDog = {};
const nameProperty = "dogName";
newDog[nameProperty] = "Sparky";
// owner becomes a key in newDog object
newDog["owner"] = "Petre";
console.log(newDog);

// ------------ Object.freeze(), Object.seal()--------
Object.freeze(barnie);
barnie.name = "Reks";
barnie.friend = "Sharko";
console.log(barnie);
//Object.freeze completly locks the object.
//We cannot add new properties or change the existing ones.

const myPuppy = Object.create(newDog);
myPuppy.breed = "Husky";
Object.seal(myPuppy);
myPuppy.friend = "Sharko";
myPuppy.breed = "Dzukela";
console.log(myPuppy);
// Object.seal() allows us to change values of existing properties, but we cannot add any new ones

// -------------- Spread Operator ----------

const numbers = [1,2,3];

function sum(num1, num2, num3){
    return num1 + num2 + num3;
}

console.log(sum(5, 5, 2));
console.log(sum(numbers[0], numbers[1], numbers[2]));
console.log(numbers);
console.log(...numbers); // ... three dots are spread operator
console.log(sum(...numbers)); // get all values from array