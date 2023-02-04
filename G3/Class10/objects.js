let cat = {
    isHungry: false,
    name: "cat1",
    meow: function() {
        console.log("Meow");
    }
};
// console.log(cat);


let cat1 = Object.create(cat);
cat1.name = "cat20";
cat1.isHungry = true;
cat1.color = 'black';

// console.log(cat1);

let cat2 = {
    ...cat,
    name: "cat3",
    color: 'blue',
    age: 10
};
// console.log(cat2);




let person = {
    name: "Trajan",
    age: 33
};

let personAdress = {
    street: "Pero Nakov",
    number: "bb"
};

// let personWithAddress = {
//     name: person.name,
//     age: person.age,
//     address: personAdress.street,
//     number: personAdress.number
// };

let newAdress = {
    street: "Partizanksa",
    number: "100"
}


let personWithAddress = Object.assign(person, personAdress);
// console.log(personWithAddress);
let personWithNewAddress = Object.assign(personWithAddress, newAdress);
// console.log(personWithNewAddress);

let personWithAddressSpread = {
    ...person,
    ...personAdress
};

let personWithNewAddressSpread = {
    ...personWithAddressSpread,
    ...newAdress
};



let appConfiguration = {
    apiKey: "value",
    userToken: "Token",
    userSecrets: '',
    encoding: '',
    font: '',
    baseUrl: ''
};

// Object.freeze(appConfiguration);
// appConfiguration.apiKey = 10;
// appConfiguration.name = "Trajan";
// delete appConfiguration.encoding;
// console.log(appConfiguration);

// console.log(Object.isFrozen(appConfiguration));


Object.seal(appConfiguration);

delete appConfiguration.apiKey;
appConfiguration.encoding = "UTF8";

// console.log(appConfiguration);


let trainer = {
    firstName: 'Trajan',
    lastName: 'Stevkovski',
    age: 33,
    academy: 'Web Development',
    courses: ['javascript basic', 'javascript advanced', 'html', 'css']
};

let objectKeys = Object.keys(trainer);
// console.log(objectKeys);

// for(let key of Object.keys(trainer)) {
//     console.log(key);
//     console.log(trainer[key]);
// }

// for(let key in trainer) {
//     console.log(key);
// }

let objectValues = Object.values(trainer);
// console.log(objectValues);


let entries = Object.entries(trainer);
// console.log(entries);

for(let [key, value] of entries) {
    console.log(key);
    console.log(value);
}