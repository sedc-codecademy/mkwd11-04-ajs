# Javascript under the hood 🥥

## Where and how is my JS code running?

Modern javascript runs most of the time in the browser. This means that it gets executed and lives in the browser, by the browser engine and compiler. This is really important because javascript was not always compiled and refined like it is today. Today we don't just execute javascript, but our scripts actually work with the browser hand in hand to load modern web pages. Javascript works in one thread. This means that there is only one stack or queue for code or tasks to be executed and they are being executed one by one. When we execute some functions they go to the top of the stack, they get executed and go out of the stack one by one. But what if one of those functions is waiting for some response from the internet? Basically, all functions after that should just wait for the function that waits for the call to finish right? Well, this will freeze our web page, and we don't want our page frozen on every call we make. That is why javascript delegates waiting for tasks to the browser

![javascript under the hood](https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/javascriptandbrowser.png?raw=true)

1. **JavaScript engine**  
	1.1 **Memory Heap** - A region in memory used for storing values and other types of data in an ordered fashion  
	1.2 **Call Stack** - A structure where our functions are queued for running. It fills with tasks and it executes them in order LIFO ( Last In First Out )  
2. **Browser APIs** - The browser APIs that help javascript run smoothly and without clogging. 
3.  **Event Queue** - A queue that holds the results of the browser APIs ( callbacks ) until they are added to the stack and executed. The order of giving out these callbacks is FIFO ( First In First Out )
4. **Event Loop** - A mechanism that checks if the stack is empty, and when it is pushing a task ( callback ) from the event queue onto the stack to be executed

## Working with the browser

In the browser, there are a lot of mechanisms for running our code smoothly. As we said there is a stack in the engine for running our code. There are also some helper APIs or services that help our code. These are the DOM, that help us map objects from our HTML, an HTTP client for making AJAX calls, services for waiting some amount of time or repeating some code in some interval, etc. When a task that needs waiting comes to the stack like an AJAX call the stack throws it out of the stack into the browser service. There it waits for a response and our stack can continue making calls. When it is done it throws the code that needs to be executed from the AJAX call in a queue called task queue or callback queue.  A mechanism called the event loop stands between the stack where our code is executed and its job is to check if the queue is empty and when it is, to put the code that is next in line from the callback queue into the stack so it can be executed. After our stack is empty ( all tasks are executed in the stack ) our event loop gets the AJAX code and puts it in the stack so it can be executed

#### setTimeout

Will execute a function passed as an argument when a given time passes. The second parameter of this function is how many milliseconds do we actually want to wait, or delay some code

```javascript
	// with annon function
	setTimeout(function(){ console.log("This happens later!"}, 2000);
	// with arrow function
	setTimeout(()=>  console.log("This happens later!"), 2000);
```

#### setInterval

Will execute a function passed as an argument when a given time passes. The second parameter of this function is how many milliseconds do we actually want to wait or delay some code

```javascript
	setInterval(()=>  console.log("This happens every two seconds!"), 2000)
```

#### a simple piece of code

```javascript
let  cb1  = () =>  console.log("cb1");

console.log("Hi");
setTimeout(cb1 , 1000);
console.log("Bye");
```

**Result:**

Hi

Bye

cb1

#### behind the scenes

![behind the scenes](https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/eventloop.gif?raw=true)

## Callback functions

Callback functions are functions that are executed inside of other functions ( usually after the execution of the other, parent function ). Since javascript executes line by line and throws functions out of the stack when we have to wait for them, it is easy to see that sometimes we would need a system that actually executes the code in our defined order. This is where callbacks come into the picture. If we want to be sure that a function is executed after another, then we just pass that function as an argument to the first one. That way when the first one completes inside of it we call it the second one. This way we keep the order of execution

#### simple callback function

```javascript
function calculate(callback, num1, num2){
	console.log("calculating...");
	return callback(num1,num2);
};
let result = calculate((x, y) => x + y, 2, 5);
console.log(result);
```

#### event ( callback ) queue

![event queue](https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/callbackqueue.png?raw=true)

All callback functions from our code go to the corresponding browser API and then when it is done it goes to this queue. Then it waits its turn to get on the stack and get executed. This includes callbacks from event handlers such as click events ( when clicking a button the callback we attached to the handler comes here in the callback queue ), waiting on calls from an AJAX request, waiting on a setTimeout, etc.

## Synchronous and asynchronous executing

So as you can tell, javascript does not want to wait on code. Every piece of code that it knows has to wait, it just delegates it to the browser and continues its execution. This means that even tho we can write code in a certain order, javascript will not guarantee us that it will execute it by the order that we wrote it in. This for the most part is good, our page doesn't freeze when it waits for something and we can get the data we asked for later anyways. This is called: executing our code asynchronously. But what happens when we need our code to be running in a certain order? 

#### two function calls in order

```javascript
function first(){
	console.log("Frst thing!");
} 
function second(){
	console.log("Second thing");
}
first();
second();
``` 

**Result:**

First thing

Second thing

#### two function calls but the first is delayed

```javascript
function first(){
	setTimeout(()=>console.log("First thing"),1000);
} 
function second(){
	console.log("Second thing!");
}
first();
second();
```

**Result:**

Second thing

First thing

#### two function calls but the first is delayed ( solved with a callback )

```javascript
function  first(callback){
	setTimeout(()=>{
		console.log("First thing");
		callback();
	},1000);
}
function  second(){
	console.log("Second thing!");
}
first(second);
```

**Result:**

First thing

Second thing

#### making an ajax call

```javascript
function  makeCall(url){
	$.ajax({
		url:  url,
		success:  function (response) {
			console.log('The request succeeded!');
			return  response;
		},
		error:  function(response){
			console.log('The request failed!');
			return  response.responseText;
		}
	});
}
function  print(results){
	console.log(results);
}
print(makeCall("https://swapi.dev/api/people/1/"));
```

**Result:**

undefined

The request succeeded!

#### making an ajax call with a callback

```javascript
function  makeCall(url, callback){
	$.ajax({
		url:  url,
		success:  function (response) {
			console.log('The request succeeded!');
			callback(response)
		},
		error:  function(response){
			console.log('The request failed!');
			callback(response.responseText);
		}
	});
}
function  print(results){
	console.log(results);
}
makeCall("https://swapi.dev/api/people/1/", print);
```

**Result:**

The request succeeded!

{our response}

## Extra materials 📘

* [Very usefull tool](http://latentflip.com/loupe/)
* [How does the event loop work](https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5)
* [Callbacks explained](https://www.sitepoint.com/callbacks-javascript/)
* [Amazing video about the event loop](https://www.youtube.com/watch?v=cCOL7MC4Pl0)
* [Event Loop code Visualized with animations](https://github.com/Drakso/DarkSecretsOfTheEventLoop)
