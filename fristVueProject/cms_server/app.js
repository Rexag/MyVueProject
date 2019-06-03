const koa = require('koa');
const Router = require('koa-router');
const fs = require('fs');
const path = require('path');
let app = new koa();

let router = new Router();

app.use(router.routes());


router.get('/getlunbo', async (ctx, next) => {

  ctx.response.set('Access-Control-Allow-Origin','*');

  ctx.response.set('Access-Control-Allow-Origin',ctx.request.header.origin);
  ctx.response.set("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
  ctx.response.set("Access-Control-Allow-Headers",'token');
  ctx.response.set("Access-Control-Allow-Credentials",true);

  let imgs = [
    {url:path.resolve('./static/img/1.jpg'),imgname:'1.jpg'},
    {url:path.resolve('./static/img/2.jpg'),imgname:'2.jpg'},
    {url:path.resolve('./static/img/3.jpg'),imgname:'3.jpg'},
    {url:path.resolve('./static/img/4.jpg'),imgname:'4.jpg'},
    {url:path.resolve('./static/img/5.jpg'),imgname:'5.jpg'},
    {url:path.resolve('./static/img/6.jpg'),imgname:'6.jpg'}    
  ];
  ctx.body = imgs;
})



app.listen('9609', (ctx) => {
  console.log("服务器启动在9609");
});