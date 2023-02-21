function sayHello(name) {
    return `Hello ${name}`
}

function sayGoodbye(name){
    return `Goodbye ${name}`
}

// this will export only the last function
// module.exports = sayHello
// module.exports = sayGoodbay

module.exports = {
    hello: sayHello,
    bye: sayGoodbye
}