import { Animal }  from "./models/animal.js";
import  Rabbit from "./models/rabbit.js";

let rabbit = new Rabbit("Bugs Bunny", "white");
console.log(rabbit);
rabbit.eat("carrot");

let animal = new Animal("Zajace", "Black");
console.log(animal);