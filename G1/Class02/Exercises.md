# Exercises 🏋️‍♂️

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


## List generator from an array
* Create an array of 5 names
* Create an HTML page with:
    * A header
    * An empty unordered list
    * A button
* When the button is clicked it should fill in the empty unordered list with the names of the array


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
