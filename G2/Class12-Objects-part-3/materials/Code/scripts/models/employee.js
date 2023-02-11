export default class Employee {
  constructor(
    inputId,
    inputFirstName,
    inputLastName,
    inputAge,
    inputGender,
    inputSalary,
    inputCorporation
  ) {
    this.id = inputId;
    this.firstName = inputFirstName;
    this.lastName = inputLastName;
    this.age = inputAge;
    this.gender = inputGender;
    this.salary = inputSalary;
    this.corporation = inputCorporation;
    this.branch = this.constructor.name;
  }
  printEmployeeInfo() {
    console.log(
      `Employee: ${this.firstName} ${this.lastName} - Age: ${this.age} / Gender: ${this.gender} [${this.branch}-${this.corporation}]`
    );
  }
}
