const koa = require('koa');
const Router = require('koa-router');
const path = require('path');
const static = require('koa-static');
const render = require('koa-art-template');

let app = new koa();

let router = new Router();

render(app, {
  root: path.resolve('./'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
});


//处理静态资源
app.use(static(path.resolve('./')));

router.get('/', async ctx => {
  ctx.render('index');
});

router.get('/moveHome', async ctx => {
  ctx.render('index');
});
router.get('/moveInfo', async ctx => {
  ctx.render('index');
});
router.get('/moveSkills', async ctx => {
  ctx.render('index');
});
router.get('/moveExp', async ctx => {
  ctx.render('index');
});
router.get('/moveWorks', async ctx => {
  ctx.render('index');
});
router.get('/moveContact', async ctx => {
  ctx.render('index');
});


router.get('/pcHome', async ctx => {
  ctx.render('index');
});
router.get('/pcContact', async ctx => {
  ctx.render('index');
});
router.get('/pcExp', async ctx => {
  ctx.render('index');
});
router.get('/pcInfo', async ctx => {
  ctx.render('index');
});
router.get('/pcSkills', async ctx => {
  ctx.render('index');
});
router.get('/pcWorks', async ctx => {
  ctx.render('index');
});


app.use(router.routes());
app.use(router.allowedMethods());

//开启服务
app.listen(9609, () => {
  console.log("服务器启动在9609端口");
});