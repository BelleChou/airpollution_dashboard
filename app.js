const App = require('koa'),
  router = require('koa-router')(),
  json = require('koa-json'),
  logger = require('koa-logger'),
  auth = require('./server/routes/auth.js'); // 引入auth
const app=new App()

app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx,next) => {
  var start = new Date();
  await next();
  console.log(`---------koa starts at ${start}`);

});

router.use('/auth', auth.routes()); // 挂载到koa-router上，同时会让所有的auth的请求路径前面加上'/auth'的请求路径。
app.use(router.routes()); // 将路由规则挂载到Koa上。


// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');
