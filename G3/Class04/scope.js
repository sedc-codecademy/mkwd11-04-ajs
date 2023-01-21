// global scope
let x = 5;
x = 10;

//let x = 29;

// var a = 10;
// var a = 20;


let ten = 10; // variable in global scope

function sumPlusOne(num1, num2) {
    // num1 and num2 are only available in function scopoe
    let one = 1; // function scope variable

    console.log(num1 + num2 + one);

    function add5(number) {
        console.log(one);
        let insideFnc = 100;
        console.log(number + 5);
    }

    add5(one);
    // console.log(insideFnc); // will not work // -> undefined

    if(one === 1) {
        let abc = 10; // block scope in if condition
    }

    //console.log(abc) // abc will not exists here becouse the scope is in the if condition itself
}