function Student(firstName, lastName, birthYear, academy, grades){
    this.firstName = !firstName ? "unnamed" : firstName;
    this.lastName = !lastName ? "unnamed" : lastName;
    this.birthYear = birthYear;
    this.academy = !academy ? "unnamed" : academy;
    this.grades= grades;
    this.getAge = function(){
        if(!this.birthYear){
            return 'Student has no birth year';
        }
        else{
           return (new Date()).getFullYear - this.birthYear;
        }
    },
    this.getInfo = function(){
        return `This is student ${this.firstName}* ${this.lastName}* from the academy ${this.academy}*!`;
    },
    this.getGradesAverage = function(){
        if(!this.grades || this.grades.length == 0){
            return "No grades!";
        }
        else{
            let sum = 0;
            for(let grade of this.grades){
                sum+= grade;
            }
            return sum/this.grades.length;
        }
    }
}

let students = [new Student("Ana","Markovska", 1990, "SEDC", [5,5,4]), new Student("Marija","Petkovska"), new Student("Marko","Markovski", 1992, "SEDC")];
console.log(students[0].getGradesAverage());
console.log(students[1].getInfo());
console.log(students[2].getGradesAverage());
