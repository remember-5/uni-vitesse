/**
 * 请求拦截
 * @param {object} http
 */
export function requestInterceptors(_vm) {
  uni.$uv.http.interceptors.request.use(
    (config) => {
      // 可使用async await 做异步操作
      // 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
      config.data = config.data || {}
      // 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
      const accessToken = uni.getStorageSync('user_access_token')
      if (accessToken)
        config.header.Authorization = `Bearer ${accessToken}`
      return config
    },
    (
      config, // 可使用async await 做异步操作
    ) => Promise.reject(config),
  )
}
