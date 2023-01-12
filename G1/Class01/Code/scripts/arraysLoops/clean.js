function cleanAllButStrings(inputArray){
    let result = [];
    for(let item of inputArray){
        if(typeof(item) === "string"){
            result.push(item);
        }
    }
    return result;
}
console.log(cleanAllButStrings([true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22]));

function cleanAllButNumbers(inputArray){
    let result = [];
    for(let item of inputArray){
        if(typeof(item) === "number"){
            result.push(item);
        }
    }
    return result;
}
console.log(cleanAllButNumbers([true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22]));

function cleanAllFalsyValues(inputArray){
    let cleanedArray = [];
    for(let item of inputArray){
        if(item){
            cleanedArray.push(item);
        }
    }
    for(let item of cleanedArray){
        console.log(item);
    }
}
cleanAllFalsyValues([false, "test", [1,2], 0, true, "", 10]);