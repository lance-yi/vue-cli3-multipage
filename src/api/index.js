/**
 * author: bonjour520
 * email: latticeyi@gmail.com | 342003386@qq.com
 * time:  2018-9-30 13:57:58
 * github: https://github.com/bonjour520
 * description: 对axios进行了简单的封装。针对不同请求格式进行了相应的转换。暂时还没有添加过滤器，考虑后面逐渐完善，目的是让大家减少代码书写和不同不服务之间的灵活转变。这里我们将main.js中使用挂载到Vue.prototype原型链下面使用。
 * main.js
 * ----------------------
 * import api from './api/index.js'
 * Vue.prototype.$http = api;
 * ----------------------
 * 组件中使用方法(以post为例):
 * this.$http.post(url,params,response=>{},error=>{});
 * 使用注意：
 *  - 传参格式：
 *    - url: {type: json|formData|multipart, baseUrl: "http://api.youcdn.com/", api: '/user/userLogin.html'}
 *    - params: object | null 
 *    - response: success callback
 *    - error: catch or error callback
 *  - url地址对象建议使用单独的js文件管理
 */

// 引用axios
import axios from 'axios'

axios.defaults.withCredentials = true

// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) { delete o[key] }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

function apiAxios (method, url, params, success, failure) {
  // 根据URL地址对象确定使用什么方式请求
  if (url.type === 'json') {
    if (params) {
      params = filterNull(params)
    }
  } else if (url.type === 'formData') {
    const _params = new URLSearchParams()
    if (params) {
      params = filterNull(params)
      // JSON 转换为 FormData
      Object.keys(params).forEach(key => _params.append(key, params[key]))
      params = _params
    }
  }

  axios({
    method: method,
    url: url.api,
    headers: url.type === 'json' ? { 'Content-Type': 'application/json; charset=UTF-8' } : url.type === 'formData' ? { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } : { 'Content-Type': 'multipart/form-data; charset=UTF-8' },
    data: method === 'POST' || method === 'PUT' ? params : null,
    dataType: 'json',
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: url.baseUrl,
    withCredentials: false
  }).then(function (res) {
    if (res.data.code === 0) {
      if (success) {
        success(res.data)
      }
    } else {
      if (failure) {
        failure(res.data)
      }
    }
  }).catch(function (err) {
    throw new Error(err)
  })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  }
}
