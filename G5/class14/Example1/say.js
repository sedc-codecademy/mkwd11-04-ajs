const hello = name => `Hey there ${name}`
const bye = name => `Bye there ${name}`

// module.exports = hello;
// module.exports = bye;

module.exports = {hello: hello, bye: bye}
