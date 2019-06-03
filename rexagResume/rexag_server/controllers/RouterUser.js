"use strict";

const Router = require('koa-router');
let router = new Router();
let DB = require('../models/db');
const { appPort } = require('../config.js');
const captchapng = require('captchapng2');
const Global_Res = require('../Global_Res');
const CommonStruct = require('../models/CommonStruct');
const Enums = require("../models/Enums");

let regPhone = 11 && /^((13|14|15|17|18|16|19)[0-9]{1}\d{8})$/
let regEmail = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/
// 请求登录页面
router.get('/user/login', async ctx => {
  ctx.render('login', {
    host: 'http://127.0.0.1:' + appPort
  });
});

//请求注册页面
router.get('/user/register', async ctx => {
  ctx.render('register');
});

//检查用户名
router.post('/user/check-username', async ctx => {
  let { username } = ctx.request.body;
  if (username) {
    let users = await DB.user.queryUserByUsername(username);
    if (users.length === 0) {
      ctx.body = { code: '1', msg: '可以注册' };
      return;
    };
    ctx.body = { code: '0', msg: '用户名已经存在' };
  }
  ctx.body = { code: '0', msg: '未接收到username' };
});

//进行注册动作
router.post('/user/do-register', async ctx => {

  let { username, password, confirmpwd, userphone, useremail, sex, vCode, pCode, mCode } = ctx.request.body;
  let createtime = Global_Res.FormatDate(new Date(), "yyyy-MM-dd hh:mm:ss");
  let updatetime = Global_Res.FormatDate(new Date(), "yyyy-MM-dd hh:mm:ss");
  let is_enable = "1";
  let headpic = "../static/img/headpic_male.jpg";
  let autograph = "这家伙很懒，没有设置签名!!!";

  // 比较验证码v_code
  if (vCode !== ctx.session.v_code) {
    ctx.body = { code: '0', msg: '验证码不正确!' };
    return;
  }

  if (password !== confirmpwd) {
    ctx.body = { code: '0', msg: '两次输入的密码不正确!' };
    return;
  }

  // 判断用户名是否存在
  let users = await DB.user.queryUserByUsername(username);
  // 判断是否可以注册
  if (users.length !== 0) {
    ctx.body = { code: '0', msg: '用户名已经存在!' };
    return;
  }
  try {
    let result = await DB.user.insertUser(username, username, password, sex, userphone, useremail, createtime, updatetime, is_enable, headpic, autograph, '101');
    if (result.affectedRows === 1) {
      ctx.body = { code: '1', msg: '注册用户成功' }
      return;
    }
    ctx.body = { code: '0', msg: '存在ID冲突' + result.message };
  } catch (error) {
    console.log(error, '注册失败!');
    ctx.body = { code: '0', msg: '注册时异常' + error.message };
    return;
  }
});

//进行登录
router.post('/user/do-login', async ctx => {
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
    ctx.body = { code: '0', msg: '用户名或密码不正确!!!' };
    return;
  }
  let user = users[0];
  if (user.userpwd === password) {
    ctx.body = { code: '1', msg: '登录成功!!!', result: user };
    ctx.session.user = user;
    return;
  }
  ctx.body = { code: '0', msg: '用户名或密码不正确!!!' };
});

//获取验证码
router.get('/user/Captcha', async ctx => {
  let rand = parseInt(Math.random() * 9000 + 1000);
  ctx.session.v_code = rand + '';
  let png = new captchapng(80, 30, rand);
  ctx.body = png.getBuffer();
});

//退出动作
router.get('/user/logout', async ctx => {
  ctx.session.user = null;
  ctx.redirect('/Login');
});

router.post('/user/changepwd', async (ctx) => {
  let { password, confirmpwd, phoneoremail, vCode, pmCode } = ctx.request.body;

  if (vCode !== ctx.session.v_code) {
    ctx.body = { code: '0', msg: '验证码不正确!' };
    return;
  }

  if (password !== confirmpwd) {
    ctx.body = { code: '0', msg: '两次输入的密码不正确!' };
    return;
  }
  // 根据传入的邮箱或者手机号判断验证码是否正确。待处理
  // if (regEmail.test(phoneoremail)) {
  //   users = await DB.user.queryUserByUserEmail(username);
  // } else if (regPhone.test(username)) {
  //   users = await DB.user.queryUserByUserPhone(username);
  // } else {
  //   ctx.body = { code: '0', msg: '验证码不正确!' };
  // return;
  // }

  try {
    let result = await DB.user.changepwd(password, phoneoremail, phoneoremail);
    if (result.affectedRows === 1) {
      ctx.body = { code: '1', msg: '修改密码成功' }
      return;
    }
  } catch (error) {
    console.log(error.message);
    ctx.body = { code: '0', msg: '修改密码时异常，原因是： ' + error.message }
    return;
  }
})

module.exports = router;