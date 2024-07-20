/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}

declare module '@climblee/uv-ui' {

  const uvUI: Plugin<[]>
  export default uvUI
  global {
    interface Uni {
      $uv: $uv
    }
  }
}
