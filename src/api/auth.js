import request from '@/utils/request'

export function login(n, p) {
  const data = {
    username: n,
    password: p
  }
  return request({
    url: 'http://localhost:9000/login',
    method: 'post',
    data,
    withCredentials: true
  })
}