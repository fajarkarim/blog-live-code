var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/userCtrl')
var auth = require('../helpers/auth')

/* GET users listing. */
router.post('/register', userCtrl.register)
router.post('/login', userCtrl.login)
router.get('/', userCtrl.getAll)
router.delete('/:id', userCtrl.remove)

module.exports = router;
