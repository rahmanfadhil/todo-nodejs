const express = require('express')
const bodyparser = require('body-parser')

const app = express()

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

let todoList = [
  { todo: "Learn express", done: false },
  { todo: "Learn nodejs", done: true }
]

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/todo', (req, res) => {
  res.send(todoList)
})

app.post('/todo', (req, res) => {
  let newTodo = req.body
  todoList.push(newTodo)
  res.send("New data added successfuly!")
})

app.put('/todo/:id', (req, res) => {
  todoList[req.params.id] = req.body
  res.send("This data is edited successfuly")
})


app.delete('/todo/:id', (req, res) => {
  todoList.splice(req.params.id, 1)
  res.send("This data is deleted successfuly")
})

app.listen(3000, err => {
  if (err) return console.log(err)
  console.log('listening to localhost:3000')
})
