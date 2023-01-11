# Exercises 🏋️‍♂️

## Generating arrays

* Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
* Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000
* Generate an array that has all the numbers that end with the digit 1 from 1 to 1000
 
## Clean arrays

* Create a function that cleans an array of any values and leaves only STRINGS
* Create a function that cleans an array of any values and leaves only NUMBERS
* Create a function that cleans undefined, null, NaN, and "" and leaves all other values
* Test arrays:

```js
let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];
```

## Random color page

* Create an HTML page
* On every refresh the page should pick a random color and change the background of the page
* The RGB values of the color should be shown in the center of the page on every restart

## Title Generator

* Create 3 inputs:
  * Color
  * FontSize
  * Text
* Create a button for generating titles
* When the button is clicked generate a new h1 element with the color, font size, and text from the inputs

## Student constructor function
* Create a constructor function for Student objects with:
  * Properties:
    * firstName
    * lastName
    * birthYear
    * academy 
    * grades - array of numbers
  * Methods:
    * getAge() - returns age of student
    * getInfo() - returns "This is student firstName* lastName* from the academy academy*!"
    * getGradesAverage() - returns the average of the student grades
* Create an array with 3 students

## List generator from an array
* Create an array of 5 names
* Create an HTML page with:
    * A header
    * An empty unordered list
    * A button
* When the button is clicked it should fill in the empty unordered list with the names of the array

## List Generator dynamically from inputs

* Create 3 inputs:
  * Color
  * FontSize
  * Items
* Create a button for generating unordered lists
* When the button is clicked generate a new ul element with the color, font size, and items from the inputs 

> Items should be added separated by, in the input

## Create a student registry page

* Create an HTML page with student registry form with
  * First Name
  * Last Name
  * Age
  * Email
* Create a student generator function
* When the form is submitted, the inputs should be compiled into a new object from the generator function Student
* This student should be added to a list called "database"
* After submit the database should be printed in the console
* The input fields should be cleared

## Movies renting App

* Create a movie renting app
* There should be an array of movie names
* There should be an input and a search button
* When the person enters a name of a movie it should search the array
* If the name exists it should show an H1 element that says: "The movie can be rented" in green text
* If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text
* The input should not be case sensitive ( it should find the movie regardless of capital or small letters )

## Reminder App
* Create a reminder app
* There should be:
    * An input for entering the title
    * An input for entering priority
    * An input for color
    * A textarea for adding a description
    * A button for adding the reminder
    * A button for showing all reminders
* When the button for adding is clicked an object needs to be created with the properties from the inputs ( title, priority, color, and description )
* The object should then be added to an array of reminders
* When the button for showing all reminders is clicked it should show a table with title, priority, and description columns
* The title should be the color of the "color" property
