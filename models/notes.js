const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema ({
  description: String,
  author: String
})

const Notes = mongoose.model('Note', noteSchema)

module.exports = Notes
