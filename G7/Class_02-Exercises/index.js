console.log("connected");

let movieName = document.getElementById("movieName");
let movieDirector = document.getElementById("movieDirector");
let movieGenre = document.getElementById("movieGenre");
let movieCoverImg = document.getElementById("movieCoverImg");
let movieReleaseDate = document.getElementById("movieReleaseDate");

let buttons = document.getElementsByTagName("button");
let results = document.getElementById("results");

let addBtn = buttons[0];

function Movie(movieName, movieDirector, movieGenre, movieCoverImage, movieReleaseDate){
  this.movieName = movieName;
  this.movieDirector = movieDirector;
  this.movieGenre = movieGenre;
  this.movieCoverImg = movieCoverImage;
  this.movieReleaseData = movieReleaseDate;
}

let moviesDB = [];

addBtn.addEventListener("click", function(event) {
  event.preventDefault()
  
  let movie = new Movie(movieName.value, movieDirector.value, movieGenre.value, movieCoverImg.value, movieReleaseDate.value);
  moviesDB.push(movie);
  

  printMovies(moviesDB, results)
  clearInputs()
})

function printMovies(movies, elementToPrintIn){
  elementToPrintIn.innerHTML = "";

  for(let i = 0; i < movies.length; i++){
    console.log(movies[i]) //element of current iteration, that is movie object
    elementToPrintIn.innerHTML += 
    `
      <div class="movieCard">
          <h3>${movies[i].movieName}</h3>
          <img width="300" height="350" src="${movies[i].movieCoverImg}" alt=${movies[i].movieName} />
          <button value="${movies[i].movieName}" onclick="removeFromList(this, moviesDB)"> Remove Movie </button>
          <button> Edit Movie </button>

      </div>
    `
  }
}

function removeFromList(target,  movies){
  console.log("I am clicked")
  console.log(movies)
  
  let movieName = target.value;
  let listOfRemaningMovies = [];

  for(let i = 0; i < movies.length; i++){
    if(movies[i].movieName !== movieName){
      listOfRemaningMovies.push(movies[i])
    }
  }

  moviesDB = listOfRemaningMovies;
  printMovies(moviesDB, results);

}

function clearInputs(){
  movieName.value = ""
  movieDirector.value = ""
  movieGenre.value = ""
  movieCoverImg.value = ""
  movieReleaseDate.value = ""
}