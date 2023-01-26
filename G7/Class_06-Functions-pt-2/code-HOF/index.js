console.log('Connected');

function consoleDivider(title){
  console.log(`****** ${title} ******`)
}

// students.forEach(function(){
//   console.log("wa")
// }) => wont work

let students = [
  { firstName: "Bob", lastName: "H", grade: 5, age: 19 },
  { firstName: "Mel", lastName: "B", grade: 2, age: 33 },
  { firstName: "Jill", lastName: "M", grade: 3, age: 15 },
  { firstName: "Lucky", lastName: "J", grade: 5, age: 18 },
  { firstName: "Strike", lastName: "K", grade: 4, age: 16 },
  { firstName: "Eric", lastName: "I", grade: 1, age: 17 },
];

consoleDivider("FOR EACH");
/**
 * For each => iterates through each element in the array and 
 * does an operation for that element.
 * Does not RETURN any value;
 */

//Without High order function;
for(let i = 0; i < students.length; i++){
  // students[i] => element of current iteration
  console.log(`${students[i].firstName} ${students[i].lastName}`)
  
}

// With Using a function
function logFullNames(student){
  console.log(student)
  // console.log(`${student.firstName} ${student.lastName}`)
};

students.forEach(logFullNames) // reference to function. logFullNames is executed for each element in students array

consoleDivider(" For each with anonymous function ")
// With using an anonymous function;
let studentsOl = document.getElementById("studentsOl");
students.forEach(function(student){
  //student => element of currect iteration
  //the argument student, provided in the anonymous function
  //is actually each element of the current iteration
  console.log(student)

  studentsOl.innerHTML += `<li>${student.firstName} ${student.lastName}</li>`
})

let printFruitsUl = document.getElementById("printFruits");

let fruits = ["Pineapple", "Strawberries"];

fruits.forEach(function(fruit){
  printFruitsUl.innerHTML += `<li>${fruit}</li>`
});

consoleDivider(" For each with arrow function ")
// With an arrow function
students.forEach((student) => {
  // here the argument in the CB is each element of the array of the current iteration
  console.log(`${student.firstName} is ${student.age} years old.`);
});
// we cannot use the keyword break or return to BREAK the iteration in forEach

consoleDivider("FILTER");
/**
 * FILTER IS RETURNING A VALUE;
 * DOES NOT MUTATE THE ORIGINAL ARRAY;
 * RETURNS A BRAND NEW ARRAY WITH THE FILTERED RESULTS;
 */
// Without HOF;
let adultsWithHOF = [];
for(let i = 0; i < students.length; i++){
  if(students[i].age >= 18){
    adultsWithHOF.push(students[i])
  }
};
consoleDivider("Without HOF");

console.log(adultsWithHOF);

// With using a function;
function adultCheck(student){
  return student.age >= 18
};
// WAY 1
// let adultsUsingFunction = [];
// adultsUsingFunction = students.filter(adultCheck);

// WAY 2
let adultsUsingFunction = students.filter(adultCheck); //reference to adultCheck
consoleDivider("Filter using function");

console.log(adultsUsingFunction);//is a brand new array with the filtered values
console.log(students); // the original array is not MUTATED

// With anonymous function
let adultsUsingAnonymous = students.filter(function(student){ 
  //the student argument in the anymous function
  //is the student object of the current iteration
  return student.age >= 18 // we will return the student that fullfiles the statement
})
consoleDivider("Filter using anonymous functions");
console.log(adultsUsingAnonymous)
//With arrow function
let adultsUsingArrow = students.filter((student) => {
  console.log(student)
  return student.age >= 18
})
consoleDivider("Filter using arrow functions");
console.log(adultsUsingArrow)

//even shorter arrow
let adultsUsingArrowShorter = students.filter((student) => student.age >= 18);
console.log(adultsUsingArrowShorter);

consoleDivider("MAP");
/**
 * MAP IS GOING TO EXECUTE CODE
 * FOR EACH ELEMENT IN THE ARRAY
 * AND WILL RETURN A BRAND NEW ARRAY
 * WITH THE MODIFIED VALUES
 */

let players = [
  {name: "John", points: 20},
  {name: "Bob", points: 50},
]

//Without HOF
let playersWithBonus = [];
for(let i = 0; i < players.length; i++ ){
  playersWithBonus.push({ name: players[i].name, points: players[i].points + 20 })
};
consoleDivider("Map without HOF");
console.log(playersWithBonus);


//With function
function awardBonusPoints(player){
  return { name: player.name, points: player.points + 20 }
}

let playersWithBonusUsingFunc = players.map(awardBonusPoints) // as a CB we provide awardBonusPoints
consoleDivider("Map using function");
console.log(playersWithBonusUsingFunc);

//With anonymous function;
let playersUsingAnonymous = players.map(function(player){
  return { name: player.name, points: player.points + 20 }
})
consoleDivider("Map using anonymous function");
console.log(playersUsingAnonymous);

//With arrow
consoleDivider("Map using arrow function");
let playersWithArrow = players.map((player) => {
  console.log(player);
  return { name: player.name, points: player.points + 20 }

})
console.log(playersWithArrow)

let playersWithArrowShorter = players.map((player) => ({ name: player.name, points: player.points + 20 }));
console.log(playersWithArrowShorter)

