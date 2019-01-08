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
- 如果你要做APP那么可以考虑看看我 [vue-cli3-app-init](https://github.com/bonjour520/vue-cli3-app-init) 里面安装的插件、配置文件以及推荐的UI组件
- 如果你要做web那么可以考虑看看我 [vue-cli3-web-init](https://github.com/bonjour520/vue-cli3-web-init) 里面安装的插件、配置文件以及推荐的UI组件
  当然，有了这个初始包之后，你可以自由发挥。O(∩_∩)O~

# 多页面多路由使用了两种方案  

  你可以根据自己爱好选择其中一种，文件配置目录在vue.config.js中
  
## dist打包目录
- 第一种

```
 dist
  ├─about
  │  └─js
  ├─chunk-vendors
  │  └─js
  ├─img
  ├─index
  │  ├─css
  │  └─js
  ├─page1
  │  ├─css
  │  └─js
  └─page2
      ├─css
      └─js
```
- 第二种

```
dist
  ├─css
  │  └─index.bc622c39.css
  │  └─page1.aaf0ae55.css
  │  └─page2.db92da3f.css
  ├─js
  |  └─about.1644de76.js
  |  └─chunk-vendors.19368321.js
  |  └─index.31851ae9.js
  |  └─page1.0c42efc5.js
  |  └─page2.06218d45.js
  ├─img
  |  └─logo.82b9c7a5.png
  ├─favicon.ico
  ├─index.html
  ├─page1.html
  └─page2.html
```

## 2019年1月8日09:27:58 更新功能

- 配置热启动，应有需要的朋友要求，就给配置上了，如果你不喜欢（我就不是很喜欢~哈哈~），可以package.json中将serve: "vue-cli-service serve --open" 中的 "--open"删除即可