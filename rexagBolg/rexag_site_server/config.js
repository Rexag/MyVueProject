const path = require('path');

module.exports = {
  viewsDir: path.resolve('./public'),
  staticDir: path.resolve('./public'),
  uploadDir: path.resolve('./public/files'),
  appPort: 9699,
  dbConfig: {
    connectionLimit: 10,
    host: '127.0.0.1',
    port: '3396',
    user: 'root',
    password: '0909',
    database: 'rexag_site'
  },
  // qq邮箱配置
  smtp: {
    host: 'smtp.qq.com',
    user: 'rexag.zhang@qq.com',
    pass: 'byallspwgvymbeie',
    code: Math.random().toString(16).slice(2, 6).toUpperCase(),
    expire: new Date().getTime() + 5 * 60 * 1000,
  },
  redis: {
    host: '',
    port: ''
  }
}

// /**
//  * app config
//  */
// module.exports = {
//   isDev: process.env.NODE_ENV == 'development',
//   port: 3000,
//   socketPort: 3001,
//   clientPort: 3002,
//   secret: 'JEFFJWT',
//   exp: 60 * 60,
// };
// /**
//  * mysql database config
//  * @type {Object}
//  */
// module.exports = {
//   host: "127.0.0.1",
//   port: "3396",
//   user: "root",
//   password: "0909",
//   database: "rexag",
//   charset: 'utf8mb4',//utf8mb4才能保存emoji
//   multipleStatements: true,// 可同时查询多条语句, 但不能参数化传值
//   connectionLimit: 100
// };
// /**
//  * logger config
//  */
// module.exports = {
//   appenders: {
//     out: {
//       type: 'stdout',
//       layout: { type: 'basic' }
//     },
//     file: {
//       type: 'file',
//       filename: 'server/logs/system.log',
//       maxLogSize: 10485760,
//       backups: 3,
//       compress: true,
//       layout: {
//         type: 'pattern',
//         pattern: '[%d{yyyy/MM/dd:hh.mm.ss}] %p %c - %m%n'
//       }
//     }
//   },
//   categories: { default: { appenders: ['file'], level: 'info' } }
// };