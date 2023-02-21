const countyName = document.getElementById("countyName");
const searchBtn = document.getElementById("searchBtn");
const table = document.getElementsByTagName("table")[0];

const countryUrl = "https://restcountries.com/v3.1/name/";

const getCountry = async (url) => {
  const response = await fetch(url);
  const result = await response.json();

  printCountries(result)
  console.log(result)
};


const printCountries = (countries) => {
  // table.innerHTML = ""
  countries.forEach((country) => {
      addToTable(country);
  })

  table.style.display = "table"

}

const countryName = (country) => {
  return country.capital === undefined ? country.name.common : country.capital[0] 
}

searchBtn.addEventListener("click", () => {
  getCountry(`${countryUrl}${countyName.value}`)

})

function addToTable(country) {
  table.innerHTML += `
        <tr>
          <td>${country.flag}</td>
          <td>${country.name.common}</td>
          <td>${country.population}</td>
          <td>${countryName(country)}</td>
          <td>${country.area}</td>
        </tr>
      `;
}

