const http = require('http')
const httpStatus = require('http-status-codes')
const fs = require('fs')

const port = 3000;

const urlRoutes = {
  '/': 'views/index.html'
}

const app = http.createServer((req, res) => {
  if (urlRoutes[req.url]) {
    fs.readFile(urlRoutes[req.url], (error, data) => {
      if (error) {
        res.writeHead(httpStatus.NOT_FOUND, { 'Content-Type': 'text/html' })
        res.end('<h1>Page not found</h1>')
      } else {
        res.writeHead(httpStatus.OK, { 'Content-Type': 'text/html' })
        res.write(data)
        res.end()
      }
    })
  }
})

app.listen(port)