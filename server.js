// 启动文件
const Koa = require('koa');
const Router = require('koa-router');

const server = new Koa();
const router = new Router();

router.get('/getUser', async ctx => {
  ctx.body = {
    username: 'Katte2',
    age: 102
  }
});

server.use(router.routes());

server.listen(process.env.PORT || 9000, () => console.log('http://0.0.0.0:9000/getUser'))