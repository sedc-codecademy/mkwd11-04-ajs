getFullName(irstName, lastName);

// Declaration of function
function getFullName(firstName, lastName) {
    let result = `${firstName} + ${lastName}`;
    //console.log(result);
    return result;
}

let firstName = "First";
let lastName = "Last";
console.log(result);

// Call function and store result in variable
//let fullName = getFullName("Jane", "Doe");

// Call function form if statement
// if (getFullName("Jane", "Longer Last Name For Doe").length >= 20) {
//     console.log("The name is too long!");
// }

//Correct way to call a function from inside another function
function printPersonDetails(firstName, lastName, age, address) { // firstName, lastName, age, address - se parametri
    return `The person named ${getFullName(firstName, lastName)} is of age ${age} and lives on ${address}!`;
}

let personDetails = printPersonDetails("Jane", "Doe", "22", "St. 123"); // "Jane", "Doe", "22", "St. 123" - argumenti

//Incorrect way of calling a function from inside a function
function printPersonDetails(firstName, lastName, age, address) {
    let fullName;

    function getFullName(firstName, lastName) {
        fullName = `${firstName} ${lastName}`;
    }
    return `The person ${fullName} is ${age} old and lives on ${address}`;
}