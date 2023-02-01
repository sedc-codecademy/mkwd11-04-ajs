function simulateCallback(success, error) {
    let num = Math.random() * 10;

    if(num > 5) {
        success();
    }else {
        error();
    }
}

//simulateCallback(() => console.log("Success"), () => console.log("Error"));

function simulatePromise() {
    let num = Math.random() * 10;

    return new Promise((resolve, reject) => {
        if(num > 5) {
            setTimeout(() => {
                resolve("Promise resolved");
            }, 2000);
        } else {
            reject("Promise rejected");
        }
    });
}

// simulatePromise()
//     .then(response => console.log(response))
//     .catch(error => console.log(error));

// console.log(simulatePromise());

let data = [{
    name: "Trajan",
    lastName: "Stevkovski"
},
{
    name: "Todor",
    lastName: "Pelivanov"
},
{
    name: "Bob",
    lastName: "Bobski"
}];

function getData() {
    let num = Math.random() * 10;

    return new Promise((resolve, reject) => {
        if(num > 7) {
            setTimeout(() => {
                reject("Something has happend. Please try again!");
            }, 2000);
        }else {
            setTimeout(() => {
                resolve(data);
            }, 3000);
        }
    });
}

// getData()
//     .then(response => 
//         response.filter(x => x.name.startsWith('T')).forEach(z => console.log(z)))
//     .catch(error => console.log(error));


let url = "https://raw.githubusercontent.com/sedc-codecademy/mkwd11-04-ajs/main/G3/Class08/documents.json";

function getDocumentsWithCallback(successCallback, errorCallback) {
        $.ajax({
            url: "https://raw.githubusercontent.com/sedc-codecademy/mkwd11-04-ajs/main/G3/Class08/documents.json",
            success: function(response) {
                let data = JSON.parse(response);
                successCallback(data);
            },
            error: error => {
                errorCallback(error);
            }
        });
}

function getDocuments() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://raw.githubusercontent.com/sedc-codecademy/mkwd11-04-ajs/main/G3/Class08/documents.json",
            success: function(response) {
                let data = JSON.parse(response);
                resolve(data);
            },
            error: error => {
                reject(error);
            }
        })
    });
}


// getDocumentsWithCallback(function(data) {

// }, function(error) {

// });

// getDocuments()
//     .then(response => {
//         console.log(response);
//         showDocuments(response);
//     })
//     .catch(error => {
//         console.log(error);
//     })

function showDocuments(documents) {
    documents.forEach(document => {
        console.log(`${document.name}.${document.type} (${document.size} mb)`);
    });
}

function checkDocuments(documents) {
    if(!documents || typeof(documents) !== "object") {
        throw new Error("Problem with documents");
    }

    if(documents.length === 0) {
        throw new Error("There is no documents");
    }
}

function getImportantDocuments(documents) {
    let importantDocuments = documents.filter(x => x.important);

    return new Promise((resolve, reject) => {
        if(importantDocuments.length === 0) {
            reject("There are no important documents!");
        }

        setTimeout(() => {
            resolve(importantDocuments);
        }, 3000);
    });
}


getDocuments()
    .then(response => {
        checkDocuments(response);
        return getImportantDocuments(response);
    })
    .then(data => showDocuments(data))
    .catch(error => console.log(error))
    .finally(() => console.log("Everything is done at: " + new Date()));


function simulateThrowError() {
    let num = Math.random() * 10;

    if(num > 7) {
        throw new Error("Something bad has happend!");
    }

    return "Everything is ok";
}

// try {
//     console.log(simulateThrowError());
// } catch (error) {
//     console.log(error);
// }