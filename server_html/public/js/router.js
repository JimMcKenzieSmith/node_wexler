"use strict"

const httpStatus = require('http-status-codes')
const customReadFile = require('./customReadFile')

//const rootUrl = require('../../main')
const htmlContentType = {
  'Content-Type' : 'text/html'
}

const routes = {
  'GET': {
    '/info' : (req, res) => {
      res.writeHead(httpStatus.OK, {'Content-Type' : 'text/html'})
      res.end('This is the info page')
    },
    '/' : (req, res) => {
      res.writeHead(httpStatus.OK, {'Content-Type' : 'text/html'})
      res.end('This is the index page')
    },
    '/index.html' : (req, res) => {
      res.writeHead(httpStatus.OK, {'Content-Type' : 'text/html'})
      customReadFile(`views/${req.url}`, res)
    }
  },
  'POST' : {
    
  }
}

exports.handle = (req, res) => {
  try {
    if(routes[req.method][req.url]){
      routes[req.method][req.url](req, res)
    } else {
      res.writeHead(httpStatus.NOT_FOUND, htmlContentType)
      res.end('File not found!')
    }
  } catch (error) {
    console.log(error)
  }
}