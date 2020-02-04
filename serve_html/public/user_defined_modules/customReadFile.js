const fs = require('fs')
const sendErrorResponse = require('./sendErrorReponse')

const customReadFile = (file_path, res) => {
  if(fs.existsSync(file_path)) {
    fs.readFile(file_path, (error, data) => {
      if(error) {
        console.log(error)
        sendErrorResponse(res)
        return
      }
      res.write(data)
      res.end()
    })
  } else {
    //if file does not exists
    sendErrorResponse(res)
  }
}

module.exports = customReadFile