const Router = require('koa-router');
let router = new Router();
let DB = require('../module/db');
const Token = require('../token/Token');
const Global_res = require('../Global_Res')

// 获取 个人文章列表
router.get('/user/articlelistForFirstmenu', async ctx => {
  let result = await Token.CheckToken(ctx)
  let { firstmenu } = ctx.request.body
  if (result === '000') {
    return ctx.body = { code: '0', msg: 'token验证失败' }
  }
  let data = await DB.artacil.queryArticlListByTwo(result.id, firstmenu);
  if (data.length > 0) {
    ConvertTime(data)
    let typedetails = JSON.stringify(data);
    ctx.body = { code: '1', msg: '获取文章列表成功', token: result.token, result: typedetails };
    return;
  }
  ctx.body = { code: '0', msg: '未查询到可用文章列表!' };
});

//保存文章
router.post('/user/saveArticle', async ctx => {
  let result = await Token.CheckToken(ctx)
  if (result === '000') {
    return ctx.body = { code: '0', msg: 'token验证失败' }
  }
  let { author, userid, title, firstmenu, secondmenu, content, is_original, is_public, version, original_link } = ctx.request.body;
  let data = await DB.artacil.insertArtacil(author, userid, title, firstmenu, secondmenu, content, is_original, is_public, version, original_link)
  if (data.affectedRows === 1) {
    return ctx.body = { code: '1', msg: '上传文章成功', token: result.token };
  }
  ctx.body = { code: '0', msg: '上传文章失败' }
});

// 刷新Token
router.get('/user/refreshToken', async (ctx) => {
  let checkResult = await Token.CheckToken(ctx)
  if (checkResult === '000') {
    return ctx.body = { code: '0', msg: 'Token验证失败' }
  }
  ctx.body = { code: '1', msg: 'Token刷新成功', token: checkResult.token }
});

// 退出登录
router.get('/user/logout', async ctx => {
  let result = await changeUserStates(ctx, 0)
  if (result === '111') {
    return ctx.body = { code: '001', msg: '退出成功' }
  }
  if (result === '001') {
    return ctx.body = { code: '000', msg: 'token验证失败' }
  }
  if (result === '002') {
    return ctx.body = { code: '000', msg: '更新退出状态失败' }
  }
  if (result === '000') {
    return ctx.body = { code: '000', msg: '退出时异常' }
  }
});

// 隐身
router.get('/user/Invisible', async ctx => {
  let result = await changeUserStates(ctx, 2)
  if (result === '111') {
    return ctx.body = { code: '001', msg: '隐身成功' }
  }
  if (result === '001') {
    return ctx.body = { code: '000', msg: 'token验证失败' }
  }
  if (result === '002') {
    return ctx.body = { code: '000', msg: '更新隐身状态失败' }
  }
  if (result === '000') {
    return ctx.body = { code: '000', msg: '隐身时异常' }
  }
});

// 修改密码
router.post('/user/changePwd', async (ctx) => {
  let checkResult = await Token.CheckToken(ctx)
  if (checkResult === '000') {
    return ctx.body = { code: '0', msg: 'Token验证失败' }
  }
  let { password, confirmpwd, phoneoremail, vCode, pmCode } = ctx.request.body;
  // pmCode 邮箱或者手机的验证码
  // phoneoremail  此值留着判断修改密码的验证方式是邮箱还是手机
  if (vCode !== ctx.session.v_code) {
    return ctx.body = { code: '0', msg: '验证码不正确!' };
  }
  if (password !== confirmpwd) {
    return ctx.body = { code: '0', msg: '两次输入的密码不正确!' };
  }
  try {
    let result = await DB.user.changepwd(password, checkResult.id);
    if (result.affectedRows === 1) {
      return ctx.body = { code: '1', msg: '修改密码成功', token: checkResult.token }
    }
  } catch (error) {
    return ctx.body = { code: '0', msg: '修改密码时异常，原因是： ' + error.message }
  }
})

async function changeUserStates (ctx, states) {
  try {
    let checkResult = await Token.CheckToken(ctx)
    if (checkResult === '000') {
      return '001'
    } else {
      let statusResult = await DB.user.changeUserStatus(states, checkResult.id);
      if (statusResult.affectedRows === 1) {
        return '111'
      } else {
        return '002'
      }
    }
  } catch (err) {
    return '000'
  }
}


async function ConvertTime (arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let createtime = arr[i].createtime
    let updatetime = arr[i].updatetime
    if (createtime) {
      arr[i].createtime = Global_res.FormatDate(createtime, "yyyy-MM-dd hh:mm:ss")
    }
    if (updatetime) {
      arr[i].updatetime = Global_res.FormatDate(updatetime, "yyyy-MM-dd hh:mm:ss")
    }
  }
  console.log(arr)
  return arr
}

module.exports = router;
