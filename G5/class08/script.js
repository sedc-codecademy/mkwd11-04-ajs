console.log('We are live')

//5 funkcii
//prva -> zeme veggies od X user
//vtorata -> clean veggies
//treta -> slice veggies
//cetvrta -> cook veggies
//petta -> serve veggies in plate

let getVeggies = (user, nextStep) => {
    console.log(`1. Getting veggies from ${user}`)
    let result1 = 'dirty veggies'
    nextStep(result1)
}

let cleanVeggies = (veg, nextStep) => {
    console.log(`2. Cleaning the ${veg} with water`)
    let result2 = 'cleaned veggies'
    nextStep(result2)
}

let sliceVeggies = (veg, nextStep) => {
    console.log(`3. Slicing the ${veg}`)
    let result3 = 'sliced veggies'
    nextStep(result3)
}

let cookVeggies = (veg, nextStep) => {
    console.log(`4. Cooking the ${veg}`)
    let result4 = 'cooked veggies'
    nextStep(result4)
}

let serveVeggies = (veg, nextStep) => {
    console.log(`5. Serving the ${veg} in a plate`)
    let result5 = '6.Veggies are served'
    nextStep(result5)
}


//callback hell
//pyramid of doom
// getVeggies('Eleonora', result1 => {
//     cleanVeggies(result1, result2 => {
//         sliceVeggies(result2, result3 => {
//             cookVeggies(result3, result4 => {
//                 serveVeggies(result4, result5 => {
//                     console.log(result5)
//                 })
//             })
//         })
//     })
// })




//Promises - introduced in 2015
//Elegant solution for waiting on some code 
//1. Creating the promises
//2. Handling the promises

//new Prmise(function(resolve, reject) {...}) //Promise accepts an executor function with
//two parametars: resolve and reject

let keepHisWord = false;
// let promise1 = new Promise(function(resolve, reject) {
//     if(keepHisWord) {
//         resolve('The man keeps his promise')
//     } else {
//         reject('The man doesnt keep his promise')
//     }
// })

// console.log('PROMISE 1', promise1)

//Stages of every promise: pending, fullfield, rejected
//While pending - result is undefined


// let promise2 = new Promise(function(resolve, reject) {
//     setTimeout(function () {
//         if(keepHisWord) {
//             resolve('The man keeps his promise')
//         } else {
//             reject('The man doesnt keep his promise')
//         } 
//     }, 5000)
// })

// console.log('PROMISE 2', promise2)

// let promise3 = new Promise(function(resolve, reject) {
//     setTimeout(function () {
//         if(keepHisWord) {
//             resolve('The man keeps his promise')
//         } else {
//             reject('The man doesnt keep his promise')
//         } 
//     }, 5000)
// })

// console.log('PROMISE 3', promise3)


//handler methods
// .then() 
// .catch()
// .finally()

let momsSavings = 200000;
let priceOfPhone = 60000;

//crating the promise
let momsPromise = (savings, phone) => {
 return new Promise((resolve, reject) => {
    if(savings > phone) {
        resolve({brand: 'iphone', model: '7x'})
    } else {
        reject('We do not have enough savings. Let us save some more money!')
    }
})
}

// console.log('Moms promise', momsPromise)

//handling the promise
// momsPromise(momsSavings, priceOfPhone)
// .then(value => console.log(`Hurraaaay I got this phone as a gift: ${value.brand} ${value.model} `))
// .catch(error => console.log(`Mom couldn't buy me a phone because: ${error}`))
// .finally(() => console.log('Irrespective of whether my mom bought me the phone or not, I still love her'))



//Handling AJAX callas with a promise
// let url = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json"

let getDocuments = url => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
}

let showDocuments = documents => {
    if(!documents && typeof(documents) != 'object'){
        throw new Error('Problem with documents');
    }
    if(documents.length === 0) {
        throw new Error('There are no documents ')
    }
    documents.forEach(doc => {
        console.log(`${doc.name}.${doc.type} ${doc.size}mb`)
    });
}

// getDocuments(url).then(data => {
//     console.log('We got the documents!')
//     showDocuments(data)
// }).catch(err => console.log(err))


let getImportantDocuments = documents => {
    let importantDocuments = documents.filter(doc => doc.important)
    return new Promise((resolve, reject) => {
        if(importantDocuments.length === 0) {
            reject('There are no imporant documents')
        }
        setTimeout(() => {
            resolve(importantDocuments)
        }, 3000)
    })
}


// getDocuments(url)
// .then(data => {
//     console.log('We got ALL the documents')
//     return getImportantDocuments(data)
// })
// .then(importantData => showDocuments(importantData))
// .catch(err => console.log(err))

// let url = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json"
// fetch(url) //prv promise json podatoci
// .then(res => res.json()) //vtor promise od json vo JavaScript data
// .then(data => getImportantDocuments(data)) //tret promise manipulacija na data
// .then(importantData => showDocuments(importantData)) // -||-
// .catch(err => console.log(err))
// .finally(() => console.log(`Everything is done at ${new Date()}`))


// Async/await

let urlDocs = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json"

async function getDataFromFetch(url) {
    let response = await fetch(url)
    let data = await response.json()
    console.log('DATA', data)
}

// getDataFromFetch(urlDocs)

let getDataFromFetchArrow = async url => {
    let response = await fetch(url)
    let data = await response.json()
    console.log('DATA', data)
}


async function showImportantDocuments(url) {
    let startTime = new Date().getTime()
    let allDocuments = await getDocuments(url)
    let importantDocuments = await getImportantDocuments(allDocuments)
    showDocuments(importantDocuments)
    console.log(`Done in ${new Date().getTime() - startTime}`)
}

showImportantDocuments(urlDocs)
console.log('This does not wait for the async function to execute')








