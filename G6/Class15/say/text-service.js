const fs = require('fs');
const file = 'text.txt';

module.exports = {
    addText: function (data) {
        fs.writeFileSync(file, data, err => console.log('Error', err))
    },
    appendText: function (data) {
        fs.appendFileSync(file, data, err => console.log('Error', err))
    },
    readText: function () {
        return fs.readFileSync(file, { encoding: 'utf-8' })
    }
}