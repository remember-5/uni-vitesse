/**
 * 响应拦截
 * @param {object} http
 */
export function responseInterceptors(_vm) {
  uni.$uv.http.interceptors.response.use(
    (response) => {
      /* 对响应成功做点什么 可使用async await 做异步操作 */
      const data = response.data
      // 自定义参数
      const custom = response.config?.custom
      if (data.code !== '00000') {
        // 服务端返回的状态码不等于200，则reject()
        // 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
        if (custom.toast !== false)
          uni.$uv.toast(data.message)

        // 如果需要catch返回，则进行reject
        if (custom?.catch) {
          return Promise.reject(data)
        }
        else {
          // 否则返回一个pending中的promise
          return new Promise(() => {})
        }
      }
      return data || {}
    },
    (response) => {
      uni.$uv.toast('系统异常')
      if (response?.statusCode === 401) {
        uni.clearStorage()
        uni.$uv.toast('登录过期，请重新登录')
        setTimeout(() => {
          uni.reLaunch({ url: '/pages/login/index' })
        }, 1500)
      }
      /*  对响应错误做点什么 （statusCode !== 200） */
      return Promise.reject(response)
    },
  )
}
