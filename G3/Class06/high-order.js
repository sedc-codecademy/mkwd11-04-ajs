let students = [
	{firstName: "Bob", lastName: "H", grade: 5, age: 19},
	{firstName: "Mel", lastName: "B", grade: 2, age: 33},
	{firstName: "Jill", lastName: "M", grade: 3, age: 15},
	{firstName: "Lucky", lastName: "J", grade: 5, age: 18},
	{firstName: "Strike", lastName: "K", grade: 4, age: 16},
	{firstName: "Eric", lastName: "I", grade: 1, age: 17}
];




function mapArray(arr, mappingFnc) {
    let resultArray = [];
    for(let item of arr) {
        resultArray.push(mappingFnc(item));
    }
    return resultArray;
}

let mappedStudents = mapArray(students, student => {
    return {
        fullName: student.firstName + " " + student.lastName,
        age: student.age
    }
});
console.log(mappedStudents);

let mappedStudents1 = mapArray(students, student => 
    ({ name: student.firstName, grade: student.grade, isAdult: student.age >= 18  }));

console.log(mappedStudents1);

let mappedStudents2 = students.map(student => {
    return {
        fullName: student.firstName + " " + student.lastName,
        age: student.age
    }
});
console.log(mappedStudents2);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let numbersPlusTen = numbers.map(x => x + 10);
console.log(numbers);
console.log(numbersPlusTen);



function filterArray(arr, filter) {
    let resultArray = [];
    for (let item of arr) {
        if(filter(item)) {
            resultArray.push(item);
        }
    }
    return resultArray;
}

let studentAbove18 = filterArray(students, student => student.age >= 18);
console.log(studentAbove18);

let studentBellow18 = students.filter(student => student.age < 18);
console.log(studentBellow18);


let filteredThenMappedStudents = students.filter(x => x.grade >= 3).map(student => {
    return {
        name: `${student.firstName} ${student.lastName}`,
        age: student.age
    }
});

console.log(filteredThenMappedStudents);

students.forEach(s => console.log(s.grade));

let students2 = [
	{
        firstName: "Bob", 
        lastName: "H", 
        grades: [
            {
                subject: "Math", 
                grade: 2
            },
            {
                subject: "Science",
                grade: 3
            }
	    ], 
        age: 19},
	{   
        firstName: "Mel", 
        lastName: "B", 
        grades: [
            {
                subject: "Math", 
                grade: 3
            },
            {
                subject: "Science", 
                grade: 5
            }
	    ],  
        age: 33}
];
// step 1: get all students
// step 2: for every student get their grades array
// step 3: filter the grades array so that only grade 5 will pass
// step 4: filter will return a result array with only grade 5 grades
// step 5: we will use forEach on the new result array with only 5
// step 6: forEach will print them in the console

students2
    .forEach(student => student
        .grades
        .filter(grade => grade.grade === 5)
        .forEach(x => console.log(`${x.subject}: ${x.grade}`)
    ));

let studentAbove18WithGrade4orMore = students
    .filter(x => x.age >= 18)
    .filter(x => x.grade > 4)
    .map(x => x.firstName);
console.log(studentAbove18WithGrade4orMore);


let numbers2 = [1, 5, 3, 7, 10, 2, 4, 22, 8];

let sortedNumberAsc = numbers2.sort((a, b) => a - b);
console.log(sortedNumberAsc);

let sortedNumberDesc = numbers2.sort((a, b) => b - a);
console.log(sortedNumberDesc);

let studentNames = students.map(x => x.firstName);
console.log(studentNames);

let sortedNamesAsc = studentNames.sort((a, b) => a.localeCompare(b));
console.log(sortedNamesAsc);

let sortedNamesADesc = studentNames.sort((a, b) => b.localeCompare(a));
console.log(sortedNamesADesc);



let numbers3 = [1, 5, 3, 7, 10, 2, 4, 22, 8];

function sumAllNumbers(array) {
    let sum = 0;
    for(let num of array) {
        sum += num;
    }
    return sum;
}

const reduceData = (data, reducer, accumulator) => {
    for (const item of data) {
        accumulator += reducer(item);
    }

    return accumulator;
}

let sumOfNumbers = numbers3.reduce((sum, current) => sum += current, 0);
console.log(sumOfNumbers);

let sumAllStudentNames = students                                       // allNames
    .reduce((allNames, current) => `${allNames}, ${current.firstName}`, 'Students: ');
console.log(sumAllStudentNames);



// spread
let numbers5 = [1, 2, 3, 4, 5, 6, 7, 8];
let numbers6 = [1, 5, 3, 7, 10, 2, 4, 22, 8];

let numbers7 = numbers5.concat(numbers6);
console.log(numbers7);
let numbers8 =[...numbers5, ...numbers6];
console.log(numbers8);

let numbers9 =[];
numbers9.push(...numbers5);
numbers9.push(...numbers6);
console.log(numbers9);


let obj = {
    firstName: "Bob", 
    lastName: "H", 
    grade: 5, 
    age: 19
};

let objNew = {
    ...obj,
    firstName: "Trajan",
    lastName: 'Stevkovski',
    dob: 1987,
    subjects: ['Math', 'Science']
}

console.log(obj, objNew);


// destructring

let nums = [1, 5, 3, 7, 10, 2, 4, 22, 8];
// let first = nums[0];
// let second = nums[1];
// let third = nums[2];

let [first, second, third] = nums;

console.log(first, second, third);
// let suma = first + second + third;

let { firstName, lastName } = obj; 
console.log(firstName, lastName);

let { firstName: a, lastName:b} = obj;
console.log(a, b);

function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}

let fullName = getFullName(objNew);
console.log(fullName);


let obj1 = {
    fName: '',
    lName: '',
    age: 3,
    canSing: true,
    grades: [
        {
            subject: '',
            grade: 2
        },
        {
            subject: '',
            grade: 2
        },
        {
            subject: '',
            grade: 2
        },
        {
            subject: '',
            grade: 2
        }
    ]
}

let obj2 = {
    ...objNew,
    ...obj1
};
console.log(obj2);
