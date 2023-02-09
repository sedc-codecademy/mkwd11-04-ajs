import Animal from "./animal.js";

export default class Dog extends Animal {
    constructor(name, age, gender) {
        super(name, age, gender);

        this.numberOfLegs = 4;
        this.barks = true;
    }


    comeAlive() {
        const barkAudio = new Audio('../../../assets/dog_bark.mp3')
        this.dogInterval = setInterval(() => {
            if (Math.random() > 0.9)
                barkAudio.play();
        }, 200)
    }

    bark(whatToBark = 'bark bark bark') {
        if (!this.isAlive) return;

        if (this.name == 'Sarko') {
            whatToBark = 'Sarko ne lae na domasni'
        }
        console.log(whatToBark);
    }

    die(causeOfDeath = 'kola go zgazilo') {
        super.die(causeOfDeath);
        this.barks = false;
        clearInterval(this.dogInterval);


    }


}