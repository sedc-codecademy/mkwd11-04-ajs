# First Steps ( API Call handling ) Guide 🌿🌾🍀

1. Write an AJAX call to the designated URL
  * You can use JQuery for the call
    * JQuery Lite does not contain AJAX. You must include the full JQuery library
    * Use success: function(response) to get the data
  * You can use fetch
    * Use .Then(response) to get the data
    * Use response.json() to get the data in the right format
  * You can use plain JavaScript XHR request
    * When the xhr.status is between 200 and 300, it means that the response is success
    * The response is stored in xhr.response
    * Make sure you convert it with JSON.parse()
2. Write the response into the console
  * This is the first check to see if our call is working
3. Write a case if the ajax call fails
  * error: function(response) in Jquery ajax
  * .catch(error) in fetch
4. Analyze the response in the console
  * Look up the JS object and find the values you need
  * Open the object properties and arrays one by one until you find what you are looking for
5. Map all the information you need from the response
  * You can document them as comments in the code
  * You can write them down in a document
  * You can draw a diagram somewhere
6. Show all needed information in the dom
  * Create a function for printing data in the dom
  * Create a function for formatting the data
  * Call the functions when the ajax call is successful
