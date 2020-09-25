'use strict'
import axios from 'axios'

const Request = (options) => {
  const type = options.type ? options.type : 'json'
  const token = (options.token) ? options.token : null
  const businessType = (options.businessType) ? options.businessType : null
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
      businessType: businessType,
      token: token
    } : {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': contentType,
      businessType: businessType,
      token: token
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
  if (response.code === 200) {
    return true
  } else {
    console.warn(response)
  }
}

const handleHttpResponseStatus = (error, status) => {
  console.log('网络链接异常，请稍后重试！')
  console.log(error + ': ' + status)
  return false
}

export default Request
