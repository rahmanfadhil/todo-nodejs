const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

// -----------------------------------------------------------------------------

const app = express()

app.use(cors())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

// -----------------------------------------------------------------------------

mongoose.connect(process.env.DB_URI || 'mongodb://localhost/todos')

// -----------------------------------------------------------------------------

app.use('/todos', require('./routes/todos'))
app.use('/users', require('./routes/users'))

// -----------------------------------------------------------------------------

const PORT = process.env.PORT || 3000

app.listen(PORT, err => {
  if (err) return console.log(err)
  console.log(`listening to localhost:${PORT}`)
})
