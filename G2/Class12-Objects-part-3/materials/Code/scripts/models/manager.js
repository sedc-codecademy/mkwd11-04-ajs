import Employee from "./employee.js";

export default class Manager extends Employee {
  constructor(
    inputId,
    inputFirstName,
    inputLastName,
    inputAge,
    inputGender,
    inputSalary,
    inputCorporation
  ) {
    super(
      inputId,
      inputFirstName,
      inputLastName,
      inputAge,
      inputGender,
      inputSalary,
      inputCorporation
    );
    this.isGazda = true;
  }
}
