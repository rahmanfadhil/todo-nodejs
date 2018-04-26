const mongoose = require('mongoose');
const Schema = mongoose.Schema

module.exports = mongoose.model('Todos', Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  }
}))
