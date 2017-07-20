
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
var User = require('../models/user')
require('dotenv').config()

var SECRET = 'akubukansiapa2'

var saltRounds = 10

var register = function (req, res) {
  User.find({ username : req.body.username}, (err, user) => {
    if (user.hasOwnProperty('password')) {
      res.send('User already exist')
    } else {
      let salt = bcrypt.genSaltSync(saltRounds);
      let hash = bcrypt.hashSync(req.body.password, salt)
      let user = new User({
        username: req.body.username,
        password: hash
      })
      user.save((err, user) => {
        err ? res.status(500).send(err) : res.send(user)
      })
    }
  })
}

var login = function (req, res) {
  let info = {}
  User.findOne({ username: req.body.username}, (err, user) => {
    if (user) {
      let pass = bcrypt.compareSync(req.body.password, user.password)
      if (pass) {
        let token = jwt.sign({
          username: user.username
        }, SECRET)
        info.token = token
        info.username = user.username
        res.send(info)
      } else {
        res.send('your password is wrong')
      }
    } else {
      res.send('user not found')
    }
  })
}

var getAll = function (req, res) {
  User.find({}, (err, users) => {
    err ? res.status(500).send(err) : res.send(users)
  })
}

var getOne = function () {

}

var create = function () {

}

var update = function () {

}

var remove = function (req, res) {
  User.findByIdAndRemove(req.params.id, (err, user) => {
    err ? res.status(500).send(err) : res.send(user)
  })
}

module.exports = {
  register,
  login,
  getAll,
  remove
}
