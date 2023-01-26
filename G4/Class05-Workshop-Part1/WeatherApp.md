# Weather App Requirements

## Api Info

1. Weather API URL: "https://api.openweathermap.org/data/3.0/onecall?lat=41.99646&lon=21.43141&units=metric&exclude=minutely&appid=83cf676a48739fd57b023a3d32f2ef8b"
2. Icons URL: "http://openweathermap.org/img/wn/01d@2x.png"
3. Icons Guide Url: "https://openweathermap.org/weather-conditions"

### How to convert timestamps (dt properties in weather data) to readable dates

```
//This creates a new date object
const date = new Date(timestamp * 1000);
//This creates a readable full date (useful for showing current and daily wather)
console.log(date.toLocaleDateString("sr"));
//This returns the hours (useful for showing hourly weather)
console.log(date.getHours());
```

## Requirements

1. Create a single page application that shows weather data about skopje
2. The weather data is going to be fetched from the url above while the icons are going to be dynamically rendered using the keys provided in the icon guide link above
3. It should have a header with navigation and multiple views showing different pages
4. The pages that should be present are:

   1. Home page which shows the current weather info for Skopje and has cards that show the forecast for the next days
   2. Hourly weather page which shows the weather forecase for the next 48 hours in weather cards
   3. About page which shows information about the student who made the weather app

5. The data that needs to be shown in the current weather info is:

   1. Current date
   2. Temperature
   3. Feels like temperature
   4. Wind speed
   5. Weather icon
   6. Weather description
   7. Humidity

6. The data that needs to be shown in the daily weather cards is:

   1. Date
   2. Max/Min Temperature
   3. Humidity
   4. Weather Icon
   5. Weather description

7. The data that needs to be shown in the hourly weather cards is:

   1. Hour
   2. Temperature
   3. Feels like
   4. Humidity
   5. Weather Icon
   6. Weather Description

8. The about page is up to the student as to which information he wants to put there
9. Only a single index.html file needs to be used, everything is going to be changed and displayed with javascript code
10. The CSS is up to the student how he/she wants to style the application , the only visual thing that is mandatory is the information to be displayed and the weather icons

### TIPS

- Take your time and think about what you need to develop, don't rush through the app because this is a 3 class process
- Deconstruct the big problems into smaller problems and then into even smaller problems to avoid being confused
- The demo code the trainer has written so far is always available, use it and also call for help / use google while developing
- Don't move on to the next problem until you have tested the previous one and it is working
