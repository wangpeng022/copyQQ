<template>
  <div id="wrapper">
    <div class="head">
      <div class="btns">
        <i class="iconfont icon-jiantouxia"></i>
        <i class="iconfont icon-zuixiaohua1"></i>
        <i class="iconfont icon-guanbi"></i>
      </div>
    </div>
    <main>

    </main>
  </div>
</template>

<script>
  export default {
    name: 'landing-page',
    components: {  },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #wrapper {
    background:
      /* radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      ); */
      #c6c6c6;
    height: 330px;
    width: 430px;
    border-radius: 4px;
    overflow: hidden;
  }
  .head{
    width: 100%;
    height: 180px;
    background: url("../../../static/imgs/loginLogo.png") no-repeat;
    background-size: 100% 100%;
  }
  .btns{
    float: right;
    padding: 10px;
    cursor: default;
    -webkit-app-region: no-drag;
  }
  .btns i{
    padding: 0 4px;
    z-index: 2;
  }
  .btns i:hover{
    color: #fff;
  }
</style>
