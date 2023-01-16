# Looking back at Arrays and Loops 💈

## Arrays

Working with data is important in developing applications and software. When we think of data we usually think of one thing: a string, a number, true or false. Usually, these values are kept in variables and we can use them any time we need to. But a lot of the time we are collecting or need multiple values and multiple pieces of data. Yes, this can be added to multiple variables, but that is not a sustainable solution. That is why collections exist. In JavaScript, Arrays can be used to store multiple values

### Array features

* Arrays are written with **[ ]** brackets
* Arrays items are numbered by indexes
* Indexes are also written with **[ index ]** next to the name of the array
* Arrays item numbers are requested by the **length** property
* Arrays in javascript can hold any type of data ( string, number, object, another array, etc. )

```js
let arrEmpty = []; // Declaration of an empty array
let arr = [2,5,4]; // Declaration of an array with numbers
let mixedArr = [true, 2, "Bob"]; //mixed array
console.log(arr[0]); // will return 2, the first item
console.log(arr.length); // will return 3, the number of items
console.log(arr[arr.length - 1]); // will return 4, the last item
arr[3] = 6; // Add an item on the 4th position or on the 3rd index
arr[0] = 1; // Replace the first item from 2 to 1
```

### Array functions

* **push( item )** - Adds an item at the end of the array
* **pop( )** - Removes an item from the end of the array
* **unshift( item )** - adds an item at the beginning of the array
* **shift( )** - removes an item from the beginning of the array

## Loops

Executing code multiple times means writing code multiple times. But since programming is about automating and making the computer do the work for us, some structures help us execute code multiple times. These structures are called loops. There are multiple types of loops and they are all used for different kinds of situations. Some of them loop through automatically and some need some kind of counter to keep track of how many cycles passed and to check when to stop. If we don't impose some check on when the loop should stop, it would run forever and your application will get stuck

### Types of loops

* **while( statement ) { code }** - checks statement and if it's true executes code and check again, good for handling unexpected data 
* **do { code } while( statement ) ** - executes code and checks statement if it's true so that it can execute the code again, good for making sure the code runs at least once and handling unexpected data 
* **for( counter declaration; statement; counter increment/decrement ) { code }** - checks statement and if it's true executes code, increments or decrements counter and checks again, good for counting and following indexes on arrays
* **for( item of array ){ code }** - goes through an array and each item of the array is added to the item variable, good for going through an array from first to the last item

#### While

```js
// while unexpected data
let input = "";
while(input === "" || input === null){
    input = prompt("Insert a name:");
}
// while with counter
let i = 0;
while( i < 10 ) {
	console.log(i);
	i++;
};
// while with an array
let arr = ["Bob", "Jill", "Greg"];
let ii = 0;
while(ii < arr.length){
	console.log(arr[ii]);
	ii++;
}
```

#### Do While

```js
// do while unexpected data
let input = "";
do{
	input = prompt("Insert a name:");
}
while(input === "" || input === null);
// do while with counter
let i = 0;
do{
	console.log(i);
	i++;
} while( i < 10 );
// do while with an array
let arr = ["Bob", "Jill", "Greg"];
let ii = 0;
do{
	console.log(arr[ii]);
	ii++;
} while(ii < arr.length);
```

#### For

```js
// for with counter
for( let i = 0; i < 10; i++ ) {
	console.log(i);
};
// for with an array
let arr = ["Bob", "Jill", "Greg"];
for(let i = 0; i < arr.length; i++){
	console.log(arr[i]);
}
```

#### For-Of

```js
let arr = ["Bob", "Jill", "Greg"];
for(let name of arr){
	console.log(name);
}
```
