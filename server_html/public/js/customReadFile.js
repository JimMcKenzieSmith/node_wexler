"use strict"

const fs = require('fs')

exports.customReadFile = (file, res) => {
  fs.readFile(file, (errors ,data) => {
    if(errors) {
      res.end('Error reading the file')
    } else {
      res.end(data)
    }
  })
}

