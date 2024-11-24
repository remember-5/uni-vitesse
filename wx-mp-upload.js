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
const process = require('process')
const ci = require('miniprogram-ci')

// 从 package.json 中读取版本号
const version = require('./package.json').version

async function upload() {
  const project = new ci.Project({
    appid: process.env.APP_ID,
    type: 'miniProgram',
    projectPath: './dist/build/mp-weixin',
    privateKeyPath: './private.key',
    ignores: ['node_modules/**/*'],
  })

  const uploadResult = await ci.upload({
    project,
    version,
    desc: process.env.CI_COMMIT_MESSAGE,
    setting: {
      minify: true,
      useProjectConfig: true,
    },
    robot: 1,
    onProgressUpdate: console.log,
  })
  console.log(uploadResult)
  process.exit() // 在这里退出进程
}

upload()
