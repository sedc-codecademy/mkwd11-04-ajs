# Homework 3

## Note: deadline to submit homework is 28.01.2023

## Task 1
Create 2 variables with arrow functions.
1. First arrow function will accept two parameters, one for element and one for color. The function should change the given element text color with the color given from the second color parameter. If no parameter is passed for color, the default value is **black**.
2. Second arrow function will accept two parameters, one for element and one for textSize. The function should change the given element text size to the number given from the second textSize parameter. If no parameter is passed for textSize, the default value is 24.

Create an HTML document with two inputs, a button and an h1 header with some text. The first input should be for text size and the second for color. When the button is clicked the h1 header should change according to the input values ( change size as the first input value and color as the second input value ). Use the functions that we declared earlier and use arrow function for the event listener of the button. 
#### Ex: 
**Input1: ** Person enters 28
**Input2: ** Person enters red
**Result: ** The h1 text should change to size 28 and color red

## Task 2
Create an html page with a table and a button. When the button is clicked show results for the first 10 planets from the Star Wars api. The information in the table are:
* Planet Name
* Population
* Climate
* Gravity

There should be a function that makes the call to the api for the planets ( should have URL for a parameter )
There should be a function that prints planets in to the table
**API URL: ** https://swapi.dev/api/planets/?page=1

## Task 3

After the user clicks the button to get the first 10 planets, a button should be shown below the table that says: NEXT 10. When the button is clicked you should make another call and get the next 10 planets and change the table contents with information about the next 10 planets. After the next 10 planets are shown the button NEXT 10 should disapear and a new button PREVIOUS 10 should appear. The previous button should return the first 10 planets in the table and hide the PREVIOUS 10 button and show the NEXT 10 button.
 
**API URL: ** https://swapi.dev/api/planets/?page=2

## BONUS CHALLENGE

Funkcijata so ternary operator od vezbata na cas, da se prosiri taka sto ke opfakja situacija koga input parametarot ima vrednost 0. Vo prodolzenie funkcijata, a vezbata moze da ja najdete vo Excercises.md fajlot

function oddOrEven(number) {
    return number % 2 === 0 ? "even" : "odd"; // TODO: Bonus da se extendira ternary operatorot so treta opcija za 0.
}