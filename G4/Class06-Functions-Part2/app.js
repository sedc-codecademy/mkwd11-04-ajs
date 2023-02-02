console.log("works");

// Functions as first class citizens
// Means that they can be used in place of many other things in the language

// 1. Stored in a variable

const addTwoNumbers = (numOne, numTwo) => numOne + numTwo;

const multiplyTwoNumbrs = (numOne, numTwo) => numOne * numTwo;

console.log(addTwoNumbers(10, 20));

// 2. Stored in an array (extremely rare and not used anywhere)

const mathFunctions = [(numOne, numTwo) => numOne + numTwo, multiplyTwoNumbrs];

console.log(mathFunctions[0](2, 3));
console.log(mathFunctions[1](10, 20));

// 3. Used as an argument in another function

const calculator = (operationFunc, numOne, numTwo) => {
  console.log(operationFunc);
  const result = operationFunc(numOne, numTwo);
  return result;
};

console.log(calculator(addTwoNumbers, 54, 46));
console.log(calculator(multiplyTwoNumbrs, 2, 2));
console.log(calculator((numOne, numTwo) => numOne - numTwo, 30, 15));

// 4. Returning a funciton from another function

const calculatorTwo = operator => {
  if (operator === "+") {
    return (numOne, numTwo) => numOne + numTwo;
  }

  if (operator === "*") {
    return (numOne, numTwo) => numOne * numTwo;
  }

  return "Invalid Operator";
};

const addFunc = calculatorTwo("+");

console.log(addFunc(30, 20));

console.log(calculatorTwo("+")(20, 10));

// 5. Functions with properties and methods

const printHello = name => console.log(`Hello there ${name}`);

printHello("Borche");

printHello.defaultName = "Danilo";

printHello(printHello.defaultName);

function printFullName(firstName, lastName) {
  console.log(arguments);

  console.log(`${firstName} ${lastName}`);
}

printFullName("Borche", "Borisovski", "tes", true, 1000, "rest");

// HIGHER ORDER FUNCTIONS

const students = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    averageGrade: 4,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    averageGrade: 3,
  },
  {
    firstName: "Susan",
    lastName: "Sarandon",
    age: 17,
    averageGrade: 3,
  },
  {
    firstName: "Bob",
    lastName: "Bobsky",
    age: 30,
    averageGrade: 2,
  },
  {
    firstName: "Alice",
    lastName: "Ripley",
    age: 18,
    averageGrade: 5,
  },
  {
    firstName: "Robert",
    lastName: "Duvall",
    age: 50,
    averageGrade: 4,
  },
  {
    firstName: "Ricky",
    lastName: "Balboa",
    age: 16,
    averageGrade: 1,
  },
];

// 1. forEach

// Without forEach
const printStudentInfo = students => {
  for (let student of students) {
    console.log(
      `${student.firstName} ${student.lastName}, Age: ${student.age}`
    );
  }
};

// printStudentInfo(students);

// With forEach

students.forEach(student =>
  console.log(`${student.firstName} ${student.lastName}, Age: ${student.age}`)
);

console.log(students);

// 2. filter

// Objective: filter out only students aged 18 or above

// Without filter

const filterStudents = students => {
  const resultArr = [];
  for (let student of students) {
    if (student.age >= 18) resultArr.push(student);
  }

  return resultArr;
};

console.log(filterStudents(students));

const filteredStudents = students.filter(student => student.age >= 18);

console.log(filteredStudents);

// 3. map

const numbers = [-100, 3, 4, 1, 6, 5, 4, 7, 8];

// without map
const generateStudentInfo = students => {
  const resultArr = [];

  for (let student of students) {
    resultArr.push(
      `${student.firstName} ${student.lastName}, Age: ${student.age}`
    );
  }
  return resultArr;
};

const multiplyNumbers = numbers => {
  const resultArr = [];
  for (let num of numbers) {
    resultArr.push(num * 5);
  }
  return resultArr;
};

console.log(generateStudentInfo(students));
console.log(multiplyNumbers(numbers));

// with map

const studentsInfo = students.map(
  student => `${student.firstName} ${student.lastName}, Age: ${student.age}`
);

const multipliedNumbers = numbers.map(num => num * 5);

console.log(studentsInfo);
console.log(multipliedNumbers);
console.log(numbers);

// 4. reduce

// without reduce

const sumNumbers = numbers => {
  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }

  return sum;
};

console.log(sumNumbers(numbers));

// with reduce

// const sum = numbers.reduce((acc, num) => acc + num, 0);

const randomNums = [3, 4, 2, 1, 2];

const sum = numbers.reduce((acc, num) => {
  console.log(`Accumulator `, acc);
  console.log(`Num `, num);

  return acc + num;
}, 0);

console.log(sum);

// 5. Find

// Find returns element or undefined
const john = students.find(student => student.firstName === "John");

console.log(john);

// Filter returns empty array or array with 1 element
const filterJohn = students.filter(student => student.firstName === "sdsdsd");

console.log(filterJohn);

// 6. Some
// Returns true if at least one element in the array passes condition otherwise it returns false
console.log(
  "Some Output: ",
  numbers.some(num => num < 0)
);

// 7. Every
// Returns true only if all elements in the array pass the condition otherwise it returns false
console.log(
  "Every Output: ",
  numbers.every(num => num > 0)
);

// 8. Sort

console.log("Numbers before sort ", numbers);

numbers.sort();

console.log("Numbers after sort ", numbers);

console.log("Students before sort ", students);

const studentsCopy = students.map(student => student);

studentsCopy.sort((a, b) => a.age - b.age);
studentsCopy.push("test", "rest", "best");

console.log("Original students ", students);
console.log("Copy students ", studentsCopy);

// Method chaining

// const topStudents = students.filter(student => student.averageGrade >= 4);

// const topStudentsInfo = topStudents.map(
//   student =>
//     `${student.firstName} ${student.lastName}, Avg Grade: ${student.averageGrade}`
// );

const topStudentsInfo = students
  .filter(student => student.averageGrade >= 4)
  .map(
    student =>
      `${student.firstName} ${student.lastName}, Avg Grade: ${student.averageGrade}`
  );

// console.log(topStudentsInfo);

// Exercise

const fetchStudents = () => {
  fetch(
    "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
  )
    .then(res => res.json())
    .then(students => generateSolutions(students));
};

const generateSolutions = students => {
  const higerThanThreeGrade = students.filter(
    student => student.averageGrade > 3
  );
  console.log(higerThanThreeGrade);
  console.log(
    students.filter(
      student => student.gender === "Female" && student.averageGrade === 5
    )
  );
  console.log(
    students
      .filter(
        student =>
          student.city === "Skopje" &&
          student.gender === "Male" &&
          student.age > 18
      )
      .map(student => `${student.firstName} ${student.lastName}`)
  );
  console.log(
    students
      .filter(student => student.gender === "Female" && student.age > 24)
      .map(student => student.averageGrade)
  );
  console.log(
    students.filter(
      student =>
        student.gender === "Male" &&
        student.averageGrade > 2 &&
        student.firstName[0] === "B"
    )
  );
};

// fetchStudents();

// Mapping data into html elements

const studentsHTML = students
  .map(
    student => `<div><h2>${student.firstName} ${student.lastName}</h2></div>`
  )
  .join("");

console.log(studentsHTML);
