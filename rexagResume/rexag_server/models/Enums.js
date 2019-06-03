"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 用户
 */
var User;
(function (User) {
  /**
   * 未选择
   */
  User[User["Unknow"] = -1] = "Unknow";
})(User = exports.User || (exports.User = {}));

/**
 * 登陆方式
 */
var LoginWay;
(function (LoginWay) {
  /**
   * 未选择
   */
  LoginWay[LoginWay["Unknow"] = -1] = "Unknow";
  /**
   * 本站注册账号登录
   */
  LoginWay[LoginWay["rexag"] = 0] = "rexag";
  /**
   * 微信登录
   */
  LoginWay[LoginWay["wechat"] = 1] = "wechat";
  /**
   * 微博登录
   */
  LoginWay[LoginWay["microblog"] = 2] = "microblog";
  /**
   * GitHub 登录
   */
  LoginWay[LoginWay["github"] = 3] = "github";

})(LoginWay = exports.LoginWay || (exports.LoginWay = {}));

/**
 * 调用接口返回值
 */
var ResultCode;
(function (ResultCode) {
  /**
   * 未选择
   */
  ResultCode[ResultCode["Unknow"] = -1] = "Unknow";
  /**
   * 成功
   */
  ResultCode[ResultCode["Success"] = 0] = "Success";
  /**
   * 失败
   */
  ResultCode[ResultCode["Fail"] = 1] = "Fail";
  /**
   * 只成功一半,但可以当作成功处理(不建议使用这个值,仅作备用)
   */
  ResultCode[ResultCode["HalfSuccess"] = 2] = "HalfSuccess";
  /**
   * 没有完全成功,当作失败处理处理(不建议使用这个值,仅作备用)
   */
  ResultCode[ResultCode["HalfFail"] = 3] = "HalfFail";
})(ResultCode = exports.ResultCode || (exports.ResultCode = {}));

/**
 * 性别
 */
var Gender;
(function (Gender) {
  /**
   * 未选择
   */
  Gender[Gender["Unknow"] = -1] = "Unknow";
  /**
   * 男
   */
  Gender[Gender["Male"] = 1] = "Male";
  /**
   * 女
   */
  Gender[Gender["Female"] = 2] = "Female";
})(Gender = exports.Gender || (exports.Gender = {}));