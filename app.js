#!/usr/bin/env node
require('dotenv').config()

const http = require('http')
const fs = require('fs')
const EventEmitter = require('events')

const port = process.env.PORT

const content = 'Some changed content.'
const myURL = new URL('/store', 'https://example.org/')
const eventEmitter = new EventEmitter()

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

eventEmitter.on('start', (start, end) => {
  console.log(`started from ${start} and ended at ${end}`)
})

eventEmitter.emit('start', 1, 100)


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
