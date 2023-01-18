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

console.log(typeof(g3));
console.log(g3);

let g3JsObject = JSON.parse(g3);

console.log(g3JsObject);
console.log(g3JsObject.students[0]);


// Plain js request

document.getElementById('btn').addEventListener('click', function() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        console.log("Request is sent!");
    }

    xhr.open("GET", "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json");
    xhr.send();
})