// Extra Exercise01
// Write a program in programming language JS that will print in 
// console all threesome numbers in given interval for which the Pythagorean condition is met.

const start = 5;
const end = 15; // you can use input or prompt to input start and end number

for(let a=start; a<end; a++)
// {
    for(let b=start; b<end; b++)
    // {
        for(let c=start; c<end; c++)
        // {
            if(a*a + b*b === c*c)
            {
                console.log(`The condition is met by the numbers:${a} ${b} ${c}`);
            }  
//         }
//     }
// }


// Extra Exercise02
// Find all palindromes in a given interval
// example palindromes 121, 3443, 22, 232 

const startEx04 = 150;
const endEx04 = 2500; // you can use prompt to input start and end number

for(let j=startEx04; j<=endEx04; j++)
{
    let reverseNum = 0;
    let helper = j;

    while(helper>0)
    {
        let a = helper%10;
        reverseNum=reverseNum*10+a;
        helper = parseInt(helper/10);
    }

    if(j===reverseNum)
    {
        console.log(`Palindrome is: ${j}`);
    }
}