'use strict'
import axios from 'axios'
import Vue from 'vue'
import router from '../router'
const vue = new Vue({ router })
const RequestUtil = (options) => {
  const type = options.type ? options.type : 'json'
  const token = (options.token) ? options.token : null
  const studentId = (options.studentId) ? options.studentId : null
  const contentType = (type === 'json') ? 'application/json; charset=UTF-8' : 'application/x-www-dynamicForm-urlencoded; charset=UTF-8'
  const defaultOptions = {
    method: options.method,
    baseURL: process.env.VUE_APP_BASE_URL,
    url: options.url,
    data: options.data,
    params: Object.assign(options.data),
    timeout: 10000,
    headers: options.method === 'get' ? {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json; charset=UTF-8',
      Accept: 'application/json',
      token: token
    } : {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': contentType,
      token: token,
      studentId: studentId
    }
  }
  if (options.method === 'get') {
    delete defaultOptions.data
  } else {
    delete defaultOptions.params
  }

  const promise = new Promise((resolve, reject) => {
    axios(defaultOptions).then(response => {
      // store.commit('updateLoading', true)
      if (handleApiResponseStatus(response.data)) resolve(response.data)
    }).catch((error, status) => {
      if (handleHttpResponseStatus(error, status)) reject(error, status)
    })
  })
  return promise
}

axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(data => {
  return data
}, async error => {
  return Promise.reject(error)
})

const handleApiResponseStatus = response => {
  if (response.code === 0) {
    return true
  } else if (response.code === 5001) {
    vue.$message({ text: 'Token 失效，请重新登录!', type: 'error' })
    setTimeout(() => {
      vue.$router.push({ name: 'login' })
    }, 1500)
  } else {
    vue.$message({
      text: (response.message) ? response.message : '接口异常',
      type: 'error'
    })
    console.warn(response)
  }
}

const handleHttpResponseStatus = (error, status) => {
  console.log('网络链接异常，请稍后重试！')
  console.log(error + ': ' + status)
  return false
}

export default RequestUtil
