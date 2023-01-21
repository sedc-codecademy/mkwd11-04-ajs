// // Bad way
// $(document).ready(function(){
//     let callBtn = document.getElementById("callBtn");
//     let result = document.getElementById("result");
//     let globalResponse;
//     callBtn.addEventListener("click", function(){
//         $.ajax({
//             url:"https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json",
//             success: function(response){
//                 console.log("Success!");
//                 globalResponse = JSON.parse(response);
//             },
//             error: function(error){
//                 console.log(error);
//             }
//         })
//         let resultTitle = result.getElementsByTagName("h1")[0];
//         let resultList = result.getElementsByTagName("ul")[0];
//         resultTitle.innerText = `${globalResponse.Academy} Academy:`
//         resultList.innerHTML = "";
//         for (let student of globalResponse.students) {
//             resultList.innerHTML += `<li>${student}</li>`
//         }
//     })
// })

// Okay way
$(document).ready(function(){
    let callBtn = document.getElementById("callBtn");
    let result = document.getElementById("result");
    callBtn.addEventListener("click", function(){
        $.ajax({
            url:"https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json",
            success: function(response){
                console.log("Success!");
                let responseObject = JSON.parse(response);
                let resultTitle = result.getElementsByTagName("h1")[0];
                let resultList = result.getElementsByTagName("ul")[0];
                resultTitle.innerText = `${responseObject.academy} Academy:`
                resultList.innerHTML = "";
                for (let student of responseObject.students) {
                    resultList.innerHTML += `<li>${student}</li>`
                }
            },
            error: function(error){
                console.log(error);
            }
        })
    })
})

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