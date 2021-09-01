'use strict'
/**
 * 数据字典
 * @type {[{label: string, value: number}, {label: string, value: number}]}
 */
export const XXX_STATUS = [
  { value: 0, label: '未发送' },
  { value: 1, label: '已发送' }
]
/**
 * 使用方法：
 * import {SEND_STATUS} from 'directory'
 * XXX_STATUS.find(item_ => +item_.value == item.value).label,
 */
