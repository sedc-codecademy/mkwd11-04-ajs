function executeOne(){

  setTimeout(function(){
    console.log("First")
  }, 1000) //ms; 1000ms = 1s;

}

console.log("Here 1");
console.log("Here 2");
executeOne();
console.log("Here 3");


let count = 0;
let counter = setInterval(function(){
  console.log("In interval: ", count);
  count += 1;
}, 1000); //ms; 1000ms = 1s;


/**
 * clearing the interval after 10 secs 
 */
setTimeout(() => {
  clearInterval(counter); // that will clear/stop the interval
}, 10000);

let myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", ()=> {
  clearInterval(counter)
});


console.log("***** callbacks *****");


let first = (callback) => {
  console.log("Execute in parent function");

  callback();
};

let second = () => {
  console.log("Execution in callback")
};

first(second);

let arrayOfRecipes = [{name: "Banana Bread"}, {name: "Banana smoothie"}, {name: "Sarma"}];



function printRecipes(recipes){
  console.log("DEBUG 1: ", recipes)
  recipes.forEach(function(recipe){
    console.log(recipe)
    console.log(recipe.name)
  })
}

let parentFunction = function(recipes, printRecipesCB) {
  console.log("1");

  printRecipesCB(recipes);
};


parentFunction(arrayOfRecipes, printRecipes);
