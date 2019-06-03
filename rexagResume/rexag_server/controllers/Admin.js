const Router = require('koa-router');
let router = new Router();
let DB = require('../models/db');
let articltypedetail = require('../models/articltypedetail');


// 获取header分类
router.get('/getclassify', async ctx => {
  let articletypes = await DB.articletype.quersyArticletype();
  if (articletypes.length > 0) {
    let data = JSON.stringify(articletypes);
    ctx.body = { code: '1', typelist: data };
    return;
  };
  ctx.body = { code: '0', msg: '未查询到有效分类!' };
});

// 获取 详细分类
router.get('/specific', async ctx => {
  let { id } = ctx.query;
  if ((id - 0) > 0) {
    let data = await DB.articltypedetail.queryArticltypedetailByTypeid(id);
    if (data.length > 0) {
      let typedetails = JSON.stringify(data);
      ctx.body = { code: '1', typedetails: typedetails };
      return;
    }
  };
  ctx.body = { code: '0', msg: '未查询到有效分类!' };
});
module.exports = router;