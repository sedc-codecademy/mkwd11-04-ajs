console.log('***connected***')
// let wrapper = document.getElementById('wrapper')
// let title1 = document.createElement('h1')
// let title2 = document.createElement('h2')
// title1.innerText = 'Hey'
// title2.innerText = 'There'
// wrapper.appendChild(title2)
// wrapper.appendChild(title1)

// wrapper.innerHTML = title.innerHTML


//HTTP  Hypertext Transfer Protocol
//AJAX  Asynchcronous JavaScript and XML
//XML Extensible Markup Language
//HTML Hypertext Markup Language
//JSON JavaScript Object Notation (текст кој содржи структурирани податоци = string)

// let someObject = {
//     trainer: "Trainer name",
//     assistant: "Assistant name",
//     students: [
//       "Bob",
//       "Samantha",
//       "Chris",
//       "Jill",
//       "Greg"
//     ],
//     academy: "Code"
//   };

//     const myJson = '{"trainer": "Monika", "assistant": "Angel", "students": ["Bob", "Samantha", "Chris", "Jill", "Greg"], "academy": "Code"}'

//   let jsObject = JSON.parse(myJson)
//   console.log('Our js object:', jsObject)
//   console.log('First student:', jsObject.students[0])

// //   JSON.parse()
// //   JSON.stringify()


// //AJAX with Plain JS - XMLHttpRequest Object

// let btn = document.getElementById('requestBtn')
// btn.addEventListener('click', function(){
//     let xhr = new XMLHttpRequest()
//     xhr.onload = function() {
//         if(xhr.status >=200 && xhr.status < 300) {
//             console.log('The request succseded!')
//             console.log('Type of succesful response', typeof(xhr.response))
//             let parsedResult = JSON.parse(xhr.response)
//             console.log('Type of succesful response', typeof(parsedResult))

//             console.log('Result:', parsedResult)
//         } else {
//             console.log('The request failed!')
//             console.log('Failed response', xhr.response)
//             console.log('Type of failed response', typeof(xhr.response))
//         }
//     }
//     xhr.open('GET', 'https://raw.githubusercontent.com/sedc-codecademy/mkwd11-04-ajs/main/G5/class03/students.json')
//     xhr.send() //send request to server
// })

// //Making AJAX calls with fetch
// // fetch(url)
// // .then(function)
// // .then(function)
// // .catch(function)

// console.log('FETCH EXAMPLE')
// fetch('https://raw.githubusercontent.com/sedc-codecademy/mkwd11-04-ajs/main/G5/class03/students.json') //promise
//     .then(function(res) {
//         console.log('RESPONSE', res)
//         return res.json()
//     })
//     .then(function(data){ //data parsedJSON in JS Object
//         console.log('Data:', data)
//     })
//     .catch(function(err){
//         console.log('Error:', err)
//     })


//   Exercise 1
// Create a button When the button is clicked, get the data from a given url with an AJAX call.
// Print the name of the academy in an h1 tag.
// Print all student names in an unordered list.
// URL: https://raw.githubusercontent.com/sedc-codecademy/mkwd11-04-ajs/main/G5/class03/students.json
// NOTE: You need to parse this data before using it.

let fetchBtn = document.getElementById('fetchBtn')
let dataOutside;

fetchBtn.addEventListener('click', function(){
    let academyTitle = document.createElement('h1')
    let container = document.getElementById('container')
    let unorderedList = document.createElement('ul')
    container.appendChild(academyTitle)
    container.appendChild(unorderedList)
     fetch('https://raw.githubusercontent.com/sedc-codecademy/mkwd11-04-ajs/main/G5/class03/students.json')
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            dataOutside = data
            console.log('Data:', data)
            academyTitle.innerText = data.academy
            let students = data.students
            for (let student of students) {
                let listItem = document.createElement('li')
                listItem.innerText = student
                unorderedList.appendChild(listItem)
            }
        })
        .catch(function(err){
            console.log('Error:', err)
        })

        
})




