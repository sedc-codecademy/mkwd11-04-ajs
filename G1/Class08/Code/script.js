const posts = [
    {title: "Post One", body : "This is post One"},
    {title: "Post Two", body : "This is post Two"}
];

function getPosts(){
    setTimeout(() => {
        posts.forEach(post => console.log(post.title))
    }, 1000)
}

// getPosts();

// function createPost(post){
//     setTimeout(() => {
//     posts.push(post)
// }, 2000)
// }

// createPost({title: "Post Three", body : "This is post Three"});
// getPosts();

//callback is used to execute function after pushing in the array and use after
function createPost(post, callback){
    setTimeout(() => {
    posts.push(post)
    callback(); // has One secund 
}, 2000)
}

// createPost({title: "Post Three", body : "This is post Three"}, getPosts);


// -------------------- Promises ------------------

function first(workTime){
    return new Promise((resolve, reject) => {
        if(workTime >= 5000) {
            reject("This is taking too long. Please try again");
        }
        // else is not necessery
        setTimeout(() => {
            let person = {
                name: "Petre",
                lastName: "Arsovski",
                age: 19
            }
            resolve(person)
        }, workTime)
    })
}

function second(){
    console.log("Second thing")
}

// first(2000)
//     .then(response => {
//         // working with the response of the function
//         console.log(response);
//         second();
//     })
//     .catch(error => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log("Finnaly has been invoked");
//     })


// Handling AJAX calls with a promise

function getDocuments(){
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json",
            success: response => {
                resolve(JSON.parse(response))
            },
            error: err => {
                reject(err)
            }
        })
    })
}

function showDocuments(documents) {
    //validation
    // if(!documents && typeof(documents) != "object"){
    //     console.log("error");
    // }
    //else
    // print some data for all documents
    documents.forEach(doc => {
        console.log(`${doc.name}.${doc.type} (${doc.size}mb)`);
    })
}

// getDocuments()
//     .then(data => {
//         console.log("We got the documents!")
//         showDocuments(data);
//     })
//     .catch(error => console.log(error))



// Halding AJAX call with multiple promises

function getImportantDocuments(documents) {
    let importantDocuments = documents.filter(doc => doc.important);

    return new Promise((resolve,reject) => {
        if(importantDocuments === 0){
            reject("There are no important documents")
        }

        setTimeout(() => {
            resolve(importantDocuments)
        }, 3000)
    })
}

// getDocuments()
//     .then(data => {
//         console.log("We got the important documents")
//         showDocuments(data)
//         return getImportantDocuments(data);
//     })
//     .then(data => {
//         console.log("--------------important documents")
//         showDocuments(data)
//     })
//     .catch(err => console.log(err.message))

    //using FETCH

fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json")
    .then(response => response.json())
    .then(response => {
        console.log("We got the documents")
        return getImportantDocuments(response)
    })
    .then(response => showDocuments(response))
    .catch(err => console.log(err))
    .finally(() => console.log("DONE"));


    // ------------------------------ ASYNC/AWAIT------------------
    // this is just syntatic sugar, it works with promises also


    function Document(name){
        this.name = name;
    }

    async function getDataAsync() {
        let response = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json")
        let data = await response.json();

        console.log("this is the data", data);
        let importantData = await getImportantDocuments(data);
        console.log("this is filtered data of important documents", importantData)
    }

    try{
        getDataAsync();
    }
    catch(error) {
        console.log(error)
    }
