const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userName: {type:String, unique: true, required: true},
  password: String
})

const Users = mongoose.model('User', userSchema)

module.exports = Users
