let titleInput = document.getElementById("title");
let priorityInput = document.getElementById("priority");
let colorInput = document.getElementById("color");
let descInput = document.getElementById("description");
let btnAdd = document.getElementById("btnAdd");
let btnShowAll = document.getElementById("showAll");

function Note(title, priority, color, description) {
    this.title = title;
    this.priority = priority;
    this.color = color;
    this.description = description;
}

let notes = [];
btnAdd.addEventListener("click", function() {
    if (!titleInput.value) {
        console.log("You must enter title");
        return;
    }
    if (!priorityInput.value) {
        console.log("You must enter priority");
        return;
    }
    if (!colorInput.value) {
        console.log("You must enter color");
        return;
    }
    if (!descInput.value) {
        console.log("You must enter description");
        return;
    }
    notes.push(new Note(titleInput.value, priorityInput.value, colorInput.value, descInput.value));
    titleInput.value = "";
    priorityInput.value = "";
    colorInput.value = "";
    descInput.value = "";
});

btnShowAll.addEventListener("click", function() {
    document.getElementById("result").innerHTML = "";
    let table = document.createElement("table");
    table.style.border = "1px solid black";

    let trHeader = document.createElement("tr");
    let titleTh = document.createElement("th");
    let priorityTh = document.createElement("th");
    let colorTh = document.createElement("th");
    let descriptionTh = document.createElement("th");

    titleTh.innerText = "Title";
    priorityTh.innerText = 'Priority';
    colorTh.innerText = 'Color';
    descriptionTh.innerText = "Description";

    trHeader.appendChild(titleTh);
    trHeader.appendChild(priorityTh);
    trHeader.appendChild(colorTh);
    trHeader.appendChild(descriptionTh);

    table.appendChild(trHeader);

    for (let note of notes) {
        let tr = document.createElement("tr");
        let titleTd = document.createElement("td");
        let priorityTd = document.createElement("td");
        let colorTd = document.createElement("td");
        let descriptionTd = document.createElement("td");

        titleTd.innerText = note.title;
        priorityTd.innerText = note.priority;
        colorTd.innerText = note.color;
        descriptionTd.innerText = note.description.substring(0, 10) + " ...";

        tr.appendChild(titleTd);
        tr.appendChild(priorityTd);
        tr.appendChild(colorTd);
        tr.appendChild(descriptionTd);
        tr.style.color = note.color;
        table.appendChild(tr);
    }

    document.getElementById("result").appendChild(table);

});