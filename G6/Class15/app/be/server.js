const express = require('express')

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");

    next()
})

app.get('/', (req, res) => {
    console.log('GET method has been called')
    res.send(JSON.stringify({ message: 'Get method called' }))
})

app.post('/', (req, res) => {
    console.log("POST method called")
    res.send(JSON.stringify({message: 'POST Method called'}))
})

app.put('/', (req, res) => {
    console.log("PUT method called")
    res.send(JSON.stringify({message: 'PUT Method called'}))
})

app.delete('/', (req, res) => {
    console.log('DELETE method called')
    res.send(JSON.stringify({message: 'DELETE method called'}))
})

app.listen(PORT, () => {
    console.log(`Server started listening on http://localhost:${PORT}`)
})