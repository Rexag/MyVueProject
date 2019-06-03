const Koa = require('koa')
const app = new Koa();
const CommomRouter = require('./controllers/commom');
const VerifyRouter = require('./controllers/verify');
const koaBody = require('koa-body');
const Render = require('koa-art-template');
const Static = require('koa-static');
const Cors = require('koa2-cors');

// const Token = require('./token/Token');
const session = require('koa-session');
const IO = require('koa-socket');
const io = new IO();
let { appPort, viewsDir, staticDir } = require('./config');
//socketio 开始
io.attach(app);
// //进行socket链接
io.on('connection', () => {
  io.broadcast('connResult', '连接成功!');
});
//模板渲染
Render(app, {
  root: viewsDir,
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production',
  cache: false,
});

//处理静态资源
app.use(Static(staticDir));



// 文件上传中间件
app.use(koaBody({
  jsonLimit: 1024 * 1024 * 5,
  formLimit: 1024 * 1024 * 5,
  textLimit: 1024 * 1024 * 5,
  multipart: true, // 解析FormData数据
  formidable: {
    maxFileSize: 200 * 1024 * 1024    // 设置上传文件大小最大限制，默认2M
  }
}));

// 允许跨域
app.use(Cors({
  origin: 'http://127.0.0.1:8080',
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

// 以 rexag 进行签名加密
app.keys = ['rexag'];

app.use(session({
  store: {
    storage: {},
    set (key, session) {
      this.storage[key] = session;
    },
    get (key) {
      return this.storage[key];
    },
    destroy (key) {
      delete this.storage[key];
    }
  }
}, app));

// 进行token验证
// app.use(Token.CheckToken)

// 路由使用
app.use(CommomRouter.routes());
app.use(VerifyRouter.routes());

//处理 405 方法不匹配     501   方法未实现
app.use(CommomRouter.allowedMethods());
app.use(VerifyRouter.allowedMethods());


//开启服务 
app.listen(appPort, () => {
  console.log(`服务器启动在${appPort}端口`);
});