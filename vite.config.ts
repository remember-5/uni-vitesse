/* eslint-disable node/prefer-global/process */
/// <reference types="vitest" />

import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  /**
   * 为兼容 @dcloudio/vite-plugin-uni 采用 CJS ，而 UnoCSS 只支持 ESM
   * @see https://github.com/dcloudio/uni-app/issues/4815
   */
  const Unocss = await import('unocss/vite').then(i => i.default)

  const ENV = loadEnv(mode, process.cwd())
  console.log(`当前vite环境---${ENV.VITE_NODE_ENV}---`)
  return {
    resolve: {
      alias: {
        '~/': `${resolve(__dirname, 'src')}/`,
      },
    },
    plugins: [
      /**
       * vite-plugin-uni-pages
       * @see https://github.com/uni-helper/vite-plugin-uni-pages
       */
      UniPages({
        subPackages: [
          'src/pages-sub',
        ],
        exclude: ['**/components/**'],
      }),

      /**
       * vite-plugin-uni-layouts
       * @see https://github.com/uni-helper/vite-plugin-uni-layouts
       */
      UniLayouts(),

      /**
       * unocss
       * @see https://github.com/antfu/unocss
       * see unocss.config.ts for config
       */
      Unocss(),

      /**
       * unplugin-auto-import 按需 import
       * @see https://github.com/antfu/unplugin-auto-import
       */
      AutoImport({
        imports: [
          'vue',
          'uni-app',
        ],
        dts: true,
        dirs: [
          './src/composables',
        ],
        vueTemplate: true,
      }),

      /**
       * unplugin-vue-components 按需引入组件
       * 注意：需注册至 uni 之前，否则不会生效
       * @see https://github.com/antfu/vite-plugin-components
       */
      Components({
        // globs: ['src/components/*.{vue}'],  //TODO 官方默认配置有点问题 (需调研)
        dts: 'src/components.d.ts',
      }),

      /**
       * vite-plugin-vue-devtools 增强 Vue 开发者体验
       * @see https://github.com/webfansplz/vite-plugin-vue-devtools
       */
      VueDevTools(),

      uni(),
    ],

    /**
     * Vitest
     * @see https://github.com/vitest-dev/vitest
     */
    test: {
      environment: 'jsdom',
    },

    css: {
      // css预处理器
      preprocessorOptions: {
        scss: {
          // 引入全局scss变量
          additionalData: '@import "~/styles/global.scss";',
        },
      },
    },
  }
})
