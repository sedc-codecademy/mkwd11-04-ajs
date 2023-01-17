console.log("connected");

let movieName = document.getElementById("movieName");
let movieDirector = document.getElementById("movieDirector");
let movieGenre = document.getElementById("movieGenre");
let movieCoverImg = document.getElementById("movieCoverImg");
let movieReleaseDate = document.getElementById("movieReleaseDate");

let buttons = document.getElementsByTagName("button");
let results = document.getElementById("results");

let addBtn = buttons[0];

let id = 0;

let idToEdit = null;

function generateId(){
  id += 1;
  return id
}

function Movie(id, movieName, movieDirector, movieGenre, movieCoverImage, movieReleaseDate){
  this.id = id;
  this.movieName = movieName;
  this.movieDirector = movieDirector;
  this.movieGenre = movieGenre;
  this.movieCoverImg = movieCoverImage;
  this.movieReleaseData = movieReleaseDate;
}

let moviesDB = [];

addBtn.addEventListener("click", function(event) {
  event.preventDefault()
  
  let doWeEditMovie = false; //flag

  for(let movie of moviesDB){
    if(movie.id === idToEdit){
      movie.movieName = movieName.value;
      movie.movieDirector = movieDirector.value;
      movie.movieGenre = movieGenre.value;
      movie.movieCoverImg = movieCoverImg.value;
      movie.movieReleaseData = movieReleaseDate.value;

      doWeEditMovie = true;
    }
  }

  if(doWeEditMovie === false){ // we do not edit movie, we add new movie
    let movie = new Movie(generateId(), movieName.value, movieDirector.value, movieGenre.value, movieCoverImg.value, movieReleaseDate.value);
    moviesDB.push(movie);
  }
 
  

  printMovies(moviesDB, results)
  clearInputs();

  idToEdit = null;
})

function printMovies(movies, elementToPrintIn){
  elementToPrintIn.innerHTML = "";

  for(let i = 0; i < movies.length; i++){
    //console.log(movies[i]) //element of current iteration, that is movie object
    elementToPrintIn.innerHTML += 
    `
      <div class="movieCard">
          <h3>${movies[i].movieName}</h3>
          <img width="300" height="350" src="${movies[i].movieCoverImg}" alt=${movies[i].movieName} />
          <button value="${movies[i].id}" onclick="removeFromList(this, moviesDB)"> Remove Movie </button>
          <button value="${movies[i].id}" onclick="editFromList(this, moviesDB)"> Edit Movie </button>
      </div>
    `

  }
}

function removeFromList(target,  movies){
  console.log("I am clicked")
  console.log(target)
  console.log(movies)
  
  let listOfRemaningMovies = [];
  
  for(let i = 0; i < movies.length; i++){
    if(movies[i].id !== Number(target.value)){
      listOfRemaningMovies.push(movies[i])
    }
  }

  console.log("Remaining: ", listOfRemaningMovies)
  moviesDB = listOfRemaningMovies;
  printMovies(moviesDB, results);

}

function editFromList(target,  movies){
 
  let movieTobeEdited = {};
  
  for(let i = 0; i < movies.length; i++){
    if(movies[i].id === Number(target.value)){
      movieTobeEdited = movies[i]
    }
  }


  
  movieName.value = movieTobeEdited.movieName
  movieDirector.value = movieTobeEdited.movieDirector
  movieGenre.value = movieTobeEdited.movieGenre
  movieCoverImg.value = movieTobeEdited.movieCoverImg
  movieReleaseDate.value = movieTobeEdited.movieReleaseData
  idToEdit = movieTobeEdited.id

}

function clearInputs(){
  movieName.value = ""
  movieDirector.value = ""
  movieGenre.value = ""
  movieCoverImg.value = ""
  movieReleaseDate.value = ""
}