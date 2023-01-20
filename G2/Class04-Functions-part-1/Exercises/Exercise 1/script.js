// Exercise 1
function getDigits(number){
  if(number < 0){
    return number.toString().length -1;
  }
  return number.toString().length;
}

function oddOrEven(number){
  return number % 2 === 0 ? "even" : "odd";
}

function positiveOrNegative(number){
  return number < 0 ? "negative" : "positive";
}

function getStats(mainNumber){
  return `Number: ${mainNumber},
  Digits: ${getDigits(mainNumber)}, 
  ${oddOrEven(mainNumber)}, 
  ${positiveOrNegative(mainNumber)}`
}

console.log(getStats(25));
console.log(getStats(-252));
console.log(getStats(3));
console.log(getStats(0));
console.log(getStats(-7));
