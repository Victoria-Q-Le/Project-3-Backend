const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: {type: String, required: true, unique: true},
  password: String
})

module.exports = User = mongoose.model('users', UserSchema)
