import crypto from 'crypto'
import util_1 from 'util'

let assist = {}

/**
 * 时间格式转换
 * @param date 时间
 * @param fmt 时间格式
 */
assist.FormatDate = function (date, fmt) {
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

/**
 * 添加天数，返回STRING 格式日期
 * @param date 时间
 * @param days 添加的天数
 */
assist.addDate = function (date, days) {
  var d = new Date(date);
  d.setDate(d.getDate() + days);
  var m = d.getMonth() + 1;
  return d.getFullYear() + '-' + m + '-' + d.getDate();
}

/**
 * 深合并两个对象不同的属性(如果有相同的属性,会取后者.)
 * @param obj1
 * @param obj2
 * @param arrayabandon 是否合并数组
 */
assist.DeepMerge = function (obj1, obj2, mergearray = true) {
  if (obj1 == null)
    obj1 = {};
  if (obj2 == null)
    obj2 = {};
  let tempobj = {};
  let keys = Object.keys(obj1);
  for (let i = 0; i < keys.length; i++)
    tempobj[keys[i]] = obj1[keys[i]];
  keys = Object.keys(obj2);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (util_1.isArray(obj2[key])) {
      if (!util_1.isArray(obj1[key]) || !mergearray)
        obj1[key] = [];
      for (let k = 0; k < obj2[key].length; k++) {
        obj1[key].push(obj2[key][k]);
      }
      continue;
    }
    if (!(key in obj1)) {
      tempobj[key] = obj2[key];
      continue;
    }
    if (obj2[key] == null)
      continue;
    if ((typeof obj2[key]) === "object") {
      tempobj[key] = assist.DeepMerge(obj1[key], obj2[key]);
      continue;
    }
    tempobj[key] = obj2[key];
    continue;
  }
  return tempobj;
}

/**
 * 解析json到对象
 * @param {string} str 字符串本体
 */
assist.ParseJson = function (obj, json) {
  let temp = JSON.parse(json);
  return assist.DeepMerge(obj, temp);
}

/**
 * MD5加密
 * @param {string} str 字符串本体
 */
assist.MD5 = function (str) {
  let md5 = crypto.createHash("md5");
  md5.update(str);
  str = md5.digest('hex');
  var s = str.toUpperCase(); //32位大写  
  return s;
}

/**
 * SHA512
 * @param {string} str 字符串本体
 */
assist.SHA512 = function (str) {
  let sha512 = crypto.createHash("sha512");
  sha512.update(str);
  str = sha512.digest('hex');
  var s = str.toUpperCase(); //32位大写  
  return s;
}
/**
 * 用尽可能标准的方法,判断字符串是否有内容
 * @param {string} str 字符串本体
 */
assist.StringIsEmpty = function (str) {
  return (str === null || str === undefined || str === '' || !str);
}

/**
 * 用尽可能标准的方法,判断int是否有效
 * @param {number} num 本体
 */
assist.IntCheckValid = function (num) {
  if (isNaN(num))
    return false;
  let temp = Number(num);
  let toint = (temp - (temp % 1)) / 1;
  return (temp == toint);
}

/**
 * 把单个Hex字符转为对应的十进制数字
 * @param {string} hex
 * @returns {number}
 */
assist.HexCharToNumber = function (hex) {
  let code = hex.charCodeAt(0);
  if (code >= 0x30 && code <= 0x39)
    return code - 0x30;
  if (code >= 'A'.charCodeAt(0) && code <= 'F'.charCodeAt(0))
    return 10 + (code - 'A'.charCodeAt(0));
}
/**
* 把Hex字符串转数字数组
* @param {string} hex hex字符串
* @returns {number[]} number[] 转换后的数组
*/
assist.HexStringToNumbers = function (hex) {
  let temp2 = "";
  let temp = hex.toUpperCase();
  let buff = [];
  for (let i = 0; i < temp.length; i++) {
    let code = temp.charCodeAt(i);
    //console.log(code);
    if (code >= 0x30 && code <= 0x39)
      temp2 += temp[i];
    if (code >= 'A'.charCodeAt(0) && code <= 'F'.charCodeAt(0))
      temp2 += temp[i];
  }
  for (let i = 0; i < temp2.length / 2; i++) {
    buff.push((assist.HexCharToNumber(temp2[i * 2]) * 0x10) + assist.HexCharToNumber(temp2[(i * 2) + 1]));
  }
  return buff;
}
/**
 * 取消转义
 * @param str
 */
assist.EscapeToHtml = function (str) {
  var arrEntities = { 'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"' };
  return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) { return arrEntities[t]; });
}
/**
 * 转义
 * @param sHtml
 */
assist.htmlToEscape = function (sHtml) {
  return sHtml.replace(/[<>&"]/g, function (c) { return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]; });
}

/**
 * 识别变量类型是HexString还是number[] 并转换为number[]返回
 * @param {string | number[]}data
 */
assist.HexOrBuffToBuff = function (data) {
  console.log(typeof data);
  if ((typeof data) == 'string')
    return assist.HexStringToNumbers(data);
  return data;
}

export default assist