// get people from swapi and then add vehicles

function getSwapiPeople(url) {
    return fetch(url);
}

function linkVehicleWithPeople(people) {
    let promiseArray = [];

    for(let url of people.vehicles) {
        promiseArray.push(fetch(url));
    }

    return Promise.all(promiseArray).then(data => {
            return Promise.all(data.map(x => x.json()))
        })
        .then(vehicles => {
            console.log(vehicles);
            return new Promise((resolve, reject) => {
                resolve({
                    ...people,
                    vehicles: [...vehicles]
                })
            })
        });
}

getSwapiPeople("https://swapi.dev/api/people/1")
    .then(response => {
        return response.json();
    })
    .then(data => linkVehicleWithPeople(data))
    .then(data => console.log(data));