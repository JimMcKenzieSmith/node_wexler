const http = require('http')
const fs = require('fs')

const router = require('./public/js/router')

const port = 3000

const app = http.createServer(router.handle)

app.listen(port)
console.log(`Running of port ${port}`)