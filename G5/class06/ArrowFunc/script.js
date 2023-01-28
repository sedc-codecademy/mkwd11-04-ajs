let someRandomObject =  {
    balance: 1000,
    normal: function() {
        console.log('[Object] "this" in normal function refers to', this);
        console.log(this.balance);
    },
    arrow: () => {
        console.log('[Object] "this" in arrow function refers to', this);
    },
    problemArrow: () => {
        // this.balance will refer to balance in the global scope instead of the object
        console.log(this.balance - 500);
        console.log(this.balance);
    }
}

// let balance = 10000;
// var balance = 10000;

// someRandomObject.normal();
// someRandomObject.arrow();
// someRandomObject.problemArrow();

