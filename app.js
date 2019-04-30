const Koa = require('koa');
const routers = require('./server/routes/index');
const bodyparser = require('koa-bodyparser');
const cors = require('koa-cors');
const app=new Koa();

app.use(bodyparser());
app.use(cors());

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
