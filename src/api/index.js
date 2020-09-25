'use strict'
import Request from '@/api/request'

// 获取列表
export async function getList(data) {
  return Request({
    url: '/list',
    method: 'post',
    data
  })
}
