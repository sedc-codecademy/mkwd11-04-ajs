let students = ["Marija", "Damjan", "Tosho", "Mario", "Ivo"];
let showStudentsBtn = document.getElementById("showStudentsBtn");
let result = document.getElementById("result");

showStudentsBtn.addEventListener("click", function(e){
    let unorderedList  = document.createElement("ul");
    for(let student of students){
        let listItem = document.createElement("li");
        listItem.innerText = student;
        unorderedList.appendChild(listItem);
    }
    result.appendChild(unorderedList);
})