import { message } from 'ant-design-vue'
import Axios from 'axios'
import Cookie from 'js-cookie'

if (Cookie.get('token')) {
}

const initAxios = Axios.create({
  timeout: 1800000 //数据响应过期时间
  // baseURL: 'http://12306-rd.magestack.cn:9000'
  // headers: ['Authorization', Cookie.get('token') ?? null]
})

//请求拦截器
initAxios.interceptors.request.use(
  (config) => {
    //在发送之前做点什么
    return config
  },
  (error) => {
    //对请求错误做点什么
    return Promise.reject(error)
  }
)

//响应拦截器
initAxios.interceptors.response.use(
  (response) => {
    if (response.data?.code === 401) {
      message.error('用户未登录或已过期！')
      window.location.href = 'login'
    }
    return response
  },
  (error) => {
    console.log(error, 'error')
    const status = error.response?.status

    if (status === 401) {
      message.error('用户未登录或已过期！')
      window.location.href = 'login'
      return Promise.resolve({
        data: {
          success: false,
          message: '用户未登录或已过期！',
          data: null,
          status
        }
      })
    }

    const errorMessage =
      error.response?.data?.message ||
      error.response?.data?.msg ||
      `请求失败${status ? `（${status}）` : ''}`

    message.error(errorMessage)

    return Promise.resolve({
      data: {
        success: false,
        message: errorMessage,
        data: null,
        status
      }
    })
  }
)

export default initAxios
