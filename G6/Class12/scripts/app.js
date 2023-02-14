class User {
    constructor(name, email) {
        this.id = Math.floor(Math.random() * 1000);
        this.name = name;
        this.email = email;
    }

    #password = ''; // private property

    setPassword(password) {
        this.#password = password
    }

    printUserInfo() {
        console.log(`${this.name} - ${this.email}`)
    }
}

const dejan = new User('Dejan', 'dejan@gmail.com')
// console.log(dejan)
// public properties:
// console.log(dejan.id)
// console.log(dejan.name)
// private properties:
// console.log(dejan.#password)
// dejan.#password = 'pass'
dejan.setPassword('new pass')
// console.log(dejan)
// dejan.printUserInfo()

// STUDENT nasleduva od USER
class Student extends User {
    constructor(name, email, academy, group, track) {
        super(name, email);
        this.academy = academy;
        this.group = group;
        this.track = track;
    }

    printStudentInfo() {
        console.log(`${this.name} is a student of the ${this.academy} academy, in track ${this.track} within group ${this.group}`)
    }
}

const martin = new Student('Martin', 'martin@gmail.com', 'SEDC', 'G1', '.NET')

// martin.printUserInfo()
martin.setPassword('very strong password')
// console.log(martin)
// const ivo = new User('Ivo', 'ivo@gmai.com')
// console.log(ivo)

// martin.printStudentInfo();
// dejan.printStudentInfo();


// console.log(dejan instanceof User)
// console.log(dejan instanceof Student)
// console.log(martin instanceof Student)
// console.log(martin instanceof User)
// console.log(martin instanceof Object)
// console.log(martin instanceof String)
// console.log(martin instanceof Array)

class Trainer extends Student {
    constructor(name, email, academy, group, track, jobTitle, experience, students, isActive = false) {
        super(name, email, academy, group, track);
        this.jobTitle = jobTitle;
        this.experience = experience;
        this.students = students;
        this.isActive = isActive;
    }

    get academy() {
        return this._academy;
    }

    set academy(academy) {
        this._academy = academy + ' Academy'
    }

    static addYearsOfExperience(trainer) {
        trainer.experience++; // increase amount by one;
    }

    printTrainerInfo() {
        console.log(`${this.name} is a trainer in the ${this.academy}, with group: ${this.group}`)
    }
}

const gjorge = new Trainer('Gjorge', 'gjorge@gmail.com', 'SEDC', 'G7', 'Node JS', 'JS Developer', 3, [])

console.log(gjorge.academy)

console.log(gjorge)
// console.log(gjorge instanceof Trainer)
// console.log(gjorge instanceof Student)
// console.log(gjorge instanceof User)
// console.log(gjorge instanceof Object)

// gjorge.printUserInfo()

// gjorge.printTrainerInfo()

// martin.printTrainerInfo()

// Trainer.addYearsOfExperience(gjorge)

// console.log(gjorge)