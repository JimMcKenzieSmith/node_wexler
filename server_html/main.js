const http = require('http')
const fs = require('fs')
console.log(http)
const router = require('./public/js/router')
const customReadFile = require('./public/js/customReadFile')
console.log(router)
console.log(customReadFile)
const port = 3000

const app = http.createServer(router.handle)

app.listen(port)
console.log(`Running of port ${port}`)