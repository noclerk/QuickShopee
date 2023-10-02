var createError = require('http-errors');
var express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter = require('./routes/category');
var subCategoryRouter = require('./routes/subcategory');
var productRouter = require('./routes/product');
var bannersRouter = require('./routes/banners');
var adminRouter = require('./routes/adminlogin');
var productlistRouter = require('./routes/productlist');
var productPicturesRouter = require('./routes/productpictures');
var userInterfaceRouter = require('./routes/userinterface');
var smsRouter = require('./routes/smsapi');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/category', categoryRouter);
app.use('/subcategory', subCategoryRouter);
app.use('/product', productRouter);
app.use('/banners', bannersRouter);
app.use('/admin', adminRouter);
app.use('/productlist',productlistRouter);
app.use('/productpictures',productPicturesRouter);
app.use('/userinterface',userInterfaceRouter);
app.use('/sms',smsRouter);


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
