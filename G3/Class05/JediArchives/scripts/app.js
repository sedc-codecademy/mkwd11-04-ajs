let baseUrl = "https://swapi.dev/api/";
// all the buttons for the page
// people btn, starhips btn, next btn, prev btn
// currentPage = 1 // always starts with one



function getPeople(page) {
    let peopleUrl = `${baseUrl}people/?page=${page}`;
    fetch(peopleUrl)
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        // check if there is a next page
        // loader
        // show results
        console.log(data);
    }).catch(function(error){ console.log(error) });
} 