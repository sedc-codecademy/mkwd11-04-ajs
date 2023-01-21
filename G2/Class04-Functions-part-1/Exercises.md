# Exercises
## Exercise 1

Make 3 functions:
1. Function that takes a number through a parameter and returns how many digits that number has
2. Function that takes a number through a parameter and returns if its even or odd
3. Function that takes a number through a parameter and returns if its positive or negative

Create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console. 
#### Ex: 
**Code:** getNumberStats(-25);
**Console:** 2 Digits, Odd, Negative


## Exercise 2
Create 2 variables with arrow functions.
1. First arrow function will accept two parameters, one for element and one for color. The function should change the given element text color with the color given from the second color parameter. If no parameter is passed for color, the default value is **black**.
2. Second arrow function will accept two parameters, one for element and one for textSize. The function should change the given element text size to the number given from the second textSize parameter. If no parameter is passed for textSize, the default value is 24.

Create an HTML document with two inputs, a button and an h1 header with some text. The first input should be for text size and the second for color. When the button is clicked the h1 header should change according to the input values ( change size as the first input value and color as the second input value ). Use the functions that we declared earlier and use arrow function for the event listener of the button. 
#### Ex: 
**Input1: ** Person enters 28
**Input2: ** Person enters red
**Result: ** The h1 text should change to size 28 and color red