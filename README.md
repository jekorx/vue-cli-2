# vue-cli-2
> vue-cli@2.9.x 为基础，升级webpack到4.16.x，vue到2.5.17，并且使用stylus和pug

## Build Setup
``` bash
# install dependencies
yarn
# serve with hot reload at localhost:9510
yarn dev
# build for production with minification
yarn build
# build for production and view the bundle analyzer report
npm run build --report
```

## Tech Stack
1、[axios](https://github.com/axios/axios)，基于Promise的HTTP客户端，用于浏览器和node.js  
2、[qs](https://github.com/ljharb/qs)，查询字符串解析和字符串化库，增加了一些安全性  
3、[vue](https://cn.vuejs.org)  
4、[vue-router](https://router.vuejs.org/zh)  

## Directory Structure
```bash
├─ .babelrc # babel配置
├─ .editorconfig # 编辑器配置
├─ .eslintignore # 校验忽略
├─ .eslintrc.js # 校验配置
├─ .gitattributes # git属性
├─ .gitignore # git提交忽略
├─ .postcssrc.js # postcss配置
├─ README.md
├─ index.html # 默认html模版
├─ package.json
├─ yarn.lock
├─ static #静态资源
├─ build # webpack相关配置
├─ config # webpack部分配置项
└─ src # 源代码
     ├─ api # 请求api
     │    └─ index.js # axios相关配置
     ├─ assets # 相关资源
     │    ├─ images # 资源图片
     │    └─ styles # 样式
     ├─ components # 自定义组件
     ├─ router # 路由
     │    └─ index.js # 路由相关配置
     ├─ store # vuex仓库
     │    └─ index.js # 基础状态、整合
     ├─ layouts # 布局
     │    └─ index.vue
     ├─ pages # 相关页面
     │    └─ index.vue
     └─ main.js # 入口文件
```
