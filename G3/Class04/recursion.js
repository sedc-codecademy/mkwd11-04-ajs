// create a functionlity that will sum all the numbers till given number

function sumTo(n) {
    let sum = 0;

    while(n >= 0) {
        sum += n;
        n -= 1;
    }

    return sum;
}

//console.log(sumTo(100));

function sumToRecursion(n) {
    if(n === 0) {
        debugger;
        return 0;
    }

    return n + sumToRecursion(n - 1);
}

//sumToRecursion(10);

// 0 + 1 = 1 + 1 = 2 + 1 = 3 + 2 = 5 + 3 = 8 + 5 ..... 

function fibonacci(n) {
    let first = 1;
    let second = 0;
    let temp;

    while(n >= 0) {
        temp = first;
        first = first + second;
        second = temp;
        n--;
    }
    return second;
}

console.log(fibonacci(10));

function fibonacciRecursive(n) {
    if(n <= 1) {
        return 1;
    }

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(10));


function factorial(n) {
    let sum = 1;
    
    while (n > 0) {
        sum *= n;
        n--;
    }

    return sum;
}

console.log(factorial(4));

function factorialRecursive(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(4));