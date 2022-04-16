#!/usr/bin/env node
require('dotenv').config()

const http = require('http')
const fs = require('fs')

const port = process.env.PORT

const content = 'Some changed content.'

fs.writeFile('./users/aaron/test.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})

fs.readFile('./users/aaron/test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})


const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hello, world!</h1>')
})

server.listen(port, () => {
  console.log(`server running at port ${port}`)
})



//code
process.env.USER_ID
process.env.USER_KEY
