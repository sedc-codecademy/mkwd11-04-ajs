// Example for generating array to 10
const result = [];

for (let i = 1; i <= 10; i++) {
  result.push(i);
}

console.log(result);

// num % 3 === 0
// num % 4 === 0

// Generate array solutions

const numsDevisbleByThree = [];
const numsDevisibleBYFour = [];
const numsEndingInOne = [];

for (let i = 1; i <= 1000; i++) {
  if (i % 3 === 0) {
    numsDevisbleByThree.push(i);
  }
  if (i % 4 === 0) {
    numsDevisibleBYFour.push(i);
  }
  if (i % 10 === 1) {
    numsEndingInOne.push(i);
  }
}

console.log(numsDevisbleByThree, numsDevisibleBYFour, numsEndingInOne);

function filterStrings() {}

function filterNumbers() {}

console.log(typeof "Borche");
console.log(typeof 100);
console.log(typeof "Borche" === "string");

const testData = [
  true,
  false,
  12,
  13,
  44,
  2345,
  "Bob",
  "Jill",
  false,
  undefined,
  1000,
  null,
  "Jack",
  "",
  "",
  99,
  "Greg",
  undefined,
  NaN,
  1,
  22,
];

// Filter function solutions

function filterStrings(arr) {
  const resultArr = [];

  for (let item of arr) {
    if (typeof item === "string") {
      resultArr.push(item);
    }
  }
  return resultArr;
}

console.log(filterStrings(testData));

function filterNumbers(arr) {
  const resultArr = [];

  for (let item of arr) {
    if (typeof item === "number") {
      resultArr.push(item);
    }
  }
  return resultArr;
}

console.log(filterNumbers(testData));

function filterFalseyValues(arr) {
  const resultArr = [];

  for (let item of arr) {
    if (item || item === false) resultArr.push(item);
  }
  return resultArr;
}

console.log(filterFalseyValues(testData));

console.log(Math.floor(Math.random() * 255));

Math.floor(Math.random() * 255);
// el.style.backgroundColor = `rgb(red,green,blue)`

// el.style.fontSize
// el.style.color

function Car(model, speed, year) {
  this.model = model;
  this.speed = speed;
  this.year = year;

  this.drive = function () {
    console.log(`vehicle is driving at speed ${this.speed}`);
  };
}

const mazda = new Car("rx7", 250, 1992);

console.log(mazda);

mazda.drive();

// Color changer solution
const bodyEl = document.querySelector("body");

function generateRandomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const randomRgbColor = `rgb(${red}, ${green}, ${blue})`;
  return randomRgbColor;
}

function changeBodyColor() {
  const randomColor = generateRandomColor();

  bodyEl.style.backgroundColor = randomColor;
  bodyEl.innerHTML = `<h1>${randomColor}</h1>`;
}

// changeBodyColor();

// Title generator solution

const textInput = document.querySelector("#text");
const colorInput = document.querySelector("#color");
const fontSizeInput = document.querySelector("#fontSize");
const btnEl = document.querySelector("#btn");
const headingEl = document.querySelector("#heading");

console.log(textInput, colorInput, fontSizeInput, btnEl, headingEl);

function renderHeading(text, color, fontSize, headingEl) {
  headingEl.textContent = text;
  headingEl.style.color = color;
  headingEl.style.fontSize = `${fontSize}px`;
}

btnEl.addEventListener("click", function () {
  renderHeading(
    textInput.value,
    colorInput.value,
    fontSizeInput.value,
    headingEl
  );
});

// Student constructor solution

function Student(firstName, lastName, birthYear, academy, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.academy = academy;
  this.grades = grades;

  this.getAge = function () {
    return new Date().getFullYear() - this.birthYear;
  };
  this.getInfo = function () {
    return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}!`;
  };
  this.getGradesAverage = function () {
    let sum = 0;
    for (let grade of this.grades) {
      sum += grade;
    }
    return sum / this.grades.length;
  };
}

const students = [
  new Student("John", "Doe", 1993, "Academy for Programming", [1, 3, 2, 4, 5]),
  new Student(
    "Jane",
    "Adams",
    1982,
    "Academy for Programming",
    [5, 4, 5, 4, 5]
  ),
  new Student(
    "Jack",
    "Dorsey",
    1993,
    "Academy for Programming",
    [1, 1, 2, 1, 1]
  ),
];

console.log(students);

console.log(students[1].getInfo());
