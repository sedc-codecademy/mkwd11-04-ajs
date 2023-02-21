export class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.speed = 0;
    }
    eat(food){
        console.log(`${this.name} eats a/an ${food}`);
    }
}