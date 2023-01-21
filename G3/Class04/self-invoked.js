function fnc() {
    console.log("Hello from fnc");
}

//fnc();


(function a() {
    console.log("Hello from self invoked fnc");
})();


let result = (function sum(a, b) {
    return a + b;
})(5, 5);
console.log(result);


(() => {
    let a = 3;
    let b = 5;
    let c = {
        a: 3,
        b: 4,
        c: 12
    };
    let result = a + b + c.a;
    console.log(result);
})();


let multipy = (num1, num2) => num1 * num2;

let result1 = multipy((function(a, b) {
    return a + b;
})(5, 5), 7);

console.log(result1);


let idGeneratorObj = {
    id: 0,
    generateId: function() {
        this.id++;
        return this.id;
    }
};

// idGeneratorObj.id = 10000000;

let idGenerator = (function () {
    let id = 0;

    return function() {
        id++;
        return id;
    }
})();

for(let i = 1000; i > 0; i--) {
    console.log(idGenerator());
}




let appConfig = (function () {
    let obj = {
        appSecret: "secret",
        baseApiUrl: "www.google.com",
        appName: "some app",
        appTitle: "app title"
    }

    function getSecret() { return obj.appSecret };
    function getApiTitle() { return obj.appTitle };

    //return [getSecret, getApiTitle];
    return {
        getApiTitle,
        getSecret
    };
})();