let trainer = {
    firstName: 'Trajan',
    lastName: 'Stevkovski',
    age: 33,
    academy: 'Web Development',
    courses: ['javascript basic', 'javascript advanced', 'html', 'css']
};

// we make a copy of trainer
let trainer1 = {
    ...trainer,
    firstName: "Todor",
    lastName: "Pelivanov"
};

// create a copy of trainer
let trainer2 = {};
for (let entrie of Object.entries(trainer)) {
    trainer2[entrie[0]] = entrie[1];
}
console.log(trainer2);

// createa copy of trainer using destructuring
let trainer3 = {};
for (let [key, value] of Object.entries(trainer)) {
    trainer3[key] = value;
}
console.log(trainer3);



let numbers = [1, 2, 3, 4, 5, 67, 8, 98, 9, 02, 1, 1, 2, 3, 4, 2, 3, 4, 5, 3, 34, 53, 2, 21321, 10];

function sum(numbersArray) {
    let sum = 0;
    for(let num of numbersArray) {
        sum += num;
    }
    return sum;
}

let [first, ...rest] = numbers;
console.log(first, rest);

function sumRecursive(sum, numbersArray) {
    if(numbersArray.length === 0) {
        return sum;
    }
    let [first, ...rest] = numbersArray;
    sum += first;
    return sumRecursive(sum, rest);
}

console.log(sumRecursive(0, numbers));
console.log(sum(numbers));


let trainer10 = {
    firstName: 'Trajan',
    lastName: 'Stevkovski',
    age: 33,
    academy: 'Web Development',
    courses: ['javascript basic', 'javascript advanced', 'html', 'css']
};
            // change the name of the variable, use the same name, give default value to parameter
function printCourses({ firstName: name, lastName, courses = [] }) {
    console.log(name, lastName);
    console.log(courses);
}

printCourses(trainer10);

// printInformation(trainer1.name, trainer1.lastName, trainer1.age, trainer1.courses, trainer1.academy);




let nums = [1, 2, 3, 4, 5];

function sumThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}

let sumOfThree =  sumThreeNumbers(nums[0], nums[1], nums[2]);

let [first1, second, third] = nums;
let sumOfThree1 = sumThreeNumbers(first1, second, third);

let sumOfThree2 = sumThreeNumbers(...nums);

console.log(sumOfThree);
console.log(sumOfThree1);
console.log(sumOfThree2);