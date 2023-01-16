let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let ageInput = document.getElementById("age");
let emailInput =document.getElementById("email");
let btnAdd = document.getElementById("btnAdd");

function Student(firstName, lastName, age, email){
    this.firstName = !firstName ? "unnamed" : firstName;
    this.lastName = !lastName ? "unnamed" : lastName;
    this.age = age;
    this.email = !email ? "no email" : email;
    this.getInfo = function(){
        return `This is student ${this.firstName}* ${this.lastName}`
    }
}

let students = [];
btnAdd.addEventListener("click", function(){
    if(!firstNameInput.value){
        console.log("You must enter first name");
        return;
    }
    if(!lastNameInput.value){
        console.log("You must enter last name");
        return;
    }
    if(!ageInput.value){
        console.log("You must enter age");
        return;
    }
    if(!emailInput.value){
        console.log("You must enter email");
        return;
    }
    students.push(new Student(firstNameInput.value, lastNameInput.value, parseInt(ageInput.value), emailInput.value));
    printStudents(students);
});

function printStudents(studentArray){
    console.log("Students:");
    for(student of studentArray){
        console.log(`${student.firstName} ${student.lastName} ${student.age} ${student.email}`)
    }
}