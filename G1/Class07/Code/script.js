// What is JavaScript ?
// A single-threaded non-blocking asynchronous concurrent
// Single-threaded means that it has one threaded (it can do one thing at a time)
//Blocking - do something until it's finished and then continue with the next peace of code

//Simple function, setTimeOut(), setInterval()
const simpleFunction = () => console.log("Simple function");
const functionWithTimeout = () => setTimeout(() => console.log("setTimeout and it will be done in 5 seconds"), 5000);
const functionWithInterval = () => setInterval(() => console.log("setInterval and it will be done in every 1 second"), 1000);

// simpleFunction();
// functionWithTimeout();
// functionWithInterval();

// setTimeout() executes the function once on a time out. setInterval() executes the function repetedly on the interval

// Callback function
function calculate(callback, num1, num2){
    console.log("Calculating...");
    return callback(num1, num2);
}

let result = calculate((x,y) => x + y, 3, 5);
console.log("Result callback function", result);

let students = [
    {firstName: "Ivo", lastName: "Ignov", grade: 10, age: 15},
    {firstName: "Toso", lastName: "Jordanov", grade: 10, age: 16},
    {firstName: "Monika", lastName: "Spasevska", grade: 10, age: 14},
    {firstName: "Jovan", lastName: "Spasov", grade: 10, age: 16},
    {firstName: "Dani", lastName: "Metodieva", grade: 10, age: 16},
];

let studentAgeFilter = students
                            .filter(student => student.age >=12 && student.age <= 15);
console.log(studentAgeFilter);

let names = students
                    .map(student => {
                        return { name: `${student.firstName} ${student.lastName}`, grade: student.grade}
                    });
console.log(names);

let studentsOlderthan14 = students
                                .filter(student => student.age > 14)
                                .map((s) => s.grade)
                                .reduce((sum, grade) => sum *= grade);
console.log(studentsOlderthan14);


const printStudentFullName = (callbackFunction, student) => {
    console.log("callback function");
    return callbackFunction(student);
}

students
       .forEach(student =>
        printStudentFullName(
            std =>
            console.log(
                `${std.firstName} ${std.lastName}`
            ),
            student
        )
        );

// Synchronous and asynchronous sxecuting
//Function withou delay

function withoutDelay1(){
    console.log("withoutDelay1");
}
function withoutDelay2(){
    console.log("withoutDelay2");
}

withoutDelay1();
withoutDelay2();

//Functions with and without delay
function first(){
    setTimeout(() => console.log("First thing"), 1000);
}

function second(){
    setTimeout(() => console.log("Second thing"), 5000);
}

function third(){

    console.log("Third thing");
}

function fourth(){
    setTimeout(() => console.log("Fourth thing"), 2500);
}

// first();
// second();
// third();
// fourth();


// Two functions calls but the first is delayed 
console.log("-----------------------------");

function first(callback){
    console.log("First thing");
    setTimeout(() => {
        console.log("Log within setTimeout()");
        if(callback)
        callback();
    }, 2500)
}

function second(){
    console.log("Second thing!");
}

// first(second);

//making request using fetch

function makeCall(url){
    fetch(url)
    .then(res => res.json())
    .then(response => {
        console.log('The request succeded!');
        return response;
    })
    .catch( error => {
        console.log('The request failed!');
        return error.responseText;
    })
}

function print(result){
    console.log(result);
}

// It will log undefined and The request secceeded!
print(makeCall("https://swapi.dev/api/people/1"));
      

// making request using fetch and callbacks

function makeCall(url, callbackFunction){
    fetch(url)
    .then(res => res.json())
    .then(response => {
        console.log('The request succeded!');
        if(callbackFunction)
        callbackFunction(response)
    })
    .catch( error => {
        console.log('The request failed!');
        if(callbackFunction)
        callbackFunction(error);
    })
}

function print(result){
    console.log(result);
}

makeCall("https://swapi.dev/api/people/1", print);
