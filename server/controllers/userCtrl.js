
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
var User = require('../models/user')

var SECRET = process.env.SECRET

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
  console.log(`secret nya ${SECRET}`);
  User.findOne({ username: req.body.username}, (err, user) => {
    if (user) {
      console.log(`usernya ${user}`);
      let pass = bcrypt.compareSync(req.body.password, user.password)
      console.log(`pass dihash ${pass}`);
      if (pass) {
        let token = jwt.sign({
          username: user.username
        }, SECRET)
        res.send(token)
      } else {
        res.send('your password is wrong')
      }
    } else {
      res.send('user not found')
    }
  })

}

var getAll = function () {

}

var getOne = function () {

}

var create = function () {

}

var update = function () {

}

var remove = function () {

}

module.exports = {
  register,
  login
}
