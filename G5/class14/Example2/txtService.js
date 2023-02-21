const fs = require('fs')
const file = "test.txt"

// const addText = text => {
//     fs.writeFileSync(file, text, err => {
//         if(err) {
//             return console.log(err)
//         } 
//         console.log('The file was saved!')
//     })
// }


// const appendText = text => {
//     fs.appendFileSync(file, text, err => {
//         if(err) {
//             return console.log(err)
//         }
//         console.log('The file was saved!')
//     })
// },

// const readText = () => {
//    return fs.readFileSync(file, {encoding: 'utf-8'})
// }

module.exports = {
    addText: text => {
        fs.writeFileSync(file, text, err => {
            if(err) {
                return console.log(err)
            } 
            console.log('The file was saved!')
        })
    },
    appendText: text => {
        fs.appendFileSync(file, text, err => {
            if(err) {
                return console.log(err)
            }
            console.log('The file was saved!')
        })
    },
    readText: () => {
        return fs.readFileSync(file, {encoding: 'utf-8'})
     }
}