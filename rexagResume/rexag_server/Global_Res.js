"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled (value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected (value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step (result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
const xml2js = require("xml2js");
const fastXmlParser = require("fast-xml-parser");
const util_1 = require("util");
const request = require("request");
let XML2JS = new xml2js.Parser({ explicitArray: false, ignoreAttrs: true });
var XMLBUILDER = new xml2js.Builder({ rootName: 'Request', xmldec: { version: '1.0', 'encoding': 'GBK', 'standalone': false } }); // jons -> xml
/**
 * 将对象序列化为XML
 * @param {any} obj
 */
function ToXML (obj) {
  return XMLBUILDER.buildObject(obj);
}
exports.ToXML = ToXML;
var options = {
  /**不要值类型 */
  parseNodeValue: false,
  parseAttributeValue: false,
  trimValues: false,
};
/**
 * 解析XML到对象
 * @param {string} xml
 */
function ParseXML (xml) {
  return __awaiter(this, void 0, void 0, function* () {
    var jsonObj = fastXmlParser.parse(xml, options);
    return jsonObj;
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
      XML2JS.parseString(xml, (err, result) => {
        xml = xml;
        if (err) {
          reject(err);
          return;
        }
        resolve(result.Response);
      });
    }));
  });
}
exports.ParseXML = ParseXML;
/**
 *
 * @param obj
 */
function ToArray (obj) {
  if (obj instanceof Array)
    return obj;
  if (obj == null)
    return [];
  return [obj];
}
exports.ToArray = ToArray;
/**
 *
 * @param template
 * @param str
 */
function Padleft (template, str) {
  return template.substring(0, template.length - str.length) + str;
}
exports.Padleft = Padleft;
/**
 *
 * @param date
 * @param fmt
 */
function FormatDate (date, fmt) {
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "H+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    "S": date.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  }
  return fmt;
}
exports.FormatDate = FormatDate;
/**
 * 深合并两个对象不同的属性(如果有相同的属性,会取后者.)
 * @param obj1
 * @param obj2
 * @param arrayabandon 是否合并数组
 */
function DeepMerge (obj1, obj2, mergearray = true) {
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
      tempobj[key] = DeepMerge(obj1[key], obj2[key]);
      continue;
    }
    tempobj[key] = obj2[key];
    continue;
  }
  return tempobj;
}
exports.DeepMerge = DeepMerge;
/**
 * 解析json到对象
 * @param obj
 * @param json
 */
function ParseJson (obj, json) {
  let temp = JSON.parse(json);
  return DeepMerge(obj, temp);
}
exports.ParseJson = ParseJson;
/**
 *
 * @param str
 */
function MD5 (str) {
  let md5 = crypto.createHash("md5");
  md5.update(str);
  var str = md5.digest('hex');
  var s = str.toUpperCase(); //32位大写  
  return s;
}
exports.MD5 = MD5;
/**
 *
 * @param str
 */
function SHA512 (str) {
  let sha512 = crypto.createHash("sha512");
  sha512.update(str);
  var str = sha512.digest('hex');
  var s = str.toUpperCase(); //32位大写  
  return s;
}
exports.SHA512 = SHA512;
/**
 * 用尽可能标准的方法,判断字符串是否有内容
 * @param {string} str 字符串本体
 */
function StringIsEmpty (str) {
  return (str === null || str === undefined || str === '' || !str);
}
exports.StringIsEmpty = StringIsEmpty;
/**
 * 用尽可能标准的方法,判断int是否有效
 * @param {number} data 本体
 */
function IntCheckValid (data) {
  if (isNaN(data))
    return false;
  let temp = Number(data);
  let toint = (temp - (temp % 1)) / 1;
  return (temp == toint);
}
exports.IntCheckValid = IntCheckValid;
/**
 * 延时
 * @param {number} time 延时时间
 */
function Sleep (time) {
  return __awaiter(this, void 0, void 0, function* () {
    return yield new Promise((resolve, reject) => { setTimeout(resolve, time); });
  });
}
exports.Sleep = Sleep;
/**
 * 把单个Hex字符转为对应的十进制数字
 * @param {string} hex
 * @returns {number}
 */
function HexCharToNumber (hex) {
  let code = hex.charCodeAt(0);
  if (code >= 0x30 && code <= 0x39)
    return code - 0x30;
  if (code >= 'A'.charCodeAt(0) && code <= 'F'.charCodeAt(0))
    return 10 + (code - 'A'.charCodeAt(0));
}
exports.HexCharToNumber = HexCharToNumber;
/**
 * 把Hex字符串转数字数组
 * @param {string} hex
 * @returns {number[]}
 */
function HexStringToNumbers (hex) {
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
    buff.push((HexCharToNumber(temp2[i * 2]) * 0x10) + HexCharToNumber(temp2[(i * 2) + 1]));
  }
  return buff;
}
exports.HexStringToNumbers = HexStringToNumbers;
/**
 * 取消转义
 * @param str
 */
function Escape2Html (str) {
  var arrEntities = { 'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"' };
  return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) { return arrEntities[t]; });
}
exports.Escape2Html = Escape2Html;
/**
 * 转义
 * @param sHtml
 */
function html2Escape (sHtml) {
  return sHtml.replace(/[<>&"]/g, function (c) { return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]; });
}
exports.html2Escape = html2Escape;
/**
 * 识别变量类型是HexString还是number[],并转换为number[]返回
 * @param {string | number[]}data
 */
function HexOrBuffToBuff (data) {
  console.log(typeof data);
  if ((typeof data) == 'string')
    return HexStringToNumbers(data);
  return data;
}
exports.HexOrBuffToBuff = HexOrBuffToBuff;
/**
 * 添加天数，返回STRING 格式日期
 * @param date
 * @param days
 */
function addDate (date, days) {
  var d = new Date(date);
  d.setDate(d.getDate() + days);
  var m = d.getMonth() + 1;
  return d.getFullYear() + '-' + m + '-' + d.getDate();
}
exports.addDate = addDate;
/**
 * POST方法
 * @param URL
 * @param PARAMS
 */
function httpPost (url, params) {
  return __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
      request({
        url: url,
        method: "POST",
        json: true,
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
        body: params
      }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log(body); // 请求成功的处理逻辑
          resolve(body);
        }
        else {
          reject(error);
        }
      });
      /*
      let options = {
          host: '201.201.201.34',
          port: 8004,
          path: '/application/node/post.php',
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              //'Content-Length': params.length
          }
      }
      let req = http.request(options, (res) => {
          res.setEncoding('utf8');
          res.on('data', (data) => {
              console.log("data:", data);
              resolve(data);
          });
 
          req.write(params);
          req.end();
      });
      // */
    }));
  });
}
exports.httpPost = httpPost;
//# sourceMappingURL=Global_Res.js.map