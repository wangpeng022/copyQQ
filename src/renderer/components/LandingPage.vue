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
      <div class="left"></div>
      <div class="middle">
        <Input v-model="value" placeholder="QQ号码/手机号码/邮箱" style="width: 193px"></Input>
        <br/>
        <Input v-model="value" placeholder="密码" style="width: 193px"></Input>
        <br/>
        <Checkbox v-model="single">记住密码</Checkbox>
        <Checkbox v-model="single">自动登录</Checkbox>
      </div>
      <div class="right">
        <span>注册账号</span>
        <span>找回密码</span>
      </div>
    </main>
    <footer>
      <div class="left"></div>
      <div class="middle"></div>
      <div class="right"></div>
    </footer>
  </div>
</template>

<script>
import {Button,Input} from 'iview'
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
    background:#EBF2F9;
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
  }
  .btns i{
    padding: 0 4px;
    -webkit-app-region: no-drag;
  }
  .btns i:hover{
    color: #fff;
  }
  main{
    padding: 10px;
  }
  main .left{
    padding-left: 35px;
    height: 77px;
    width: 77px;
    border-radius: 50%;
    background: url("../../../static/imgs/polifile.jpg") center center;
  }
</style>
