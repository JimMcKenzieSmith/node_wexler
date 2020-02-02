"use strict"

const http = require('http')
const httpStatus = require('http-status-codes')

const port = 3000

const app = http.createServer()

app.on('request', (req, res) => {
  res.writeHead(httpStatus.OK, { 'Content-Type' : 'text/html'})
  let responseMessage = '<h1>This is the response message from the server</h1>'
  res.end(responseMessage)
})

app.listen(port)

console.log(app.listeners('request'))