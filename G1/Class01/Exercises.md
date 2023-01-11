# Exercises 🏋️‍♂️

## Generating arrays

* Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
* Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000
* Generate an array that has all the numbers that end with the digit 1 from 1 to 1000
 
## Clean arrays

* Create a function that cleans an array of any values and leaves only STRINGS
* Create a function that cleans an array of any values and leaves only NUMBERS
* Create a function that cleans an array of any falsy values
* Test arrays:

```js
let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];
```

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


