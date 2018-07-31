<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'copyqq'
  }
</script>

<style>
html, body {
    background: rgba(0, 0, 0, 0);
}
  body {
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-app-region: drag;
    -webkit-user-select: none;
  }
  .iconfont{
    color: rgb(170, 174, 190);
    font-size: 12px;
  }
  .a:hover{
    color: pink;
  }
</style>
