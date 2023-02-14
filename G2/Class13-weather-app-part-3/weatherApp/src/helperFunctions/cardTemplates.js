import getDay from "./getDay.js";


export default class CardTemplates {

    static hourly(element, timezoneOffset = 0) {
        const timezone_offset = timezoneOffset * 1000;
        const current_time = element.dt * 1000
        const time = new Date(current_time + timezone_offset)
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

    static daily(element, timezoneOffset, index = 0) {
        console.log(index);
        const currentDay = getDay((new Date().getDay() + index))
        const timezone_offset = timezoneOffset * 1000;
        const current_time = element.dt * 1000
        const time = new Date(current_time + timezone_offset)
        const htmlToReturn = `
        <div class = "weather-card" >
            <div class="weather-card__temp">${Math.round(element.temp.max)}°</div>
            <div class="weather-card__day">${currentDay}</div>
            <div class="weather-card__precipitation"><span class ="weather-card__precipitation__span">Precipitation</span> <br> ${Math.floor(element.pop * 100)}%</div>
            <div class="weather-card__wind-speed">Wind Speed <br> ${Math.floor(element.wind_speed)}m/s</div>
        </div>    
        `
        return htmlToReturn;

    }
}