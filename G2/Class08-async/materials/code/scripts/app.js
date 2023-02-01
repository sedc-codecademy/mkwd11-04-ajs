function first(workTime) {
  return new Promise((resolve, reject) => {
    if (workTime <= 0) {
      reject("This work time is too short to work with !!! REJECTED");
    }
    setTimeout(() => {
      resolve("The time is right, this promise is RESOLVED !!!");
    }, workTime);
  });
}

function second(number, obraboteniPodatoci) {
  console.log("This is the second thing in the function SECOND " + number);
  console.log(obraboteniPodatoci);
}

console.log(first(0));
console.log(first(1000));
second(1, first(1000));

// This code here inside is asynchronous
first(1000)
  .then((data) => {
    // console.log(data);
    // this function here, second! Waits fot the data to be resolved and then it will be used.
    second(3, data);
  })
  .catch((error) => {
    console.log(error);
  });

second(2, first(1000));

// CALLBACK HELL
// Never do this !!!
function complex() {
  setTimeout(function () {
    console.log("first");
    setTimeout(function () {
      console.log("second");
      setTimeout(function () {
        console.log("third");
        setTimeout(function () {
          console.log("fourth");
          setTimeout(function () {
            console.log("fifth");
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}

// complex();

function showDocuments(documents) {
  if (!documents && typeof documents != "object") {
    throw new Error("Problem with the documents bate");
  }
  if (documents.length === 0) {
    throw new Error("No documents !!!");
  }
  documents.forEach((doc) => {
    console.log(`${doc.name}.${doc.type} - [${doc.size}mb]`);
  });
}

function getDocumentsJQuery() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json",
      success: (response) => {
        resolve(JSON.parse(response));
      },
      error: (err) => {
        reject(err);
      },
    });
  });
}

function getDocumentsFetch() {
  return new Promise((resolve, reject) => {
    fetch(
      "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json"
    )
      .then((result) => {
        resolve(result.json());
      })
      .catch((error) => {
        reject(error + " fetch error message");
      });
  });
}

// getDocumentsJQuery()
//   .then((data) => {
//     console.log(
//       "THIS IS AN ASYNC OPERATION IN THE .THEN SECTION RESOLVING THE getDocumentsJQuery PROMISE."
//     );
//     showDocuments(data);
//   })
//   .catch((error) => {
//     console.log(
//       error + " from inside the catch of the getDocumentsJQuery function."
//     );
//   });

// getDocumentsFetch()
//   .then((data) => {
//     console.log("We got the data and it's RESOLVED from the fetch !!!");
// //This showDocuments can not start if the data above is not resolved !!! 
//     showDocuments(data);
//   })
//   .catch((err) => {
//     console.log(err.message + " Error from the catch");
//   })
//   .finally(() => {
//     console.log("Finally the end, of this boring class !!!!!!!!!!!!!!");
//   });

console.log("=======================================================");

// How do we do it at work !

async function getAllDocuments() {
  // I make this function async, why ? Because I know it will need time to get the data from the backend/API, why ? Because GETTING data takes time. So, i make the function to be async and not interfere with the flow of the program. What does that mean ? The functions and logic that doesn't need the data from the fetch can EXECUTE when it wants, but everything that need this data from the fetch needs to wait fo it. And that data is resolving itself in another thread, long story short this code and the other code that doesn't depend on this fetch, the execute at the same time, just the code from the fetch takes more time to finish.
  let response = await fetch(
    "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json"
  );
  // here and above, I tell it to wait, because it takes a little bit more time to finish, but it has to wait, because somewhere, some function needs this data, but FRIST IT HAS TO FINISH, WHY ? Think of the example with the СУНГЕР that me and Ivan made !!!
  let result = await response.json();

  // When everything is finished, the result returns and that result is the data from the fetch.
  return result;
}

async function printDocsAsync() {
  // IF I WANT TO USE THE ASYNC FUNCTION FROM ABOVE, I GOT TO USE IT IN ANOTHER ASYNC FUNCTION. WHY? BECAUSE THE await keyword, is only available inside a function that is has the async word in the definition !!!
    try {
        console.log("Inside the async function");
        // so here, i can use the await keyword only if the function is async, but it has to async, why? Because the fetch is in ana async function, because it needs a little bit more time to be resolved, what is resolved ? The data.
        // The fetch returns a promise, that's why it has to resolve the data, or reject it...
        let docs = await getAllDocuments();
        docs.forEach((doc) => {
          console.log(`${doc.name}.${doc.type} - [${doc.size}mb]`);
        });
    }
    catch(error){
        console.log(error + " ERROR IN THE TRY/CATCH BLOCK");
    }
    // I can write the fetch call with the .then .then .catch thing. But here I can't do that, that's why I use a try/catch block.
    // I will write everything that is going to be RESOLVED AND GOOD/GREAT/EXPECTED in the try block.
    // I will write everything that is going to happen if things go WRONG OR REJECTED in the catch block.
}

printDocsAsync();

console.log(getAllDocuments());

// Пешки
fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json")
.then(response => response.json())
.then(data => showDocuments(data))
.catch(error => console.log(error.message))
.finally(()=> console.log("Everything is done at: " + new Date()));

//Со кола
async function getDataFromFetch(){
  let response = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json");
  let data = await response.json();
  console.log(data);
}

// These two, with the then then, and the await await, are the same things. In the edn they do the same things, but we write them a different way.