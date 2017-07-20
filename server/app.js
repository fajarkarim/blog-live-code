var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors')
var mongoose = require('mongoose')
var index = require('./routes/index');
var users = require('./routes/users');
require('dotenv').config()
var articles = require('./routes/articles');

var url = "mongodb://localhost/fajar-blog-live"
mongoose.connect(url, err => {
  err ? console.log('cant connect database') : console.log('database connected');;
})

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.use('/', index);
app.use('/api/users', users);
app.use('/api/articles', articles)


module.exports = app;
