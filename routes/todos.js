const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send({ text: "show all todos"})
})

router.post('/', (req, res) => {
  res.send({ text: "add new todo" })
})

router.get('/:id', (req, res) => {
  res.send({ text: `show todo of ${req.params.id}`})
})

router.put('/:id', (req, res) => {
  res.send({ text: `update todo of ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
  res.send({ text: `delete todo of ${req.params.id}`})
})

router.get('/search', (req, res) => {
  res.send({ text: `search todos: ${req.query.todo}`})
})

module.exports = router
