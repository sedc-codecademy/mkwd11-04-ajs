class User {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static languages = ["en"]
    //simple, regular, method in the class
    sayHi(){
        console.log(`${this.firstName} says hello`)
    }

    static greethings(name){
        console.log(`${name} greets you. =) Hello amigo!`)
    }
}

const userOne = new User("John", "Doe");
console.log(userOne.languages) // undefined this prop. does not exists
console.log(userOne);
/**
 * we have accessed the regular method
 * through the object that was 
 * created out of the User class.
 */
userOne.sayHi();

//User.sayHi(); // error


User.greethings("George") //invocation of static method, it works ONLY for static methods
console.log(User.languages)

// userOne.greetings("Bob") //eror static method cannot be invoked from the object that was created of the class



class Mapper {
    static users = ["user1", "user2"];

    static mapToApiRequest(){
        console.log("Preparing to make api req.")
    }

    static mapToApiResponse(){
        /**
         * you may have complex logic
         * loop though an array
         * map the data structure
         * 
         */
        console.log("Mapping to api response...")
    }
}

Mapper.mapToApiRequest();
Mapper.mapToApiResponse();

console.log(Mapper.users);

console.log("**** API ****");


const main = document.getElementsByTagName("main")[0]

const swapi_url = "https://swapi.dev/api/starships";

const makeCall = (url) => {
    fetch(url)
    //then is going to executed
    //once the promise HIT fullfilled state
    //and the callback we provide is going to get executed
    .then((response) => {
        console.log("First then");
        console.log(response);

        return response.json();
    })
    //second then is executed once the first then has finished its job
    .then((result) => {
        console.log("Second then");
        //the argument in the callback
        //is actually the value returned from the first then
        console.log(result);

        const starships = result.results;
        printResults(starships, main)
    })
    //catch is going to be executed if the promise enter REJECTED state
    .catch((error) => {
        console.log(`Error happened: ${error}`)
    })
    //finally is executed no matter if we had success api request or not
    .finally(() => {
        console.log("An api request was made. This is finally state.")
    })
};

makeCall(swapi_url);

const printResults = (starships, element) => {
    console.log(starships)
    element.innerHTML = "";

    //the CB in forEach is going to executed
    //for each element of the current iteration

    //the argument in the callback "starship"
    //is actually the element of the current iteration
    starships.forEach((starship, index) => {
        console.log(index)
        let div = document.createElement("div");

        div.innerHTML += `
            <h3>${starship.name}</h3>
            <p>Model: ${starship.model}</p>
            <p>Manufacturer: ${starship.manufacturer}</p>
            <p>Max speed: ${starship.max_atmosphering_speed}</p>
            
            <div id="id_${index}">   
                <button value="${starship.films}" onclick="makeCallMovies(this, ${index} )"  >Show films</button>
            </div>

            <hr />

        `

        element.appendChild(div)
    })

}

const makeCallMovies = async (btnElement, index) => {
    const parentTest = document.getElementById(`id_${index}`)
    
    const filmsUrls = btnElement.value.split(",")
    console.log(filmsUrls)

    const movieTitle = [];

    //await does not work in forEach =)
    for(let filmUrl of filmsUrls){
        let response = await fetch(filmUrl);
        let result = await response.json();

        movieTitle.push(result.title);
    }

    parentTest.innerHTML += "This starship occured in the following movies: ";


    movieTitle.forEach((title) => {
        parentTest.innerHTML += ` ${title}`
    })

};

