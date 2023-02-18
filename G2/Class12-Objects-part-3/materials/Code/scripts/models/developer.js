import Employee from "./employee.js";

export default class Developer extends Employee {
  constructor(
    inputId,
    inputFirstName,
    inputLastName,
    inputAge,
    inputGender,
    inputSalary,
    inputCorporation,
    manager
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
    this.tasksCompleted = 0;
    this.manager = manager;
    this.#setFullName();
  }
  get otherManagerName() {
    return "Drug gazda mi e " + this._otherManager;
  }
  set otherManagerName(managerObject) {
    managerObject != null
      ? (this._otherManager = `${managerObject.firstName} ${managerObject.lastName}`)
      : (() => {
          throw new Error("Gazda name is too short");
        })();
  }
  #setFullName() {
    this.fullName = `${this.firstName} ${this.lastName}`;
  }
  completeTask() {
    this.tasksCompleted += 1;
  }
  printEmployeeInfo() {
    super.printEmployeeInfo();
    console.log(`Zavrseni taskovi: ${this.tasksCompleted}.`);
  }
  payRaise() {
    if (this.tasksCompleted > 10) {
      this.salary += 100;
      console.log("Na ti edna stotka, odi pocasati se.");
    } else {
      console.log(`${this.firstName}che slabo rabotis be batule.`);
    }
  }
  static printManager(dev) {
    if (dev.manager === null) {
      console.log("Sam svoj gazda");
    } else {
      console.log(
        `${dev.manager.firstName} ${dev.manager.lastName}, toj mi e gazda...`
      );
      if (dev.salary < 1000) {
        console.log("I pari ne dava...");
      } else {
        console.log("Go otvora novacniceto ponekogas");
      }
    }
  }
}
