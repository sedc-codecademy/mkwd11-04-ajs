console.log('hehe');


const object = {
    name: 'Ivan',
    lastName: 'Jamandilovski',
    age: 33,
    favouritePhrase: 'hehe'
}


console.log('pred da go stavime na localStorage', object);
localStorage.setItem('primer', JSON.stringify(object));
const dataFromLocalStorage = localStorage.getItem('primer');

const objectFromStorage = JSON.parse(dataFromLocalStorage);
console.log(objectFromStorage);

function setData(key, data) {
    localStorage.setItem(key, data);
}

function getData(key) {
    return localStorage.getItem(key)
}

const key = 'broj';

setData(key, 1);
console.log(getData(key));

setData(key, 2)
console.log(getData(key));