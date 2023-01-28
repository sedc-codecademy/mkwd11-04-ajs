console.log("connected");


console.log("**** REDUCE ****");

let numbers = [2,3,5,6,6,1];

let sum = 0;
for(let i = 0; i < numbers.length; i ++){
  sum += numbers[i]
};
console.log('Sum using for loop: ',sum);

//using reduce
let sumReduce = numbers.reduce(function(prevVal, currentVal){
  console.log('prev value in reduce:', prevVal) // is the value that was returned from the PREVIOUS iteration
  console.log('current value in reduce:', currentVal) //each element of the current iteration

  /**
   * the return in reduce
   * is the value we return on each iteration
   */

  // return prevVal
  /**
   * 1st => return 0 + 2
   * 2nd => return 2 + 3
   * 3rd => return 5 + 5
   * 4th => return 10 + 6
   * 5th => return 16 + 6
   * 6th => return 22 + 1
   */
  return (prevVal += currentVal)


},0); /**
  => on the very first itaration this is your prevValue;
  if not provided, prevValue will be the first element in the array;
 */

console.log(sumReduce); //23

console.log("**** SORT ****");

let unsortedNumbers = [6,3,2,1,10,23,41,61,5];

//asc
// unsortedNumbers.sort(function(numberOne, numberTwo){
//   return numberOne - numberTwo
// })

//same as above
unsortedNumbers.sort((numberOne, numberTwo) => numberOne - numberTwo);

console.log("ASC", unsortedNumbers);
//desc
// unsortedNumbers.sort(function(numberOne, numberTwo){
//   return numberTwo - numberOne
// })

//same as above
unsortedNumbers.sort((numberOne, numberTwo) => numberTwo - numberOne);
console.log("DESC", unsortedNumbers);

let products = [
  { name: "Lenovo", price: 750 },
  { name: "Asus Vivobook", price: 400 },
  { name: "Mac", price: 1400 },
  { name: "Aaus Vivobook", price: 400 },
  { name: "Toshiba", price: 500 },
];

// THE PROBLEM: 
// let productsToBeSorted = products; // we passed the value by REFERENCE

// productsToBeSorted.sort(function(productA, productB){
//   return productA.price - productB.price
// });
// console.log("Products to be sorted array: ", productsToBeSorted);
// // THE PROBLEM:
// // sort mutates the original array;
// console.log("ORIGINAL ARRAY:", products)

// THE SOLUTION:

function copyArray(array){
  let copyOfOriginal = [];

  array.forEach((element) => {
    copyOfOriginal.push(element)
  })

  return copyOfOriginal;
}

let productsToBeSortedByPrice = copyArray(products);

productsToBeSortedByPrice.sort((productA, productB) => {
  return productA.price - productB.price
});

console.log("SORTED BY PRICE: ", productsToBeSortedByPrice);
console.log("ORIGINAL: ", products);

let productsToBeSortedAlph = copyArray(products);
//let productsToBeSortedAlph = [...products]; // spread operator;

productsToBeSortedAlph.sort((productA, productB) => {
  return productA.name.localeCompare(productB.name)
})

console.log("SORTED ALPH: ", productsToBeSortedAlph);
console.log("ORIGINAL: ", products);
