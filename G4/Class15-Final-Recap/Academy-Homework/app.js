// 1. Academy
class Academy {
  constructor(name, students, subjects, start, end) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.numberOfClasses = this.subjects.length * 10;
  }

  printStudents() {
    this.students.forEach(student => {
      console.log(student);
    });
  }

  printSubjects() {
    this.subjects.forEach(student => {
      console.log(student);
    });
  }
}
// 2. Subject
class Subject {
  constructor(title, isElective, academy, students) {
    this.title = title;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;
    this.numberOfClasses = 10;
  }

  overrideClasses(num) {
    if (num < 3) return;
    this.numberOfClasses = num;
  }

  setAcademy(academy) {
    this.academy = academy;
  }
}
// 3. Student
class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
  }

  startAcademy(academy) {
    this.academy = academy;
    academy.students.push(this);
  }
  startSubject(subject) {
    if (!this.academy)
      return console.error("Can't add subject, no academy found");

    const foundSubject = this.academy.subjects.find(
      sub => sub.title === subject.title
    );

    if (!foundSubject) return console.error("Can't find subject");

    if (this.currentSubject) {
      this.completedSubjects.push(this.currentSubject);
    }
    this.currentSubject = subject;

    subject.students.push(this);
  }
}

// Creating instances

const basicJsSubject = new Subject("BasicJS", false, null, []);
const advancedJsSubject = new Subject("AdvancedJS", false, null, []);

const academyForProgramming = new Academy(
  "Academy for Programming",
  [],
  [basicJsSubject, advancedJsSubject],
  "15-12-2023",
  "02-02-2024"
);

basicJsSubject.setAcademy(academyForProgramming);
advancedJsSubject.setAcademy(academyForProgramming);

const studentJohn = new Student("John", "Doe", 30);
const studentJane = new Student("Jane", "Doe", 22);

studentJohn.startAcademy(academyForProgramming);
studentJohn.startSubject(basicJsSubject);

studentJane.startAcademy(academyForProgramming);
studentJane.startSubject(basicJsSubject);

// testing the completed subjects functionality
studentJohn.startSubject(advancedJsSubject);

console.log(basicJsSubject);
console.log(academyForProgramming);
console.log(studentJohn);
