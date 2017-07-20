
var jwt = require('jsonwebtoken')

var user = function (req, res, next) {
  var token = req.headers.token
  if (!token) {
    res.send('Please login first')
  }
  let decode = jwt.verify(token, process.env.SECRET)
  if (decode) {
    next()
  } else {
    res.status(401).send(`u r not authorized`)
  }
}

module.exports = { user }
