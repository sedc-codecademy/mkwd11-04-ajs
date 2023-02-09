console.log(this); // -> window

function whatIsThis() {
    console.log(this); // -> window
}

whatIsThis();

let obj = {
    whatIsThis: this
};

console.log(obj.whatIsThis);

let obj1 = {
    whatIsThis: this,
    whatIsThisMethod: function() {
        console.log(this);
    },
    whatIsThisMethodArrow: () => console.log(this)
}

console.log(obj1.whatIsThis); // -> window
obj1.whatIsThisMethod(); // -> obj1
obj1.whatIsThisMethodArrow();

function Template() {
    console.log(this);
    this.whatIsThis = this;
    this.whatIsThisFunc = function() {
        console.log(this);
    };
    this.whatIsThisFuncArrow = () => console.log(this);
}

let template = new Template();
console.log(template.whatIsThis);
template.whatIsThisFunc();
template.whatIsThisFuncArrow(); 