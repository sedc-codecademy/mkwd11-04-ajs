export { words, getRandomWord }

let words = {
    helloVariants: ["Hi", "Hello", "Hey"],
    goodbyeVariants: ["Bye", "Goodbye", "Cheers"]
};

function getRandomWord(wordsArray) {
    return wordsArray
        [Math.floor(Math.random() * (wordsArray.length - 1))]
}