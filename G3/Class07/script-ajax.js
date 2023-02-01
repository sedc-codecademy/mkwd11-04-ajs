// console.log($)


function getSwapiPerson(url, callbackSuccess, callbackPrint, callbackError) {
    $.ajax({
        url: url,
        success: function(response) {
            console.log('The request succeeded');
            callbackSuccess(response, callbackPrint);
        },
        error: function(error) {
            console.log("Error");
            callbackError(error);
        }
    });
}

function callbackError(error) {
    console.log(error)
}

function printResponse(response) {
    document.getElementById('name').innerText = response.name;
}

function callbackSuccess(response, callbackPrint) {
    callbackPrint(response);
}

// getSwapiPerson("https://swapi.dev/api/people/5", 
//         callbackSuccess, printResponse, callbackError);


// getSwapiPerson("https://swapi.dev/api/people/4",
//     (response, print) => {
//         console.log(response);
//         let mappedResponse = {
//             name: response.name,
//             age: response.birth_year,
//             gender: response.gender
//         }
//         print(mappedResponse);
//     },
//     (response) => {
//         document.getElementById('result').innerHTML = 
//             `<h1>${response.name}</h1>
//             <p>Birth year: ${response.age} Gender: ${response.gender}</p>
//             `;
//     },
//     (error) => console.log(error)
// );



function getSwapiPerson1(url, callbackSucess) {
    $.ajax({
        url: url,
        success: function(response) {
            callbackSucess(response);
        },
        error: error => console.log(error)
    })
}

function getSwapiPlanet(url, callbackSuccess) {
    $.ajax({
        url: url,
        success: function(response) {
            callbackSuccess(response);
        },
        error: error => console.log(error)
    })
}

function getSwapiVehicles(url, successCallback) {
    $.ajax({
        url: url,
        success: function(response) {
            successCallback(response);
        },
        error: error => console.log(error)
    })
}

function printPersonWithPlanet(response) {
    console.log(response);
    document.getElementById('result').innerHTML = 
                `<h1>${response.name}</h1>
                <p>Birth year: ${response.age} Gender: ${response.gender}</p>
                `;

    getSwapiPlanet(response.homeworld, function(response) {
        document.getElementById('result').innerHTML +=
                 `<h1>Homeworld: ${response.name}</h1>`;
    });

    let color = "black";
    let index = 0;
    for(let url of response.vehicles) {
        getSwapiVehicles(url, function(response) {
            if(index % 2 === 0) {
                color = "red";
            } else {
                color = "black"
            }
            document.getElementById('result').innerHTML += 
                `<p style="color: ${color};">${response.name}</p>`;
        })
        index++;
    }
}

// getSwapiPerson1("https://swapi.dev/api/people/5", printPersonWithPlanet);


// getSwapiVehicles("https://swapi.dev/api/vehicles/30/", function(response) {
//     console.log(response);
// });

function getSwapiStarships(url) {
    $.ajax({
        url: url,
        success: function(response) {
            document.getElementById('name').innerText = response.name;
        }
    })
}

function getSwapiStarshipsWithCallback(url, printCallback) {
    $.ajax({
        url: url,
        success: function(response) {
            printCallback(response);
        }
    })
}

// getSwapiStarships("https://swapi.dev/api/starships/9/");

// getSwapiStarshipsWithCallback("https://swapi.dev/api/starships/9/", function(response) {
//     document.getElementById('name').innerText = response.name + response.model + response.cargo_capacity;
// });

// getSwapiStarshipsWithCallback("https://swapi.dev/api/starships/9/", function(response) {
//     document.getElementById('result').innerHTML = 
//             `<h2>${response.name}</h2>
//             <span>Information:</span>
//             <p>Is from ${response.starship_class} class can hold up to ${response.passengers} passengers. Has a max speed @${response.max_atmosphering_speed}</p>`
// });

getSwapiStarshipsWithCallback("https://swapi.dev/api/starships/", function (response) {
    console.log(response);
    for(let starship of response.results) {
        document.getElementById('result').innerHTML += `<h1>${starship.name}</h1>`;
    }
})