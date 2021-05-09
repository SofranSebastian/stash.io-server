var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors');

var indexRouter = require('./routes/index.js');
var coinmarketRouter = require('./routes/coinmarket.js')

const axios = require("axios");

var app = express();
app.use(cors());


var config = {
  method: 'get',
  url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=5',
  headers: {
    'X-CMC_PRO_API_KEY': 'a7331374-5263-4a18-a0eb-cd632cd25600',
    'Cookie': '__cfduid=dd1c8a215752b15d7a2894618492626001620341984'
  },
};

app.get( '/',(req, res) => {
      axios(config).then(function (response) {
            dataArr = response.data
            res.send(dataArr)
          }
      )
          .catch(function (error) {
            console.log(error);
          })
      ;
    }
)


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', coinmarketRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
