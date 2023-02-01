
console.log("SIMPLE");

function stepOne(callback){
  console.log("Step 1");
  callback()
}

function stepTwo(callback){
  console.log("Step 2");
  callback()
}

function stepThree(){
  console.log("Step 3");
}

//stepOne(stepTwo) // so far we show this scenario;
stepOne(function(){
  stepTwo(function(){
    stepThree()
  })
});

console.log("**** COMPLEX ****");
/**
 * callbacks are good that we can have
 * controlled structure of the execution of our code
 * 
 * but here is the problem
 * if we have to much chaining of callbacks
 * we are going to create what we call: callback hell
 * 
 * it is hard to read, and it might become hard to maintain.
 */
let stepOneComplex = function(callback) {
  console.log("Step 1 Complex")
  callback()
}

let stepTwoComplex = function(callback) {
  console.log("Step 2 Complex")
  callback()
}

let stepThreeComplex = function(callback) {
  console.log("Step 3 Complex")
  callback()
}

let stepFourComplex = function(callback) {
  console.log("Step 4 Complex")
  callback()
}

let stepFiveComplex = function(callback) {
  console.log("Step 5 Complex")
  callback()
}

let stepSixComplex = function() {
  console.log("FINALY !!!Step 6 Complex")
}

// Callback hell looks like =)

//pyramid of doom
// haduken code
stepOneComplex(function(){
  stepTwoComplex(function(){
    stepThreeComplex(function(){
      stepFourComplex(function(){
        stepFiveComplex(function(){
          stepSixComplex()
        })
      })
    })
  })
})

function complex() {
  setTimeout(function() {
    console.log('1. First thing, preparing for the second');
    setTimeout(function() {
      console.log('2. Second thing, preparing for the third');
      setTimeout(function() {
	      console.log('3. Third thing, preparing for the forth');
        setTimeout(function() {
        console.log('4. Forth thing, preparing for the fifth');
          setTimeout(function() {
            console.log('5. Fifth thing, preparing for the Sixth');
              setTimeout(function() {
                console.log('6. Sixth and last thing');
              }, 2000);
            }, 2000);
          }, 2000);
	  }, 2000);
    }, 2000);
  }, 2000);
};

// complex(); // feel free to uncomment


console.log("**** THE SOLUTION ****");
function step1Promise(){
  return new Promise((resolve) => {
    console.log("Step 1 promise");
    resolve()
  })
}

function step2Promise(){
  console.log("Step 2 promise")
}

function step3Promise(){
  console.log("Step 3 promise")
}

function step4Promise(){
  console.log("Step 4 promise")
}

// step1Promise() //execute this line
//   .then(step2Promise) // then execute this function
//   .then(step3Promise) // then execute this function
//   .then(step4Promise) // then execute this function


console.log("**** PROMISES ****");// es6 / es2015

function simplePromise(worktime){
  let myPromise = new Promise(function(resolve, reject){
    if(worktime <= 0){
      reject("It's too short of a work time. Please try again!")
    }
    resolve(`${worktime} is valid work time.`)
  })  

  return myPromise

  //same as above a bit shorter
  // return new Promise(function(resolve, reject){
  //   if(worktime <= 0){
  //     reject("It's too short of a work time. Please try again!")
  //   }
  //   resolve(`${worktime} is valid work time.`)
  // })
};

/**
 * The JS promise can have 3 states
 * pending
 * fullfilled
 * rejected
 */
let myPromiseReturned = simplePromise(100);
console.log(myPromiseReturned);

myPromiseReturned
  // if the state of the promise was fullfilled 
  .then(function(resultOfPromise){
    console.log("in first then");
    console.log("result of promise:", resultOfPromise)
  })
  .then(() => {
    console.log("in second then")
  })
  // if state of the promise was REJECTED we are going to enter catch
  .catch(function(error){
    console.log(error)
  })
  // finally executes no matter the promise state
  .finally(function(){
    console.log("Finally will execute no matter of the state of the promise =)")
  })


console.log("**** PROMISES WITH AJAX ****");

let printResult = document.getElementById("printResult");
let swapiURL = "https://swapi.dev/api/people";


let makeApiRequest = (url) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      success: (apiResponse) => {
        // console.log(apiResponse);
        let peopleResults = apiResponse.results;
        resolve(peopleResults)
      },
      error: (error) => {
        reject(error)
      }
    })
  })
}

let printFunction = (results, element) => {
  console.log("Printing Function");
  element.innerHTML = "";

  results.forEach((swapiPerson) => element.innerHTML += `<h3>${swapiPerson.name}</h3>`)
}

// makeApiRequest(swapiURL)
// .then((results) => {
//   console.log(results);
//   printFunction(results, printResult)
// })
// .catch((error) => {
//   console.log(error)
// })

console.log("**** FETCH ****");
// fetch("https://swapi.dev/api/people")
// fetch(swapiURL)

let fetchApiCall = () => {
  // FETCH WILL RETURN YOU A PROMISE CONTAINING THE RESULT
  let makeCall = fetch("https://swapi.dev/api/people");

  // WAY 1, using stringified json 
  // after parsing it

  // makeCall
  // .then(function(response){
  //   console.log("response from fetch:", response)
  //   let stringifiedRes = response.text();
  //   console.log(stringifiedRes);
  //   return stringifiedRes
  // })
  // .then(function(result){
  //   // console.log(result)
  //   let parsedResult = JSON.parse(result)
  //   console.log(parsedResult)
  // })
  // .catch((error) => {
  //   console.log(error)
  // })

  makeCall
  .then(function(response){
    console.log("response from fetch:", response)
    let parsedResponse = response.json();
    console.log(parsedResponse);
    return parsedResponse
  })
  .then((result) => {
    console.log(result)
    printFunction(result.results, printResult)
  })
  .catch((error) => {
    console.log(error)
  })
}

// fetchApiCall() 
// ASYNC/AWAIT
// regularFunction (){}
// let regularAnony = async function(){}

let makeApiRequestModern = async () => {
  let makeCall = await fetch("https://swapi.dev/api/people");
  let result = await makeCall.json();
  // console.log(result)
  printFunction(result.results, printResult)
}
makeApiRequestModern()
