// JSON Example
let myJson = `{
    "trainer": "Trainer name",
    "assistant": "Assitant name",
    "students": [
      "Bob",
      "Samantha",
      "Chris",
      "Jill",
      "Greg"
    ],
    "academy": "Code"
  }`;

//so JSON.parse go pretvarame JSON stringot vo js object so koj podocna mozeme da rabotime
let jsObject = JSON.parse(myJson);
//kako izgleda parsiran/formatiran JSON
console.log("PARSED JSON LOOKS LIKE THUS: " + jsObject);
//kako mozeme da pristapime do nekoe value vo objektot, na primer prviot element od value od tip array
console.log("THIS GETS FIRST ELEMENT OF THE students KEY VALUE PAIR IN JSON: " + jsObject.students[0]);