let words = {
    helloVariants: ['Hey', 'Hi', 'Hello', 'Yo'],
    goodbyeVariants: ['Goobye', 'Bye', 'Cheers', 'See ya']
}

function getRandom(words){
    return words[Math.floor(Math.random() * words.length)]
}

export {words, getRandom}