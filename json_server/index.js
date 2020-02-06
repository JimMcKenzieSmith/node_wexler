'use strict'

const http = require("http")
const fs = require("fs")
const httpStatus = require("http-status-codes")

const port = 3000

const app = http.createServer((req, res) => {
  if(req.url === '/') {
    fs.readFile('data.JSON', 'utf-8', (error, data) => {
      if(data) {
        res.writeHead(httpStatus.OK, { 'Content-Type' : 'application/json'})
        res.end(data)
      } else {
        res.writeHead(httpStatus.NOT_FOUND, { 'Content-Type' : 'text/html'})
        res.end(error)
      }
    })
  } else {
    res.writeHead(httpStatus.NOT_FOUND, { 'Content-Type' : 'text/html'})
    res.end('Json file not found')
  }
})

app.listen(port)