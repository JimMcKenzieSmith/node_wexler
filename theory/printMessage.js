'use strict'
const messageModule = require('./messages')
//require is a property of the module object.
console.log(typeof messageModule) //Object

messageModule.messages.forEach(message => console.log(message))
