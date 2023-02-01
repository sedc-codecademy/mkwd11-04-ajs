console.log("works");

console.log("before fetch");
fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(() => console.log("Todos fetched"));
console.log("after fetch");

console.log("before settimeout");
setTimeout(() => {
  console.log("inside set timeout");
}, 0);
console.log("after setTimeout");

const counter = () => {
  let counter = 0;
  setInterval(() => {
    counter = counter + 1;
    console.log(counter);
  }, 1000);
  console.log("Below interval", counter);
};

// counter();

const printFirstName = callback => {
  setTimeout(() => {
    console.log("Danilo");
    callback();
  }, 1500);
};

const printLastName = () => console.log("Borozan");

printFirstName(printLastName);
