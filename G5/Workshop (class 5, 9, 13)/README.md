Weather Alert App Instructions


1. Create a folder structure, add files, connect files
- create a main folder for the project - weatherAlert folder
- in the weatherAlert folder add the index.html file 
- on the same level add the src folder
- in the src folder add: app.js , style.css
- in the src folder add an img folder that will house all the images for the project
*connect the files: (local files should follow after bootstrap links/scripts)

2. Create the basic needed elements/content 
	2.1. Create the Nav Bar
		- image (logo)
		- links (tabs) for each page
	2.2. Pages (for now, add just a main title and a paragraph)
		- WeatherAlert 
		- Hourly Data 
		- About WeatherAlert 

3. Make the tabs functional - on click on each tab, the content should change
	- get the nav-links and pages elements in script
	- create logic for hiding/showing pages
	- when a tab is selected, add a style to that tab 


4. Add input field and button
- the user should be able to enter a city in the input field
- on click on btn we should make a call to the weather api
*steps
- connect the btn to the script
- create a function that will call the API - fetch 
- connect the function to the input value
*let's look at the url


5. Add data to hourly weather page
- create table 
- fill table with data from api call
*data we need:
1.Icon of weather - weather[0].icon
2.Description of weather - weather[0].description
3.Date and Time - dt_txt
4.Temperature - temp
5.Humidity - humidity
6.Wind Speed - wind.speed
*how to get the icon
	- get icon code from API
	- add the code to the following link (dynamically)
		http://openweathermap.org/img/w/ICON-CODE-HERE.png
		example: http://openweathermap.org/img/w/10d.png
*create an element img
*set the img src to the url

6.  Create statistics info section (add it to WeatherAlert Page)
- decide how you will show the data (table, text, cards, etc)
- calculate highest, average and lowest temperature and humidity
- find the warmest and coldest time 
- show the calculated data on the UI
