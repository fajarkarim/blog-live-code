var Article = require('../models/article')

var getAll = function (req, res) {
  Article.find({}, (err, articles) => {
    err ? res.status(500).send(err) : res.send(articles)
  })
}

var getOne = function (req, res) {
  Article.findById(req.params.id, (err, article) => {
    err ? res.status(500).send(err) : res.send(article)
  })
}

var getByAuthor = function (req, res) {

}

var getByCategory = function (req, res) {

}

var create = function (req, res) {
  let article = new Article ({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.body.author
  })
  article.save((err, created) => {
    err ? res.status(500).send(err) : res.send(created)
  })
}

var update = function (req, res) {

}

var remove = function (req, res) {

}

module.exports = {
  getAll,
  getOne,
  create
}
