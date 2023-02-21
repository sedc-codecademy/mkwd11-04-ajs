const http = require(
  "http"
)

const hostname = "127.0.0.1";
const port = 3001;

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "text/html")
  response.end("<h1>Hello world</h1>")

})

server.listen(port,hostname, () => {
  console.log("Server is up and running...")
})