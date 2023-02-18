import Horse from "./models/animal/horse.js";
import Pudlica from "./models/animal/pudlica.js";
import Sarplaninec from "./models/animal/sarplaninec.js";
import StarZenskiSarplaninec from "./models/animal/starZenskiSarplaninec.js";
import Mammal from "./models/mammal.js";




const horse1 = new Horse('Bukefal', 35, Horse.Gender.MALE);

setInterval(() => {
horse1.die()
}, 1000)


console.log(horse1 instanceof Horse);
console.log(horse1 instanceof Mammal);

let arr = [1, 2, 3];

console.log(arr instanceof Array);



// console.log('Main class');


// const horse1 = new Horse('Goce', 7, 'Male');

// // console.log(horse1);

// horse1.die();

// const sarplaninec1 = new Sarplaninec('Sarko', 5, 'Male');

// sarplaninec1.bark();

// console.log(sarplaninec1);

// const pudlica1 = new Pudlica('Kiko', 5, undefined);
// // pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.die('crkni');
// pudlica1.bark('gaf gaf gaf');

// pudlica1.comeAlive()

// console.log('bark');
// pudlica1.bark()
// sarplaninec1.bark()
// console.log('bark ends');

// setTimeout(() => {
//     pudlica1.die()
// }, 10000)






// console.log(horse1);


const starZenskiSarplaninec = new StarZenskiSarplaninec('Lajka', 11);

console.log(starZenskiSarplaninec);