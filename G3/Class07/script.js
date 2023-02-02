
// console.log("First");

// setTimeout(() => {
//     console.log("This happens after 3 seconds");
// }, 3000);

// console.log("Last");


function simulateCallback(success, error) {
    let num = Math.random() * 10;

    if(num > 5) {
        success();
    }else {
        error();
    }
}
// for (let index = 0; index < 100; index++) {
//     simulateCallback(() => console.log("success"), () => console.log("error"));
// }


// let interval = setInterval(() => {
//     simulateCallback(() => console.log("success"), () => console.log("error"));
// }, 1000);


// setTimeout(() => {
//     clearInterval(interval);
// }, 15000);




setTimeout(() => {
    console.log("2000");
     setTimeout(() => {
        console.log("1000");
     }, 1000);
}, 2000)

setTimeout(() => {
    console.log("1500"); // 2
}, 1500);

setTimeout(() => {
    console.log("500"); // 1
    setTimeout(() => {
        console.log("1000x2"); // 2
    }, 1000);
}, 500);