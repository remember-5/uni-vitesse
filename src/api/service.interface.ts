export interface RequestConfig {
  baseURL?: string
  data?: any
  params?: any
  headers?: Record<string, string>
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'PATCH'
  dataType?: 'json' | 'text' | 'xml' | 'html' | string
  responseType?: 'text' | 'arraybuffer' | 'blob' | 'document' | 'json' | string
  // 注：如果局部custom与全局custom有同名属性，则后面的属性会覆盖前面的属性，相当于Object.assign(全局，局部)
  custom?: Record<string, any> // 全局自定义参数默认值
  timeout?: number // H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序
  sslVerify?: boolean // 验证 ssl 证书 仅5+App安卓端支持（HBuilderX 2.3.3+）
  withCredentials?: boolean // 跨域请求时是否携带凭证（cookies）仅H5支持（HBuilderX 2.6.15+）
  firstIpv4?: boolean // DNS解析时优先使用ipv4 仅 App-Android 支持 (HBuilderX 2.8.0+)
  validateStatus?: (statusCode: number) => boolean
}

export interface ResponseServiceType<T> {
  /**
   * @description 业务数据
   */
  data?: T
  /**
   * @description 错误信息
   */
  errorMsg?: string
  /**
   * @description 错误码
   */
  code?: number | string
  /**
   * @description 提示信息
   */
  success?: boolean
  status?: number
}
/**
 * 枚举公共类型
 */
export interface EnumType {
  /**
   * 类型名称
   */
  label: string
  /**
   * 类型值
   */
  value: string | number
}
