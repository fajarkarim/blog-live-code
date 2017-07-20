var express = require('express');
var router = express.Router();
var articlesCtrl = require('../controllers/articlesCtrl')
var auth = require('../helpers/auth')

/* GET users listing. */
router.get('/', articlesCtrl.getAll)
router.get('/author', articlesCtrl.getByAuthor)
router.get('/category', articlesCtrl.getByCategory)
router.get('/:id', auth.user, articlesCtrl.getOne)
router.post('/', auth.user, articlesCtrl.create)
router.put('/:id', auth.user, articlesCtrl.update)
router.delete('/:id', auth.user, articlesCtrl.remove)

module.exports = router;
