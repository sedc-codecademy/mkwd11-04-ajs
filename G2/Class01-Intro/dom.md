# Looking back at DOM and Events 🌉

## DOM

Making web pages dynamic and alive takes a bit more than just HTML and CSS. This is where JavaScript comes into the mix. JavaScript has the power to manipulate, change, add and read data from the HTML elements with all the styles on them. This is done through a special model that is available to JavaScript through the browser called DOM or Document Object Model. The DOM is basically a 1:1 representation of the HTML and CSS that is shown in the browser. Everything that is on the browser gets updated in the DOM as well and everything changed in the DOM is updated in the browser. This is how we can change everything. By just changing the DOM we change the page itself

## Manipulating HTML elements

* To manipulate an element, it first has to be selected
* Elements can be selected individually or multiple elements at once
* After an element is selected it can be added in a JS variable
* Elements in variables hold the address to the element in the DOM
* If we change the variable, the DOM changes as well, and with that the HTML element in the browser

## Selectors

* **document.getElementById( id )** - Selects ONE element by the given id
* **document.getElementsByClassName( class )** - Selects COLLECTION of elements by the given class ( even if there is one element, it is still in a collection )
* **document.getElementsByTagName( tag )** - Selects COLLECTION of elements by the given HTML tag ( even if there is one element, it is still in a collection )
* **document.querySelector( css selector )** - Selects the FIRST entity of any query selector result
* **document.querySelectorAll( css selector )** - Selects COLLECTION of entities of any query selector result

```js
let title = document.getElementById("mainTitle");
let wrappers = document.getElementsByClassName("wrapper");
let paragraphs = document.getElementsByTagName("p");
let button = document.querySelector("#submitBtn");
let headers = document.querySelector(".header");
```

## Get or change data of an element

* **innerText** - Gets or changes the text of an HTML element without extra space
* **innerHTML** - Gets or changes the HTML of an HTML element
* **value** - Gets or sets the value of an input element
* **style** - Gets or sets the value of a certain style of an HTML element

```js
let h1 = document.getElementById("mainTitle");
console.log(h1.innerText); // prints the text from the selected element in console
h1.innerText = "New Text"; // Changes the text of the selected element
h1.innerTet += " + Extension" // Adds new text next to the old one in the selected element

let div = document.getElementsByTagName("div")[0]; // select the first div
console.log(div.innerHTML); // Will print all the HTML from the selected div
div.innerHTML = "<h1> new element </h1>"; // Changes the HTML of the selected element
div.innerHTML += "<p> another element </p>"; // Adds new HTML after the old one in the selected element

let input = document.getElementById("nameInput");
console.log(input.value); // Prints the input value of the input at this certain point in time
input.value = "Bob"; // Changes the input value

console.log(h1.style.color); // prints the value of the css attribute color of the element
h1.style.color = "red"; // changes the value of the css attribute color of the element to red
```

## Traversing through the DOM

* **parentElement** - Gets parent element of an element
* **children** - Gets all child elements of an element
* **nextElementSibling** - Gets the next sibling element
* **previousElementSibling** - Gets the previous sibling element
* **firstElementChild** - Gets the first child element
* **lastElementChild** - Gets the last child element

## Capturing an Event

```js
// Find the element on which you want to add an event listener
let button = document.getElementById("myBtn");

// Listen for a click event without catching the event object it self
button.addEventListener("click", function(){
  console.log("Button has been clicked!");
});

// Listen for a click event and catching the event object
button.addEventListener("click", function(e){
  console.log("Button has been clicked!");
  console.log("This is the event:");
  console.log(e);
});

// Using a pre-defined function isntead of annonymous one
function handleClick(event){
  console.log("Button has been clicked!");
  console.log("This is the event:");
  console.log(event);
}

button.addEventListener("click", handleClick);
```
