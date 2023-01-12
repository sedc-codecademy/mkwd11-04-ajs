let numbersDivisibleByThree = [];
let numbersDivisibleByFour = [];
let numbersEndingWithOne = [];
for(let i=1; i<=1000; i++){
    if(i%3===0){
        numbersDivisibleByThree.push(i);
    }
    if(i%4===0){
        numbersDivisibleByFour.push(i);
    }
    if(i%10===1){
        numbersEndingWithOne.push(i);
    }
}
console.log("========Numbers divisible by 3 from 1 to 1000==========");
console.log(numbersDivisibleByThree);
console.log("========Numbers divisible by 4 from 1 to 1000==========");
console.log(numbersDivisibleByFour);
console.log("========Numbers that end with digit 1 from 1 to 1000==========");
console.log(numbersEndingWithOne);
