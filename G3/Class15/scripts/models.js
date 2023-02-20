class Band {
    constructor(name, active, tags, members, albums) {
        this.name = name;
        this.active = active;
        this.tags = tags;
        this.members = members;
        this.albums = albums;
    }

    getTagsAsString() {
        if(this.tags && this.tags.length > 0) {
            return this.tags.join(", ");
        }
        return '';
    }

    getCurrentMembers() {
        if(this.members && this.members.length > 0) {
            return this.members.filter(member => !member.former);
        }
        return [];
    }

    getCurrentMembersAsString() {
        let length = this.getCurrentMembers().length;
        return this.getCurrentMembers()
            .reduce((accumulator, currentValue, index) => {
                return accumulator
                .concat(currentValue.name)
                .concat(length - 1 !== index ? ', ' : '')
            }, '');
        // return this.getCurrentMemebers().map(x => x.name).join(', ');
    }

    getAlbumsCount() {
        return this.albums ? this.albums.length : 0;
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