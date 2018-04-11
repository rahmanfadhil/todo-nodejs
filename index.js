const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(3000, err => {
  if (err) return console.log(err)
  console.log('listening to localhost:3000')
})
