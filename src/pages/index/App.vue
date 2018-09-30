<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">home</router-link> | 
      <router-link to="/about">about</router-link> |
      <a href="/page1.html">page1</a> | 
      <a href="/page2.html">page2</a> 
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
