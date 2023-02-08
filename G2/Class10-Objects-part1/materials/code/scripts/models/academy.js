export default class Academy {
  constructor(
    academyName,
    academyStudents,
    academySubjects,
    academyStart,
    academyEnd
  ) {
    this.name = academyName;
    this.students = academyStudents;
    this.subjects = academySubjects;
    this.start = academyStart;
    this.end = academyEnd;
  }
  printStudents() {
    this.students.forEach((student) => {
      console.log(student);
    });
  }
  printSubjects() {
    console.log(`Subjects in the academy: ${this.name}:`);
    this.subjects.forEach((subject) => {
      subject.printSubject();
    });
  }
}
