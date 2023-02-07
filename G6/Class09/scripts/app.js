// Callbacks

// const simple = () => {
//     setTimeout(() => {
//         console.log('First log, waiting for second...')
//         setTimeout(() => {
//             console.log('Second log.')
//         }, 1000)
//     }, 1000)
// }

// simple();

// Complex - CALLBACK HELL

// const complex = () => {
//   setTimeout(() => {
//     console.log("1. First thing, preparing for the second");
//     setTimeout(() => {
//       console.log("2. Second thing, preparing for the third");
//       setTimeout(() => {
//         console.log("3. Third thing, preparing for the forth");
//         setTimeout(() => {
//           console.log("4. Forth thing, preparing for the fifth");
//           setTimeout(() => {
//             console.log("5. Fifth thing, preparing for the Sixth");
//             setTimeout(() => {
//               console.log("6. Sixth and last thing");
//             }, 2000);
//           }, 2000);
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// };

// complex()

// [Promise]
// States:
// 1. Pending
// 2. Fulfilled / Rejected

// const first = (isOk) => {
//     return new Promise((resolve, reject) => {
//         if (isOk) {
//             resolve('ok')
//         } else {
//             reject('not ok')
//         }
//     })
// }

// first(true)
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log('The end')
//     })

//https://raw.githubusercontent.com/sedc-codecademy/mkwd11-04-ajs/main/G6/Class09/data/documents.json

// Example 1

// const getDocuments = () => {
//     return new Promise((resolve, reject) => {
//         fetch(`https://raw.githubusercontent.com/sedc-codecademy/mkwd11-04-ajs/main/G6/Class09/data/documents.json`)
//             .then(response => {
//                 if (response.ok) {
//                     return response.json()
//                 } else {
//                     reject('Documents fetching failed.')
//                     // throw new Error('')
//                 }                
//             })
//             .then(documents => {
//                 resolve(documents)
//             })
//             .catch(error => {
//                 reject(error)
//             })
//     })
// }

// const showDocuments = (documents) => {
//     if (!documents || !Array.isArray(documents)) {
//         throw new Error('There is a problem with the documents.')
//     }

//     if (!documents.length) {
//         throw new Error('There are no documents.')
//     }

//     documents.forEach(document => {
//         console.log(`${document.name}.${document.type} ${document.size}MB`)
//     });
// }

// getDocuments()
//     .then(documents => {
//         showDocuments(documents)
//     })
//     .catch(error => console.log(error))


// Example 2

// const getDocuments = () => {
//     return new Promise((resolve, reject) => {
//         fetch(`https://raw.githubusercontent.com/sedc-codecademy/mkwd11-04-ajs/main/G6/Class09/data/documents.json`)
//             .then(response => {
//                 if (response.ok) {
//                     return response.json()
//                 } else {
//                     reject('Documents fetching failed.')
//                 }                
//             })
//             .then(documents => {
//                 resolve(documents)
//             })
//             .catch(error => {
//                 reject(error)
//             })
//     })
// }

// const showDocuments = (documents) => {
//     documents.forEach(document => {
//         console.log(`${document.name}.${document.type} ${document.size}MB`)
//     });
// }

// const getImportantDocuments = (documents) => {
//     return documents.filter(document => document.important)
// }

// const checkDocuments = (documents) => {
//     if (!documents || !Array.isArray(documents)) {
//         throw new Error('There is a problem with the documents.')
//     }

//     if (!documents.length) {
//         throw new Error('There are no documents.')
//     }
// }

// getDocuments()
//     .then(documents => {
//         checkDocuments(documents)
//         const importantDocuments = getImportantDocuments(documents)
//         showDocuments(importantDocuments)
//     })
//     .catch(error => console.log(error))

// Async / Await

const getDocuments = () => {
    return new Promise((resolve, reject) => {
        fetch(`https://raw.githubusercontent.com/sedc-codecademy/mkwd11-04-ajs/main/G6/Class09/data/documents.json`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    reject('Documents fetching failed.')
                }                
            })
            .then(documents => {
                resolve(documents)
            })
            .catch(error => {
                reject(error)
            })
    })
}

const showDocuments = (documents) => {
    documents.forEach(document => {
        console.log(`${document.name}.${document.type} ${document.size}MB`)
    });
}

const getImportantDocuments = (documents) => {
    return documents.filter(document => document.important)
}

const checkDocuments = (documents) => {
    if (!documents || !Array.isArray(documents)) {
        throw new Error('There is a problem with the documents.')
    }

    if (!documents.length) {
        throw new Error('There are no documents.')
    }
}

getDocuments()
    .then(documents => {
        checkDocuments(documents)
        const importantDocuments = getImportantDocuments(documents)
        showDocuments(importantDocuments)
    })
    .catch(error => console.log(error))