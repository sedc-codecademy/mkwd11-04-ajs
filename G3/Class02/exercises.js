// Generating arrays
// Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
// Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000
// Generate an array that has all the numbers that end with the digit 1 from 1 to 1000

function generateArrayDivisableBy3() {
    let emptyArray = [];
    for(let i = 1; i <= 1000; i++) {
        if(i % 3 === 0) {
            emptyArray.push(i);
        }
    }
    return emptyArray;
}

function generateArrayEvenNumbrsDivisableBy4() {
    let emptyArray = [];
    for(let i = 1; i <= 1000; i++) {
        if(i % 4 === 0) {
            emptyArray.push(i);
        }
    }
    return emptyArray;
}

function generateArrayWithNumbersThatEndWithDigitOne() {
    let emptyArray = [];
    for(let i = 1; i <= 1000; i++) {
        // if(i % 10 === 1) {
        //     emptyArray.push(i);
        // }

        if(i.toString().endsWith('1')) {
            emptyArray.push(i);
        }
    }
    return emptyArray;
}

// let first = generateArrayDivisableBy3();
// let second = generateArrayEvenNumbrsDivisableBy4();
// let last = generateArrayWithNumbersThatEndWithDigitOne();

// console.log(first);
// console.log(second);
// console.log(last);


// Clean arrays
// Create a function that cleans an array of any values and leaves only STRINGS
// Create a function that cleans an array of any values and leaves only NUMBERS
// Create a function that cleans undefined, null, NaN, and "" and leaves all other values
// Test arrays:

let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

function cleanArrayLeaveOnlyStrings(input) {
    let emptyArray = [];

    for(let item of input) {
        if(typeof(item) === 'string') {
            emptyArray.push(item);
        }
    }

    return emptyArray;
}

function cleanArrayLeaveOnlyNumbers(input) {
    let emptyArray = [];

    let index = 0;
    while(index < input.length) {
        if(Number.isNaN(input[index])) {
            index++;
            continue;
        }

        if(typeof(input[index]) === 'number') {
            emptyArray.push(input[index]);
        }
        index++;
    }

    return emptyArray;
}

function cleanArray(input) {
    let emptyArray = [];

    for(let item of input) {
        if(item === undefined || item === "" || item === null) {
            continue;
        }

        if(typeof(item) === 'number' && Number.isNaN(item)) {
            continue;
        }

        emptyArray.push(item);
    }

    return emptyArray;
}

// console.log(cleanArrayLeaveOnlyStrings(test));
// console.log(cleanArrayLeaveOnlyNumbers(test));
// console.log(cleanArray(test));


// Random color page
// Create an HTML page
// On every refresh the page should pick a random color and change the background of the page
// The RGB values of the color should be shown in the center of the page on every restart

function generateRandomRGB() {
    let emptyArray = [];

    for(let i = 0; i < 3; i++) {
        let num = Math.floor(Math.random() * 255);
        emptyArray.push(num);
    }
    
    let rgb = `rgb(${emptyArray[0]} ${emptyArray[1]} ${emptyArray[2]})`;

    return rgb;
}

function chnageBodyBackgroundColor() {
    let body = document.querySelector('body');
    let rgb = generateRandomRGB();

    body.style.backgroundColor = rgb;
    body.innerText = rgb;
}

// chnageBodyBackgroundColor();

// Title Generator
// Create 3 inputs:
// Color
// FontSize
// Text
// Create a button for generating titles
// When the button is clicked generate a new h1 element with the color, font size, and text from the inputs


// document
//     .getElementById('h1-btn')
//     .addEventListener('click', function() {
//         let color = document.getElementById('color').value;
//         let fontSize = document.getElementById('font-size').value;
//         let text = document.getElementById('text').value;

//         // validate fontsize

//         let h1 = document.createElement('h1');
//         h1.style.color = color;
//         h1.style.fontSize = fontSize + 'px';
//         h1.innerText = text;

//         document.querySelector('body').appendChild(h1);
//     });


function generateSelect() {
    let select = document.createElement('select');

    for(let i = 10; i < 100; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.innerText = i;
        select.appendChild(option);
    }

    document.querySelector('body').appendChild(select);
}

// generateSelect();



// Movies renting App
// Create a movie renting app
// There should be an array of movie names
// There should be an input and a search button
// When the person enters a name of a movie it should search the array
// If the name exists it should show an H1 element that says: "The movie can be rented" in green text
// If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text
// The input should not be case sensitive ( it should find the movie regardless of capital or small letters )

let movieRentingApp = {
    movies: [
        'Dumb and Dumber',
        'Starwars',
        'Black adam',
        'Avatar',
        'Top gun',
        'Ivkova slava'
    ],

    searchMovies: function (searchInput, movies) {
        for(let movie of movies) {
            // case when the whole word should be the same
            if(movie.toLowerCase() === searchInput.toLowerCase()) {
                return true;
            }
        }
        return false;
    },

    generateMessage: function(isMovieAvailable) {
        // if(isMovieAvailable) {
        //     return  "The movie can be rented";
        // } else {
        //     return "The movie can't be rented";
        // }

        return isMovieAvailable ?
            "The movie can be rented" :
            "The movie can't be rented";
    },

    init: function() {
        let thisObject = this; // the movieRentingApp object is in this varable

        let searchInput = document.getElementById('search-input');
        let messageElement = document.getElementById('message');

        document.getElementById('search').addEventListener('click', function () {
            let isMovieAvailable = thisObject.searchMovies(searchInput.value, thisObject.movies);
            let color = isMovieAvailable ? 'green' : 'red';
            let message = thisObject.generateMessage(isMovieAvailable);    

            messageElement.innerText = message;
            messageElement.style.color = color;
        });
    }
}


movieRentingApp.init();







            // if(movie.toLowerCase().includes(searchInput.toLowerCase())) {

            // }