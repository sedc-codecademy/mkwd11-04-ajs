
class Person {
  /**
   * The constructor is a function of the class
   * that gets executed ONLY when we create
   * a new object out of the class itself
   */
  constructor(id, firstName, lastName, age, gender){
    console.log("I execute when a new instance is created");

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;

  
  }

  //We can have only 1 constructor
  // constructor(){
  //   console.log("2")
  // }

  personInfo(){
    console.log(`Fullname: ${this.firstName} ${this.lastName}.`)
  }
}

let personOne = new Person(1, "Bob", "Bobski", 35, "male");
console.log(personOne);

console.log("**** INHERITENCE ****");

class Doctor extends Person {
  constructor(id, firstName, lastName, age, gender, yearsOfExperience, hospital){
    /**
     * super will invoke the constructor of the class
     * that we have inherited from.
     * Inside we provide the coresponding values for the 
     * inherited class =)
     */
    
    super(id, firstName, lastName, age, gender)
    // new Person(id, firstName, lastName, age, gender)

    this.yearsOfExperience = yearsOfExperience;
    this.hospital = hospital
  }


  doctorInfo(){
    console.log(`Dr. ${this.firstName} works in ${this.hospital}.`)
  }

}

let doctorOne = new Doctor(1, "Yuli", "Yulski", 30, "female", 5, "Voena Bolnica")
console.log(doctorOne)
doctorOne.personInfo()
doctorOne.doctorInfo()


class Surgeon extends Doctor {
  constructor(id, firstName, lastName, age, gender, yearsOfExperience, hospital, specialization){
    super(id, firstName, lastName, age, gender, yearsOfExperience, hospital)

    // We can delete an inherited property
    // delete this.hospital
    this.specialization = specialization
  }

  surgeonSpecialization(){
    console.log(`Dr. ${this.firstName} is specialized in ${this.specialization}.`)
  }

  // ** We can overwrite a prveous inherited method
  // personInfo(){
  //   console.log(`Person info changed in surgeon`)
  // }
}

let cardiologySurgeon = new Surgeon(3, "Lui", "Luiska", 40, "female", 10, "Mother Therasa", "Cardiology Surgeon");

console.log(cardiologySurgeon)
cardiologySurgeon.personInfo();
cardiologySurgeon.doctorInfo();
cardiologySurgeon.surgeonSpecialization();

// instanceOf will check if the object is instance(is created) of a class
console.log(cardiologySurgeon instanceof Surgeon) //true
console.log(cardiologySurgeon instanceof Doctor) //true
console.log(cardiologySurgeon instanceof Person) //true



let {firstName, lastName} = cardiologySurgeon;

console.log(firstName, lastName)

console.log("**** STATIC METHODS ****");

class Movie {
  constructor(id, name, director, genre, priceRent){
    this.id = id;
    this.name = name;
    this.director = director;
    this.genre = genre;
    this.priceRent = priceRent
  }

  info(){
    // IMPORTANT => We cannot invoke static method in a regular method =)
    // this.checkIfIsRentable()

    //We can invoke method inside a method
    return `${this.name} was directed by ${this.returnDirector()}`
  }

  returnDirector(){
    return this.director
  }

  static checkIfIsRentable(movie, ourBudget){
    if(ourBudget >= movie.priceRent){
      console.log("Yes, you may rent the movie.")
    }else {
      console.log("No cannot rent the movie")
    }

  }
}

// console.log(Movie.info()) // Error

let movieOne = new Movie("1", "Movie Name", "Movie Director", "fantasy", 50);
console.log(movieOne);
console.log(movieOne.info());

// The static method is only accessable 
// from the class
// not from the object created out of the class.
// movieOne.checkIfIsRentable()

// We accessed the static method checkIfIsRentable
// from the Movie class directly;
Movie.checkIfIsRentable(movieOne, 30);
Movie.checkIfIsRentable(movieOne, 60);


const users = [ 
  {fullName: "Bob Bobski", proffession: "baker"}, 
  {fullName: "John Doe", proffession: "Web Developer"} 
]

class UsersMapper {

  static toFullNames(listOfUsers){
    return listOfUsers.map((user) => user.fullName)
  }


};

let mappedUsers = UsersMapper.toFullNames(users)

console.log(mappedUsers)

