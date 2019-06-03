var mysql = require('mysql');
const { dbConfig } = require('../config.js');
var pool = mysql.createPool(dbConfig);

var db = {};

db.query = function (sql, params) {
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
  insertUser: async (...user) => await db.query('insert into users (username,salt,userpwd,sex,phone,email) values (?,?,?,?,?,?)', user),
  updateUserNickname: async (nickname, id) => await db.query('update users set nickname = ? where id = ?', [nickname, id]),
  updateUserHeadpic: async (headpic, id) => await db.query('update users set headpic = ? where id = ?', [headpic, id]),
  updateUserAutograph: async (autograph, id) => await db.query('update users set autograph = ? where id = ?', [autograph, id]),
  changepwd: async (password, id) => await db.query('update users set userpwd = ? where id = ?', [password, id]),
  logoutUser: async (id) => await db.query('update users set is_enable = 1 where id = ?', [id]),
  quersyAllUsers: async () => await db.query('select * from users where is_enable = 1'),
  queryUserByUsername: async username => await db.query('select * from users where is_enable = 1 and username = ? ', [username]),
  queryUserByUserEmail: async email => await db.query('select * from users where is_enable = 1 and email = ? ', [email]),
  queryUserByUserPhone: async phone => await db.query('select * from users where is_enable = 1 and phone = ? ', [phone]),
  changeUserStatus: async (status, id) => await db.query('update users set status = ? where id = ?', [status, id]),
}

// 博客表
db.artacil = {
  insertArtacil: async (...artacil) => await db.query('insert into artacil (author,userid,title,firstmenu,secondmenu,content,is_original,is_public,version,original_link) values (?,?,?,?,?,?,?,?,?,?)', artacil),
  deleteArtacil: async (id) => await db.query('update artacil set is_enable = 1 where id = ?', [id]),
  privateArtacil: async (private, id) => await db.query('update artacil set is_public = ? where id = ?', [private, id]),
  queryArticlListByOne: async (userid, firstmenu) => await db.query('select * from artacil where is_enable = 1 and is_public = 1  and  userid = ? and firstmenu = ?  ', [userid, firstmenu]),
  queryArticlListByTwo: async (userid, firstmenu, secondmenu) => await db.query('select * from artacil where is_enable = 1 and is_public = 1  and  userid = ? and firstmenu = ? and secondmenu = ?', [userid, firstmenu, secondmenu]),
  queryArticlListByUserid: async userid => await db.query('select * from artacil where is_enable = 1 and is_public = 1  and  userid = ?  ', [userid]),
  queryArticlListForHome: async () => await db.query('SELECT * FROM `artacil` where is_enable = 1 and is_public = 1  ORDER BY createtime DESC LIMIT 20 '),

  queryArtacilByUserID: async userid => await db.query('select * from artacil where is_enable = 1 and id = ? ', [userid]),
  queryArtacilByFirstmenu: async firstmenu => await db.query('select * from artacil where is_enable = 1 and firstmenu = ? ', [firstmenu]),
  queryArtacilBySecondmenu: async secondmenu => await db.query('select * from artacil where is_enable = 1 and secondmenu = ? ', [secondmenu]),
  queryArtacilByKeywords: async keywords => await db.query('select * from artacil where is_enable = 1 and content like %?% ', [keywords]),
  queryArtacilByCreatetime: async (oldTime, newTime) => await db.query('select * from artacil where is_enable = 1 and createtime >? and createtime <= ? ', [oldTime, newTime]),

}

// 博客详细表
db.artacilcontent = {
  insertartacilcontent: async (...artacilcontent) => await db.query('insert into artacilcontent (type_router,type_zhname,type_enname,is_enable) values (?,?,?,?)', artacilcontent),
  is_enableartacilcontent: async (id) => await db.query('update artacilcontent set is_enable = ? where id = ?', ['0', id]),
  quersyartacilcontent: async () => await db.query('select * from artacilcontent', []),
  queryartacilcontentById: async id => await db.query('select * from artacilcontent where id = ? ', [id]),
  queryartacilcontentByType: async type => await db.query('select * from artacilcontent where type_enname = ? ', [type]),
}

// 博客类型表
db.articletype = {
  insertArticletype: async (...articletype) => await db.query('insert into articletype (type_router,type_zhname,type_enname,is_enable) values (?,?,?,?)', articletype),
  is_enableArticletype: async (id) => await db.query('update articletype set is_enable = ? where id = ?', ['0', id]),
  quersyArticletype: async () => await db.query('select * from articletype', []),
  queryArticletypeById: async id => await db.query('select * from articletype where id = ? ', [id]),
  queryArticletypeByType: async type => await db.query('select * from articletype where type_enname = ? ', [type]),
}

// 博客类型详细表
db.articltypedetail = {
  insertArticltypedetail: async (...articltypedetail) => await db.query('insert into articltypedetail (type_router,type_zhname,type_enname,is_enable) values (?,?,?,?)', articltypedetail),
  is_enableArticltypedetail: async (id) => await db.query('update articltypedetail set is_enable = ? where id = ?', ['0', id]),
  queryArticltypedetailByTypeid: async typeid => await db.query('select * from articltypedetail where is_enable = ? and typeid = ? ', ['1', typeid])
}

// 添加记录表
db.apply = {
  insertArticltypedetail: async (...apply) => await db.query('insert into apply (from_id,to_id,group_id,type,apply_message,reply) values (?,?,?,?,?,?)', apply),
  changeUserStatus: async (id, status) => await db.query('update apply set status = ? where id = ?', [status, id])
}
//导出对象
module.exports = db;