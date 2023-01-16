let movies = ["Lord of the rings", "Harry Poter", "Joker", "Besa", "The Godfather"];
let resultHeader = document.getElementById("result");
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

function showResult() {
    resultHeader.innerText = "";
    resultHeader.style.color = "black";
    if (!searchInput.value) {
        resultHeader.innerText = "You must enter a film";
    } else {
        let searchResult = searchMovie();
        if (!searchResult) {
            resultHeader.innerText = "The movie was not found";
            resultHeader.style.color = "red";
        } else {
            resultHeader.innerText = "The movie can be rented";
            resultHeader.style.color = "green";
        }
    }
    //reset the input
    searchInput.value = "";
}

function searchMovie() {
    for (let movie of movies) {
        //if(movie.toLowerCase().includes(searchInput.value.toLowerCase())){
        debugger;
        if (movie.toLowerCase() != searchInput.value.toLowerCase()) {
            //you can search with includes 
            console.log("movie not found!");
            //return movie;
        }
    }
    //return null;

    /* 
    ===You can use a flag also===
    let flag = false;
    for(let movie of movies){
        if(movie.toLowerCase()===searchInput.value.toLowerCase()){
            flag = true;
            break;
        }
    }
    return flag; */

    //for finding all movies that include the search text
    //we can use the string method includes
    //ex. movie.toLowerCase().includes(searchInput.value.toLowerCase())
}

searchBtn.addEventListener("click", showResult);