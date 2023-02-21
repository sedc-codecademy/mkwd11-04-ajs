function pow(number, power) {
    if(power===1){
        return number;
    }
    return number * pow(number, power-1);
}

console.log(pow(4, 2));
console.log(pow(9, 3));