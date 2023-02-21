// Get elements
const btnPeople = document.getElementById("btnPeople");
const btnShips = document.getElementById("btnShips");
const loader = document.getElementById("loader");
const result = document.getElementById("result");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

// If there was div with id="navigationButtons"
// const navigation = document.getElementById("navigationButtons");
// window.addEventListener("load", () => {
//     navigation.style.display = "none";
// });

// Global variables for dynamic manipulation of fetching the data
const baseUrl = "https://swapi.dev/api/";
let currentPage = 1;
let pageMode = "";

// Get all people
const getPeople = (page) => {
    // debugger;
    const peopleUrl = `${baseUrl}people/?page=${page}`
    toggleLoader(true);

    // $.ajax({
    //     url: peopleUrl,
    //     success: (people) => {
    //         toggleLoader(false);
    //         console.log("All people", people);
    //         toggleNavButtons(people);
    //         let newFilteredResults = people.results.filter((person) => person.gender === "male" || person.gender === "female");
    //         displayPeople(newFilteredResults)
    //     },
    //     error: (error) => {
    //         toggleLoader(false);
    //         console.error(error);
    //     }
    // })

    fetch(peopleUrl)
        .then(res => res.json())
        .then(people => {
            //main logi for all functionalities is in the second .then
            toggleLoader(false);
            console.log("All people", people);
            toggleNavButtons(people);
            let newFilteredResults = people.results.filter((person) => person.gender === "male" || person.gender === "female");
            displayPeople(newFilteredResults)
        })
        .catch(error => {
            toggleLoader(false);
            console.error(error);
        })
        .finally(() => console.log("People taken"))
}

// Get all ships
const getShips = (page) => {
    const shipsUrl = `${baseUrl}starships/?page=${page}`;
    toggleLoader(true);

    // $.ajax({
    //     url: shipsUrl,
    //     success: (ships) => {
    //         toggleLoader(false);
    //         console.log("Ships", ships);
    //         toggleNavButtons(ships);
    //         ships.results.sort((shipOne, shipTwo) => shipOne.name.localeCompare(shipTwo.name)); // SORT BY SHIPS NAME ASC
    //         displayShips(ships.results)
    //     },
    //     error: (error) => {
    //         toggleLoader(false);
    //         console.error(error);
    //     }
    // })

    fetch(shipsUrl)
        .then(res => res.json())
        .then(ships => {
            toggleLoader(false);
            console.log("Ships", ships);
            toggleNavButtons(ships);
            ships.results.sort((shipOne, shipTwo) => shipOne.name.localeCompare(shipTwo.name)); // SORT BY SHIPS NAME ASC
            displayShips(ships.results)
        })
        .catch(error => {            
            toggleLoader(false);
            console.error(error);
        })
        .finally(() => console.log("Ships taken"))
}

// #region Display Data
// Display People
const displayPeople = people => {
    if (people !== null) {
        result.innerHTML = '';
        result.innerHTML += `
            <div class="row">
                <div class="col-md-3">Name</div>
                <div class="col-md-2">Height</div>
                <div class="col-md-2">Mass</div>
                <div class="col-md-2">Gender</div>
                <div class="col-md-2">Birth year</div>
                <div class="col-md-1">Films</div>
            </div>
            <hr color="green" />
        `;

        for (const person of people) {
            // debugger;
            result.innerHTML += `
                <div class="row">
                    <div class="col-md-3">${person.name}</div>
                    <div class="col-md-2">${person.height}</div>
                    <div class="col-md-2">${person.mass}</div>
                    <div class="col-md-2">${person.gender}</div>
                    <div class="col-md-2">${person.birth_year}</div>
                    <div class="col-md-1">${person.films.length}</div>
                </div>
                <hr color="yellow" />
            `
        }

    }
    else {
        result.innerHTML += `<h2 color="red">There is something wrong with the data!</h2>`
    }
}

// Display Ships
const displayShips = ships => {
    if (ships !== null) {
        result.innerHTML = "";
        result.innerHTML += `
            <div class="row">
                <div class="col-md-2">Name</div>
                <div class="col-md-2">Model</div>
                <div class="col-md-2">Manufacturer</div>
                <div class="col-md-2">Cost</div>
                <div class="col-md-2">People Capacity</div>
                <div class="col-md-2">Class</div>
            </div>
            <hr color="green" />
        `;
        for (const ship of ships) {
            // debugger;
            let shipCrew = ship.crew.split("-");
            let shipCrewMaxAfterSplit = shipCrew[shipCrew.length - 1];

            if (shipCrewMaxAfterSplit.includes(",")) {
                shipCrewMaxAfterSplit = shipCrewMaxAfterSplit.replace(",", "")
            }
            if (ship.passengers.includes(",")) {
                // debugger
                let newRegex = new RegExp(/[^a-zA-Z0-9]/g);

                ship.passengers = ship.passengers.replace(newRegex, "");
            }
            
            result.innerHTML += `
                <div class="row">
                    <div class="col-md-2">${ship.name}</div>
                    <div class="col-md-2">${ship.model}</div>
                    <div class="col-md-2">${ship.manufacturer}</div>
                    <div class="col-md-2">${ship.cost_in_credits}</div>
                    <div class="col-md-2">${parseInt(ship.passengers) + Number(shipCrewMaxAfterSplit)}</div>
                    <div class="col-md-2">${ship.starship_class}</div>
                </div>
                <hr color="yellow" />
            `;
        }

    }
    else {
        result.innerHTML += `<h2 color="red">There is something wrong with the data!</h2>`
    }
}
// #endregion

// toggle loader
const toggleLoader = toggle => {
    // debugger;
    if (toggle)
        loader.style.display = "block";
    else
        loader.style.display = "none";
}

const toggleNavButtons = response => {
    if (response.next === null)
        nextButton.style.display = "none";
    else
        nextButton.style.display = "block";

    if (response.previous === null)
        previousButton.style.display = "none";
    else
        previousButton.style.display = "block";
}

btnPeople.addEventListener("click", () => {
    currentPage = 1;
    getPeople(currentPage);
    pageMode = "people";
})

btnShips.addEventListener("click", () => {
    currentPage = 1;
    getShips(currentPage);
    pageMode = "ships";
})

const getNextPage = pageModeFlag => {
    ++currentPage;
    pageModeFlag === "people" ? getPeople(currentPage) : null;
    pageModeFlag === "ships" ? getShips(currentPage) : null;
}

const getPreviousPage = pageModeFlag => {
    --currentPage;
    pageModeFlag === "people" ? getPeople(currentPage) : null;
    pageModeFlag === "ships" ? getShips(currentPage) : null;
}

nextButton.addEventListener("click", () => {
    getNextPage(pageMode)
})

previousButton.addEventListener("click", () => {
    getPreviousPage(pageMode)    
})

// Homework FARM - NO DESIGN!!!