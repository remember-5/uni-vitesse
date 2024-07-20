const { generateService } = require('openapi-ts-request')

const options = [
  {
    schemaPath: 'http://127.0.0.1:8900/v3/api-docs/default',
    serversPath: './src/api/consumer',
    requestLibPath: '../request',
    apiPrefix: '`/c-api`',
  },
  {
    schemaPath: 'http://127.0.0.1:8900/v3/api-docs/default',
    serversPath: './src/api/business',
    requestLibPath: '../request',
    apiPrefix: '`/b-api`',
  },
]

options.forEach((item) => {
  generateService({
    ...item,
    templatesFolder: './templates', // templates 文件路径，因为package.json 执行的命令，路径从项目路径算起
  })
    .then(() => {
      console.log('Service generation complete!')
    })
    .catch((error) => {
      console.error('Error generating service:', error)
    })
})
