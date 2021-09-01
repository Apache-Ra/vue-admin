'use strict'
import RequestUtil from '../util/RequestUtil'

/**
 * 示例：获取列表数据
 * @param data { id: 1, key: 2 }
 * @returns {Promise<unknown>}
 */
export async function getList (data) {
  return RequestUtil({
    url: '/list',
    method: 'post',
    data
  })
}

/**
 * 使用方法
 * START
 * import { getList } from '@/api'
 * const data = { id: 1, key: 2 }
 * getList(data).then(data => {
 *   // 成功之后的数据
 *   // 通用错误在Request请求类中以及拦截，可根据实际业务需求调整
 * })
 * END
 */

/**
 * 结合配合枚举
 */
// export default async function home (requestName, data, method) {
//   let loginInfo = window.sessionStorage.getItem('TEST')
//   loginInfo = (loginInfo != null) ? JSON.parse(loginInfo) : { token: null }
//   if (data.token === null) {
//     delete data.token
//   } else {
//     data.token = loginInfo.token
//   }
//   return RequestUtil({
//     url: requestName,
//     method: method || 'get',
//     token: loginInfo.token,
//     data
//   })
// }
/**
 * 配合美剧使用方法
 * 注：main.js
 * Vue.prototype.RequestUtil = RequestUtil
 * Vue.prototype.ENUM = ENUM
 */
// const parameter = {}
// const result = await this.RequestUtil(
//   this.ENUM.REQUEST_NAME_ENUM.接口1,
//   parameter
// )
