// ---------------- higher order functions -------------------------

// HOF are functions that take another function as a parameter

let numbers = [1, 2, 3, 4, 5];
console.log("original array", numbers);

// ---------------- MAP -------------------------
// .map is used to transform elemts in array, it returns the SAME number of elements in a new array

console.log("===========MAP==========");
// normal function that returns new array, each element is multiplied by 2

function multiplyByTwo(array){
    let newArray = [];

    for(const number of array){
        newArray.push(number * 2);
    }
    return newArray;
}

let multiplied = multiplyByTwo(numbers);
console.log("multiplied array with normal JS function", multiplied);

//.map with anonymus function
let multipliedMapAnonymus = numbers.map(function(number){
    return number * 2;
})
console.log("multiplied array with .map using anonymus function", multipliedMapAnonymus);

//.map with arrow
// USE THIS !!!

let multipliedMapArrow = numbers.map(number => number * 2);
console.log("multiplied with .map using arrow", multipliedMapArrow);


// ---------------- FILTER -------------------------
// .filter is used to filter elements in array, it returns ONLY the elements that passed the condition in a new array

console.log("===========FILTER==========");

//normal function that returns new array with elements larger than 3

function largerThanThree(array){
    let newArray = [];

    for(const number of array){
        if(number > 3) {
            newArray.push(number)
        }
    }
    return newArray;
}
let filteredArray = largerThanThree(numbers);
console.log("filtered array with normal JS function", filteredArray);

// .filter with anonymus

let filteredArrayAnonymus = numbers.filter(function(number){
    return number > 3;
});
console.log("filtered with .filter using anonymus function", filteredArrayAnonymus);

//.filter with arrow 
// USE THIS !!!

let filteredArrayArrow = numbers.filter(number => number > 3);
console.log("filtered with .filter using arrow function", filteredArrayArrow);
// numbers is source of data and doesn't change
let filteredArrayArrow2 = numbers.filter(number => number > 3 && number < 5);
console.log(filteredArrayArrow2);

let filteredArrayArrow3 = numbers.filter(number => true);
console.log(filteredArrayArrow3);

//.reduce - return the sum of all elements in the array

let sumReduce = numbers.reduce((total, number) => total += number);
console.log("sum of elements in array with .reduce", sumReduce);

console.log("===========CHAINING==========");

let result = numbers
                    .filter(number => number > 3)
                    .map(number => number + 5)
                    .reduce((num1, num2) => num1 + num2);
console.log("result of chaining", result);


// ---------------- FOREACH -------------------------
// returns a code for every element without any result in return
console.log("===========FOREACH==========");

numbers.forEach(number => console.log(number + 3));
numbers.forEach(number => console.log(number));

numbers.forEach((number, index) => console.log(index, number))

let sortedNums = numbers.sort();
console.log("sorted array", sortedNums)

let sortDescending = numbers.sort((f, s) => s - f);
console.log("sorted array - DESCENDING", sortDescending);

let sortAscending = numbers.sort((f, s) => f - s);
console.log("sorted array - ASCENDING", sortAscending);