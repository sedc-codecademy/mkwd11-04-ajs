const apiParameters = {
    // globalCity: `Skopje`,
    apiKey: `74e59f6374abe0d9b758877616ae444c`,
    apiFirstUrl: `https://api.openweathermap.org/data/2.5/onecall`,
    apiSecondUrl: `https://api.openweathermap.org/data/2.5/forecast`,
    imgUrl: ` http://openweathermap.org/img/wn/`,
}

const cardContainer = document.getElementById('cardContainer');

const getLocation = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                return resolve(position);
            }, (err) => {
                return reject(err);
            });
        } else {
            return reject("Geolocation is not supported by this browser.");
        }
    })
};

function cardTemplate(element) {
    console.log(element);
    const time = new Date(element.dt * 1000)
    const htmlToReturn = `
    <div class = "weather-card" >
        <div class="weather-card__temp">${Math.round(element.temp)}°</div>
        <div class="weather-card__time">${time.getHours()}:00</div>
        <div class="weather-card__precipitation"><span class ="weather-card__precipitation__span">Precipitation</span> <br> ${Math.floor(element.pop * 100)}%</div>
        <div class="weather-card__wind-speed">Wind Speed <br> ${Math.floor(element.wind_speed)}m/s</div>
    </div>    
    `
    return htmlToReturn;
}

// function checkWithLocalStorage() {
//     localStorage.getItem('weather');
// }

// function setLocalData(data) {
//     const objectToSave = {
//         timeSaved: Date.now(),
//         data: data,
//     }
//     localStorage.setItem('weatherData', JSON.stringify(objectToSave));
// }

// function getLocalData() {
//     return localStorage.getItem('weatherData');
// }

// function checkIfDataIsOld(data) {
//     if (!data.timeSaved) return;
//     const oldTime = data.timeSaved;
//     const newTime = data.timeSaved;
//     const oneHourInMilliseconds = 3600 * 1000;
//     return newTime - oneHourInMilliseconds > oldTime
// }




// const array = [2, 5, 6, 7, 8, 9];
// const biggerThan5 = array.filter(element => element > 5);
// //biggerThan5 == [6, 7 ,8, 9];
// const biggerThan5peski = [];
// array.forEach(element => {
//     if (element > 5) biggerThan5peski.push(element);
// });



function setData(key, data) {
    let dataToSave = typeof data == 'object' ? JSON.stringify(data) : data
    localStorage.setItem(key, dataToSave);
}

function getData(key) {
    let dataToReturn;
    dataToReturn = localStorage.getItem(key);
    try {
        dataToReturn = JSON.parse(dataToReturn)
    }
    catch (e) {
        dataToReturn = dataToReturn;
    };
    return dataToReturn;
}

function getDataFromURLorLocal(url) {
    return new Promise((resolve, reject) => {
        //ovdeka ke go zeme podatokot od localStorage
        const localData = getData(url);
        //dokolku ne postoi podatok na local storage so toj kluc, da proba da go zeme 
        // od internet da napravi AJAX povik
        if (!localData) {
            fetch(url).then(data => data.json())
                .then(data => {
                    setData(url, data)
                    resolve(data);
                });
        }
        else {
            console.log('od lokal se zima');
            resolve(localData);
        }
    })
}

getLocation()
    .then(position => {
        // const {latitude, longitude} = position.coords;
        // console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        getDataFromURLorLocal(`${apiParameters.apiFirstUrl}?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiParameters.apiKey}&exclude=minutely`)
            .then(data => {
                for (let element of data.hourly) {
                    const cardHtml = cardTemplate(element);
                    cardContainer.innerHTML += cardHtml;
                }
            })
    })

