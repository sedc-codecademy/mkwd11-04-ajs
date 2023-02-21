let bandService = {
    url: "https://raw.githubusercontent.com/sedc-codecademy/mkwd11-04-ajs/main/G3/Class15/bands.json",


    fetchBands: function() {
        return fetch(this.url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                return data.map(band => {
                    let albums = band
                        .albums
                        .map(album => new Album(album.name, album.year, album.type));
                    let members = band
                        .members
                        .map(member => new Member(member.name, member.former));
                    return new Band(band.name, band.active, band.tags, members, albums);
                });
            })
            .catch(error => {
                throw new Error("Server is not available at the moment. Please try again later!");
            });
    }
}