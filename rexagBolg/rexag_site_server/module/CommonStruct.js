"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Enums = require("./Enums");
const Global_Res = require("../Global_Res");

/**
 * 用户
 */
class User {
  constructor() {
    /**
     * 用户ID
     */
    this.id = -1;
    /**
    * 用户昵称
    */
    this.nickname = this.username;
    /**
     * 用户名
     */
    this.username = "";
    /**
     * 用户密码
     */
    this.password = "";
    /**
     * 用户性别
     */
    this.sex = Enums.Gender.Male;
    /**
    * 用户手机号
    */
    this.phone = "";
    /**
    * 用户邮箱
    */
    this.email = "";
    /**
    *  创造时间 GUDFS "yyyy-MM-dd HH:mm:ss"
    */
    this.createtime === "" ? Global_Res.FormatDate(new Date(), "yyyy-MM-dd hh:mm:ss") : this.createtime;
    /**
    *  更新时间 GUDFS "yyyy-MM-dd HH:mm:ss"
    */
    this.updatetime = Global_Res.FormatDate(new Date(), "yyyy-MM-dd hh:mm:ss");
    /**
    * 用户头像 url
    */
    this.headpic = "";
    /**
    * 用户签名
    */
    this.autograph = "";
  }
}
exports.User = User;

/**
 * 默认的接口调用参数模板
 */
class Invoke_Basic {
  constructor() {
    /**
     * 用户信息
     */
    this.user = new User();
  }
}
exports.Invoke_Basic = Invoke_Basic;

/**
 * 默认的接口返回消息模板
 */
class Result_Basic {
  constructor() {
    /**
     * 调用接口结果
     */
    this.Code = Enums.ResultCode.Fail;
    /**
     * 消息
     */
    this.Msg = "";
  }
}
exports.Result_Basic = Result_Basic;