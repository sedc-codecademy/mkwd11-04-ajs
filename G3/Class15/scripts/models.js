class Band {
    constructor(name, active, tags, members, albums) {
        this.name = name;
        this.active = active;
        this.tags = tags;
        this.members = members;
        this.albums = albums;
    }

    getTagsAsString() {

    }

    getCurrentMemebers() {
        
    }

    getCurrentMembersAsString() {

    }
}

class Member {
    constructor(name, former) {
        this.name = name;
        this.former = former || false;
    }
}

class Album {
    constructor(name, year, type) {
        this.name = name;
        this.year = year;
        this.type = type;
    }
}