const db = require('./db');

module.exports = {
  addArticletype: async (...articletype) => await db.q('insert into articletype (type_router,type_zhname,type_enname,enable) values (?,?,?,?)', articletype),
  quersyArticletype: async () => await db.q('select * from articletype', []),
  queryArticletypeById: async id => await db.q('select * from articletype where id = ? ', [id]),
  queryArticletypeByType: async type => await db.q('select * from articletype where type_enname = ? ', [type]),
}