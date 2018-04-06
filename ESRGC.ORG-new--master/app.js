/*Server app config*/

import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import hbs from 'express-hbs';

import routes from './src/server/routes';


var app = express();

// var mongoose = require('mongoose');
//setting up promise for mongoose if used
// mongoose.promise = require('bluebird');
//connect to mongo database
//mongoose.connect(config.database.mongodb);

// view engine setup
app.set('views', path.join(__dirname, '/src/server/views'));
app.set('view engine', 'html');
app.engine('html', hbs.express4({
  partialsDir: __dirname + '/src/server/views/partials',
  defaultLayout: __dirname + '/src/server/views/layout.html',
  extname: 'html',
  //debugging
  beautify: true
}));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

//production mode is read by node environment variable
app.locals.PROD_MODE = 'production' === app.get('env');

if (app.locals.PROD_MODE)
  console.log(`app is running in production`);
else
  console.log(`app is running in ${app.get('env')}`);

export {app};
