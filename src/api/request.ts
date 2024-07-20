import type { RequestConfig } from './service.interface'

export default function Request<T>(url: string, parmas: RequestConfig): Promise<T> {
  return uni.$uv.http.request<T>({ url, ...parmas })
}
