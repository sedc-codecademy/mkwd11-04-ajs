const timeoutMeasure = 'timeoutMeasuree';
console.time(timeoutMeasure)
setTimeout(() => {
    console.log('ova se izvrsi')
    console.timeEnd(timeoutMeasure)
}, 2000);


setTimeout(() => {
    console.log('ova ke se izvrsi za 1000ms');
    setTimeout(() => {
        console.log('ova ke se izvrsi za 2000ms');
    }, 2000)
}, 1000)


const someInterval = setInterval(() => {
    console.log('interval');
}, 200);


setTimeout(() => {
    clearInterval(someInterval);
    console.log('Interval cleared');
}, 5000)



