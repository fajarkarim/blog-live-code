
var jwt = require('jsonwebtoken')
var SECRET = 'akubukansiapa2'

var user = function (req, res, next) {
  var token = req.headers.token
  if (!token) {
    res.send('Please login first')
  }
  let decode = jwt.verify(token, SECRET)
  if (decode) {
    next()
  } else {
    res.status(401).send(`u r not authorized`)
  }
}

module.exports = { user }
