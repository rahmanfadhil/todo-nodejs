const express = require('express')
const router = express.Router()

const Todos = require('../models/Todos')
const Users = require('../models/Users')

router.get('/', (req, res) => {
  Todos.find().populate('author')
  .then((todos) => res.send({ text: "success", data: todos }))
  .catch((err) => res.send({ text: 'error', err: err }))
})

router.get('/search', (req, res) => {
  Todos.find({ title: { $regex: new RegExp(req.query.title, "i") } })
  .then((todos) => res.send({ text: "success", data: todos }))
  .catch((err) => res.send({ text: 'error', err: err }))
})

router.post('/', (req, res) => {
  new Todos({
    title: req.body.title,
    text: req.body.text,
    author: req.body.author
  }).save()
  .then((todo) => {
    Users.update({ _id: todo.author }, { $push: { todos: todo._id } })
    .then((data) => {
      res.send({ text: "success", data: todo })
    }).catch((err) => res.send({ text: 'error', err: err }))
  })
  .catch((err) => res.send({ text: "error", err: err }))
})

router.get('/:id', (req, res) => {
  Todos.findOne({ _id: req.params.id })
  .then((todo) => res.send({ text: "success", data: todo }))
  .catch((err) => res.send({ text: 'error', err: err }))
})

router.put('/:id', (req, res) => {
  Todos.update({ _id: req.params.id }, req.body)
  .then((todo) => {
    res.send({ text: "success", data: todo })
  })
  .catch((err) => res.send({ text: 'error', err: err }))
})

router.delete('/:id', (req, res) => {
  Todos.remove()
  .then((todo) => res.send({ text: "success", data: todo }))
  .catch((err) => res.send({ text: 'error', err: err }))
})


module.exports = router
