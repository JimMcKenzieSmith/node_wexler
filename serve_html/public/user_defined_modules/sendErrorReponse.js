const httpStatus = require('../../node_modules/http-status-codes')

const sendErrorResponse = (res) => {
  res.writeHead(httpStatus.NOT_FOUND, { 'Content-Type': 'text/html' })
  res.write('<h1>Page not found</h1>')
  res.end()
}

module.exports = sendErrorResponse