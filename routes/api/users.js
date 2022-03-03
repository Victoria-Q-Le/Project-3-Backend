const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = reqire('jsonwebtoken')
const MONGODB_URI = process.env.MONGODB_URI;


//Input Validation///
const validateRegisterInput = require('../../validation/register.js')
const validateLoginInput = require('../../validation/login.js')

////Load User model////
const User = require('../../models/users.js')
