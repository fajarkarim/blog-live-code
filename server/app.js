var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors')
var mongoose = require('mongoose')
var index = require('./routes/index');
var users = require('./routes/users');
var articles = require('./routes/articles');

var url = "mongodb://localhost/fajar-blog-live"
mongoose.connect(url, err => {
  err ? console.log('cant connect database') : console.log('connected');;
})

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.use('/', index);
app.use('/api/users', users);
// app.use('/api/articles', articles)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
