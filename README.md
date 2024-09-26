<p align='center'>
  <img src='https://user-images.githubusercontent.com/36911513/250519667-0b07fd60-968d-4d81-9185-1e8ac421ab02.png' alt='Uni Vitesse - Opinionated Vite Starter Template' width='800'/>
</p>

<h6 align='center'>
<a href="https://uni-vitesse.netlify.app/">在线 Demo</a>
</h6>

<h5 align='center'>
<b>UniAPP 版的 <a href="https://github.com/antfu/vitesse-lite">Vitesse-lite</a></b>
</h5>

<br/>

<p align='center'>
<b>简体中文</b> | <a href="https://github.com/Ares-Chang/uni-vitesse/blob/master/README.en-US.md">English</a>
</p>

<br/>

环境配置 Copy From [Vitesse-lite](https://github.com/antfu/vitesse-lite), 力求一个开发体验良好的环境配置。

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - 就是快！

- 🗂 [基于文件的约定式路由](https://github.com/Ares-Chang/uni-vitesse/tree/master/src/pages)

- 📦 [组件自动化加载](https://github.com/Ares-Chang/uni-vitesse/blob/master/src/components)

- 📑 [布局系统](https://github.com/Ares-Chang/uni-vitesse/tree/master/src/layouts)

- 🍍 [使用 Pinia 的状态管理](https://pinia.vuejs.org)

- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

- 😃 [各种图标集为你所用](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- 📥 [API 自动导入](https://github.com/Ares-Chang/uni-vitesse/tree/master/src/composables) - 直接使用 Composition API 等

- ✅ 使用 [Vitest](https://vitest.dev/) 进行单元和组件测试

- 🦾 TypeScript, 当然

- 🔒︎ [锁 pnpm 包管理](https://pnpm.io/only-allow-pnpm)

- ☁️ 零配置部署 [Netlify](https://www.netlify.com/)

<br>

如无跨端需求, 更推荐 [Vitesse-lite](https://github.com/antfu/vitesse-lite)

## 从 [Vitesse-lite](https://github.com/antfu/vitesse-lite) 中删除了以下特性

- ~~VueUse~~

## 预配置

### UI 框架

- [UnoCSS](https://github.com/antfu/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

### Icons

- [Iconify](https://iconify.design) - 使用任意的图标集，浏览：[🔍Icônes](https://icones.netlify.app/)

- [UnoCSS 的纯 CSS 图标方案](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### 测试框架

- [Vitest](https://github.com/vitest-dev/vitest) - 由 Vite 支持的单元测试

### 插件

- [`Pinia`](https://pinia.vuejs.org) - 符合直觉的 Vue.js 状态管理库

- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入

- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - 组件自动导入

- [`vite-plugin-vue-devtools`](https://github.com/webfansplz/vite-plugin-vue-devtools) - 旨在增强 Vue 开发者体验。

- [`uni-helper`](https://github.com/uni-helper) 组织

  - [`vite-plugin-uni-pages`](https://github.com/uni-helper/vite-plugin-uni-pages) - 基于文件的约定式路由

  - [`vite-plugin-uni-layouts`](https://github.com/uni-helper/vite-plugin-uni-layouts) - 页面布局系统

  - [`uni-app-types`](https://github.com/uni-helper/uni-app-types) - UniApp 类型增强

  - [`unocss-preset-uni`](https://github.com/uni-helper/unocss-preset-uni) - UnoCSS UniApp 预设，修复 `Windows` 平台频繁崩溃问题 [#3603](https://github.com/dcloudio/uni-app/issues/3603)

    - [`unocss-applet`](https://github.com/unocss-applet/unocss-applet) - UnoCSS 小程序预设，兼容在小程序中使用 `Attributify Mode`

  - [`eslint-config`](https://github.com/uni-helper/eslint-config) - 适用于 UniApp 的 [Antfu ESLint](https://github.com/antfu/eslint-config) 配置

### 编码风格

- 使用 [`<script setup>` 的 SFC 语法](https://github.com/vuejs/rfcs/pull/227) 与 Composition API 结合使用。
- 使用 [ESLint](https://eslint.org/) 工具检查代码格式，并使用 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 配置，使用单引号并去掉分号。

## 现在可以试试!

### GitHub 模板

[使用这个模板创建仓库](https://github.com/ares-chang/uni-vitesse/generate).

### 克隆到本地

如果您更喜欢使用更干净的 git 历史记录手动执行此操作

```bash
npx degit ares-chang/uni-vitesse my-uni-app
cd my-uni-app
pnpm i # 如果你没装过 pnpm, 可以先运行: npm install -g pnpm
```

### 检查清单

当您使用此模板时，请尝试按照清单正确更新您的信息

- [ ] 更改 `LICENSE` 中的作者姓名
- [ ] 更改 `manifest.json` 中的项目名称，描述，`appid` 等
- [ ] 更改 `public` 中的图标
- [ ] 整理 `README` 并删除演示页面和组件

接下来就请享受吧！:)

### 运行

参考 uni-app 官方文档：[运行、发布uni-app](https://uniapp.dcloud.net.cn/quickstart-cli.html#%E8%BF%90%E8%A1%8C%E3%80%81%E5%8F%91%E5%B8%83uni-app)

### swagger自动生成ts接口需知:

1. 本地在根文件目录执行`pnpm run swagger`
2. 如后端有新增接口需同步相关开发同学发至公网环境(也可更改本地swagger配置)
3. 切勿手动更改services中相关文件  别的开发同学再次跑脚本命令会冲掉手改的代码
4. 后续不再维护当前api下所有原始接口文件

### 自动上传至公众平台

- 使用前需自行安装 [cli脚本工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/cli.html) 至本机
  - 'zsh' (macOS Catalina 及更高版本) 执行
    ```bash
    nano ~/.zshrc
    ```
  - .zshrc文件中末行添加至以下代码
    ```bash
    export PATH="/Applications/wechatwebdevtools.app/Contents/MacOS:$PATH"
    ```
  - 在 nano 中，按 Ctrl + X，然后按 Y 保存更改并退出。
  - 这点一定要执行 (如遇到换终端找不到cli 重启终端并执行以下步骤)
    ```bash
    source ~/.zshrc
    ```

- 登录，在终端中打印登录二维码
    ```bash
    cli login
    ```
- 查询是否已经登陆工具(并在项目中 manifest.json文件配置上传至公众平台的appid)
    ```bash
    cli islogin
    ```
- 更多本地cli命令请至官网查阅 (windows下载cli脚本请自行查阅相关资料😃)
- 在本项目根目录下执行 `pnpm run upload:mp-weixin` 命令即可

#  一、Vue3 基础规范

--------------------------------------------------------------------------------------------------------------------------------

## vue2风格指南(官方)

- 严格遵守vue2的规范 https://v2.cn.vuejs.org/v2/style-guide/
- import 使用 `~` 并非 `@` 如 `import { myOrderNumber } from '~/common/api'`

## 1.1、项目命名

全部采用小写方式， 以中划线分隔。

```
正例：`smart-admin`
反例：`mall_management-system / mallManagementSystem`
```

## 1.2、目录、文件命名

目录、文件名 均以 驼峰命名。

```
正例：`/headSearch/`、 `smartLogo.png`、 `roleForm.vue`
反例：`/head-search/`、`/shopping-car/`、`smart-logo.png`、`role-form.vue`
```

##  1.3、单引号、双引号、分号

*   html中、vue的template 中 标签属性 使用 **双引号**
*   所有js中的 字符串 使用 **单引号**
*   所有js中的代码行换行要不需用 **分号**

## 1.4 变量命名
* 用小驼峰式命名法 例如：firstName、lastName。
* typescript的type和interface用大驼峰式命名法（Pascal 命名法） 例如：FirstName、LastName、CamelCase

# 二、Vue3 组合式 API规范
--------------------------------------------------------------------------------------------------------------------------------------------------

## 2.1、 使用setup语法糖

*   组件必须使用 `setup` 语法糖
*   setup 大法方便简洁
*   全局都要使用setup语法糖

## 2.2、组合式Composition API 规范

组件内必须使用模块化思想，把代码 进行 拆分；
参照 vue3官方文档对于 Composition Api的理解： [更灵活的代码组织 (opens new window)](https://cn.vuejs.org/guide/extras/composition-api-faq.html#better-logic-reuse) ，组合式Api，即 Composition API 解决的是让 相互关联的代码在一起，以更方便的组织代码，故我们的代码格式如下：

**即：将相关的 变量和代码 写到一起，并使用 行注释 进行分块**

```
<script setup>
// 各种需要导入
import xxxxx;
import xxxxx;
import xxxxx;

// -------- 定义组件属性和对外暴露的方法、以及抛出的事件 --------

// -------- 表格查询的 变量和方法 --------

// -------- 批量操作的 变量和方法 --------

// -------- 表单的 变量和方法 --------

</script>
```

举例，分成了两个模块，即：

*   模块1：显示 、隐藏操作的 变量和方法
*   模块2：表单的 变量和方法

**【以下是正确的例子】**

```
<script setup>
  import { ref, reactive } from 'vue';
  import { message } from 'ant-design-vue';
  import { SmartLoading } from '/@/components/framework/smartLoading';
  import _ from 'lodash';
  import { categoryApi } from '/@/api/business/category/categoryApi';
  import { smartSentry } from '/@/lib/smartSentry';

  // emit
  const emit = defineEmits('reloadList');

  //  组件
  const formRef = ref();

  // ------------------------------ 显示 、隐藏操作的 变量和方法------------------------------

  // 是否展示抽屉
  const visible = ref(false);
  // 显示
  function showModal(categoryType, parentId, rowData) {
    Object.assign(form, formDefault);
    form.categoryType = categoryType;
    form.parentId = parentId;
    if (rowData && !_.isEmpty(rowData)) {
      Object.assign(form, rowData);
    }
    visible.value = true;
  }
  // 隐藏
  function onClose() {
    Object.assign(form, formDefault);
    visible.value = false;
  }

  // ------------------------------ 表单的  变量和方法 ------------------------------
  // 查询表单默认值
  const formDefault = {
    categoryId: undefined, //分类id
    categoryName: '', //分类名字
    categoryType: 1, // 分类类型
    parentId: undefined, // 父级id
    disabledFlag: false, //是否禁用
  };
  // 查询表单
  let form = reactive({ ...formDefault });
  // 表单校验规则
  const rules = {
    categoryName: [{ required: true, message: '请输入分类名称' }],
  };

  function onSubmit() {
    formRef.value
      .validate()
      .then(async () => {
        SmartLoading.show();
        try {
          if (form.categoryId) {
            await categoryApi.updateCategory(form);
          } else {
            await categoryApi.addCategory(form);
          }
          message.success(`${form.categoryId ? '修改' : '添加'}成功`);
          emit('reloadList', form.parentId);
          onClose();
        } catch (error) {
          smartSentry.captureError(error);
        } finally {
          SmartLoading.hide();
        }
      })
      .catch((error) => {
        console.log('error', error);
        message.error('参数验证错误，请仔细填写表单数据!');
      });
  }

  defineExpose({
    showModal,
  });
</script>
```

**【错误的例子】**

```
<script setup>
  import { ref, reactive } from 'vue';
  import { message } from 'ant-design-vue';
  import { SmartLoading } from '/@/components/framework/smartLoading';
  import _ from 'lodash';
  import { categoryApi } from '/@/api/business/category/categoryApi';
  import { smartSentry } from '/@/lib/smartSentry';

  // -----------------  定义 所有变量  -----------------

  // emit
  const emit = defineEmits('reloadList');
  //  组件
  const formRef = ref();
  // 是否展示抽屉
  const visible = ref(false);
  // 查询表单默认值
  const formDefault = {
    categoryId: undefined, //分类id
    categoryName: '', //分类名字
    categoryType: 1, // 分类类型
    parentId: undefined, // 父级id
    disabledFlag: false, //是否禁用
  };
  // 查询表单
  let form = reactive({ ...formDefault });
  // 表单校验规则
  const rules = {
    categoryName: [{ required: true, message: '请输入分类名称' }],
  };

  // -----------------  定义 所有方法 -----------------
  // 显示
  function showModal(categoryType, parentId, rowData) {
    Object.assign(form, formDefault);
    form.categoryType = categoryType;
    form.parentId = parentId;
    if (rowData && !_.isEmpty(rowData)) {
      Object.assign(form, rowData);
    }
    visible.value = true;
  }
  // 隐藏
  function onClose() {
    Object.assign(form, formDefault);
    visible.value = false;
  }

  function onSubmit() {
    formRef.value
      .validate()
      .then(async () => {
        SmartLoading.show();
        try {
          if (form.categoryId) {
            await categoryApi.updateCategory(form);
          } else {
            await categoryApi.addCategory(form);
          }
          message.success(`${form.categoryId ? '修改' : '添加'}成功`);
          emit('reloadList', form.parentId);
          onClose();
        } catch (error) {
          smartSentry.captureError(error);
        } finally {
          SmartLoading.hide();
        }
      })
      .catch((error) => {
        console.log('error', error);
        message.error('参数验证错误，请仔细填写表单数据!');
      });
  }

  defineExpose({
    showModal,
  });
</script>
```

** vue 官方希望是 模块化的组织代码，你看记得官方这个图吗？**

![对比](https://user-images.githubusercontent.com/499550/62783026-810e6180-ba89-11e9-8774-e7771c8095d6.png)

**第一种写法，所有变量写到了一起，就像vue2的 data区域，所有方法写到一起，就像vue2中的 methods区域，这样下来其实和vue2没什么区别，也就语法稍微变了一下，那么就与composition api的初衷违背了**，下面引用官方的话

> 处理相同逻辑关注点的代码被强制拆分在了不同的选项中，位于文件的不同部分。在一个几百行的大组件中，要读懂代码中的一个逻辑关注点，需要在文件中反复上下滚动，这并不理想。另外，如果我们想要将一个逻辑关注点抽取重构到一个可复用的工具函数中，需要从文件的多个不同部分找到所需的正确片段。

**SmartAdmin中的写法才真正做到了vue3组合式composition api的意图，每一块业务的变量与方法写到一起，比如上面代码中的`显示与隐藏`的变量和方法放到了一起，`表单`的变量和方法放到了一起**，下面引用官方的话

> 现在与同一个逻辑关注点相关的代码被归为了一组：我们无需再为了一个逻辑关注点在不同的选项块间来回滚动切换。此外，我们现在可以很轻松地将这一组代码移动到一个外部文件中，不再需要为了抽象而重新组织代码，大大降低了重构成本，这在长期维护的大型项目中非常关键。

## 2.3 模板引用变量Ref

对于vue3中的模板引用ref，即 ref 是作为一个特殊的 attribute

我们要求：

*   使用 ref方法，参数为空 进行声明变量
*   变量必须以 `Ref`为结尾
*   template中的ref 也必须以 `Ref` 为结尾

比如上面的例子，我们声明如下

```
const inputRef = ref();
```

## 2.4 变量和方法的注释

在使用Composition Api进行代码编写时，我们有效的组织了代码，但是由于Composition Api变量和方法会写到一起，这时候注释就变得很有必要 要求：

*   变量必须都加上注释
*   方法必须加上注释 比如

```
  // 查询 公告 默认值
  const queryFormState = {
    noticeTypeId: undefined, //分类
    keywords: '', //标题、作者、来源
    documentNumber: '', //文号
    createUserId: undefined, //创建人
    deletedFlag: undefined, //删除标识
    createTimeBegin: null, //创建-开始时间
    createTimeEnd: null, //创建-截止时间
    publishTimeBegin: null, //发布-开始时间
    publishTimeEnd: null, //发布-截止时间
    pageNum: 1,
    pageSize: PAGE_SIZE,
  };
  // 查询 公告 请求表单
  const queryForm = reactive({ ...queryFormState });
```

# 三、Vue3 组件规范
--------------------------------------------------------------------------------------------------------------------------------

##  3.1、 组件文件名

组件文件名应该为 pascal-case 格式

正例：

```
components
|- MyComponent.vue (强制使用这种)
|- my-component.vue
```

反例：

```
components
|- myComponent.vue
|- mycomponent.vue
```

## 3.2、 父子组件文件名

和父组件紧密耦合的子组件应该以父组件名作为前缀命名 正例：

```
components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue（完整单词）
```

反例：

```
components/
|- TodoList.vue
|- TodoItem.vue
|- TodoButton.vue
|- TodoBtn.vue （使用了缩写）
```

## 3.3、 组件属性

组件属性较多，应该主动换行。

正例：

```
<MyComponent foo="a" bar="b" baz="c"
    foo="a" bar="b" baz="c"
    foo="a" bar="b" baz="c"
 />
```

反例：

```
<MyComponent foo="a" bar="b" baz="c" foo="a" bar="b" baz="c" foo="a" bar="b" baz="c" foo="a" bar="b" baz="c"/>
```

## 3.4、 模板中表达式

组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。复杂表达式会让你的模板变得不那么声明式。我们应该尽量描述应该出现的是什么，而非如何计算那个值。而且计算属性和方法使得代码可以重用。

正例：

```
<template>
  <p>{{ normalizedFullName }}</p>
</template>

// 复杂表达式已经移入一个计算属性
computed: {
  normalizedFullName: function () {
      return this.fullName.split(' ').map(function (word) {
        return word[0].toUpperCase() + word.slice(1)
      }).join(' ')
  }
}
```

反例：

```
<template>
  <p>
       {{
          fullName.split(' ').map(function (word) {
               return word[0].toUpperCase() + word.slice(1)
           }).join(' ')
        }}
  </p>
</template>
```

## 3.5、 标签顺序

单文件组件应该总是让标签顺序保持为 `<script>、<template> 、 <style>`

正例：

```
<script>...</script>
<template>...</template>
<style>...</style>
```

反例：

```
<template>...</template>
<style>...</style>
<script>...</script>
```

# 四、Vue Router 规范
------------------------------------------------------------------------------------------------------------------------

## 4.1、 页面传参

页面跳转，例如 A 页面跳转到 B 页面，需要将 A 页面的数据传递到 B 页面，推荐使用 路由参数进行传参，即 `{query:param}`

正例：

```
let id = ' 123';
this.$router.push({ name: 'userCenter', query: { id: id } });
```

## 4.2、 path 和 name 命名规范

*   path`camelCase`命名规范（尽量与vue文件的目录结构保持一致，因为目录、文件名都是`camelCase`，这样很方便找到对应的文件）
*   path 必须以 / 开头，即使是children里的path也要以 / 开头。如下示例
*   经常有这样的场景：某个页面有问题，要立刻找到这个vue文件，如果不用以/开头，path为parent和children组成的，可能经常需要在router文件里搜索多次才能找到，而如果以/开头，则能立刻搜索到对应的组件
*   name 命名规范采用`CamelCase`命名规范且和component组件名保持一致！（因为要保持keep-alive特性，keep-alive按照component的name进行缓存，所以两者必须高度保持一致）

```
// 动态加载
export const reload = [
  {
    path: '/reload',
    name: 'reload',
    component: Main,
    meta: {
      title: '动态加载',
      icon: 'icon iconfont'
    },

    children: [
      {
        path: '/reload/smartReloadList',
        name: 'SmartReloadList',
        meta: {
          title: 'SmartReload',
          childrenPoints: [
            {
              title: '查询',
              name: 'smartReloadSearch'
            },
            {
              title: '执行reload',
              name: 'smartReloadUpdate'
            },
            {
              title: '查看执行结果',
              name: 'smartReloadResult'
            }
          ]
        },
        component: () =>
          import('@/views/reload/smartReload/smartReloadList.vue')
      }
    ]
  }
];
```

# 五、 Vue 项目规范
--------------------------------------------------------------------------------------------------------------------------------

## 5.1、 目录规范

```
src                               源码目录
|-- api                              所有api接口
|-- assets                           静态资源，images, icons, styles等
|-- components                       公用组件
|-- config                           配置信息
|-- constants                        常量信息，项目所有Enum, 全局常量等
|-- directives                       自定义指令
|-- i18n                             国际化
|-- lib                              外部引用的插件存放及修改文件
|-- mock                             模拟接口，临时存放
|-- plugins                          插件，全局使用
|-- router                           路由，统一管理
|-- store                            vuex, 统一管理
|-- theme                            自定义样式主题
|-- utils                            工具类
|-- views                            视图目录
|   |-- role                             role模块名
|   |-- |-- roleList.vue                    role列表页面
|   |-- |-- roleAdd.vue                     role新建页面
|   |-- |-- roleUpdate.vue                  role更新页面
|   |-- |-- components                      role模块通用组件文件夹
|   |-- employee                         employee模块
```

##  5.2、 api 目录

*   api文件要以api为结尾，比如 `employeeApi.js`、`loginApi.js`，方便查找
*   api文件必须导出对象必须以`Api`为结尾，如：`employeeApi`、`noticeApi`
*   api中以一个对象将方法包裹
*   api中的注释，必须和后端 swagger 文档保持一致，同时保留后端作者
*   注意：业务代码中推荐使用 swagger生成的ts进行扩展，避免重复书写ts

正例：

前端： `departmentApi.js`

```
import { getRequest, postRequest } from '/@/lib/axios';

export const departmentApi = {
  /**
   * @description: 查询部门列表 @author 卓大
   * @param {*}
   * @return {*}
   */
  queryAllDepartment: () => {
    return getRequest('/department/listAll');
  },

  /**
   * @description: 查询部门树形列表 @author 卓大
   * @param {*}
   * @return {*}
   */
   queryDepartmentTree: () => {
    return getRequest('/department/treeList');
  },

  /**
   * @description: 添加部门 @author 卓大
   * @param {*}
   * @return {*}
   */
  addDepartment: (param) => {
    return postRequest('/department/add', param);
  },
  /**
   * @description: 更新部门信息 @author 卓大
   * @param {*}
   * @return {*}
   */
  updateDepartment: (param) => {
    return postRequest('/department/update', param);
  }
};

```

## 5.3、 assets 目录

assets 为静态资源，里面存放 images, styles, icons 等静态资源，静态资源命名格式为 camelCase

```
|assets
|-- icons
|-- images
|   |-- backgroundColor.png
|   |-- uploadHeader.png
|-- styles
```

## 5.4、 components 目录

此目录应按照组件进行目录划分，目录命名为 CamelCase，一个组件必须一个单独的目录 ；
目的：

*   一个组件一个目录是为了将来组件的扩展，因为这是整个项目公用的组件
*   组件入口必须为 index.vue，原因也是因为这是整个项目公用的组件

举例如下：

```
|components
|-- ErrorLog
|   |-- index.vue
|   |-- index.less
|-- MarkdownEditor
|   |-- index.vue
|   |-- index.js

```

## 5.5、 constants 目录

此目录存放项目所有常量和枚举，如果常量在 vue 中使用，请使用 `src/plugin/smartEnumsPlugin.js`插件

具体要求：

*   常量文件要以 `const` 为结尾，比如`loginConst.js`、`fileConst.js`
*   变量要：大写下划线，比如 `LOGIN_RESULT_ENUM`、`LOGIN_SUCCESS`、`LOGIN_FAIL`
*   如果是 枚举，变量必须以 `ENUM`为结尾，如：`LOGIN_RESULT_ENUM`、`CODE_FRONT_COMPONENT_ENUM`

目录结构：

```
|constants
|-- indexConst.js
|-- roleConst.js
|-- employeeConst.js
```

例子： employeeConst.js

```
export const EMPLOYEE_STATUS = {
  NORMAL: {
    value: 1,
    desc: '正常'
  },
  DISABLED: {
    value: 1,
    desc: '禁用'
  },
  DELETED: {
    value: 2,
    desc: '已删除'
  }
};

export const EMPLOYEE_ACCOUNT_TYPE = {
  QQ: {
    value: 1,
    desc: 'QQ登录'
  },
  WECHAT: {
    value: 2,
    desc: '微信登录'
  },
  DINGDING: {
    value: 3,
    desc: '钉钉登录'
  },
  USERNAME: {
    value: 4,
    desc: '用户名密码登录'
  }
};

export default {
  EMPLOYEE_STATUS,
  EMPLOYEE_ACCOUNT_TYPE
};
```

## 5.6、 router 与 store 目录

这两个目录一定要将业务进行拆分，不能放到一个 js 文件里。

`router` 尽量按照 views 中的结构保持一致

`store` 按照业务进行拆分不同的 js 文件

## 5.7、 views 目录

目录要求，按照模块划分，其中具体文件名要求如下：
```bash
# 注意!! 仅服务于当前页面的组件 请放至当前页面文件夹下components(不能拼写有误,否则会被自动注册为路由)
```
*   如果是列表页面，要以list为结尾，如`roleList.vue`、`cacheList.vue`
*   如果是 表单页面，要以 form为结尾，如 `roleForm.vue`、`noticeAddForm.vue`
*   如果是 modal弹窗，要以 modal为结尾，如 表单弹窗 `roleFormModal.vue`，详情 `roleDetailModal.vue`
*   如果是 drawer 抽屉页面，要同上以 `Drawer`为结尾

```
|-- views                                        视图目录
|   |-- role                                     role模块名
|   |   |-- roleList.vue                        role列表页面
|   |   |-- roleAddForm.vue                    role新建页面
|   |   |-- roleUpdateFormModal.vue           role更新页面
|   |   |-- index.less                           role模块样式
|   |   |-- components                           role模块通用组件文件夹
|   |   |   |-- roleTitleModal.vue             role弹出框组件
|   |-- employee                                 employee模块
|   |-- behaviorLog                             行为日志log模块
|   |-- codeGenerator                           代码生成器模块
```
## git 提交注意事项
前端同学使用vscode提交代码时，需关闭npm run的命令终端后，方可使用可视化工具提交代码
```bash
# 注意!! 不关终端会自动编译生成文件 导致eslint校验代码丢失(仅针对于可视化工具，使用命令行同学可忽略此提示)
```
