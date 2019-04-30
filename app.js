const Koa = require('koa');
var routers = require('./server/routes/index');
const json = require('koa-json');
const logger = require('koa-logger');
 
const app=new Koa()

app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx,next) => {
  var start = new Date();
  await next();
  console.log(`---------koa starts at ${start}`);

});


app.use(routers.routes()).use(routers.allowedMethods());


// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');
