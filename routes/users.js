const express = require('express')
const router = express.Router()

const Users = require('../models/Users')

router.get('/', (req, res) => {
  Users.find()
  .then((users) => res.send({ text: "success", data: users }))
  .catch((err) => res.send({ text: 'error', err: err }))
})

router.get('/search', (req, res) => {
  Users.find({ name: { $regex: new RegExp(req.query.name, "i") } })
  .then((users) => res.send({ text: "success", data: users }))
  .catch((err) => res.send({ text: 'error', err: err }))
})

router.post('/', (req, res) => {
  const new_user = new Users({
    name: req.body.name,
    email: req.body.email,
    date_created: req.body.date_created
  }).save()
  .then((user) => res.send({ text: "success", data: user }))
  .catch((err) => res.send({ text: "add new user", err: err }))
})

router.get('/:id', (req, res) => {
  Users.findOne({ _id: req.params.id })
  .then((user) => res.send({ text: "success", data: user }))
  .catch((err) => res.send({ text: 'error', err: err }))
})

router.put('/:id', (req, res) => {
  Users.update({ _id: req.params.id }, {
    name: req.body.name,
    email: req.body.email
  })
  .then((user) => res.send({ text: "success", data: user }))
  .catch((err) => res.send({ text: 'error', err: err }))
})

router.delete('/:id', (req, res) => {
  Users.remove()
  .then((user) => res.send({ text: "success", data: user }))
  .catch((err) => res.send({ text: 'error', err: err }))
})


module.exports = router
