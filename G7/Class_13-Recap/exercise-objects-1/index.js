class Academy{
  constructor(name, students, subjects, start, end){
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.numberOfClasses = this.subjects.length * 10;
    this.start = start;
    this.end = end;
  }

  printStudents(){
    this.students.forEach((student) => {
      console.log(student)
    })
  }

  printSubjects(){
    this.subjects.forEach((subject) => {
      console.log(subject)
    })
  }
};

class Subject{
  constructor(title, isElective, academy, students){
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;
  }

  overrideClasses(classes){
    if(classes <= 3){
      console.error("Invalid number of classes.")
    }else {
      this.numberOfClasses = classes
    }
  }


};

class Student{
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
  }

  startAcademy(academy){
    this.academy = academy
    academy.students.push(this)
  }


  startSubject(subject){
    if(this.academy === null){
      console.log("No academy object");
      return;
    }

    //some will return True if one of the elements match the condition
  
    const isSubjectExisting = this.academy.subjects.some(({title}) => subject.title === title);

    if(isSubjectExisting){  
      if(this.currentSubject !== null){
        this.completedSubjects.push(this.currentSubject)
        this.currentSubject = subject
      }
      else {
        this.currentSubject = subject
      }

      
      subject.students.push(this)
      subject.academy = this.academy
    }
   

  }
};

// DEMO:
//MONTH/DAY/YEAR

let subjectOne = new Subject("Basic Javascript", false, undefined, [])
console.log(subjectOne)
let subjectTwo = new Subject("HTML & CSS", false, undefined, [])

let academy = new Academy("Web Development", [], [subjectOne, subjectTwo], new Date('02/02/2023'), new Date('12/12/2023'))
console.log(academy)

// Way #1
// subjectOne.academy = academy;
// subjectTwo.academy = academy;


let studentOne = new Student("Bob", "Bobski", 20);
console.log(studentOne)
studentOne.startSubject(subjectOne) // no academy object

console.log("STUDENT TWO")

let studentTwo = new Student("John", "Doe", 25);
// console.log('student two #1:', studentTwo)
studentTwo.startAcademy(academy);
// console.log('student two #2:', studentTwo)
// console.log('Subject property before start of subject:', studentTwo.currentSubject);
studentTwo.startSubject(subjectOne);
// console.log('Subject property after start of subject:', studentTwo.currentSubject);
console.log('BEFORE', studentTwo)

studentTwo.startSubject(subjectTwo)
console.log('AFTER', studentTwo)
console.log(academy)
console.log(subjectTwo)
console.log(subjectOne)
