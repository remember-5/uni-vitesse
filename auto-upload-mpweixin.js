const path = require('node:path')
const { exec } = require('node:child_process')

// 获取当前工作目录
// eslint-disable-next-line node/prefer-global/process
const currentDir = process.cwd()

// 从 package.json 中读取项目输出路径
const projectPath = path.join(currentDir, require('./package.json').buildOptions.output)

// 从 package.json 中读取版本号
const version = require('./package.json').version

// 从 Git 仓库获取最新提交信息
// eslint-disable-next-line unused-imports/no-unused-vars
exec('git log -1 --pretty=%B', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`)
    return
  }
  const commitMessage = stdout.trim()

  // 执行 cli 命令
  // eslint-disable-next-line unused-imports/no-unused-vars
  exec(`cli upload --project ${projectPath} --version ${version} --desc "${commitMessage}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }
    console.log(stdout)
  })
})
