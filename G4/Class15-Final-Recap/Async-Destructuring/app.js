console.log("works");

// Geologcation
// http://api.openweathermap.org/geo/1.0/direct?q={CITY NAME}&limit=1&appid=83cf676a48739fd57b023a3d32f2ef8b

// Weather
// "https://api.openweathermap.org/data/3.0/onecall?lat={LATITUDE}&lon={LONGITUDE}&units=metric&exclude=minutely&appid=83cf676a48739fd57b023a3d32f2ef8b"

const fetchWeatherData = async () => {
  try {
    const geoRes = await fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=Strumica&limit=1&appid=83cf676a48739fd57b023a3d32f2ef8b"
    );

    const geoData = await geoRes.json();

    if (geoData.length < 1) throw new Error("No geodata found!");
    // If function reaches here we can be sure we have geo data

    // Destructuring variables and assigning custom names to them
    const { lat: latitude, lon: longitude, name: cityName } = geoData[0];

    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely&appid=83cf676a48739fd57b023a3d32f2ef8b`
    );

    const weatherData = await weatherRes.json();

    console.log(weatherData.current);

    // Destructuring function arguments
    const printTemperature = ({
      temp: temperature,
      feels_like: temperatureFeelsLike,
    }) => {
      console.log(temperature);
      console.log(temperatureFeelsLike);
    };

    printTemperature(weatherData.current);

    const { description: weatherDescription } = weatherData.current.weather[0];

    console.log(weatherDescription);
  } catch (error) {
    console.error(error);
  }
};

fetchWeatherData();
