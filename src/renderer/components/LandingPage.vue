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
      <div class="left">
        <div class="poli"></div>
      </div>
      <div class="middle">
        <Input v-model="value" id="username" placeholder="QQ号码/手机号码/邮箱" style="width: 193px"></Input>
        <br/>
        <Input v-model="value" id="password" placeholder="密码" style="width: 193px"></Input>
        <br/>
        <Checkbox id="remb_pw" v-model="single">记住密码</Checkbox>
        <Checkbox id="auto_login" v-model="single">自动登录</Checkbox>
      </div>
      <div class="right">
        <span>注册账号</span>
        <span>找回密码</span>
      </div>
    </main>
    <footer>
      <div class="left">

      </div>
      <div class="middle">

      </div>
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
    margin: 5px;
    height: 330px;
    width: 430px;
    background:#EBF2F9;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 0 7px rgba(0,0,0,0.3);
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
    display: flex;
    padding: 10px;
  }
  main .left{
    padding-left: 35px;
    flex: 1;
  }
  main .left .poli{
    height: 77px;
    width: 77px;
    border-radius: 50%;
    background: url("../../../static/imgs/polifile.jpg") center center;
    -webkit-app-region: no-drag;
    background-size: 100% 100%;
  }
  main .middle{
    flex: 2;
  }
  main .right{
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 5px 0 30px 10px;
    justify-content: space-between
  }
  main .middle #username,main .middle #password,#remb_pw,#auto_login, main .right span{
    -webkit-app-region: no-drag;
  }
  #auto_login{
    margin: 4px 0 0 53px;
  }
  main .right span{
    color: #2786E4;
    -webkit-app-region: no-drag;
  }
  main .right span:hove{
    color: #97C3EF;
  }
</style>
