const Koa = require('koa');

// 引入路由
const Admin = require('./controllers/Admin');
const userRouter = require('./controllers/RouterUser');

var bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const render = require('koa-art-template');
const static = require('koa-static');
const IO = require('koa-socket');

//创建服务器
let app = new Koa();
// let io = new IO();
let { appPort, viewsDir, staticDir, uploadDir } = require('./config');

// let chatgroup = DB.chatgroup.querychatgroup();

// global.mySessionStore = {};
// global.group = {};

// function getGroup () {
//   for (let i = 0; i < chatgroup.length; i++) {
//     let groupname = chatgroup[i].groupname;
//     let groupid = chatgroup[i].id;
//     global.group[groupid] = groupname;
//   }
// }

// function findKeyBySocketId (socketid) {
//   for (var key in global.mySessionStore) {
//     let obj = global.mySessionStore[key];
//     if (obj.socketid === socketid) {
//       return key;
//     }
//   }
// }
// function findObjBySocketId (socketid) {
//   for (var temp in global.mySessionStore) {
//     var obj = global.mySessionStore[temp];
//     if (obj.socketid === socketid) {
//       return obj;
//     }
//   }
// }

// //socketio 开始
// io.attach(app);
// //进行socket链接
// io.on('connection', (ctx) => {
//   io.broadcast('connResult', '连接成功!');
// });
// //聊天初始化
// io.on('chat', (ctx) => {
//   console.log(ctx, "ctx");
//   let id = ctx.data;
//   if (global.mySessionStore[id]) {
//     global.mySessionStore[id].socketid = ctx.socket.socket.id;
//   };
//   //服务器返回在线列表
//   io.broadcast('online', {
//     online: global.mySessionStore,
//     group: global.group
//   });
//   //链接断开
//   ctx.socket.on('disconnect', (ctx) => {
//     let socketid = ctx.socket.socket.id;
//     let key = findKeyBySocketId(socketid);
//     delete global.mySessionStore[key];
//     io.broadcast('online', {
//       online: global.mySessionStore,
//       group: global.group
//     });
//   });
// });
// //添加群组
// io.on('addGroup', (ctx) => {
//   let groupname = ctx.data;
//   for (var key in global.group) {
//     if (groupname !== global.group[key]) {
//       global.group[groupname] = groupname;

//       //服务器更新在线列表
//       io.broadcast('online', {
//         online: global.mySessionStore,
//         group: global.group
//       });
//       return;
//     }
//   }
// });
// //加入群组
// io.on('joinGroup', (ctx) => {
//   let groupid = ctx.data.groupid;
//   for (var key in global.group) {
//     if (key === groupid) {
//       ctx.socket.socket.join(groupid);
//       return;
//     }
//   }
// });
// //发送消息
// io.on('sendMsgs', (ctx) => {
//   let { msgs, sendTo, senduser } = ctx.data;
//   let sendSocketid = ctx.socket.socket.id;
//   let { username } = findObjBySocketId(sendSocketid);
//   if (senduser === username) {
//     if (global.group[sendTo] && sendTo != 'all') {
//       app._io.to(sendTo).emit('sendMsgs', `来自 ${global.group[sendTo]} 组的 ${username} 说 : ${msgs} `);
//       return;
//     }
//     if (sendTo == 'all') {
//       io.broadcast('sendMsgs', username + ': ' + msgs);
//       return;
//     }
//     app._io.to(sendTo).emit('sendMsgs', `${username} 说 : ${msgs} `);
//   }
// });

//socketio 结束

//模板渲染
render(app, {
  root: viewsDir,
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production',
  cache: false,
});

//中间件使用 app.use

//处理静态资源
app.use(static(staticDir));

let store = {
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
};

// 以 rexag 进行签名加密
app.keys = ['rexag'];

app.use(session({ store: store }, app));

app.use(async (ctx, next) => {
  ctx.state.user = ctx.session.user;
  //最终全部放行
  await next();
});

app.use(bodyParser());

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', ctx.headers.origin); // 很奇怪的是，使用 * 会出现一些其他问题
  ctx.set('Access-Control-Allow-Headers', 'content-type');
  ctx.set('Access-Control-Allow-Credentials', 'true');
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS,GET,HEAD,PUT,POST,DELETE,PATCH')
  await next();
});

app.use(Admin.routes());
app.use(userRouter.routes());

//处理 405 方法不匹配     501   方法未实现
app.use(Admin.allowedMethods());
app.use(userRouter.allowedMethods());

//中间件使用  结束

//开启服务 
app.listen(appPort, () => {
  console.log(`服务器启动在${appPort}端口`);
});