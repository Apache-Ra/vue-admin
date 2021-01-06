'use strict'
import Request from '../util/request'

/**
 * 示例：获取列表数据
 * @param data { id: 1, key: 2 }
 * @returns {Promise<unknown>}
 */
async function getList(data) {
  return Request({
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
