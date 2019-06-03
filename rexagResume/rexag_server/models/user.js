const db = require('./db');

module.exports = {
  // xxx:()=> db.q(ssxx);
  registerUser: async (...user) => await db.q('insert into users (nickname,username,password,sex,phone,email,updatetime,enable,headpic,autograph) values (?,?,?,?,?,?,?,?,?,?)', user),
  updateUserNickname: async (nickname) => await db.q('update users set nickname = ?', [nickname]),
  updateUserHeadpic: async (nickname) => await db.q('update users set headpic = ?', [headpic]),
  updateUserAutograph: async (autograph) => await db.q('update users set autograph = ?', [autograph]),
  enableUser: async (id) => await db.q('update users set enable = ? where id = ?', ['0', id]),
  quersyUsers: async () => await db.q('select * from users where enable = ?', ['1']),
  queryUserByUsername: async username => await db.q('select * from users where enable = ? and username = ? ', ['1', username]),
  queryUserByUserEmail: async useremail => await db.q('select * from users where enable = ? and email = ? ', ['1', useremail]),
  queryUserByUserPhone: async userphone => await db.q('select * from users where enable = ? and phone = ? ', ['1', userphone]),
  queryUserDataByUsername: async username => await db.q('select 1 from users where enable = ? and username = ?', ['1', username])
}