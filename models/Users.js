const mongoose = require('mongoose');
const Schema = mongoose.Schema

module.exports = mongoose.model('Users', Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  todos: [{
    type: Schema.Types.ObjectId,
    ref: 'Todos'
  }]
}))
