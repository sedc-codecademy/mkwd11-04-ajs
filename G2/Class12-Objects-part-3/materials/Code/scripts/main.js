import Developer from "./models/developer.js";
import Manager from "./models/manager.js";

const manager1 = new Manager(
  2,
  "Henrik",
  "Henrikovsen",
  54,
  "Male",
  350000,
  "InScale"
);

const developer1 = new Developer(
  1,
  "Bojan",
  "Damchevski",
  24,
  "Male",
  900,
  "InScale",
  manager1
);

developer1.printEmployeeInfo();
developer1.payRaise();
let i = 0;
while (i <= 10) {
    developer1.completeTask();
    i++;
}

developer1.payRaise();

Developer.printManager(developer1);

const manager2 = new Manager(
    3,
    "Kristijan",
    "Kristijansen",
    30,
    "Male",
    90000,
    "InScale"
  );

developer1.otherManagerName = manager2;

console.log(developer1.otherManagerName);
console.log(developer1._otherManager);
console.log(developer1.fullName);