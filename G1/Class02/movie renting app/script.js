let movies = ["Joker", "Harry Potter", "Lord of the Rings", "Transformers"];

let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let resultHeader = document.getElementById("result");


function showResult() {
    resultHeader.innerText = "";
    resultHeader.style.color = "black";
    if(!searchInput.value) {
        resultHeader.innerText = "You must enter a search term";
    }
    else {
        let searchResult = searchMovie();
        if(!searchResult) {
            resultHeader.innerText = "The movie was not found";
            resultHeader.style.color = "red";
        }
        else {
            resultHeader.innerText = "The movie is available for renting";
            resultHeader.style.color = "green";
        }
    }

    searchInput.value = "";
}


function searchMovie() {
    for (let movie of movies) {
        // for partial string matching
        if(movie.toLowerCase().includes(searchInput.value.toLowerCase())){
        //if(movie.toLowerCase() === searchInput.value.toLowerCase()){
            return movie
        }
    }
    return null;

    // let flag = false;
    // for (let movie of movies) {
    //     if(movie.toLowerCase() === searchInput.value.toLowerCase()) {
    //         flag = true;
    //         break;
    //     }
    // }
    // return flag;
}


searchBtn.addEventListener("click", showResult);