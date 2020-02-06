const express = require('express')
const httpStatus = require('http-status-codes')

const port = 3000

const app = express()

app.get('/', (req,res) =>{
  console.log(req.body)
  console.log(req.url)
  res.send('This is an express server')
}).listen(port, () => {
  console.log(`Server up and running in port ${port}`)
})