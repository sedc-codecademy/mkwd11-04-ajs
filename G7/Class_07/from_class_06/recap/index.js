/**
 * 
 * @param {*} paramOne
 * is checking if something is existing
 * @param {*} paramTwo 
 * person auth
 * @param {*} paramThree 
 * array of whole products
 * 
 * some text to describe what this function is doing
 * in each environment
 */
function complexFunction(paramOne, paramTwo, paramThree){};
complexFunction();

let costum_log = (text) => console.log(`**** ${text} ****`);
// RECAP

costum_log("FOR EACH");

// Make a function, that accepets an array and a number
// It adds the number property to each element of the array;

let numbers = [1, 2, 10, 14];

let addNumberToElements = function(arrayOfNumbers, number){
  let helperArray = [];
  arrayOfNumbers.forEach(function(valueOfIteration){
    //for each iteration
    //this code will execute
    console.log("Each element of current iteration:", valueOfIteration);

    let newValueOfNumber = valueOfIteration += number;
    console.log("The number of current iteration with added number parameter:",valueOfIteration)

    helperArray.push(newValueOfNumber)
  });
 
  return helperArray;
};

console.log(addNumberToElements(numbers, 2));
console.log('numbers array:', numbers);

// Example 2

let todos = [{name: "Wash the dishes", isDone: true }, {name:"Walk the dog", isDone: false}, {name: "Learn javascript", isDone: false}];

// Function that is going to iterate through the todos list,
// and will print each todo in the HTML =)

let todosResults = document.getElementById("todosResults");

// using ternary operator
let checkIfTodoIsDone = function(isTodoDone) {
  return isTodoDone ? `<p style="color: green">Todo is done</p>` : `<p style="color: red">Todo is not done</p>`
}

// same as above
let checkIfTodoIsDoneSecond = function(isTodoDone) {
  if(isTodoDone){
    return `<p style="color: green">Todo is done</p>`
  }else {
    return `<p style="color: red">Todo is not done</p>`
  }
}


let printTodos = (todosList) => {
  if(todosList.length === 0){
    alert("Please provide valid input");
    return;
  };

  todosList.forEach((todo) => {
    console.log('Each element of current iteration', todo);
    todosResults.innerHTML += `
      <h3>${todo.name}</h3>
      ${checkIfTodoIsDoneSecond(todo.isDone)}
    `
  });

}

printTodos(todos);

costum_log("FILTER");

// Create me a function that filters out the even numbers;

let secondNumbers = [2, 10, 3, 5, 7, 20, 22, 102, 133, 106, 143];


let filteredEvenNumbers = (listOfNumbers) => {
  // Approach ONE

  let evenNumbers = listOfNumbers.filter(function(valueOfIteration){
    /**
     * return the element (element of current iteration)
     * that fullfiles this condition
     */
    return valueOfIteration % 2 === 0
    // we can have even more complex check
  })

  // Approach TWO     same as above but shorter          //direct return
  // let evenNumbers = listOfNumbers.filter((valueOfIteration) => valueOfIteration % 2 === 0 )

  // console.log(evenNumbers)

  return evenNumbers
}

let numbersFilterd = filteredEvenNumbers(secondNumbers);
console.log("Filtered even numbers returned: ", numbersFilterd)

costum_log("MAP");

// function that multiplies each element if the array with 
// the provided number parameter

function multiplyBy(listOfNumbers, number){
    let modifiedArr = listOfNumbers.map(function(valueOfIteration){
      return valueOfIteration * number
    })

    // console.log(modifiedArr);

    return modifiedArr
} 

let modifiedArray = multiplyBy(secondNumbers, 6);
console.log(modifiedArray);


let employeesArray = [{name: "Bob", lastName: "Bobski"}, {name: "John", lastName: "Doe"}];

let returnFullNames = (people) => {

  let changedArray =  people.map((person) => {
    console.log("Original Person: ", person); //value of current iteration

    let modifiedPerson = {
      fullName: `${person.name} ${person.lastName}`
    }

    console.log('Modified Person', modifiedPerson);

    return modifiedPerson
  })

  // console.log(changedArray);
  return changedArray
}

console.log(returnFullNames(employeesArray));