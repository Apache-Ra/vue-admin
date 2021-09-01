'use strict'

/**
 * 标准时间格式化
 * @param string
 * @param format
 * @returns {string}
 * @constructor
 */
export function TIME (string = '', format = 'HH:MM:SS') {
  const d = new Date(string)
  const year = d.getFullYear()
  const month = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1)
  const day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate()
  const hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours()
  const minute = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
  const second = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()
  if (format === 'HH:MM:SS') {
    return [hour, minute, second].join(':')
  } else if (format === 'YY-MM-DD') {
    return [year, month, day].join('-')
  } else if (format === ',') {
    return [year, month, day].join(',') + ',' + [hour, minute, second].join(',')
  } else {
    return [year, month, day].join('-') + ' ' + [hour, minute, second].join(':')
  }
}

/**
 * 时间戳格式化
 * @param date
 * @param format
 * @returns {string}
 * @constructor
 */
export function TIMESTAMP (date = '', format = 'HH:MM:SS') {
  date = date || new Date(date)
  if (!date) return
  if (!format) format = 'yyyy-MM-dd'
  switch (typeof date) {
    case 'string':
      date = new Date(date.replace(/-/, '/'))
      break
    case 'number':
      date = new Date(date)
      break
  }
  if (!date instanceof Date) return
  const dict = {
    yyyy: date.getFullYear(),
    M: date.getMonth() + 1,
    d: date.getDate(),
    H: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
    MM: ('' + (date.getMonth() + 101)).substr(1),
    dd: ('' + (date.getDate() + 100)).substr(1),
    HH: ('' + (date.getHours() + 100)).substr(1),
    mm: ('' + (date.getMinutes() + 100)).substr(1),
    ss: ('' + (date.getSeconds() + 100)).substr(1)
  }
  return format.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function () {
    return dict[arguments[0]]
  })
}
