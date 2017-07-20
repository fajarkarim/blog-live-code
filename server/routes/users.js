var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/userCtrl')
var auth = require('../helpers/auth')

/* GET users listing. */
router.post('/register', userCtrl.register)
router.post('/login', userCtrl.login)

module.exports = router;
