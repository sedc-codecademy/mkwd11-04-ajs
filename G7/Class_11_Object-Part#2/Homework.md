#Exercises
## Exercise 1
Create a Person constructor function that has:
* firstName
* lastName
* age
* getFullName - method

Create a Student constructor function that inherits from Person and has:
* academyName
* studentId
* study - method that writes in the console: The student firstName is studying in the academyName

Create two Student objects

## Exercise 2
Create a method on the Person prototype that accepts a Student of any academy and returns the academy that that student is in.

Create DesignStudent, CodeStudent and NetworkStudent constructor functions that inherit from Student.
#### DesignStudent
* isStudentOfTheMonth - boolean
* attendAdobeExam - method that writes in console: The student firstName is doing an adobe exam!

#### CodeStudent
* hasIndividualProject - boolean
* hasGroupProject - boolean
* doProject(type) - method that accepts string. If the string is individual or group it should write that the person is working on the project of that type and set the value to true on the property of the project

#### NetworkStudent
* academyPart - number
* attendCiscoExam - method that writes in console: the student firstNAme is doing a cisco exam!

**Note:** For all students, the academyName property should be auto generated based on which Student we are creating ( design, code or network )

Create one of each students
Check all students with the Student method for checking students academy
