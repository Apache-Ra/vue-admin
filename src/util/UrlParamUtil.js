'use strict'
import extend from './ExtendUtil'
export default class {
  getURLParam (url) {
    let query = url || window.location.search
    const start = query.indexOf('?')
    if (start > -1) {
      query = query.substring(start + 1)
    }
    const parameter = {}
    if (query) {
      const queryParams = query.split('&')
      for (const k in queryParams) {
        const param = queryParams[k].split('=')
        parameter[param[0]] = decodeURIComponent(param[1]) || ''
      }
    }
    return parameter
  };

  // 变更地址栏参数
  changeURLParam (obj) {
    const url = window.location.href
    let urlParam = this.getURLParam()
    const objType = typeof obj
    const uri = url.substr(0, url.indexOf('?'))
    if (urlParam !== '') {
      // 如果传值是对象，就更改原参数,如果是字符串就删除
      if (objType === 'object') {
        // 合并或者替换参数
        urlParam = extend(urlParam, obj)
        return uri + '?' + f(urlParam).join('&')
      } else if (objType === 'string') {
        return uri + '?' + f(f1(urlParam, obj)).join('&')
      }
    }
    ;

    // 内部方法 循环匹配返回最终结果
    function f1 (urlParam, obj) {
      Object.keys(urlParam).forEach(key => {
        delete urlParam[obj]
      })
      return urlParam
    }

    function f (urlParam) {
      const parameter = []
      Object.keys(urlParam).forEach(key => {
        let value = urlParam[key]
        value = (typeof value === 'undefined') ? '' : urlParam[key]
        parameter.push([key, encodeURIComponent(value)].join('='))
      })
      return parameter
    };
  }
}
