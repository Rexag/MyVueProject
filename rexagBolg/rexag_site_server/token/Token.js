const jwt = require('jsonwebtoken');
const serect = 'rexag_site';  //密钥，不能丢

let Token = {}
/**
* 生成Token
* @param token token[string]
*/
Token.CreateToken = function (id) {
  const token = jwt.sign({ id: id }, serect, { expiresIn: Math.floor(Date.now() / 1000) + (60 * 60) });
  return token;
}

/**
 * 验证Token有效性
 * @param ctx ctx{}
 */
Token.CheckToken = async (ctx) => {
  try {
    let toke = ctx.request.header.authorization.split(' ')[1];
    let token = await jwt.verify(toke, serect)
    if (token && token.exp < (Math.floor(Date.now() / 1000))) {
      return '000'
    } else {
      let newToken = Token.CreateToken(token.id)
      return { token: newToken, id: token.id }
    }
  }
  catch (err) {
    return '000'
  }
}

module.exports = Token