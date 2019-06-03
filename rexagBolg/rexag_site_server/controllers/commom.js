const Router = require('koa-router');
let router = new Router();
let DB = require('../module/db');
const captchapng = require('captchapng2');
const Token = require('../token/Token');
const fs = require('fs');
const crypto = require('crypto')
let { uploadDir } = require('../config');
const makeSalt = () => Math.round((new Date().valueOf() * Math.random())) + '';//获取加密的盐 salt
const encryptPass = (pass, salt) => crypto.createHash('md5').update(pass + salt).digest('hex');// 获取加密后的 md5


const regPhone = 11 && /^((13|14|15|17|18|16|19)[0-9]{1}\d{8})$/
const regEmail = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/


// 获取 一级菜单分类
router.get('/firstmenu', async ctx => {
  let articletypes = await DB.articletype.quersyArticletype();
  if (articletypes.length > 0) {
    let data = JSON.stringify(articletypes);
    return ctx.body = { code: '1', typelist: data }
  }
  ctx.body = { code: '0', msg: '未查询到有效分类!' }
});

// 获取 二级菜单分类
router.get('/secondmenu', async ctx => {
  let { id } = ctx.query;
  if ((id - 0) > 0) {
    let data = await DB.articltypedetail.queryArticltypedetailByTypeid(id);
    if (data.length > 0) {
      let typedetails = JSON.stringify(data);
      return ctx.body = { code: '1', typedetails: typedetails }
    }
  }
  ctx.body = { code: '0', msg: '未查询到有效分类!' }
});

// 图片保存
router.post('/saveImg', async (ctx) => {
  const { file } = ctx.request.files;
  if (!file) {
    return ctx.body = { imgUrl: "" };
  }
  const reader = fs.createReadStream(file.path);
  let imgName = `${Date.now()}_${file.name}`;
  let filePath = uploadDir + `/${imgName}`;
  // 创建可写流
  const upStream = fs.createWriteStream(filePath);
  // 可读流通过管道写入可写流
  reader.pipe(upStream);
  return ctx.body = { imgUrl: "http://127.0.0.1:9699/files/" + imgName, };
});

//检查用户名
router.post('/checkUsername', async ctx => {
  let { username } = ctx.request.body;
  if (username) {
    let users = await DB.user.queryUserByUsername(username);
    if (users.length === 0) {
      return ctx.body = { code: '1', msg: '可以注册' };
    }
    return ctx.body = { code: '0', msg: '用户名已经存在' };
  }
  ctx.body = { code: '0', msg: '未接收到username' };
});

//检查邮箱
router.post('/checkEmail', async ctx => {
  let { email } = ctx.request.body;
  if (email) {
    let users = await DB.user.queryUserByUserEmail(email);
    if (users.length === 0) {
      ctx.body = { code: '1', msg: '可以注册' };
      return;
    }
    ctx.body = { code: '0', msg: '该邮箱已被注册' };
    return;
  }
  ctx.body = { code: '0', msg: '未接收到email' };
});

//检查手机号
router.post('/checkPhone', async ctx => {
  let { phone } = ctx.request.body;
  if (phone) {
    let users = await DB.user.queryUserByUserPhone(phone);
    if (users.length === 0) {
      return ctx.body = { code: '1', msg: '可以注册' };
    }
    return ctx.body = { code: '0', msg: '该手机号已被注册' };
  }
  ctx.body = { code: '0', msg: '未接收到phone' };
});

//进行注册动作
router.post('/register', async ctx => {
  let { username, password, confirmpwd, phone, email, sex, vCode, pCode, mCode } = ctx.request.body;
  // 比较验证码v_code
  if (vCode !== ctx.session.v_code) {
    return ctx.body = { code: '0', msg: '验证码不正确!' };
  }
  if (password !== confirmpwd) {
    return ctx.body = { code: '0', msg: '两次输入的密码不正确!' };
  }
  // 判断用户名是否存在
  let users = await DB.user.queryUserByUsername(username);
  // 判断是否可以注册
  if (users.length !== 0) {
    return ctx.body = { code: '0', msg: '用户名已经存在!' };
  }
  try {
    let salt = makeSalt();
    let hash_password = encryptPass(password, salt);
    let result = await DB.user.insertUser(username, salt, hash_password, sex, phone, email);
    if (result.affectedRows === 1) {
      return ctx.body = { code: '1', msg: '注册用户成功' }
    }
    return ctx.body = { code: '0', msg: '存在ID冲突' + result.message };
  } catch (error) {
    return ctx.body = { code: '0', msg: '注册时异常' + error.message };
  }
});

//进行登录
router.post('/login', async ctx => {
  let { username, password } = ctx.request.body;
  let users;
  if (regEmail.test(username)) {
    users = await DB.user.queryUserByUserEmail(username);
  } else if (regPhone.test(username)) {
    users = await DB.user.queryUserByUserPhone(username);
  } else {
    users = await DB.user.queryUserByUsername(username);
  }
  if (users.length === 0) {
    return ctx.body = { code: '0', msg: '用户名或密码不正确!!!' };
  }
  let user = users[0];
  let salt = user.salt;
  let hash_password = encryptPass(password, salt);
  if (user.userpwd === hash_password) {
    let statusResult = await DB.user.changeUserStatus(1, user.id);
    if (statusResult.affectedRows === 1) {
      let tk = Token.CreateToken(user.id)
      let result = {
        id: user.id,
        nickname: user.nickname,
        username: user.username,
        sex: user.sex,
        phone: user.phone,
        email: user.email,
        headpic: user.headpic,
        autograph: user.autograph
      }
      return ctx.body = { code: '1', msg: '登录成功!!!', result: JSON.stringify(result), token: tk };
    } else {
      return ctx.body = { code: '0', msg: '登录失败!!!' };
    }
  }
  return ctx.body = { code: '0', msg: '用户名或密码不正确!!!' };
});

//获取验证码
router.get('/Captcha', async ctx => {
  let rand = parseInt(Math.random() * 9000 + 1000);
  ctx.session.v_code = rand + '';
  let png = new captchapng(80, 30, rand);
  ctx.body = png.getBuffer();
});


// 获取 首页文章列表
router.get('/articleListForHome', async ctx => {
  let data = await DB.artacil.queryArticlListForHome();
  if (data.length > 0) {
    ConvertTime(data)
    let newData = JSON.stringify(data);
    ctx.body = { code: '1', msg: '获取文章列表成功', result: newData };
    return;
  }
  ctx.body = { code: '0', msg: '未查询到可用文章列表!' };
});

// 获取 一级菜单文章列表
router.get('/user/articlelistForFirstmenu', async ctx => {
  let { firstmenu } = ctx.request.body
  let data = await DB.artacil.queryArticlListByTwo(firstmenu);
  if (data.length > 0) {
    ConvertTime(data)
    let newData = JSON.stringify(data);
    ctx.body = { code: '1', msg: '获取文章列表成功', result: newData };
    return;
  }
  ctx.body = { code: '0', msg: '未查询到可用文章列表!' };
});

// 获取 二级菜单文章列表
router.get('/user/articlelistForSecondmenu', async ctx => {
  let { firstmenu, secondmenu } = ctx.request.body
  let data = await DB.artacil.queryArticlListByThree(firstmenu, secondmenu);
  if (data.length > 0) {
    ConvertTime(data)
    let newData = JSON.stringify(data);
    ctx.body = { code: '1', msg: '获取文章列表成功', result: newData };
    return;
  }
  ctx.body = { code: '0', msg: '未查询到可用文章列表!' };
});

module.exports = router;
