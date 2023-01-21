console.log("connected");

/**
 *  Make "tell joke app";
 *  - Make api request to https://api.chucknorris.io/jokes/random
 *  - Print the joke on the screen;
 *  - Whenever the button is clicked, generate new joke
 */

let buttons = document.getElementsByTagName("button");

let generateJokeBtn = buttons[0];
let resultElement = document.getElementById("joke");

function getJoke(){

  $.ajax({
    url: "https://api.chucknorris.io/jokes/random",
    method: "GET", // this property is 100% optional. if we do not provide it, by default is GET;

    success: function(response){
      console.log("Success, our response:", response);
      console.log("Our joke is: ", response.value );

      printJoke(resultElement, response.value);
    },

    error: function(error){
      console.log("Error occured, please try again later", error);
    }
  })


};

generateJokeBtn.addEventListener("click", function(){
  getJoke();
});

function printJoke(element, joke){
  element.innerHTML = joke;
};