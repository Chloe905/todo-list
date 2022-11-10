const { mongo } = require('mongoose')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const todoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  done: {
    type: boolean
  }
})

module.exports = mongoose.model('Todo', todoSchema)