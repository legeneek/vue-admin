import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  timeout: 10 * 1000
})

service.interceptors.request.use(
  config => {
    config.xsrfCookieName = 'csrf'
    config.xsrfHeaderName = 'x-csrf-token'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => response,
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
