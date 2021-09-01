'use strict'
import ExtendUtil from './ExtendUtil'
import UrlParamUtil from './UrlParamUtil'
export default class {
  constructor (STORAGE_KEY = { PAGE_PARA: window.location.host + window.location.pathname }) {
    this.STORAGE_KEY = STORAGE_KEY
  }

  SetStorage (key = 'TEST_STORAGE', value = {}) {
    localStorage.setItem(key, JSON.stringify(value))
    return Promise.resolve(value)
  }

  GetStorage (key) {
    let store = localStorage.getItem(key)
    if (store) {
      try {
        store = JSON.parse(store)
      } catch (e) {
        store = undefined
        this.DelStorage(key)
      }
    }
    return Promise.resolve(store || {})
  }

  PutStorage (key = 'TEST_STORAGE', value = {}) {
    const me = this
    return this.GetStorage(key).then(data => {
      value = ExtendUtil(data || {}, value || {})
      return me.SetStorage(key, value)
    })
  }

  DelStorage (key = 'TEST_STORAGE') {
    localStorage.removeItem(key)
  }

  GetParam (key = 'TEST_STORAGE') {
    const UrlParam = new UrlParamUtil()
    return this.GetStorage(this.STORAGE_KEY.PAGE_PARA).then(data => {
      data = data || {}
      return ExtendUtil(data[key], UrlParam.getURLParam())
    })
  }

  SetParam (key, para) {
    const me = this
    return this.GetStorage(this.STORAGE_KEY.PAGE_PARA).then(data => {
      data = data || {}
      data[key] = para
      return me.SetStorage(this.STORAGE_KEY.PAGE_PARA, data)
    })
  };

  PutParam (key, para) {
    const me = this
    return this.GetStorage(this.STORAGE_KEY.PAGE_PARA).then(data => {
      data = data || {}
      data[key] = ExtendUtil((data[key] || {}), para)
      return me.SetStorage(this.STORAGE_KEY.PAGE_PARA, data)
    })
  }

  DelParam (subKey) {
    const me = this
    return this.GetStorage(this.STORAGE_KEY.PAGE_PARA).then(data => {
      if (data) {
        delete data[subKey]
        return me.SetStorage(this.STORAGE_KEY.PAGE_PARA, data)
      }
    })
  }

  DelSubParam (key, subKey) {
    const me = this
    return this.GetStorage(this.STORAGE_KEY.PAGE_PARA).then(data => {
      if (data) {
        delete data[key][subKey]
        return me.SetStorage(this.STORAGE_KEY.PAGE_PARA, data)
      }
    })
  }
}
/**
 * 精简版
 */
// export function SetStorage (key = 'TEST_STORAGE', val = {}) {
//   if (val) localStorage.setItem(key, JSON.stringify(val))
// }
// export function GetStorage (key = 'TEST_STORAGE') {
//   const val = localStorage.getItem(key)
//   if (val) return JSON.parse(val)
//   else return {}
// }
// export function DelStorage (key = 'TEST_STORAGE') {
//   localStorage.removeItem(key)
// }
// export function GroupSetStorage (gKey, key, val) {
//   let obj = GetStorage(gKey)
//   if (!obj) {
//     obj = {}
//   }
//   obj[key] = val
//   SetStorage(gKey, obj)
// }
// export function GroupGetStorage (gKey, key) {
//   const obj = GetStorage(gKey)
//   return (obj) ? obj[key] : ''
// }
// export function GroupDelStorage (gKey, key) {
//   const obj = GetStorage(gKey)
//   if (obj && obj[key]) {
//     delete obj[key]
//     SetStorage(gKey, obj)
//   }
// }
