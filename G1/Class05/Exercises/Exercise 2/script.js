// ## Exercise 2
// Create 2 variables with arrow functions.
// 1. First arrow function will accept two parameters, one for element and one for color. The function should change the given element text color with the color given from the second color parameter. If no parameter is passed for color, the default value is **black**.
// 2. Second arrow function will accept two parameters, one for element and one for textSize. The function should change the given element text size to the number given from the second textSize parameter. If no parameter is passed for textSize, the default value is 24.

// Create an HTML document with two inputs, a button and an h1 header with some text. The first input should be for text size and the second for color. When the button is clicked the h1 header should change according to the input values ( change size as the first input value and color as the second input value ). Use the functions that we declared earlier and use arrow function for the event listener of the button. 
// #### Ex: 
// **Input1: ** Person enters 28
// **Input2: ** Person enters red
// **Result: ** The h1 text should change to size 28 and color red

let changeColor = (element, color = "black") => element.style.color = color; 
// function that change the size
let changeTextSIze = (element, textSize) => {
    if(textSize === ""){
        // this is validation about specific case
        element.style.fontSize = "24px"
    }
    element.style.fontSize = textSize + "px"; 
}

let btn = document.getElementsByTagName("button")[0];
// add click event and call the functions inside the event
btn.addEventListener("click", () => {
    let inputTextSize = document.getElementsByTagName("input")[0].value;
    let inputColor = document.getElementsByTagName("input")[1].value;
    let header = document.getElementsByTagName("h1")[0];
    changeColor(header, inputColor);
    changeTextSIze(header, inputTextSize);
})