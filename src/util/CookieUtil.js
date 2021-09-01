'use strict'
export default class {
  constructor () {
    this.date = new Date()
  }

  /**
   * 存储Cookie
   * @param name
   * @param value
   * @param day
   * @constructor
   */
  SetCookie (name = 'TEST_COOKIE', value = '' || {} || [], day = new Date()) {
    const valueType = typeof value
    value = (valueType === 'string') ? JSON.stringify(value) : value
    this.date.setTime(this.date.getTime() + 24 * 60 * 60 * 1000 * day)
    window.document.cookie = name + '=' + value + ';path=/;expires=' + this.date.toGMTString()
  }

  /**
   * 取出Cookie
   * @param name
   * @returns {string|null}
   * @constructor
   */
  GetCookie (name = 'TEST_COOKIE') {
    const value = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
    return value ? value[2] : null
  }

  /**
   * 删除Cookie
   * @param name
   * @constructor
   */
  DelCookie (name = 'TEST_COOKIE') {
    this.date.setTime(this.date.getTime() - 1)
    const val = this.GetCookie(name)
    if (val != null) {
      document.cookie = name + '=' + val + ';expires=' + this.date.toGMTString()
    }
  }
}
