var express = require('express');
var router = express.Router();
var articlesCtrl = require('../controllers/articlesCtrl')
var auth = require('../helpers/auth')

/* GET users listing. */
router.get('/', articlesCtrl.getAll)
router.post('/', articlesCtrl.create)
router.get('/:id', articlesCtrl.getOne)

module.exports = router;
