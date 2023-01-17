//console.log("We are live!");

// JSON Example
let myJson = `{
    "trainer": "Trainer name",
    "assistant": "Assitant name",
    "students": [
      "Bob",
      "Samantha",
      "Chris",
      "Jill",
      "Greg"
    ],
    "academy": "Code"
  }`;
let jsObject = JSON.parse(myJson);
console.log(typeof(myJson));
console.log(jsObject.students[0]);

// Plain JS request
document.getElementById("sendRequest")
.addEventListener("click", function(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        console.log("Request is sent!");
        if(xhr.status >= 200 && xhr.status < 300){
            console.log("Request successful!");
            let objectResponse = JSON.parse(xhr.response);
            console.log(objectResponse);
        } else {
            console.log(xhr.responseText);
        }
    };
    xhr.open("GET", "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json");
    xhr.send();
});

// JQuery request
$(document).ready(function(){
    document.getElementById("sendRequest")
    .addEventListener("click", function(){
        $.ajax({
            url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json",
            success: function(response){
                console.log("Request successful!");
                let responseObject = JSON.parse(response);
                console.log(responseObject);
            },
            error: function(response){
                console.log("The request has failed: " + response.status);
                console.log(response.responseText);
            }
        })
    });
})

// Astronauts example
$(document).ready(function(){
document.getElementById("sendRequest")
.addEventListener("click", function(){
    $.ajax({
        url: "http://api.open-notify.org/astros.json",
        success: function(response){
            console.log("Request successful!");
            // let responseObject = JSON.parse(response);
            console.log(response);
            let element = document.getElementById("astros");
            element.innerHTML = "";
        for(let i = 0; i < response.people.length; i++){
            element.innerHTML += `<li> ${response.people[i].name} </li>`;
        }  
        },
        error: function(response){
            console.log("The request has failed: " + response.status);
            console.log(response.responseText);
        }
    })
});
})