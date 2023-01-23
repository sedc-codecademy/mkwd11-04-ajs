# Let's build WeatherAlert ⛅
## Phases of building an app 🏗
Applications are not built only by coding and drinking coffee. Applications are also built by thinking, researching, planning, and testing. All these things are called a development cycle of an application.  Today we are going to build an application. These are the phases that we are going to pass:
* Analyzing and researching
* Planning and discussion
* Coding the planned features
* Testing the code that we have written

### Analyzing and research phase 🔹
We need to make a single-page application. This application will have two views: 
* Weather statistics: Weather statistics for the following days include:
	* Average, Highest, and Lowest temperature
	* Average, Highest, and Lowest humidity
	* Warmest and Coldest time
* Hourly weather stats: A table with the weather for the following hours including:
	* Icon for the weather
	* Description of the weather
	* Date and time of the measurements
	* Temperature ( ℃ )
	* Humidity ( % )
	* Wind Speed ( m/s )

The data about the weather will be acquired from an external API. There should be an input that will accept a city name and a button that will make the call and generate both views with the needed information. There should also be two navigation links, one for weather statistics and one for hourly data. When clicked it should show the view that it corresponds to ( if hourly data is clicked, the hourly data table should be shown )
#### About the API 🌞
We will be using the [openWeatherMap](https://openweathermap.org/) API. This API is free but requires an account. When you make an account there would be an API keys tab that you can open. There you can find your API key. If there is no API key, you can generate it by clicking on the button on the right that says Generate. With this key, you can make 60 calls a minute. Here are some useful links:

* **API:**https://openweathermap.org/current

* **Weather for a City Link:** https://api.openweathermap.org/data/2.5/forecast?q=CITY-NAME-HERE&units=metric&APPID=API-KEY-HERE
Ex: https://api.openweathermap.org/data/2.5/forecast?q=skopje&units=metric&APPID=64e59f6374abe0d9b758877616ae444b

* **Icon Link:** http://openweathermap.org/img/w/ICON-CODE-HERE.png
Ex: http://openweathermap.org/img/w/10d.png

* Extra: [Easy starter template with bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

### Planning phase 🔹
In this step, we already analyzed the stuff that we need and the requirements for the application. Now we have to plan it. Planning is one of the most important parts of the development process. We take the whole problem of building the app and create smaller chunks or tasks that we can complete. 
1.  Create an HTML page and connect a script, CSS document and libraries
2. Create the navigation bar, input, and button
3. Connect the button with the script
4. Create a function for calling the API by city name
5. Connect the function with the input data when the button is clicked
6. Build the navigation links/buttons mechanic to change the view
7. Create a function that gets all the needed statistics and returns them
> **Hint:** use an object as a return value ( bundle the stats into one package )
8. Create a function for printing the stats in the weather stats view
9. Create a function for printing the table for hourly stats
### Coding phase 🔹
In this phase, we start coding all the tasks that we have planned and written in the planning phase. So we are building and creating the application here. We can always go back and add a task to the planning list if we encounter some feature that we missed in the planning. 

### Testing phase 🔹
This is a phase where we spend time testing our code and checking if the built product correlates with the requirements. When we encounter a problem, missing requirement, or something out of place we go back to the coding phase to fix the problems and then go back to testing. This cycle is done when we are satisfied with the complete product. 
