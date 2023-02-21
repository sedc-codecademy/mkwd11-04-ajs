const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    console.log(request);

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});