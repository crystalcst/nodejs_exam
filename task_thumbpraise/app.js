const koa = require('koa');
const convert = require('koa-convert');
const serve = require('koa-static');
const router = require('koa-simple-router');
const co = require('co');
const render = require('koa-swig');
const path = require('path');
const initController = require('./controllers/initController');
const Config = require('./config/config');

var app = new koa();

//配置静态文件
app.use(convert(serve(Config.get('staticDir'))));

//模板引擎配置
app.context.render = co.wrap(render({
  root: Config.get('viewDir'),
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html'
}));


//路由相关配置
initController.init(app,router);

app.listen(Config.get('port'), () => {
    console.log('Server is started!');
});

module.exports = app;
