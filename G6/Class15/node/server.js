const http = require('http')
const PORT = 3000;
const HOSTNAME = '127.0.0.1'

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Request-Method", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    res.setHeader("Access-Control-Allow-Headers", "*");

    console.log('Server pinged')

    const animal = {
        name: 'Sparky',
        type: 'dog'
    }

    res.write(JSON.stringify(animal))
    res.end()
})

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server started listening on URL: ${HOSTNAME}:${PORT}`)
})