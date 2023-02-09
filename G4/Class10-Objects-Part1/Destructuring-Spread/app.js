console.log("works");

// Destructuring

const student = {
  firstName: "John",
  lastName: "Doe",
  age: 24,
  grades: {
    basicHtml: 5,
    basicJs: 3,
    advancedJs: 2,
    comment: {
      trainer: "Decent Student",
      assistent: "Decent Student Indeed",
    },
  },
};

console.log(student.grades.basicHtml);
console.log(student.grades.basicJs);
console.log(student.grades.advancedJs);

// Basic destructuring
const { firstName, lastName, age } = student;

console.log(firstName, lastName, age);

// Destructuring a nested object of another object
// const { basicHtml, basicJs, advancedJs } = student.grades;

// Adding custom name of destrctured properties
const {
  firstName: studentFirstName,
  lastName: studentLastName,
  age: studentAge,
} = student;

console.log(studentFirstName, studentLastName, studentAge);

// Destructuring nested objects of the main object
const {
  grades: {
    basicJs,
    basicHtml,
    advancedJs,
    comment: { trainer: trainerComment, assistent: assisstentComment },
  },
} = student;

console.log(basicHtml, basicJs, advancedJs);

console.log(trainerComment, assisstentComment);

// Without destructuring
// const printStudentInfo = student => {
//   console.log(
//     `Name: ${student.firstName} ${student.lastName}, Age: ${student.age}`
//   );
//   console.log("Grades:");
//   console.log(`BasicHTML: ${student.grades.basicHtml}`);
//   console.log(`BasicJS: ${student.grades.basicJs}`);
//   console.log(`AdvancedJS: ${student.grades.advancedJs}`);
// };

// printStudentInfo(student);

// With destructuring
const printStudentInfo = ({
  firstName,
  lastName,
  age,
  grades: { basicJs, basicHtml, advancedJs },
}) => {
  console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
  console.log("Grades:");
  console.log(`BasicHTML: ${basicHtml}`);
  console.log(`BasicJS: ${basicJs}`);
  console.log(`AdvancedJS: ${advancedJs}`);
};

printStudentInfo(student);

// Destructuring arrays

const colors = ["red", "green", "yellow", "white", "black", ["pink", "orange"]];

const [redColor, greenColor, , , blackColor] = colors;

console.log(redColor, greenColor, blackColor);

const [, , yellow, , , [pink, orange]] = colors;

console.log(yellow, pink, orange);

// Spread operator

const remainNums = [4, 5, 6, 7, 8, 9, 10];

const numArray = [1, 2, 3];

// for (let num of remainNums) {
//   numArray.push(num);
// }
// numArray.push(remainNums);

// console.log("Num array", numArray);

// Combining arrays using the spread operator
const combinedNums = [...numArray, ...remainNums, 11, 12, 13];

console.log("With spread", combinedNums);

// Copying arrays using the spread operator

const originalNums = [2, 3, 1, 5, 1, 3, 5, 22, 33, 11, 22];

const copyNums = [...originalNums];

copyNums.sort((a, b) => a - b);

console.log(originalNums);

// combining objects with spread
const bodyInfo = {
  doors: 5,
  paint: "Metallic Gray",
  wheelSize: 18,
};

const engineInfo = {
  topSpeed: 240,
  topRpm: 7500,
  hasTurbo: true,
  cc: 3500,
};

const carInfo = {
  ...bodyInfo,
  ...engineInfo,
};

console.log(carInfo);

// copying objects with spred

const carInfoCopy = { ...carInfo };

carInfoCopy.isBroken = true;
carInfoCopy.wheelSize = 10;

console.log(carInfo);
