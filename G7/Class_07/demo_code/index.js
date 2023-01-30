/**
 * A single-threaded non-blocking asynchronous
 * 
 * Single Threaded => The code is executed in one place (single thread);
 * Non Blocking => JS deals with the functions that require time to finish; so it does
 *  not block the execution of the rest of the code;
 */

//setTimeOut => will delay execution of code for given time

// setTimeout(function(){
//   console.log("Hello world");
//   //we can call other function here
//   //we can have calculations
// }, 2000) // 2seconds

// setTimeout(() => {
//   console.log("Hello again")
// }, 2500) // 2.5 seconds

//setInterval => will execute the code on the given time

// let myInterval = setInterval(function(){
//   console.log("Hello amigos")
// }, 1000) //each second we execute the handler


let stopIntervalBtn = document.getElementById("stopIntervalBtn");

stopIntervalBtn.addEventListener("click", function(){
  clearInterval(myInterval) // stops the given interval
})

// EXAMPLE #2;

// console.log("One");
// setTimeout(function(){
//   console.log("Two")
// }, 2000)
// console.log("Three");


console.log("***** CALLBACKS *****");

function concatanateNames(){
  console.log("Hey I am a functin provided as a callback parameter!")
}

function printFullNames(callback){
  console.log("Parent function call")
  callback()
}

printFullNames(concatanateNames) // when we provide a CB, we provide just the name of the function
                                //we provided REFERENCE to the function ;)


/**
 * 
 * swapi.dev/api/planets/1/
 * https://swapi.dev/api/starships/
 * https://swapi.dev/api/films/
 */

function makeApiRequest(url, callback){
  $.ajax({
    url: url,
    success: (response) => {
      // console.log(response)
      callback(response)
    },

    error: function(error){
      console.log("Error occured: ", error)
    }
  })
}


function printJedi(jediResult){
  console.log("Callback print jedi")
  console.log(jediResult)

  console.log(jediResult.name)

  //to print the object
}

function printStarships(starshipsResponse){
  console.log("Callback print starships")
  console.log(starshipsResponse)

  let starships = starshipsResponse.results

  starships.forEach((starship) => console.log(starship.name))
}

function printFilms(filmsResponse){
  console.log("Callback print films ")
  console.log(filmsResponse)
}


makeApiRequest("https://swapi.dev/api/planets/1/", printJedi) 

makeApiRequest("https://swapi.dev/api/starships/", printStarships) 

makeApiRequest("https://swapi.dev/api/films/", printFilms)