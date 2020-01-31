'use strict'
const messageModule = require('./messages')
const mathFunctionsModule = require('./addNum')
//require is a property of the module object.
console.log(typeof messageModule) //Object

messageModule.messages.forEach(message => console.log(message))

const sum = mathFunctionsModule.mathFunctions.sum(10,10)

console.log(sum)

const subtract = mathFunctionsModule.mathFunctions.subtract(11,10)

console.log(subtract)