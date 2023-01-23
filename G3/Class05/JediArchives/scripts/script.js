let navigationService = {
    // all the buttons for the page
    // people btn, starhips btn, next btn, prev btn
    // currentPage = 1 // always starts with one
}

let apiService = {
    baseUrl: "https://swapi.dev/api/",
    getPeople: function(page) {
        let peopleUrl = `${this.baseUrl}people/?page=${page}`;
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
}


let uiService = {

}