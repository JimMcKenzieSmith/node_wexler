"use strict"
const http = require('http')
const httpStatus = require('http-status-codes')

const getJSONString = obj => {
  return JSON.stringify(obj,null,2)
}

const port = 3000

const app = http.createServer()
/*"request" is an event listener. The server is listening for an event. */
app.on("request", (req, res) => {
  let body = []
  req.on("data", (bodyData) => {
    body.push(bodyData)
  })
  req.on("end", () => {
    body = Buffer.concat(body).toString()
    console.log(`Request body contents: ${body}`)
  })

  console.log(`Method: ${getJSONString(req.method)}`)
  console.log(`Url: ${getJSONString(req.url)}`)
  //console.log(`Headers: ${getJSONString(req.headers)}`)
  res.writeHead(httpStatus.OK, { 'Content-Type': 'text/html' })

  let message = `'<h1>=Response messge</h1>'`
  res.end(message)
})

app.listen(port)

console.log(`The server has started on port ${port}`)