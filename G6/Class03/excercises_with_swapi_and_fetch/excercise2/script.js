//fetch
function printName(name) {
    let resultName = document.getElementsByTagName("h1")[0];
    resultName.innerText = name;
}

function printStats(response) {
    let resultTable = document.getElementsByTagName("tbody")[0];
    resultTable.innerHTML = "";
    resultTable.innerHTML += `
    <tr>
        <td> Height </td>
        <td> ${response.height} cm </td>
    </tr>
    <tr>
        <td> Weight </td>
        <td> ${response.mass} kg </td>
    </tr>
    <tr>
        <td> Eye color </td>
        <td> ${response.eye_color} </td>
    </tr>
    <tr>
        <td> Hair color </td>
        <td> ${response.hair_color} </td>
    </tr>
    `;
}

let callBtn = document.getElementById("callBtn");
let result = document.getElementById("result");
callBtn.addEventListener("click", callPersonOneWithFetch);

function callPersonOneWithFetch() {
    fetch('https://swapi.dev/api/people/1/')
        .then(function(response) {
            console.log("Request was successful!");
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            printName(myJson.name);
            printStats(myJson);
        })
}

// // Bad way
// $(document).ready(function(){
//     let callBtn = document.getElementById("callBtn");
//     let result = document.getElementById("result");
//     let globalResponse;
//     callBtn.addEventListener("click", function(){
//         $.ajax({
//             url:"https://swapi.dev/api/people/1/",
//             success: function(response){
//                 console.log("Success!");
//                 globalResponse = response;
//             },
//             error: function(error){
//                 console.log(error);
//             }
//         })
//         let resultTitle = result.getElementsByTagName("h1")[0];
//         let resultTable = result.getElementsByTagName("tbody")[0];
//         resultTitle.innerText = globalResponse.name;
//         resultTable.innerHTML = "";
//         resultTable.innerHTML += `
//         <tr> 
//             <td> Height </td>
//             <td> ${globalResponse.height}cm </td>
//         </tr>
//         <tr> 
//             <td> Weight </td>
//             <td> ${globalResponse.mass}kg </td>
//         </tr>
//         <tr> 
//             <td> Eye Color </td>
//             <td> ${globalResponse.eye_color} </td>
//         </tr>
//         <tr> 
//             <td> Hair Color </td>
//             <td> ${globalResponse.hair_color} </td>
//         </tr>`;
//     })
// })

// // Okay way
// $(function() {
//     let callBtn = document.getElementById("callBtn");
//     let result = document.getElementById("result");
//     callBtn.addEventListener("click", function() {
//         $.ajax({
//             url: "https://swapi.dev/api/people/1/",
//             success: function(response) {
//                 console.log("Success!");
//                 let resultTitle = result.getElementsByTagName("h1")[0];
//                 let resultTable = result.getElementsByTagName("tbody")[0];
//                 resultTitle.innerText = response.name;
//                 resultTable.innerHTML = "";
//                 resultTable.innerHTML += `
//                 <tr> 
//                     <td> Height </td>
//                     <td> ${response.height}cm </td>
//                 </tr>
//                 <tr> 
//                     <td> Weight </td>
//                     <td> ${response.mass}kg </td>
//                 </tr>
//                 <tr> 
//                     <td> Eye Color </td>
//                     <td> ${response.eye_color} </td>
//                 </tr>
//                 <tr> 
//                     <td> Hair Color </td>
//                     <td> ${response.hair_color} </td>
//                 </tr>`;
//             },
//             error: function(error) {
//                 console.log(error);
//             }
//         })
//     })
// })

// // Good way
// function printName(resultElement, name) {
//     let resultTitle = resultElement.getElementsByTagName("h1")[0];
//     resultTitle.innerText = name;
// }

// function printStats(resultElement, response) {
//     let resultTable = resultElement.getElementsByTagName("tbody")[0];
//     resultTable.innerHTML = "";
//     resultTable.innerHTML += `
//     <tr> 
//         <td> Height </td>
//         <td> ${response.height}cm </td>
//     </tr>
//     <tr> 
//         <td> Weight </td>
//         <td> ${response.mass}kg </td>
//     </tr>
//     <tr> 
//         <td> Eye Color </td>
//         <td> ${response.eye_color} </td>
//     </tr>
//     <tr> 
//         <td> Hair Color </td>
//         <td> ${response.hair_color} </td>
//     </tr>`;
// }
// $(function() {
//     let callBtn = document.getElementById("callBtn");
//     let result = document.getElementById("result");
//     callBtn.addEventListener("click", function() {
//         $.ajax({
//             url: "https://swapi.dev/api/people/1/",
//             success: function(response) {
//                 console.log("Success!");
//                 printName(result, response.name);
//                 printStats(result, response);
//             },
//             error: function(error) {
//                 console.log(error);
//             }
//         })
//     })
// })