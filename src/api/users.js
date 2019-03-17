import request from '@/utils/request'

export function getUsers() {
  return request({
    url: 'http://localhost:9000/users',
    method: 'get',
    withCredentials: true
  })
}