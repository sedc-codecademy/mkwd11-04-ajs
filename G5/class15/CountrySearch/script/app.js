import {data as importedData} from './data.js'

//get all html elements 
const elements = {
    searchInput: document.getElementById("searchInput"),
    searchBtn: document.getElementById('searchBtn'),
    resetBtn: document.getElementById('resetBtn'),
    spinner: document.getElementById('spinner'),
    cardContainer: document.getElementById('cardContainer'),
    btnCurrency: document.getElementById('btnCurrency'),
    btnEnglish: document.getElementById('btnEnglish'),
    btnMacedonia: document.getElementById('btnMacedonia'),
    notification: document.getElementById('notification')
}

//get the data from the fetch in data.js
const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(importedData)
            reject(err => console.log(err))
        }, 3000)
    })
}

//hide and show the spinner
const toggleSpinner = (showSpinner) => showSpinner ? elements.spinner.style.display = 'block' : elements.spinner.style.display = 'none'

elements.btnCurrency.addEventListener('click', () => {
    cleanElements()
    toggleSpinner(true)
    getData().then(countriesData => {
        let filteredCountries = countriesData.filter(el => 
            el.currencies != undefined && el.currencies.hasOwnProperty('EUR')
        )
        toggleSpinner(false)
        filteredCountries.forEach(country => elements.cardContainer.innerHTML += createCard(country))

    })

})

elements.btnEnglish.addEventListener('click', () => {
    cleanElements()
    toggleSpinner(true)
    getData().then(countriesData => {
        let filteredCountries = countriesData.filter(el => 
            el.languages != undefined && el.languages.hasOwnProperty('eng')
        )
        toggleSpinner(false)
        filteredCountries.forEach(country => elements.cardContainer.innerHTML += createCard(country))
    })
})

elements.btnMacedonia.addEventListener('click', () => searchCountriesByName('Macedonia'))


//format country names with _ instead of empty space for Wikipedia link
const formatData = countryName => countryName.split(' ').join('_')


//card will accept country - one object from the api
const createCard = (country) => {
    return `
        <div class="col mb-4">
            <div class="card">
            <img src="${country.flags.png}" alt="${country.name.common} flag">
            <div class="card-body">
                <h5 class="card-title">${country.name.common}</h5>
                <p class="card-text">${country.name.common} is a country with population of
                ${country.population} with the capitol city ${country.capital[0]}
                <p class="card-text">Region: ${country.region}</p>
                <p class="card-text">Subregion: ${country.subregion}</p>
                </p>
            </div>
            <div class="card-footer">
                <small class="text-muted">
                    Open on <a 
                    href="https://en.wikipedia.org/wiki/${formatData(country.name.common)}" 
                    target="_blank">
                    Wikipedia
                    </a>
                </small>
            </div>
            </div>
        </div>
    `
}


const cleanElements = () => {
    elements.cardContainer.innerHTML = "";
    elements.notification.innerHTML = "";
}

const searchCountriesByName = async countryName => {
    cleanElements()
    toggleSpinner(true)
    try {
      let response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      let data = await response.json() //data returns an array of object(s)
        toggleSpinner(false)
      data.forEach(countryObj => elements.cardContainer.innerHTML += createCard(countryObj))
    }
    catch (err) {
        elements.notification.innerHTML = `<div class="alert-alert-danger">
        You entered an invalid country name</div>`
    }
}

elements.searchBtn.addEventListener('click', () => searchCountriesByName(elements.searchInput.value))

elements.resetBtn.addEventListener('click', () => {
    cleanElements()
    elements.searchInput.value = '';
})