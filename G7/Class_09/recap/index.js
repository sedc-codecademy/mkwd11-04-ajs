// console.log("Connected");
let printProducts = document.getElementById("printProducts");

let API_URL = "https://fakestoreapi.com/products";
let SWAPI_URL = "https://swapi.dev/api/people";

let fetchProducts = function(url){
  let response = fetch(url);
  console.log("here 1:", response)

  response
  .then(function(result){
    console.log("first then.");
    console.log(result);

    //let readResult = result.text(); //we read the response as stringified json =)
    let readResult = result.json(); //we read the response and directly parsing it for the next step =)
    console.log(readResult); // stringified version of the read response
    return readResult
  })
  // the argument res is the result returned from the previous then
  .then(function(res){
    console.log(res)
    // let parsedResult = JSON.parse(res)
    // console.log(parsedResult) //the data is ready to be used =)

    printFunction(res)
  })


};

// fetchProducts(API_URL);
let printFunction = (productsArray) => {

  productsArray.forEach(function(product){
    printProducts.innerHTML += `<li>${product.title}</li>`
  })
}


let getSwapiVehicles = (apiUrl) => {
  fetch(apiUrl)
    .then((response) => {
      console.log(response);
      let readResponse = response.json();
      console.log(readResponse);
      return readResponse;
    })
    .then((parsedResult) => {
      console.log('Finally the result: ', parsedResult);
      let vehiclesResult = parsedResult.results;
      printVehicles(vehiclesResult)
    })
    .catch((err) => {
      console.log("Error happened: ", err)
    })
    .finally(() => {
      console.log("Finnaly")
    })
}



let printVehicles = (vehicles) => {
  vehicles.forEach((vehicle) => {
    console.log(vehicle.name)
  })
}

// getSwapiVehicles("https://swapi.dev/api/vehicles");

// hey, this is an asynchronous function
let getSwapiVehiclesUsingAsync = async (apiUrl) => {
  try {
    console.log("IN TRY")
    console.log('Here 1')
    let response = await fetch(apiUrl); // dont go to next line until this one is finished
    console.log("Here 2:", response);
    let swapiResult = await response.json();
    console.log("Here 3:");
  
    console.log(swapiResult);
  
    // let nextPageResults = await fetch(swapiResult.next);
    // console.log("next response", nextPageResults );
    // let swapiNextResults = await nextPageResults.json();
    // console.log(swapiNextResults)
    console.log("Here 4:");
    printVehicles(swapiResult.results)
    console.log("Here 5:");
  }
  catch (error) {
    console.log("IN CATCH", error)
  }

  

  
}

getSwapiVehiclesUsingAsync("https://swapi.dev/api/vehicles")