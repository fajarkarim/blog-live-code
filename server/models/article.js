var mongoose = require('mongoose')

var articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
  author: String
})

var Article = mongoose.model('Article', articleSchema)

module.exports = Article
