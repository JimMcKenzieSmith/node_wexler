'use strict'
const http = require('http')
const httpStatus = require('http-status-codes')

const port = 3000

const app = http.createServer((req,res) => {
  console.log('Received an incoming request!')
  res.writeHead(httpStatus.OK, {'Content-Type':'text/html'})

  let responseMessage = '<h1>Hello, Universe!</h1>'
  res.write(responseMessage)
  console.log(res)
  res.end()
  console.log(`Sent a response : ${responseMessage}`)
})

app.listen(port)
console.log(`The server started on port ${port}`)
