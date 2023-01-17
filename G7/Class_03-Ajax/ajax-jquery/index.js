console.log("connected");

let myBtn = document.getElementById("myBtn");
let myDiv = document.getElementById("results");

let responseOfApi;

// WAY 1 => Dont do it as this
// function getSwapiPeople(){
//   $.ajax({
//     url: "https://swapi.dev/api/people",

//     success: function(response){
//       console.log(response);
//       console.log("Resulsts retrieved");  
//       // BAD WAY ! BAD PRACTICE!  
//       responseOfApi = response.results
      
//     },

//     error: function(error){
//       console.error(error)
//     }
//   })
// }

// myBtn.addEventListener("click", function(){
//   getSwapiPeople()
//   printResults(responseOfApi)
// })


// WAY 2 => Better way;

function getSwapiPeople(){
  $.ajax({
    url: "https://swapi.dev/api/people",
    method: "GET", //it's optional. if we do not provide the type of method, by default is GET
    success: function(response){
      console.log(response);
      console.log("Resulsts retrieved");  
      printResults(response.results);
    },

    error: function(error){
      console.error(error)
    }
  })
}

myBtn.addEventListener("click", function(){
  getSwapiPeople()
})


function printResults(charactersArray){
  console.log(charactersArray);
  myDiv.innerHTML = "";

  for(let i = 0; i < charactersArray.length; i++){
    myDiv.innerHTML += `
    <h3>Character Name is: ${charactersArray[i].name} </h3>
    `
  }
}