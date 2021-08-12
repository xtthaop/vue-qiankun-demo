import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'

// create an axios instance
const service = axios.create({
  // baseURL: '',
  // timeout: 5000,
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if the custom code is not 0, it is judged as an error.
    if(res.code !== 0){
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      return Promise.reject(res.msg || 'Error')
    }else{
      return res
    }
  },
  error => {
    Message({
      message: error.message || 'Error',
      type: 'error',
      duration: 5 * 1000
    })

    return Promise.reject(error)
  }
)

export default service
