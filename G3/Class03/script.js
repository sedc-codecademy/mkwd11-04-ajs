// Json exmaple
let g3 = `{
    "trainer": "Trainer name",
    "assistant": "Assistant name",
    "students": [
        "Bob",
        "Jill",
        "Samantha",
        "Greg",
        "Chris"
    ],
    "academy": "Code"
}`;

// console.log(typeof(g3));
// console.log(g3);

let g3JsObject = JSON.parse(g3);

// console.log(g3JsObject);
// console.log(g3JsObject.students[0]);


// Plain js request

document.getElementById('btn').addEventListener('click', function() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        console.log("Request is sent!");
        console.log(xhr)
        if(xhr.status >= 200 && xhr.status < 300){
            console.log("Request success!");
            console.log(xhr.response);
            let response = JSON.parse(xhr.response);
            console.log(response);
        } else {
            console.log(xhr.responseText);
        }

    }

    xhr.open("GET", "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json");
    xhr.send();
})


// Jquery request

$(document).ready(function() {
    document.getElementById('btn1')
    .addEventListener('click', function() {
        $.ajax({
            url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json",
            method: "GET",
            success: function(response) {
                console.log("Request success!");
                console.log(response);
                let responseObj = JSON.parse(response);
                console.log(responseObj);
            },
            error: function(response) {
                console.log("Request failed!");
                console.log(response);
            }
        })
    })
});