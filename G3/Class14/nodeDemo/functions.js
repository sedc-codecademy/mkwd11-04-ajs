function sayHello(name) {
    console.log(`Hello ${name}`);
}

function sayGoodbye(name) {
    console.log(`Goodbye ${name}`);
}

function sum(num1, num2) {
    return num1 + num2;
}

let result = sum(7, 8);

module.exports = {
    sayHello,
    sayGoodbye,
    result
}