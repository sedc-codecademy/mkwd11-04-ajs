// console.log('****Conected****')

// console.log('****Exercise1****')
// Create a constructor function for Student objects with:
// Properties: firstName, lastName, birthYear, academy, grades - array of numbers
// Methods:
// getAge() - returns age of student
// getInfo() - returns "This is student firstName* lastName* from the academy academy*!"
// getGradesAverage() - returns the average of the student grades
// Create an array with 3 students

// function Student (firstName, lastName, birthYear, academy, grades) {
//     this.firstName = !firstName ? "unnamed" : firstName;
//     this.lastName = lastName;
//     this.birthYear = birthYear;
//     this.academy = academy;
//     this.grades = grades;
//     this.getAge = function() {
//        let age = new Date().getFullYear()-this.birthYear;
//        return age;
//     }
//     this.getInfo = function(){
//         let info = `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy} `
//         return info;
//     }
//     this.getGradesAverage = function (){
//         let gradesAverage = 0;
//         let gradeSum = 0;
//         if(!this.grades || this.grades.length === 0) {
//             return 'No grades!'
//         }
//         for (let grades of this.grades) {
//             gradeSum += grades;
//         }
//         gradesAverage = gradeSum/this.grades.length;
//         return gradesAverage;
//     }
// }

// let students = [
// new Student('Dimitar', 'Milkovski', 1996,'SEDC', []),
// new Student('Monika', 'Sazdova', 1993,'SEDC', [2,2,4,4,5]),
// new Student('Ana', 'Andreeva', 1998, 'SEDC', [5, 6, 7, 8])
// ]

// console.log(students[0].getGradesAverage(), students[1].getAge(), students[2].getInfo())
// new Date().getFullYear //get current year



// DOM - Document Object Model 
// document.getElementById('id')
// document.getElementsByClassName('class')
// document.getElementsByTagName('tag')
// document.querySelector()
// document.querySelectorAll()

// let title = document.getElementById('mainTitle');
// console.log('innerHTML:', title.innerHTML)
// title.innerHTML += '<h2>Dodaten inner HTML</h2>'
// title.innerHTML = '<h6>Nov vnatresen HTML</h6>'
// title.innerText = 'New Title'
// title.innerText += 'Extension'
// console.log('TITLE:', title)

// let input = document.getElementById('nameInput');
// console.log('VALUE:', input.value)
// input.value = 'Mitko'


// let headers = document.getElementsByTagName('h1')
// let firstHeader = headers[0]
// firstHeader.style.color = 'red'

// let redHeaders = document.getElementsByClassName('textRed')
// let headersTest = document.querySelectorAll('.textRed')
// let mainTitleTest = document.querySelector('#mainTitle')

// for (let header of redHeaders) {
//     header.style.color = 'yellow'
// }


// console.log('*******Exercise 2**********')
// Create a student registry page
// Create an HTML page with student registry form with
// First Name
// Last Name
// Age
// Email
// Create a student generator function
// When the form is submitted, the inputs should be compiled into a new object from the generator function Student
// This student should be added to a list called "database"
// After submit the database should be printed in the console
// The input fields should be cleared


// let database = [];
// let firstName = document.getElementById('first-name');
// let lastName = document.getElementById('last-name');
// let age = document.getElementById('age');
// let email = document.getElementById('email');
// let btn =document.getElementById('btn');
// function StudentRegistry(firstName, lastName, age, email) {
//  this.firstName = firstName.value;
//  this.lastName = lastName.value;
//  this.age = age.value;
//  this.email = email.value;
// }
// btn.addEventListener('click', function(){
//  let studentRegistry = new StudentRegistry(firstName, lastName, age, email)
//  database.push(studentRegistry);
//  console.log(database); 
//  firstName.value = '';
//  lastName.value = '';
//  email.value = '';
//  age.value = '';
// })



// console.log('*******Exercise 3**********')
//Exercise 3 - Title generator
// Create 3 inputs:
// Color
// FontSize
// Text
// Create a button for generating titles
// When the button is clicked generate a new h1 element with the color, font size, and text from the inputs


let color = document.getElementById('color');
let fontSize = document.getElementById('fontSize');
let text = document.getElementById('text');
let btn = document.getElementById('button');
let result1 = document.getElementById('result1');

btn.addEventListener('click', function(){
    let newHeader = document.createElement('h1');
    console.log(newHeader)
    newHeader.innerText = text.value;
    newHeader.style.fontSize = fontSize.value + 'px';
    newHeader.style.color = color.value;
    result1.appendChild(newHeader);
    color.value = '';
    fontSize.value = '';
    text.value = ''; 
})

