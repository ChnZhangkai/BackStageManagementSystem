/* jshint esversion: 6 */
import axios from 'axios'
// import qs from 'qs'
// let baseURL = 'http://yiya.net.cn:8086/weatherapp/backstage'
let baseURL = 'http://127.0.0.1:8086/bsmsapp/backstage'

// 发送请求之前
axios.interceptors.request.use(config => {
  return config
}, error => {
  console.log('请求错误')
  return Promise.resolve(error)
})

// 接收到响应数据后
axios.interceptors.response.use(response => {
  return response
}, error => {
  console.log('响应错误')
  return Promise.resolve(error.response)
})

function checkStatus (response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response.data
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: 404,
    msg: '网络异常'
  }
}

function checkCode (res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  console.log(res)
  if (res.status === 404) {
    alert(res.msg)
  }
  if (res.data && (!res.data.success)) {
    alert(res.data.error_msg)
  }
  return res
}
export default {
  post (url, data) {
    return axios({
      method: 'post',
      baseURL: baseURL,
      url,
      // data: qs.stringify(data),
      data: JSON.stringify(data),
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).then(
      (response) => {
        // console.log(response.data)
        return checkStatus(response)
      }
    ).catch(
      (res) => {
        return checkCode(res)
      }
    )
  },
  get (url, params) {
    return axios({
      method: 'get',
      baseURL: baseURL,
      url,
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(
      (response) => {
        console.log('99999')
        console.log(response)
        return checkStatus(response)
      }
    ).catch(
      (res) => {
        return checkCode(res)
      }
    )
  }
}
