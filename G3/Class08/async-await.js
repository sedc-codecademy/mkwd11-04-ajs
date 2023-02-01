// getDocuments()
//     .then(response => {
//         checkDocuments(response);
//         return getImportantDocuments(response);
//     })
//     .then(data => showDocuments(data))
//     .catch(error => console.log(error))

async function getDocuments() {
    let response = await fetch("https://raw.githubusercontent.com/sedc-codecademy/mkwd11-04-ajs/main/G3/Class08/documents.json");
    console.log(response);
    let data = await response.json();

    let importantDocuments = await getImportantDocuments(data);
    console.log(importantDocuments);
}

// try{
//     getDocuments();
// } catch (error) {
//     console.log(error);
// }

function getImportantDocuments(data) {
    let importantDocuments = data.filter(x => x.important);

    return new Promise((resolve, reject) => {
        if(importantDocuments.length === 0) {
            reject("No documents found!");
        }

        resolve(importantDocuments);
    });
}

async function getDocumentsAsync() {
    let promise = await fetch("https://raw.githubusercontent.com/sedc-codecademy/mkwd11-04-ajs/main/G3/Class08/documents.json");
    return await promise.json();
}

async function showDocuments() {
    let document = await getDocumentsAsync();
    console.log(document);
}

// showDocuments();

// let fetchDocuments = async () => {

// }

document.getElementById('btn').addEventListener('click',async function() {
    let document = await getDocumentsAsync();
    let important = await getImportantDocuments(document);
    console.log(important);
});

