console.log("Hello from node js");

/**
 * clear / cls => clears the terminal
 * dir / ls => shows all the files/folders inside the current directory.
 * cd => change directory
 */

const sumOfNumbers = (numberOne, numberTwo) => {
    return numberOne + numberTwo
}

const greetings = (name) => {
    return `${name} says hi.`
}
let greetingOne = greetings("Bob");

// console.log(sumOfNumbers(19, 20))
// console.log(greetingOne)

//exporting this two functions from this file
module.exports = {
    greetings: greetings,
    sumOfNumbers: sumOfNumbers
}