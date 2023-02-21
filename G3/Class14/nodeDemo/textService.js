// const fs = require('fs'); // file system
// const fileName = 'testFile.txt';

// function writeFile(text) {
//     fs.writeFile(fileName, text, function(param) {
//         if(param) {
//             console.log("ERROR!");
//             return;
//         }
//     });
// }

// function readFile() {
//     console.log(fs
//         .readFileSync(fileName, { encoding: 'utf-8' })
//         .toString());
// }

// function appendFile(text) {
//     fs.appendFile(fileName, text, function(param) {
//         if(param) {
//             console.log("ERROR!");
//             return;
//         }
//     })
// }

// module.exports = {
//     writeFile,
//     readFile,
//     appendFile
// }


const fs = require('fs');
const fileName = "test.txt";
module.exports = {
    addText: function(text) {
        fs.writeFile(fileName, text, function(param) {
            if(param) {
                console.log("ERROR!");
                return;
            }
        });
    },
    appendText: function(text) {
        fs.appendFile(fileName, text, function(param) {
            if(param) {
                console.log("ERROR!");
                return;
            }
        })
    },
    readText: function () {
        return fs.readFileSync(fileName, { encoding: 'utf-8' });
    },
    readJson: function(nameOfTheJson) {
        let jsonContent = 
            fs.readFileSync(nameOfTheJson, { encoding: 'utf-8' });
        let jsObj = JSON.parse(jsonContent);
        return jsObj;
    }
}