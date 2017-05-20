const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const index = require('./routes/index');
const students = require('./routes/students');

const app = express();
const runAsApi = JSON.parse(process.env.NODE_ENV);

// connection to db (run server => mongod.exe)
if (runAsApi) {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/my_db');
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', index);
app.use('/students', students);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(runAsApi);
console.log(`listening on localhost:${(runAsApi) ? 3001 : 3000}/`);

module.exports = app;
