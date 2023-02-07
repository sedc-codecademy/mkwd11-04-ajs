## Workshop Bonus Requirement

- Implement a search bar function in the weather api that will allow you to search for weather info by city

- After the user inputs a search term the openweathermap geolocation api should be called

- When you recieve valid data from the geolocation call the weather data url using the longitude and latitude that you receieved from the geolocation api

- Geolocation Url : http://api.openweathermap.org/geo/1.0/direct?q={CITY NAME}&limit=1&appid=83cf676a48739fd57b023a3d32f2ef8b

- Weatherdata URL : "https://api.openweathermap.org/data/3.0/onecall?lat={LATITUDE}&lon={LONGITUDE}&units=metric&exclude=minutely&appid=83cf676a48739fd57b023a3d32f2ef8b"

- After you have the weathe rata render everything as usual but change the city name and the weather to match what you searched for (you can get the city name in the geolocation response)
