// import { sayHello, sayGoodbye } from './modules/messageService.js';

// sayHello("Trajan");
// sayGoodbye("Trajan");


let stopWatch = {
    time: 0,
    interval: null,

    start: function () {
        this.interval = setInterval(() => {
            this.time++;
            console.log(this.time);
        }, 1000);
    },

    stop: function () {
        clearInterval(this.interval);
        this.interval = null;
    },

    reset: function () {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        } 
        this.time = 0;
    }
};


class Stopwatch {
    constructor(startBtn, stopBtn, resetBtn, dispay) {
        this.startBtn = startBtn;
        this.stopBtn = stopBtn;
        this.resetBtn = resetBtn;
        this.dispay = dispay;

        this.time = 0;
        this.interval = null;
    }

    init() {
        let that = this;

        this.startBtn.addEventListener('click', function() {
            that.start(that.dispay);
        });

        this.stopBtn.addEventListener('click', function() {
            that.stop();
        });

        this.resetBtn.addEventListener('click', function() {
            that.reset();
            that.dispay.innerText = that.time;
        });
    }

    start(element) {
        this.interval = setInterval(() => {
            this.time += 1;
            element.innerText = this.time;
        }, 1000);
    }

    stop() {
        clearInterval(this.interval);
        this.interval = null;
    }

    reset() {
        if(this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
        this.time = 0;
    }
}


let stopwatch = new Stopwatch(
    document.getElementById('dont-start'),
    document.getElementById('dont-stop'),
    document.getElementById('dont-reset'),
    document.getElementById('result')
);

stopwatch.init();