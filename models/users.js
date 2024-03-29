const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {type: String, required: true, unique: true},
},{
  timestamps: true
})

module.exports = User = mongoose.model('user', UserSchema)
