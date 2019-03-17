import request from '@/utils/request'

export function getUserInfo() {
  return request({
    url: 'http://localhost:9000/userinfo',
    method: 'get',
    withCredentials: true
  })
}
