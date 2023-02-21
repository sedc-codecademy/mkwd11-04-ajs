const citySearchInput = document.getElementById("citySearchInput");
const citySearchBtn = document.getElementById("citySearchBtn");
const tableResult = document.getElementById("tableResult");
const pages = document.getElementById("pages").children;
let navItems = document.getElementsByClassName("nav-link");
let forecastResult = document.getElementById("forecastResult");

// **** API CALL ****

let searchForecastForCity = (cityName = "Gevgelija") => {
  const API_KEY = "2095b65c75e8d13fe9e3b0e095b36936";
  const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&APPID=${API_KEY}`;

  fetch(API_URL)
    .then((response) => {
      return response.json();
    })
    .then((forecastResult) => {
      console.log("The request succeeded!");
      console.log(forecastResult);
      printForecastResult(forecastResult);
      printHourlyTable(forecastResult);
    })
    .catch((error) => {
      console.log("The request has failed!");
      console.log(error);
    });
};

// **** PRINT FORECAST RESULTS ****

let printForecastResult = (measuredForecastData) => {
  clearElement(forecastResult);
  let results = aggregateDataOfForecast(measuredForecastData);
  console.log(results);
  generateElements(results);
};

let clearElement = (element) => {
  element.innerHTML = "";
};

// **** ELEMENT GENERATION HELPERS ****

let createDivElement = (content, isCityResult = false) => {
  let div = document.createElement("div");

  isCityResult
    ? div.classList.add("city-forecast-result")
    : div.classList.add("forecast-result");
  div.innerHTML = content;
  return div;
};

let createHeaderElement = (text) => {
  let header = document.createElement("h3");
  header.classList.add("header-color-one");
  header.innerText = text;
  return header;
};

// **** WEATHER FORECAST HTML GENERATION ****

let generateElements = (results) => {
  forecastResult.appendChild(
    createDivElement(
      `
    <h3>City Name: ${results.additionalInfo.cityName}</h3>
    <span>Current temp:${results.additionalInfo.currentTemp} Feels like:${results.additionalInfo.feelsLike}</span>
    <span>${results.additionalInfo.description} <img src="http://openweathermap.org/img/w/${results.additionalInfo.weatherIcon}.png" /> </span>
    `,
      true
    )
  );

  forecastResult.appendChild(
    createDivElement(`
    <p>Max temp:${results.temperature.highest}</p>
    <p>Max humd:${results.humidity.highest}</p>`)
  );

  forecastResult.appendChild(
    createDivElement(`
    <p>Avg temp:${results.temperature.average}</p>
    <p>Avg humd:${results.humidity.average}</p>`)
  );

  forecastResult.appendChild(
    createDivElement(`
    <p>Low temp:${results.temperature.lowest}</p>
    <p>Low humd:${results.humidity.lowest}</p>`)
  );

  forecastResult.appendChild(
    createHeaderElement(
      `Warmest time of the following period: ${results.warmestTime}`
    )
  );

  forecastResult.appendChild(
    createHeaderElement(
      `Coldest time of the following period: ${results.coldestTime}`
    )
  );
};

// **** WEATHER FORECAST DATA AGGREGATION ****

let aggregateDataOfForecast = (dataOfForecast) => {
  let temperatureSum = 0;
  let highestTemp = dataOfForecast.list[0];
  let lowestTemp = dataOfForecast.list[0];

  let humiditySum = 0;
  let highestHumidity = dataOfForecast.list[0];
  let lowestHumidity = dataOfForecast.list[0];

  for (let reading of dataOfForecast.list) {
    temperatureSum += reading.main.temp;
    humiditySum += reading.main.humidity;

    if (highestTemp.main.temp < reading.main.temp) {
      highestTemp = reading;
    }

    if (lowestTemp.main.temp > reading.main.temp) {
      lowestTemp = reading;
    }

    if (highestHumidity.main.humidity < reading.main.humidity) {
      highestHumidity = reading;
    }

    if (lowestHumidity.main.humidity < reading.main.humidity) {
      lowestHumidity = reading;
    }
  }

  return {
    temperature: {
      highest: highestTemp.main.temp,
      average: (temperatureSum / dataOfForecast.list.length).toFixed(2),
      lowest: lowestTemp.main.temp,
    },
    humidity: {
      highest: highestHumidity.main.humidity,
      average: (humiditySum / dataOfForecast.list.length).toFixed(2),
      lowest: lowestHumidity.main.humidity,
    },
    warmestTime: new Date(highestTemp.dt * 1000).toDateString(),
    coldestTime: new Date(lowestTemp.dt * 1000).toDateString(),

    additionalInfo: {
      cityName: dataOfForecast.city.name,
      description: dataOfForecast.list[0].weather[0].description,
      currentTemp: dataOfForecast.list[0].main.temp,
      feelsLike: dataOfForecast.list[0].main.feels_like,
      weatherIcon: dataOfForecast.list[0].weather[0].icon,
    },
  };
};

// **** HOURLY TABLE ELEMENT GENERATION HELPERS ****

let createTableData = (content) => {
  let td = document.createElement("td");
  td.innerHTML = content
  return td
}

let createHourlyRowSecond = (reading) => {
  let row = document.createElement("tr");


  let img = document.createElement("img");
  img.src = `http://openweathermap.org/img/w/${reading.weather[0].icon}.png`;
  

  row.appendChild(img);
  row.appendChild(createTableData(`${reading.weather[0].description}`))
  row.appendChild(createTableData(`${new Date(reading.dt * 1000).toDateString()}`))
  row.appendChild(createTableData(`${reading.main.temp} C (${reading.main.feels_like} C)`))
  row.appendChild(createTableData(`${reading.main.humidity} %`))
  row.appendChild(createTableData(`${reading.wind.speed} km/h`))



  return row;
};


// **** HOURLY TABLE PRINTING IMPLEMENTATION ****


let printHourlyTable = (measuredForeCastData) => {
  let allReadings = measuredForeCastData.list;
  clearElement(tableResult);

  let table = document.createElement("table");
  table.style.width = "100%"


  table.innerHTML += `
  <thead>
  <tr>
    <th scope="col">Icon</th>
    <th scope="col">Description</th>
    <th scope="col">Date</th>
    <th scope="col">Temperature</th>
    <th scope="col">Humidity</th>
    <th scope="col">Windspeed</th>
  </tr>
</thead>
  `

  
  let tbody = document.createElement("tbody")
  for (let reading of allReadings) {
    tbody.appendChild(createHourlyRowSecond(reading));
  }

  table.appendChild(tbody)
  
  
  tableResult.appendChild(table)
};

// **** SINGLE PAGE APP IMPLEMENTATION ****

let activateItem = (item) => {
  for (let navItem of navItems) {
    navItem.classList.remove("active");
  }
  item.classList.add("active");
};

let showPage = (page) => {
  for (let pageElement of pages) {
    pageElement.style.display = "none";
  }
  page.style.display = "block";
};

// **** ADD ALL EVENT LISTENERS ****
let registerNavListeners = () => {
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function () {
      activateItem(this);
      showPage(pages[i]);
    });
  }

  citySearchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchForecastForCity(citySearchInput.value);
  });
};

searchForecastForCity();
registerNavListeners();

