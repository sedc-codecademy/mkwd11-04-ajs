let countryInput = document.getElementById("countryInput");
let getDataBtn = document.getElementById("getData");

function getCountryByCode(code){
  return fetch("https://restcountries.com/v2/alpha/" + code).then(response => response.json());
}
async function getBorderingCountries(bordering){
  console.log("Neighbours:");
  for (let code of bordering) {
    let country = await getCountryByCode(code);
    console.log(country);
  }
}
getDataBtn.addEventListener("click", (e)=>{
  e.preventDefault();
    console.log("Country:");
    getCountryByCode(countryInput.value).then(response => {
      console.log(response);
      getBorderingCountries(response.borders);
      });
  })