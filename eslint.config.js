const uni = require('@uni-helper/eslint-config')
const unocss = require('@unocss/eslint-plugin')

module.exports = uni(
  {
    overrides: {
      uni: {
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      },
    },
    rules: {
      'no-console': 'off',
      'node/prefer-global/process': 'off',
      // ...其他规则
      'unicorn/prefer-node-protocol': 'off',
    },
  },
  unocss.configs.flat,
)
