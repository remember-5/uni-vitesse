/**
 * Copyright [2022] [remember5]
 * <p>
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const { exec } = require('node:child_process')
const process = require('process')
const ci = require('miniprogram-ci')

// 从 package.json 中读取版本号
const version = require('./package.json').version

async function upload() {
  const project = new ci.Project({
    appid: 'appid', // 替换为你的小程序 appid
    // appid: process.env.APP_ID,
    type: 'miniProgram',
    projectPath: './dist/build/mp-weixin',
    privateKeyPath: './private.key',
    ignores: ['node_modules/**/*'],
  })

  // 从 Git 仓库获取最新提交信息
  exec('git log -1 --pretty=%B', async (error, stdout) => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }
    const commitMessage = stdout.trim()
    const uploadResult = await ci.upload({
      project,
      version,
      desc: commitMessage,
      setting: {
        minify: true,
        useProjectConfig: true,
      },
      robot: 1,
      onProgressUpdate: console.log,
    })
    console.log(uploadResult)
    process.exit() // 在这里退出进程
  })
}

upload()
