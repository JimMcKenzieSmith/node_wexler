const http = require('http')
const httpStatus = require('http-status-codes')
const customReadFile = require('./public/user_defined_modules/customReadFile')
const sendErrorResponse = require('./public/user_defined_modules/sendErrorReponse')
const port = 3000

let app = http.createServer((req, res) => {
  let url = req.url
  if (url.indexOf('.html') !== -1) {//checks to see if the req comes with .html
    res.writeHead(httpStatus.OK, { 'Content-Type': 'text/html' })
    customReadFile(`./views${url}`, res)
  } else if (url.indexOf('.js') !== -1) {
    res.writeHead(httpStatus.OK, { 'Content-Type': 'text/javascript' })
    customReadFile(`./public/js${url}`, res)
  } else if (url.indexOf('.css') !== -1) {
    res.writeHead(httpStatus.OK, { 'Content-Type': 'text/css' })
    customReadFile(`./public/css${url}`, res)
  } else if (url.indexOf('.png') !== -1) {
    res.writeHead(httpStatus.OK, { 'Content-type': 'text/png' })
    customReadFile(`./public/images${url}`, res)
  } else {
    sendErrorResponse(res)
  }

})

app.listen(port)