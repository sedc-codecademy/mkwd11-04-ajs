console.log("We are live!");

//JSON Example
let myJson = `{
    "trainer": "Petre",
    "assistant": "Ilija",
    "students": [
        "Tosho",
        "Ivo",
        "Mario",
        "Dejan",
        "Blagojche",
        "Jovan"
    ],
    "academy": "Code"
}`;

//parse the json into a program class
let jsObject = JSON.parse(myJson);
console.log(jsObject.students[0]);
//of what type
console.log(typeof(myJson));
console.log(jsObject.assistant);

// Plain JS request
document.getElementById("sendRequest")
.addEventListener("click", function(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        console.log("Request is sent!");
        //if we have a successful call
        if(xhr.status >= 200 && xhr.status < 300){
            console.log("Request successful");
            let objectResponse = JSON.parse(xhr.response);
            console.log(objectResponse);
        }
        else{
            console.log(this.responseText);
        }
    }
    xhr.open("GET", "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json");
    xhr.send();
});

// jQuery request

$(document).ready(function(){
    document.getElementById("sendRequest")
    .addEventListener("click", function(){
        $.ajax({
            //we have three important parts in the ajax call
            //first we write the api we want to hit in the url
            url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json",
            success: function(response){
                console.log("Request successful");
                let responseObject = JSON.parse(response);
                console.log(responseObject);
            },
            error: function(response){
                console.log("The request has failed: " + response.status);
                console.log(response.responseText);
            }
        })
    })
})

// Astronauts example

$(document).ready(function(){
    document.getElementById("sendRequest")
    .addEventListener("click", function(){
        $.ajax({
            //koe api go povikuvame
            url: "http://api.open-notify.org/astros.json",
            // ako e uspesen povikot
            success: function(response){
                console.log("Request successful");
                console.log(response);
                let element = document.getElementById("astros");
                element.innerHTML = "";
                for(let i = 0; i < response.people.length; i ++){
                    element.innerHTML += `<li> ${response.people[i].name} </li>`;
                }
            },
            // ne sakame ova da se sluci
            error: function(response){
                console.log("The request has failed: " + response.status);
                console.log(response.responseText);
            }
        })
    });
});