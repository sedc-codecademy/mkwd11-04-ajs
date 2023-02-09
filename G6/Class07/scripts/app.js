// -- [HOF] Higher Order Functions - Recap --

// [Assigning function to a variable]

// function sayHello() {
//     console.log('hello')
// }

// sayHello();

// const sayHello = () => {
//     console.log('hello')
// }

// sayHello();


// [Functions either return value OR void (nothing)]

// VOID
// const saySomething = (word) => {
//     console.log(word)
// }

// const value = saySomething('hello');

// console.log('VREDNOSTA NA FUNKCIJATA', value)

// RETURN
// const saySomething = (word) => {
//     return word;
// }

// const sayHelloName = (name) => {
//     return saySomething('Hello') + ' ' + name
// }

// const value1 = sayHelloName('Nikola');

// const value2 = saySomething('Zdravo')

// console.log('value1', value1)
// console.log('value2', value2)


// [Passing a reference to a function VS Calling the function]

// function calculator(calculateFn, number1, number2) {
//     return calculateFn(number1, number2);
// }

// function sum(number1, number2) {
//     return number1 + number2;
// }

// function difference(number1, number2) {
//     return number1 - number2;
// }

// console.log(sum(10, 2))
// console.log(difference(10, 2))
// console.log(calculator(sum, 20, 10))
// console.log(calculator(difference, 15, 5))
// console.log(calculator(sum, sum(1, 1), 10))


// [map]

// const numbers = [1, 2, 3, 4, 5];

// const numbersTimesTwo = [];

// console.log('PRED', numbersTimesTwo)

// Without HOF
// for (const number of numbers) {
//     const numberTimesTwo = number * 2;
//     numbersTimesTwo.push(numberTimesTwo)
// }

// console.log('Potoa', numbersTimesTwo)

// With HOF
// const numbersTimesTwo = numbers.map((number) => number * 2)

// const numbersTimesTwo = []

// forEach
// numbers.forEach((number) => {
//     numbersTimesTwo.push(number * 2)
// })

// console.log(numbersTimesTwo)

// const numbersTimesTwo = []

// filter
// numbers.filter((number) => {
//     numbersTimesTwo.push(number * 2)
//     return true;
// })

// console.log(numbersTimesTwo)

// const numbers = [0, 1, 2, 3, 4, 5];

// const numberLargerThanTwo = [];

// filtering without using .filter()
// for (const number of numbers) {
//     if (number > 2) {
//         numberLargerThanTwo.push(number)
//     }
// }

// filter required boolean to filter out elements
// const numberLargerThanTwo = numbers.filter((number) => {
//     if (number > 2) {
//         return true
//     } else {
//         return false
//     }
// })

// const numberLargerThanTwo = numbers.filter((number) => number > 2 ? true : false)

// => ARROW ZNACI RETURN

// const numberLargerThanTwo = numbers.filter((number) => {
//         return number > 2
//     })

// const numberLargerThanTwo = numbers.filter((number) => number > 2)

// const numberLargerThanTwo = numbers.filter((number) => number)

// console.log(numberLargerThanTwo)


// [reduce]

// const numbers = [0, 1, 2, 3, 4, 5];

// let sum = 0;

// for (const number of numbers) {
//     sum += number
// }

// let sum = numbers.reduce((acc, curr) => {
//     console.log('accumulated Value', acc)
//     console.log('currentValue', curr)
//     return acc + curr;
// }, 0)

// let sum = numbers.reduce((acc, curr) => acc + curr, '')

// console.log(sum, typeof sum)


// [sort]

// const numbers = [100, 5, 5, 10, 1, 29, 6];

// const ascSortedNumbers = numbers;
// const ascSortedNumbers = [...numbers]

// ascSortedNumbers.sort((a, b) => a - b)

// console.log('original', numbers)
// console.log('sorted', ascSortedNumbers)

// const dscSortedNumbers = numbers.sort((a, b) => b - a)
// console.log(dscSortedNumbers)

// const ascSortedNumbers = numbers.sort((a, b) => {
//     console.log('a', a)
//     console.log('b', b)
//     console.log('res', a - b)
//     return a - b
// })

// Sorting without .sort()
// const numbers = [100, 5, 5, 10, 1, 29, 6];

// let done = false;

// while(!done) {
//     done = true;

//     for (let i = 0; i < numbers.length; i++) {
//             // prethoden     // momentalen
//         if (numbers[i - 1] > numbers[i]) {
//             done = false;
//             const temp = numbers[i - 1];
//             numbers[i - 1] = numbers[i];
//             numbers[i] = temp;
//         }
//     }
// }   

// console.log(numbers)


// [some]

// const numbers = [100, 5, 5, 10, 1, 29, 6];

// const hasEvenNumbers = numbers.some((number) => number % 2 === 0)
// const hasOddNumbers = numbers.some((number) => number % 2 !== 0)

// console.log(hasEvenNumbers)
// console.log(hasOddNumbers)


// [every]

// const numbers = [100, 5, 5, 10, 1, 29, 6];

// const evenNumbers = [2, 4, 6]

// const oddNumbers = [1, 3, 5]

// const areAllEvenNumbers = oddNumbers.every((number) => number % 2 === 0)
// const areAllOddNumbers = oddNumbers.every((number) => number % 2 !== 0)

// console.log(areAllEvenNumbers)
// console.log(areAllOddNumbers)


// [slice]
// const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// const weekend = daysOfTheWeek.slice(5, 7)
// const workdays = daysOfTheWeek.slice(0, 5)

// console.log(daysOfTheWeek)
// console.log(weekend)
// console.log(workdays)

// console.log(daysOfTheWeek.slice(-2))


// [splice]
// const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// const workdays = [...daysOfTheWeek].splice(0, 5)
// const weekend = [...daysOfTheWeek].splice(5, 2)

// console.log(daysOfTheWeek)
// console.log(weekend)
// console.log(workdays)


// [includes]

// const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// const hasMondayCapitalized = daysOfTheWeek.includes('Monday')
// const hasMonday = daysOfTheWeek.includes('monday')

// console.log(hasMondayCapitalized)
// console.log(hasMonday)


// [find]
// const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// const monday = daysOfTheWeek.find((day) => day === 'Monday')

// console.log(monday)


// [findIndex]

// const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// const index = daysOfTheWeek.findIndex((day) => day === 'Tuesday')
// const jIndex = daysOfTheWeek.findIndex((day) => day === 'January')

// console.log(index)
// console.log(jIndex)

//alternative to includes
// console.log(index !== -1)
// console.log(jIndex !== -1)


// [split]

// const banana = 'banana'

// const bananaArr = banana.split('')

// console.log(bananaArr)

// const ivo = 'Ivo Kostovski'

// const fNameLname = ivo.split(' ')

// console.log(fNameLname)


// [join]

// const fullName = fNameLname.join(' ')

// console.log(fullName)


// [reverse]

// const banana = 'banana';
// console.log(banana)

// const splittedBanana = banana.split('')
// console.log(splittedBanana)

// const reversedBanana = splittedBanana.reverse()
// console.log(reversedBanana)

// const joinedBanana = reversedBanana.join('')
// console.log(joinedBanana)

// const ultimateBanana = banana.split('').reverse().join('');

// console.log(ultimateBanana)




// const numbers = [1, 2, 3]
// const test = numbers.map(num => num * 2).forEach((number) => number).filter()