const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const Users = require('../models/users.js')


users.get('/', (req,res) => {
  Users.find({}, (err,foundUsers) => {
    res.json(foundUsers)
  })
})

users.post('/', (req,res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  Users.create(req.body, (err,createdUser) => {
    res.json(createdUser)
  })
})

module.exports = users
