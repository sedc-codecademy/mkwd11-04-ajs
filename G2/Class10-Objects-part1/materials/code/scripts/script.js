console.log(typeof document);
console.log(typeof document.getElementById);
console.log(typeof []);
console.log(typeof [].push);
console.log(typeof console);
console.log(typeof console.log);
console.log(typeof window);

console.log(this);

// function whatIsThis(){
//     console.log(this);
// }

// whatIsThis();

let thisObj = {
  whatIsThis: this,
};

console.log(thisObj.whatIsThis);

let thisOtherObject = {
  whatIsThis: this,
  hello: "hello",
  whatIsThisInAMethod: function () {
    console.log(this.whatIsThis);
    console.log(this.hello);
    console.log(this);
  },
};

thisOtherObject.whatIsThisInAMethod();

function Food(foodName, foodColor) {
  this.name = foodName;
  this.color = foodColor;
}

function Dog(dogName, dogColor, dogAge, dogFavoriteFood) {
  this.name = dogName === undefined ? "unnamed" : dogName;
  this.color = dogColor;
  this.age = dogAge;
  this.favoriteFood =
    dogFavoriteFood === undefined
      ? [new Food("Bacon", "red")]
      : dogFavoriteFood;
  this.bark = function () {
    console.log("BARK BARK BARK");
  };
  this.eat = function (food) {
    this.favoriteFood.forEach((fav) => {
      fav.name.toLowerCase() === food.toLowerCase()
        ? console.log(food + " *My favorite*")
        : "";
    });
    console.log("NOM NOM NOM");
  };
}

const porkThighs = new Food("Pork Thighs", "pink");
const apple = new Food("apple", "green");

const dule = new Dog("Dule", "Brown", 4, [porkThighs, apple]);

dule.favoriteFood[0].name = "Veshalica";

const svinskiButovi = porkThighs;
const butchinja = svinskiButovi;

butchinja.name = "bifteche";

console.log(dule);

dule.bark();
dule.favoriteWord = "bate";
dule.sayHello = function () {
  console.log(`Hello ${dule.favoriteWord}`);
};

dule.sayHello();

const zoki = {
  dogName: "zoki",
  dogColor: "black",
  dogAge: 2,
};

const { dogName, dogAge } = zoki;
console.log(dogName);
console.log(dogAge);
console.log(zoki.dogColor);

const student = {
  name: "Nikola",
  age: 20,
  scores: {
    Javascript: undefined,
    AdvancedJs: 63,
    CSharp: 99,
  },
};

function displaySummary({
  name,
  scores: { Javascript = 0, AdvancedJs = 0, CSharp = 0 },
}) {
  console.log("Hello " + name);
  console.log("Javascript score is: " + Javascript);
  console.log("AdvancedJs score is: " + AdvancedJs);
  console.log("CSharp score is: " + CSharp);
}

displaySummary(student);