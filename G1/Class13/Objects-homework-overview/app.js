// ============== Objects homework overview ==============
// 1. Read the requirment
// 2. Brake the requirement into smaller pieces
// 3. Implement them separately

class Academy {
    constructor(name, students, start, end, subjects) {
        this.name = name;
        this.start = start;
        this.end = end;
        this.students = students;
        this.subjects = subjects;
        // optional chaining => ?. (similar to ternary operator, execute the code after the "?" only if the previous code is true)
        this.numberOfClasses = this.subjects?.length * 10;
    }

    printStudents() {
        if (this.students?.length === 0) {
            console.log("Still no students assigned.");
            return;
        }
        this.students.forEach(student => {
            console.log(`${student.firstName} ${student.lastName}`)
        });
    }

    printSubjects() {
        // implement logic for method
    }
}

class Subject {
    constructor(title, isElective, academy, students) {
        this.title = title;
        this.isElective = isElective;
        this.academy = academy; // here the parameter academy should be instance of the class Academy
        this.students = students; // same thing here
    }

    overrideClasses() {
        // implement logic for method
    }
}

class Student {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.completedSubjects = [];
        this.academy = null;
        this.currentSubject = null;
    }

    // TASK 2 => implementation of start academy
    // 1) accepts Academy object that it sets to the Academy property of the student
    // 2) when the student calls StartAcademy, the student should also be added to the Academy property Students ( The academy that he is starting )

    // should accept an instance (object) of the class Academy
    startAcademy(academyInput) {
        // checks if the parameter "academyInput" is object made from the class Academy (as instance it has all the propeties and methods from the class Academy)
        if (!(academyInput instanceof Academy)) {
            console.log("You entered invalid academy");
            return;
        }
        academyInput.students.push(this);
        this.academy = academyInput;
    }

    startSubject() {
        // implement logic for method
    }

}


let html = new Subject("HTML", false)
let css = new Subject("CSS", false)

let codeAcademy = new Academy("Code Academy", [], "15.10.2022", "15.10.2023", [html, css]);

let student = new Student("Ivo", "Pivce", 22);
// student.startAcademy(123);
student.startAcademy(codeAcademy);
console.log(student);
console.log(codeAcademy);
