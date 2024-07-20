// 引入配置
// 引入请求拦截
import { requestInterceptors } from './requestInterceptors.js'

// 引入响应拦截
import { responseInterceptors } from './responseInterceptors.js'
const { VITE_BSE_URL } = import.meta.env
// 初始化请求配置
export function Request() {
  uni.$uv.http.setConfig((defaultConfig) => {
    /* defaultConfig 为默认全局配置 */
    defaultConfig.baseURL = VITE_BSE_URL
    return defaultConfig
  })
  requestInterceptors()
  responseInterceptors()
}
