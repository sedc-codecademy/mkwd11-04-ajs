// console.log("connected");


class Song {
  constructor(title, author, genre, year, priceToRent) {
    // private this._title = title;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.year = year;
    this.priceToRent = priceToRent;
  }


  // GET
  get genre() {
    console.log("We are in genre getter, prepering to return genre...")
    return `Genre of song is: ${this._genre}`
  }

  /**
   * The setter is invoked
   * whenever we make a new instance of the Song class
   * 
   */
  // SET => must accept parametar
  set genre(genreValue){
    console.log('Genre value in setter',genreValue)
    console.log("We are in genre setter, prepering to set genre...")
    if(genreValue === "" || genreValue === undefined){
      throw new Error("Genre value is not valid")
    }
    this._genre = genreValue
  }



  get priceToRent(){
    return `Price to rent this song is ${this._priceToRent}`
  }

  set priceToRent(price){

    if(this.year > 2020){
      this._priceToRent = price + 50
    }
    else {
      this._priceToRent = price
    }
  }


  returnTitle(){ //my costum getter
    return this.title
  }

  information(){
    return this.title + this.author
  }
}

const songOne = new Song("Star Wars theme song", "Jedi RTD2", "Fanstasy",2009, 20);

console.log(songOne.genre) //Genre of song is: Fanstasy
console.log(songOne.returnTitle())
console.log(songOne.title)
console.log(songOne.author)

console.log(songOne._priceToRent)



const songTwo = new Song("Song Title", "Song Author", "Rock", 2023, 50)
console.log(songTwo._priceToRent);


class User{
  constructor(userName, cartItems, hasBonus = false){
    this.userName = userName;
    this.cartItems = cartItems;
    this.hasBonus = hasBonus
  }

  get hasBonus(){
    console.log("HERE WE ARE =)")
    //we can have here addition logic
    return `User: ${this.userName} has bonus: ${this.bonus}`
  }

  set hasBonus(hasBonus){
    if(this.cartItems.length >= 5){
      this.bonus = true
    }
    else{
      this.bonus = hasBonus
    }
  }
}

let userOne = new User("qwerty", ["cart item 1"]);

console.log(userOne)

let userTwo = new User("George", ["cart item 1", "cart item 1","cart item 1","cart item 1","cart item 1"])

console.log(userTwo.hasBonus);

// IMPORT FROM DIFFERENT FILE

console.log("***** IMPORT FILES *****");

import { makeApiRequest, api_url, Book } from "./api-service.js";

makeApiRequest()

console.log(api_url)

let myBook = new Book("Harry Potter")

console.log(myBook)