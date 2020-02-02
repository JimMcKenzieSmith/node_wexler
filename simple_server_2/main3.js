const http = require('http')
const httpStatus = require('http-status-codes')

const ulrMap = {
  '/info': '<p>This is the info page</p>',
  '/contact': '<p>This is the contact page</p>',
  '/recipes': '<p>Welcome to the recipe page</p>'
}

const port = 3000

const app = http.createServer()

app.on('request', (req, res) => {
  //Incoming info from the req object
  console.log(req.url)
  res.writeHead(httpStatus.OK, { 'Content-Type': 'text/html' })

  if (ulrMap[req.url]) {
    //res.end(ulrMap[req.url])
    setTimeout(() => res.end(ulrMap[req.url]), 2000) //setting a delay to mimick a delay in response.
  } else {
    //res.end('<p>Welcome</p>')
    setTimeout(() => res.end('<p>Welcome</p>'), 1000)
  }
})

app.listen(port)
console.log(`Running on ${port}`)