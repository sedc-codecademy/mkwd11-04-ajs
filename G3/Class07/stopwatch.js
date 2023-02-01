let stopWatch = {
    time: 0,
    interval: null,

    start: function() {
        this.interval = setInterval(() => {
            this.time++;
            console.log(this.time);
        }, 1000);
    },

    stop: function() {
        clearInterval(this.interval);
        this.interval = null;
    },

    reset: function() {
        if(this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
        this.time = 0;
    }
}


console.log("Start first time");
stopWatch.start();


setTimeout(() => {
    console.log("Stop first time");
    stopWatch.stop();
}, 5000)


setTimeout(() => {
    console.log("Start second time");
    stopWatch.start();
}, 8000);

setTimeout(() => {
    console.log("Reset first time");
    stopWatch.reset();
}, 10000);

setTimeout(() => {
    console.log("Start last time");
    stopWatch.start();
}, 12000);