var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//引入数据库的配置文件
var setting = require('./setting');
//引入数据库操作实例
var db = require('./model/db');
//添加路由文件
var routes = require('./routes/index');

var app = express();//实例化应用程序

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//请求必须经过以下几个中间件
app.use(logger('dev'));//打印日志
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//将app传递给路由函数使用
routes(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');//创建一个错误对象
  err.status = 404;
  next(err);
});

// error handler 错误处理
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//添加监听
app.listen(4000,function () {
    console.log('发射发射!!!')
})
module.exports = app;
