let num = 5;

function sumTo(num) {
    if (num === 0) {
        return 0;
    }
    return num + sumTo(num - 1);
}

sumTo(num);

let sumToArrow = num => num === 0 ? 0 : num + sumTo(num - 1);

let firstName = "Jane";
let lastName = "Doe";

function getFullName(firstName, lastName) {
    firstName = "Joe";
    if (firstName.length > 1 && lastName.length > 1) {
        let fullName = `${firstName} ${lastName}`;
        console.log(fullName);
    }
}

getFullName(firstName, lastName);
console.log(firstName);
console.log(lastName);
console.log(fullName);