function Student(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;

    this.getStudentInfo = function() {
        let info = `Student: ${this.firstName} ${this.lastName} age ${this.age} years. Email: ${this.email}`;
        return info;
    }
}

let firstNameInput = document.getElementById('first-name');
let lastNameInput = document.getElementById('last-name');
let ageInput = document.getElementById('age');
let emailInput = document.getElementById('email');

let database = [];

document
    .getElementById('submit-btn')
    .addEventListener('click', function() {
        // let studentInformations = getInputsValues();
        let studentInformations = getInputValues2();

        let student = new Student(studentInformations.firstName, studentInformations.lastName,
             studentInformations.age, studentInformations.email);

        database.push(student);

        clearInputs();

        printStudent();
    });

function getInputsValues() {
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let age = ageInput.value;
    let email = emailInput.value;

    let result = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email
    };

    return result;
}

function getInputValues2() {
    let inputs = document.getElementById('form').querySelectorAll('input');
    let studentInfo = {};
    for(let input of inputs) {
        studentInfo[input.name] = input.value;
    }
    return studentInfo;
}

function clearInputs() {
    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    emailInput.value = '';
}

function printStudent() {
    let ul = document.getElementById('student-list');
    ul.innerHTML = '';
    let html = '';
    for(let student of database) {
        html += `<li>${student.getStudentInfo()}</li>`;
    }
    ul.innerHTML = html;
}