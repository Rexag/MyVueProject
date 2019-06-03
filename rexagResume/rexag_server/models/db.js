var mysql = require('mysql');
const { dbConfig } = require('../config.js');
var pool = mysql.createPool(dbConfig);

var db = {};

function query (sql, params) {
  return new Promise((resolve, reject) => {
    //取出链接
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err);
        return;
      }
      connection.query(sql, params, function (error, results, fields) {
        console.log(`${sql}=>${params}`);
        connection.release();
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  });
}

// 用户表
db.user = {
  insertUser: async (...user) => await query('insert into users (nickname,username,userpwd,sex,phone,email,createtime,updatetime,is_enable,headpic,autograph,group_id) values (?,?,?,?,?,?,?,?,?,?,?,?)', user),
  updateUserNickname: async (nickname, id) => await query('update users set nickname = ? where id = ? and is_enable = ?', [nickname, id, '1']),
  updateUserHeadpic: async (headpic, id) => await query('update users set headpic = ? where id = ?', [headpic, id]),
  updateUserAutograph: async (autograph, id) => await query('update users set autograph = ? where id = ?', [autograph, id]),
  changepwd: async (password, email, phone) => await query('update users set userpwd = ? where email = ? or phone = ?', [password, email, phone]),
  is_enableUser: async (id) => await query('update users set is_enable = ? where id = ?', ['0', id]),
  quersyUsers: async () => await query('select * from users where is_enable = ?', ['1']),
  queryUserByUsername: async username => await query('select * from users where is_enable = ? and username = ? ', ['1', username]),
  queryUserByUserEmail: async useremail => await query('select * from users where is_enable = ? and email = ? ', ['1', useremail]),
  queryUserByUserPhone: async userphone => await query('select * from users where is_enable = ? and phone = ? ', ['1', userphone]),
  queryUserDataByUsername: async username => await query('select 1 from users where is_enable = ? and username = ?', ['1', username])
}

// 博客表
db.artacil = {
  insertArtacil: async (...artacil) => await query('insert into artacil (autho,user_id,title,type_id,content_id,create_date,update_by,update_date,version,original_link,is_top,is_original,is_private,is_enable) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)', artacil),
  is_enableArtacil: async (id) => await query('update artacil set is_enable = ? where id = ?', ['0', id]),
  updateArtacilPrivate: async (private, id) => await query('update artacil set is_private = ? where id = ?', [private, id]),
  queryArtacilById: async id => await query('select * from artacil where is_enable = ? and id = ? ', ['1', id]),
  queryArtacilByUserID: async userid => await query('select * from artacil where is_enable = ? and id = ? ', ['1', userid]),
  queryArtacilByTypeID: async typeid => await query('select * from artacil where is_enable = ? and type_id = ? ', ['1', typeid]),
}

// 博客详细表
db.artacilcontent = {
  insertartacilcontent: async (...artacilcontent) => await query('insert into artacilcontent (type_router,type_zhname,type_enname,is_enable) values (?,?,?,?)', artacilcontent),
  is_enableartacilcontent: async (id) => await query('update artacilcontent set is_enable = ? where id = ?', ['0', id]),
  quersyartacilcontent: async () => await query('select * from artacilcontent', []),
  queryartacilcontentById: async id => await query('select * from artacilcontent where id = ? ', [id]),
  queryartacilcontentByType: async type => await query('select * from artacilcontent where type_enname = ? ', [type]),
}

// 博客类型表
db.articletype = {
  insertArticletype: async (...articletype) => await query('insert into articletype (type_router,type_zhname,type_enname,is_enable) values (?,?,?,?)', articletype),
  is_enableArticletype: async (id) => await query('update articletype set is_enable = ? where id = ?', ['0', id]),
  quersyArticletype: async () => await query('select * from articletype', []),
  queryArticletypeById: async id => await query('select * from articletype where id = ? ', [id]),
  queryArticletypeByType: async type => await query('select * from articletype where type_enname = ? ', [type]),
}

// 博客类型详细表
db.articltypedetail = {
  insertArticltypedetail: async (...articltypedetail) => await query('insert into articltypedetail (type_router,type_zhname,type_enname,is_enable) values (?,?,?,?)', articltypedetail),
  is_enableArticltypedetail: async (id) => await query('update articltypedetail set is_enable = ? where id = ?', ['0', id]),
  queryArticltypedetailByTypeid: async typeid => await query('select * from articltypedetail where is_enable = ? and typeid = ? ', ['1', typeid])
}

// 聊天群组表
db.chatgroup = {
  insertchatgroup: async (...chatgroup) => await query('insert into chatgroup (group_name,create_userid,createtime,is_enable) values (?,?,?,?)', chatgroup),
  is_enableChatgroup: async (id) => await query('update chatgroup set is_enable = ? where id = ?', ['0', id]),
  querychatgroup: async () => await query('select * from chatgroup where is_enable = ?', ['1']),
  querychatgroupByID: async id => await query('select * from chatgroup where is_enable = ? and id = ? ', ['1', id])
}

// 聊天群组详细表
db.chatgroupdetail = {
  insertchatgroupdetail: async (...chatgroupdetail) => await query('insert into chatgroupdetail (group_id,userid,is_enable) values (?,?,?)', chatgroupdetail),
  is_enableChatgroupdetail: async (id) => await query('update chatgroupdetail set is_enable = ? where id = ?', ['0', id]),
  querychatgroupdetailByGroup_ID: async group_id => await query('select * from chatgroupdetail where is_enable = ? and group_id = ? ', ['1', group_id])
}
//导出对象
module.exports = db;