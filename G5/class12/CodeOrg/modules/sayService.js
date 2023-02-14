import { getRandom, words } from "./messageService.js";

export function sayHello(name) {
    console.log(`${getRandom(words.helloVariants)} there ${name}`)
}

export function sayGoodbye(name) {
    console.log(`${getRandom(words.goodbyeVariants)} there ${name}`)
}

