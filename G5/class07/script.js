console.log('We are live!')

//JS engine
//Delovi: 1. Memory heap 2. Call stack

// function f1() {
//     console.log('Hello from f1')
// }

// function f2() {
//     f1()
//     console.log('Hello from f2')
// }


// f2()


//global execution context
//single-thread


//setTimeout - wait for X seconds, then run the code
// console.log('This happens right away')
// setTimeout(function(){console.log('This happens later!')}, 2000)
// console.log('What about this?')

//setInterval - run this code, every X second
// setInterval(function(){console.log('This prints every second')}, 1000)


// let cb1 = () => console.log('cb1')
// console.log('Hi')
// setTimeout(cb1, 1000)
// console.log('Bye')


//Callback functions
// function first() {
//     console.log('I am first')
// }

// function second() {
//     console.log('I am second')
// }

// first()
// second()
//result:
//I am first 
//I am second



// function first() {
//     setTimeout(() => console.log('I am first'), 2000)
// }

// function second() {
//     console.log('I am second')
// }

// first()
// second()

// function first(callback) {
//     setTimeout(() => {
//         console.log('I am first')
//         callback()
//     }, 2000)
// }

// function second() {
//     console.log('I am second')
// }

// first(second)


//Exercise 1
//Create a btn in html
//On btn click call the following three functions
//1. wait2s() //'After 2 seconds'
//2. wait3s()// 'After 3 seconds'
//3. wait5s()// 'After 5 seconds'
//* use setTimeout

// setTimeout(function(){console.log('This happens later!')}, 2000)

// setTimeout - wait for X seconds, then run the code


// console.log('This happens right away')
// setTimeout(() => console.log('This happens later'), 3000)
// console.log('What about this?')
//Result:
//This happens right away
//What about this
//This happens later

// console.log('This happens right away')
// setTimeout(() => console.log('This happens later'), 0)
// console.log('What about this?')
//Result:
//This happens right away
//What about this
//This happens later

//myFunction = parent funkcija
//callbackFunc = callback funckija
function myFunction(callbackFunc) {
    //1.Do something
    console.log('Hello')
    //2. Execute the callback function
    callbackFunc()
}

function myCallback() {
    //do something else
    console.log('Hello there')
}

myFunction(myCallback)



//Ajax call
function makeCall(url) {
    fetch(url)
    .then(function(response){
        console.log('The response succeded, we have json')
        return response.json()
    })
    .then(function(data){
        console.log('The response succeded, we have data')
        return data
    })
    .catch(function(error){
        console.log('The response failed')
        return error
    })
}

function printResult(result) {
    console.log('Result:', result)
}


//Result
//Result: undefined
//The response succeded


// printResult(setTimeout(makeCall("https://swapi.dev/api/people/1/")), 5000)//1


function makeCallSolved(url, callback){
    fetch(url)
    .then(function(response){
        console.log('The response succeded, we have json')
        return response.json()
    })
    .then(function(data){
        console.log('The response succeded, we have data')
        callback(data)
    })
    .catch(function(error){
         console.log('The response failed')
         callback(error)
    })
}

makeCallSolved("https://swapi.dev/api/people/1/", printResult)

//Exercise 2
//refactor the function makeCallSolved to use arrow syntax
//create a btn and call the function on click


let printResultArrow = result => console.log('Result:', result);
let makeCallSolvedArrow = (url, callback) => {
    fetch(url)
    .then(response => {
        console.log('The response succeded, we have json');
        return response.json();
    })
    .then(data=> {
        console.log('The response succeded, we have data');
        callback(data);
    })
    .catch(error =>{
         console.log('The response failed');
         callback(error);
    })
}
btn.addEventListener('click', () =>makeCallSolvedArrow("https://swapi.dev/api/people/1/", printResultArrow) )