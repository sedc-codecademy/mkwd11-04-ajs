// propgram to count down number to 1

function countDown(number){

    //display the number
    console.log(number);

    //declare the number value
    const newNumber = number - 1;


    //base case
    if(newNumber > 0){
        countDown(newNumber);
    }
}

function countDownSecond(number){

    //display the number
    console.log(number);

     //base case
     if(number > 1){
        countDownSecond(number - 1);
    }

}

function countDownThird(number){
    if(number === 0){
        return;
    }

    console.log(number);
    return countDownThird(number - 1);
}

countDown(10);
countDownSecond(5);
countDownThird(3);