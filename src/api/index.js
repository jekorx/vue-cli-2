import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = '/web/'
axios.defaults.withCredentials = true
/**
 * axios 默认 Content-Type: application/json;charset=UTF-8
 * 请求正文为Request Payload，格式是json格式的字符串
 * 台用@RequestParam是接收不到参数的，只能用@RequestBody
 * 配置transformRequest，参数使用qs转换
 * 请求头Content-Type会被设置为: application/x-www-form-urlencoded
 * 请求正文为Form Data，格式是key=value&key1=value2
 * 对于 Form Data 请求，后台无需任何注解，即可解析参数
 */
axios.defaults.transformRequest = [params => qs.stringify(params)]

// 添加请求拦截器
axios.interceptors.request.use(config => {
  return config
}, error => {
  // 请求错误
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  return response.data
}, error => {
  // 响应错误
  return Promise.reject(error)
})

export default axios
