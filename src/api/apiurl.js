/**
 * author: bonjour520
 * email: latticeyi@gmail.com
 * time:  2018-9-30 13:57:58
 * github: https://github.com/bonjour520
 * description: 公共apiURL地址管理,使用axios请求方式,区别于构建在不同服务器的api接口和功能
 */
const $userSeverRoot = "http://api.mycdn.com/api";
const $commontSeverRoot = "http://api.mycdn1.com/api";

export default {
  // 更具不同的服务
  userLogin: {type: "formData",baseUrl: $userSeverRoot,api: "/account/userLogin.html"},
  LoginOut: {type: "json",baseUrl: $userSeverRoot,api: "/account/LoginOut.html"},
  upload: {type: "multipart",multipart: $commontSeverRoot,api: "/account/uploadImg.html"}
}