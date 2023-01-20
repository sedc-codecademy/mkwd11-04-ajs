console.log("Connected");

// JSON;

let personOne = {
  firstName: "John",
  lastName: "Doe",
  age: 27,
  hasDrivingLicense: true,
  favouriteFood: ['Soup', "Burger"]
}
console.log("Person one object: ", personOne);
console.log(typeof(personOne))
console.log("Person name is: ", personOne.firstName);

console.log("**** JSON STRINGIFY ****");

// JSON stingify will always return a stringified value =)
let stingifiedPersonOne = JSON.stringify(personOne);

console.log(stingifiedPersonOne);
console.log('The type of the stringified json is: ', typeof(stingifiedPersonOne));
console.log(stingifiedPersonOne.firstName); // will return undefined

console.log("**** JSON PARSE ****");
let stringifiedPersonTwo = `{
  "firstName": "Bob",
  "lastName": "Bobski",
  "age": 37,
  "hasDrivingLicense": false,
  "favouriteFood": ["Chicken Gyro", "Soup"]
}`

console.log(stringifiedPersonTwo);
console.log(stringifiedPersonTwo.firstName); // we cannot access properties on stringified json 

let parsedPersonTwo = JSON.parse(stringifiedPersonTwo);
console.log(parsedPersonTwo);
console.log("Name of person two is:", parsedPersonTwo.firstName );



console.log("**** API REQUEST ****");
// API REQUESTS

// GET REQUEST => retrieves data from an API 
// POST REQUEST => sends new data to an API
// PUT/PATCH REQUEST => update existing data
// DELETE REQUEST => remove existing data

let myBtn = document.getElementById("myBtn");
let myDiv = document.getElementById("results");

//  Informational responses (100–199)
//  Successful responses (200–299)
//  Redirection messages (300–399)
//  Client error responses (400–499)
//  Server error responses (500–599)


// *** Plain javascript ***
myBtn.addEventListener("click", function(){
  let xhttp = new XMLHttpRequest();

  xhttp.onload = function () {
    console.log(xhttp)

    if(xhttp.status >= 200 && xhttp.status < 300){ //make sure that we have success response
      console.log(xhttp.responseText) // stingified json version of the response

      let parsedResponse = JSON.parse(xhttp.responseText); // parsing the stringified json to object so we can use it
  
      console.log(parsedResponse)

      let starWarsResult = parsedResponse.results;

        //let person is the object of the current iteration
      // for(let person of parsedResponse.results){
      //   myDiv.innerHTML += `${person.name} <br/>`
      // }

      // same as above; let person is equal to parsedResponse.results[i];

      for(let i = 0; i < starWarsResult.length; i++){
        console.log(starWarsResult[i])
        myDiv.innerHTML += `${starWarsResult[i].name} birth: ${starWarsResult[i].birth_year} <br/>`
        return
      }


      // myDiv.innerHTML += `${starWarsResult[0].name} birth: ${starWarsResult[0].birth_year} <br/>`
    }
   
  }

  xhttp.open("GET", "https://swapi.dev/api/people")
  xhttp.send();

});


// Jquery



// Fetch