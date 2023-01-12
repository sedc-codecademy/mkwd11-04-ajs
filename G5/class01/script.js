console.log("Conected");
console.log("*********ARRAYS***********");

let pizzaIngredients = ["dough", "mushrooms", "cheese", "ham"];
let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Last element: ${[pizzaIngredients.lenlistgth - 1]}`);

function getLastElement(list) {
    console.log(list[list.length - 1]);
}

let testList = ["hey", "hello", "hi"];
getLastElement([1, 2, 3, 4, 8]);
getLastElement(testList);
getLastElement(numList);

console.log(`The first item in the list is ${pizzaIngredients[0]}`);
console.log(`The third item in the list is ${pizzaIngredients[2]}`);
console.log(`The list has ${pizzaIngredients.length} items`);
console.log(
    `The last item in the list is ${pizzaIngredients[pizzaIngredients.length - 1]
    }`
);
let lastElement = pizzaIngredients[pizzaIngredients.length - 1];
console.log(`The last item in the list is ${lastElement}`);

// push()
pizzaIngredients.push("olives");
console.log("Extended list", pizzaIngredients);

//pop()
let lastRemovedElement = pizzaIngredients.pop();
console.log("last removed element", lastRemovedElement);
console.log("List without olives", pizzaIngredients);

//unshift()
pizzaIngredients.unshift("ketchup");
console.log("List with added first element", pizzaIngredients);

//shift()
let firstRemovedElement = pizzaIngredients.shift();
console.log("First removed element", firstRemovedElement);
console.log("List without first element", pizzaIngredients);

console.log("****************LOOPS**************");

console.log("*****WHILE*******");
//While loop
//Deklariraj funkcija po ime printList DONE
//Funkcijata kje prima parametar po ime list DONE
//Kje iskoristime while loop za da iterirame niz nizata DONE
//Na sekoja iteracija kje go isprintame elementot vo console DONE
let test = ["item1", "item2", "item3", "item4"];
function printList(list) {
    let iterator = 0;
    while (iterator < list.length) {
        console.log(list[iterator]);
        iterator++;
    }
}
printList(test);
printList(pizzaIngredients);

console.log("*****DO WHILE*******");
function printListWithDoWhile(list) {
    let iterator = 0;
    do {
        console.log(list[iterator]);
        iterator++;
    } while (iterator < list.length);
}
printListWithDoWhile(test);
printListWithDoWhile(pizzaIngredients);

do {
    console.log("PRINT IN DO WHILE LOOP");
} while (5 < 2);

console.log("*****FOR LOOP*******");
// 1. item1
// 2. item2
// 3. item3
let movies = ["Harry Potter", "Lord of the Rings", "The Addams Family"];
function printListWithForLoop(list) {
    let element = "";
    for (let i = 0; i < list.length; i++) {
        element = `${i + 1}. ${list[i]}`;
        console.log(element);
    }
}
printListWithForLoop(movies);

console.log("*****FOR OF*******");
function printListWithForOfLoop(list) {
    for (let item of list) {
        console.log(item);
    }
}

printListWithForOfLoop([10, 9, 8, 7, 6]);

console.log("*****EXERCISES*******");
// Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
// Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000
// Generate an array that has all the numbers that end with the digit 1 from 1 to 1000

function generateNumbersDividableByNum() {
    let arrayNumbersDividableByThree = [];
    let arrayNumbersDividableByFour = [];
    let arrayNumbersThatEndWithOne = [];
    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0) {
            arrayNumbersDividableByThree.push(i);
        } else if (i % 4 === 0) {
            arrayNumbersDividableByFour.push(i);
        } else if (i % 10 === 1) {
            arrayNumbersThatEndWithOne.push(i);
        }
    }
    return `array one - ${arrayNumbersDividableByThree}, array two - ${arrayNumbersDividableByFour}. array three - ${arrayNumbersThatEndWithOne}`;
}
console.log(generateNumbersDividableByNum());

let testArr = [
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

//Create a function that cleans an array of any values and leaves only STRINGS
function cleanArray(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
console.log(cleanArray(testArr));

//Create a function that cleans an array of any values and leaves only NUMBERS
function elementsNumber(array) {
    let numberArray = [];
    for (i = 0; i < array.length; i++) {
        if (typeof array[i] === "number" && !Number.isNaN(array[i])) {
            numberArray.push(array[i]);
        }
    }
    return numberArray;
}
console.log(elementsNumber(testArr));

//Create a function that cleans undefined, null, NaN, and "" and leaves all other values
function multiClean(arr) {
    let arrCleaned = [];
    for (let item of arr) {
        if (
            item !== undefined &&
            item !== null &&
            !Number.isNaN(item) &&
            item !== ""
        ) {
            arrCleaned.push(item);
        }
    }
    let result = `Array without undefined, null, NaN and empty strings: ${arrCleaned}`;
    console.log(result);
}
multiClean(testArr);

// truty vs falsy
function cleanFalsy(arr) {
    let trutyValues = [];
    for (let item of arr) {
        if (item) {
            trutyValues.push(item);
        }
    }
    return trutyValues;
}
console.log("NO FALSY", cleanFalsy(testArr));

// Object literal
let cat1 = {
    name: "Maza",
    color: "white",
    age: 3,
    favouriteFood: ["snacks", "ham", "chicken"],
    meaw: function () {
        console.log("meaw meaw, give me food");
    },
    eat: function () {
        for (let item of this.favouriteFood) {
            console.log(item);
        }
    },
};

// new Object
let cat = new Object();
cat.name = "Maza";
cat.color = "white";
cat.age = 3;
cat.favouriteFood = ["snacks", "ham", "chicken"];
cat.meaw = function () {
    console.log("meaw meaw, give me food");
};
cat.eat = function () {
    for (let item of this.favouriteFood) {
        console.log(item);
    }
};

cat.meaw();
cat.eat();

//constructor notation template
function Cat(name, color, age, favouriteFood) {
    this.name = name === undefined ? "unnamed" : name; //ternary operator
    this.color = color;
    this.age = age;
    this.favouriteFood = favouriteFood;
    this.meaw = function () {
        console.log("meaw, meaw");
    };
}
let maza = new Cat("Maza", "white", 3, ["ham", "snacks", "fish"]);
console.log("NEW OBJECT CAT:", maza);

let lia = new Cat();
console.log("NO PROP OBJECT CAT:", lia);
