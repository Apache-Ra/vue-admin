'use strict'

function dateTime () {
  const dateData = new Date()
  // 年
  const year = dateData.getFullYear()
  // 月
  let month = dateData.getMonth() + 1
  // 日
  let date = dateData.getDate()
  // 周
  const day = dateData.getDay()
  // 时
  const hour = dateData.getHours()
  // 分
  let minute = dateData.getMinutes()
  // 秒
  let second = dateData.getSeconds()

  month = (month < 10) ? '0' + month : month
  date = (date < 10) ? '0' + date : date
  minute = (minute < 10) ? '0' + minute : minute
  second = (second < 10) ? '0' + second : second

  return { year, month, date, day, hour, minute, second }
}

export function GetDate () {
  const data = dateTime()
  return data.year + '-' + data.month + '-' + data.date
}
export function GetTime () {
  const data = dateTime()
  return data.hour + ':' + data.minute + ':' + data.second
}
export function GetWeek () {
  const data = dateTime()
  const weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  return weekday[data.day]
}
export function getTimestamp () {
  return (new Date()).valueOf()
}
