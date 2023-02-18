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

// Object.assign can be used to combine objects as the example above

const carInfoCopyAssign = Object.assign({}, bodyInfo, engineInfo);

console.log("Assign object", carInfoCopyAssign);

console.log(carInfo);

// copying objects with spred

const carInfoCopy = { ...carInfo };

// Object.create can be used to create a copy of another object

const carInfoCopyCreate = Object.create(carInfo);

console.log("Create object", carInfoCopyCreate);

carInfoCopy.isBroken = true;
carInfoCopy.wheelSize = 10;

console.log(carInfo);

// Object.keys returns an array of all the keys in an object

const carInfoKeys = Object.keys(carInfo);

console.log("Object keys", carInfoKeys);

// Object.values returns an array of all the values in an object

const carInfoValues = Object.values(carInfo);

console.log("Object Values", carInfoValues);

// Object.entires returns an array with nested arrays that contain the keys and values of an object

const carInfoEntries = Object.entries(carInfo);

console.log("Object Entries", carInfoEntries);

// Dynamically adding properties to an object

const newKeys = ["isEuroSix", "isAffordable", "isRegistered"];

newKeys.forEach(key => {
  carInfo[key] = true;
});

console.log(carInfo);

// Chad wants to be a straight 5 student
const badStudent = {
  name: "Chad",
  grades: {
    basicHtml: 1,
    basicJs: 1,
    advancedJs: 1,
    basicNode: 1,
    advancedNode: 1,
  },
};

// Dynamically using object.keys to change properties
const gradeKeys = Object.keys(badStudent.grades);

gradeKeys.forEach(key => {
  badStudent.grades[key] = 5;
});

console.log(badStudent);

// Object.seal prevents adding of new properties but allows for editing of existing ones

const american = {
  name: "Bob Bobsky",
  country: "USA",
};

Object.seal(american);
american.isCrazy = true;

// american.name = "Vladimir Prutin";

console.log(american);

// Object.freeze prevents editing of properties and adding new properties

const frenchmen = {
  name: "Jacque",
  country: "France",
};

Object.freeze(frenchmen);

frenchmen.name = "Bobby";

console.log(frenchmen);
