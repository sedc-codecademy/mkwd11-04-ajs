// Synchronous execution
// console.log('A')
// console.log('B')
// console.log('C')

// Asynchronous execution
// console.log('pred timeout')
// setTimeout(() => {
//     console.log('vnatre vo set timeout')
// })
// console.log('posle timeout')

// Callback function
// const callbackFn = () => console.log('callback')
// console.log('pred')
// setTimeout(callbackFn)
// console.log('potoa')

// const first = () => console.log('first')
// const second = () => {
//     console.log('second')
//     first()
// }

// second();

// const first = () => setTimeout(() => console.log('fist'), 5000)
// const second = () => console.log('second')

// first();
// second();


// let number = 0

// setInterval(() => {
//     console.log(number += 1)
// }, 1000)

console.log('pred fetch')

let luke;

fetch('https://swapi.dev/api/people/1/')
    .then((response) => response.json())
    .then((myJson) => {
        luke = myJson
        console.log('luke vnatre', luke.name)
    })

// setTimeout(() => {
//     console.log('luke nadvor', luke.name)
// }, 100000)

console.log('luke nadvor', luke)

console.log('posle fetch')


// fetch('https://swapi.dev/api/people/1/')
//     .then((response) => response.json())
//     .then((myJson) => {
//         console.log('luke vnatre', luke.name)
//         console.log("posle luke")
//     })
//     .catch((error) => {
//         console.log('error', error)
//     })
//     .finally(() => {
//         console.log('finally')
//     })

    // JSON.parse('{}')
    // JSON.stringify()