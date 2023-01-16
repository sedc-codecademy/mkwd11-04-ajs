# 1. AJAX 🍎

## Getting things from the Internet

There are a lot of services and sites on the Internet that allow us to use some data or information that they hold such as the weather, sports scores, statistics about the environment, movies, music, etc. To get that information we have to send a request for the first to the site or service that offers the data in the first place. If we are allowed to make that request we get a response with a package of the data we requested in a format called JSON. If we are not allowed we get a response but with a status that describes why we didn't get our data. Through these requests, we communicate with these sites and services whether we want to get something or add something

## What is JSON

JSON is one of the most commonly used formats in which we send or get packages to the Internet. It's a simple text file that contains structured information. When you see the structure it is very similar to a JavaScript object. It consists of keys ( in JS Objects, properties ) and values. The values can be of any type such as numbers, strings boolean, array, or another object

### A JavaScript Object

```javascript
let someObject = {
  trainer: "Trainer name",
  assistant: "Assistant name",
  students: [
    "Bob",
    "Samantha",
    "Chris",
    "Jill",
    "Greg"
  ],
  academy: "Code"
};
```

### A json file

```json
{
  "trainer": "Trainer name",
  "assistant": "Assistant name",
  "students": [
    "Bob",
    "Samantha",
    "Chris",
    "Jill",
    "Greg"
  ],
  "academy": "Code"
}
```

As we can see the two are very similar. But when we get JSON files like the one above from some request that we made, we can't use them right away. Like we said it is a simple text file, and thus in JavaScript, it is just a simple string. To get the information we need we first need to convert it to a JavaScript object. We do that with the **JSON.parse()** method

```javascript
// Parse the json text file into JS object
let jsObject = JSON.parse(myJsonResponse);
// We can use it like object now
console.log(jsObject.trainer);
// We can create objects in to json strings as well
let newJson = JSON.stringify(jsObject);
```

So when the JSON string is parsed we can treat it like a normal object. We can also convert it back if we need to send it to the service or site back. If you are not sure that your JSON is valid you can use some of the online sites that validate JSON objects such as https://jsonlint.com/

## What is AJAX

Making a request is always done through an HTTP protocol call. That is the standard call that we do when we request for any site to be opened. With this call, we can also request things from sites and services on the Internet. But for every call, we need to reload our page. To not reload the page every time we make a call, we use AJAX. AJAX is a technique with which we can send requests and get responses dynamically, without reloading everything. So how do we make a call with AJAX? 

1. Find a service or site that allows requests for some data
2. Get the URL address from that site or service where we will make the calls
3. Write AJAX call and code to handle the response in the JavaScript script
4. Write code as if you already have the response in a success method
5. Write code as if you didn't get what you desired in an error method

We can make the AJAX call using plain JavaScript, JQyery, or with the new JavaScript feature called fetch

### Plain JavaScript

```javascript
let xhr = new XMLHttpRequest();
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log('The request succeeded!');
    let resultParsed = JSON.parse(xhr.response);
    console.log(resultParsed);
  } else {
    console.log('The request failed!');
    console.log(xhr.responseText);
  }
};
xhr.open('GET', 'https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json');
xhr.send();
````

### JQuery

```javascript
$.ajax({
  url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json",
  success: function (response) {
    console.log('The request succeeded!');
    let resultParsed = JSON.parse(response);
    console.log(resultParsed);
  }, 
  error: function(response){
    console.log('The request failed!');
    console.log(response.responseText);
  }
});
````

### Fetch

```javascript
fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
```

## APIs

API pages are pages that allow you to make requests and get some data from them. You send a request to an API and it returns the data that you need. You can request for the weather on some weather APIs, request for info about books, music, sports matches, etc. We request the information that we need with AJAX calls. Some APIs require a special key to be sent for them to return some data. A special key is usually acquired if you create an account on the page that is sometimes free and others paid. We can find out if the API requires a key or not through the documentation of the API. Some APIs don't require any key or account and payment. Here are some:

### SPACE INFO API

* **Link:** http://open-notify.org/
* **How to use it:**
  * Write the base URL: http://api.open-notify.org/
  * Write iss-now.json after the URL to see where the international space station is at right now
  * Write astros.json after the URL to see how many astronauts are on the ISS right now
* **Example:** http://api.open-notify.org/iss-now.json

### STAR WARS API

* **Link:** https://swapi.dev/
* **How to use it:**
  * Write the base url: https://swapi.dev/api/
  * Write a category: (Planets, Spaceships, Vehicles, People, Films and Species)
  * Write an id ( number )
* **Example:** https://swapi.dev/api/people/1/

### Bitcoin Price

* **Link:** https://api.coindesk.com/v1/bpi/currentprice.json
* **How to use it:**
  * The link is by itself the endpoint. Just make a request and you will get data on Bitcoin price
* **Example:** https://api.coindesk.com/v1/bpi/currentprice.json

### Cat API

* **Link:** https://catfact.ninja/
* **How to use it:**
  * Write the base URL: https://catfact.ninja/
  * Write next to its fact, facts, or breeds depending on what you need and make the request
* **Example:** https://catfact.ninja/fact

### Dog API

* **Link:** https://dog.ceo/dog-api/
* **How to use it:**
  * Write the base URL: https://dog.ceo/api/
  * Write next to it breeds/list/all to list all breeds
  * Write next to it breeds/image/random to get a random dog image
  * Write next to it breed/ADD-BREED-NAME-HERE/images/random to get a random dog image from a certain breed
* **Example:** https://dog.ceo/api/breeds/image/random

### Chuck Norris Jokes

* **Link:** https://api.chucknorris.io/
* **How to use it:**
  * Write the base url: https://api.chucknorris.io/
  * Write jokes/random next to it and make a request
* **Example:** https://api.chucknorris.io/jokes/random

### What to do when bored

* **Link:** https://www.boredapi.com/
* **How to use it:**
  * Write the base URL: https://www.boredapi.com/api/
  * Write activity next to it and request to get a random activity to do
* **Example:** https://www.boredapi.com/api/activity

## Bonus - Query parameters in URL

* Some APIs require some parameters to be passed for them to work. To pass things through the URL we use Query parameters. We write query parameters by first adding a ? after the link that we typed and then write the name of the parameter = the value. All parameters are divided by an &
  * **Example:** We have an API that returns jokes for specific language [cs, de, en, es, fr, pt]. The link is: https://v2.jokeapi.dev/
* Our link should be: https://v2.jokeapi.dev/joke/Any?lang=en

## Extra Materials 📘

* [Extra reading for making HTTP requests](https://www.freecodecamp.org/news/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa/)
* [Huge list of public APIs](https://github.com/public-apis/public-apis)

