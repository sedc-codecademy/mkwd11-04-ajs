export default class Student {
  constructor(studentFirstName, studentLastName, studentAge) {
    this.fullName = `${studentFirstName} ${studentLastName}`;
    this.age = studentAge;
    this.academy = null;
  }
  startAcademy(someAcademy) {
    this.academy = someAcademy;
    someAcademy.students.push(this);
  }
}
