const http = require('http')

const port = 80

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.write('Hello World\n')
  response.write("<style>background-image:url('https://media1.tenor.com/images/ba044b56a5d6365b0deed758f1265998/tenor.gif?itemid=15356887')</style>")
  response.end('Version: ' + process.env.NODE_VERSION + '\n')
})

server.listen(port)

console.log(`Server running at http://localhost: ${port}`)
