const db = require('./db');

module.exports = {
  addArticltypedetail: async (...articltypedetail) => await db.q('insert into articltypedetail (type_router,type_zhname,type_enname,enable) values (?,?,?,?)', articltypedetail),
  queryArticltypedetailByTypeid: async typeid => await db.q('select * from articltypedetail where typeid = ? ', [typeid])
}