import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import uvUI from '@climblee/uv-ui'
import App from './App.vue'
import 'uno.css'
import { Request } from '~/util/request'

Request()

export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia())
  app.use(uvUI)
  return {
    app,
    Pinia,
  }
}
