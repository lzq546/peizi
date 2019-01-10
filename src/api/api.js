import axios from 'axios'
const baseURL = 'http://192.168.31.154:8082'
// axios.defaults.baseURL = '/api'
// 发送验证码
export const message = (phoneNo) => {
  return axios({
    method: 'GET',
    url: `${baseURL}/user/${phoneNo}`
  })
}
// 注册账号
export const register = (phoneNo, pwd, valCode, invitCode) => {
  return axios.post(`${baseURL}/user/register`, {phoneNo, pwd, valCode, invitCode})
    .then((result) => {
      return result.data
    })
}
// 登录账号
export const login = (loginName, pwd) => {
  return axios.post(`${baseURL}/login/userLogin`, {loginName, pwd})
    .then((result) => {
      return result.data
    })
}
//
export const shuju = () => {
  return axios.get('/api/list=sh601006').then((result) => {
    return result.data
  })
}
