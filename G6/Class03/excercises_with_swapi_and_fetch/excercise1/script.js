// //Bad way
// $(function() {
//     let callBtn = document.getElementById("callBtn");
//     let result = document.getElementById("result");
//     let globalResponse;

//     callBtn.addEventListener("click", function() {
//         $.ajax({
//             url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json",
//             success: function(response) {
//                 console.log("Successfully requested data!");
//                 globalResponse = JSON.parse(response);
//                 console.log(globalResponse);

//                 let resultTitle = result.getElementsByTagName("h1")[0];
//                 let resultList = result.getElementsByTagName("ul")[0];
//                 resultTitle.innerText = `${globalResponse.academy} Academy`;
//                 resultList.innerHTML = "";
//                 for (let student of globalResponse.students) {
//                     resultList.innerHTML += `<li>${student}</li>`
//                 }
//             },
//             error: function(error) {
//                 console.log(error);
//             }
//         })
//     })
// })

// // Okay way
// $(document).ready(function(){
//     let callBtn = document.getElementById("callBtn");
//     let result = document.getElementById("result");
//     callBtn.addEventListener("click", function(){
//         $.ajax({
//             url:"https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json",
//             success: function(response){
//                 console.log("Success!");
//                 let responseObject = JSON.parse(response);
//                 let resultTitle = result.getElementsByTagName("h1")[0];
//                 let resultList = result.getElementsByTagName("ul")[0];
//                 resultTitle.innerText = `${responseObject.academy} Academy:`
//                 resultList.innerHTML = "";
//                 for (let student of responseObject.students) {
//                     resultList.innerHTML += `<li>${student}</li>`
//                 }
//             },
//             error: function(error){
//                 console.log(error);
//             }
//         })
//     })
// })

// // Good way
// function printAcademy(resultElement, academy){
//     let resultTitle = resultElement.getElementsByTagName("h1")[0];
//     resultTitle.innerText = `${academy} Academy:`
// }
// function printStudents(resultElement, students){
//     let resultList = resultElement.getElementsByTagName("ul")[0];
//     resultList.innerHTML = "";
//     for (let student of students) {
//         resultList.innerHTML += `<li>${student}</li>`
//     }
// }
// $(document).ready(function(){
//     let callBtn = document.getElementById("callBtn");
//     let result = document.getElementById("result");
//     callBtn.addEventListener("click", function(){
//         $.ajax({
//             url:"https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json",
//             success: function(response){
//                 console.log("Success!");
//                 let responseObject = JSON.parse(response);
//                 printAcademy(result, responseObject.Academy);
//                 printStudents(result, responseObject.students);
//             },
//             error: function(error){
//                 console.log(error);
//             }
//         })
//     })
// })

// fetch
function printAcademy(academy) {
    let resultTitle = document.getElementsByTagName("h1")[0];
    resultTitle.innerText = `${academy} Academy:`
}

function printStudents(students) {
    let resultList = document.getElementsByTagName("ul")[0];
    resultList.innerHTML = "";
    for (let student of students) {
        resultList.innerHTML += `<li>${student}</li>`
    }
}

let callBtn = document.getElementById("callBtn");
callBtn.addEventListener("click", handleWithFetch);
let result = document.getElementById("result");

function handleWithFetch() {
    fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            printAcademy(myJson.academy);
            printStudents(myJson.students);
        })
}