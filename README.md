# vue-cli-multipage

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

# 主要功能

```
- 使用了vue-router路由，多页面多路由不冲突
- 使用了vuex状态管理
- 使用axios库，简单封装了一个库
- 使用了eslint代码规范检测 默认关闭 打开在vue.config.js中设置lintOnSave: true
- 配置了css预设器配置项
```
  暂时并没有将UI组件库使用进来，原因是这是一个多页面多路由的vue-cli3初始化包，如果需要可以自行安装即可。
```
- 如果你要做APP那么可以考虑看看我 [vue-cli3-app-init](https://github.com/bonjour520/vue-cli3-app-init) 里面安装的插件、配置文件以及推荐的UI组件
- 如果你要做web那么可以考虑看看我 [vue-cli3-web-init](https://github.com/bonjour520/vue-cli3-web-init) 里面安装的插件、配置文件以及推荐的UI组件
```
  当然，有了这个初始包之后，你可以自由发挥。O(∩_∩)O~