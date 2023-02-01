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

// getSwapiPeople("https://swapi.dev/api/people/2")
//     .then(response => {
//         return response.json();
//     })
//     .then(data => linkVehicleWithPeople(data))
//     .then(data => console.log(data));


// with async

async function getSwapiPeopleAsync(url) {
    let response = await fetch(url);
    return await response.json();
}

async function linkVehicleWithPeopleWithOutMapAsync(people) {
    let promiseArray = [];

    for(let url of people.vehicles){
        promiseArray.push(fetch(url));
    }
    let promises = await Promise.all(promiseArray);

    let resolvedPromises = [];
    for(let promise of promises) {
        resolvedPromises.push(promise.json());
    }

    let data = await Promise.all(resolvedPromises);
    return {
        ...people,
        vehicles: [...data]
    };
}

async function linkVehicleWithPeopleAsync(people) {
    let promises = await Promise.all(people.vehicles.map(x => fetch(x)));
    let data = await Promise.all(promises.map(x => x.json()));
    return {
        ...people,
        vehicles: [...data]
    };
}

async function printPeopleWithVehicles() {
    let people = await getSwapiPeopleAsync("https://swapi.dev/api/people/1");
    let peopleWithVehicles = await linkVehicleWithPeopleAsync(people);
    let peopleWithVehicles2 = await linkVehicleWithPeopleWithOutMapAsync(people);
    console.log(peopleWithVehicles);
    console.log(peopleWithVehicles2);
}

printPeopleWithVehicles();