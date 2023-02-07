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

const first = (isOk) => {
    return new Promise((resolve, reject) => {
        if (isOk) {
            resolve('ok')
        } else {
            reject('not ok')
        }
    })
}

first(true)
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        console.log('The end')
    })