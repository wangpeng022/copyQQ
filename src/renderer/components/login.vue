<template>
  <transition-group name="oppo" mode="ease-in-out">
    <div id="wrapper" :class="{move:ctrl_change}" v-show="ctrl_change" :key="123">
      <div class="head">
        <div class="btns">
          <i class="iconfont icon-jiantouxia" @click="change"></i>
          <i class="iconfont icon-zuixiaohua1" @click="min"></i>
          <i class="iconfont icon-guanbi" @click="close"></i>
        </div>
      </div>
      <main>
        <div class="left">
          <div class="poli"></div>
        </div>
        <div class="middle">
          <Input v-model="username" id="username" placeholder="QQ号码/手机号码/邮箱" style="width: 193px"></Input>
          <br/>
          <Input v-model="password" id="password" placeholder="密码" style="width: 193px"></Input>
          <br/>
          <div class="check">
            <Checkbox id="remb_pw" v-model="remb_pw">记住密码</Checkbox>
            <Checkbox id="auto_login" v-model="auto_login">自动登录</Checkbox>
          </div>
        </div>
        <div class="right">
          <span>注册账号</span>
          <span>找回密码</span>
        </div>
      </main>
      <footer>
        <div class="left">
          <i class="iconfont icon-tianjialianxiren"></i>
        </div>
        <div class="middle">
          <span class="btnLg" @click="openMainPage">登&nbsp;&nbsp;&nbsp;&nbsp;录</span>
        </div>
        <div class="right">
          <i class="iconfont icon-erweima1" @click="showCodeImg"></i>
        </div>
      </footer>
      <div class="codeImg" v-show="codeImg">
        <p>用<a href="#">TIM手机版</a>扫描二维码安全登录</p>
        <div class="img" :class="{'move':imgMove}" @mouseover="moveStart" @mouseout="moveEnd">
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <div class="btnLg" @click="closeCodeImg">返&nbsp;&nbsp;&nbsp;&nbsp;回</div>
      </div>
    </div>
    <div class="back" v-show="!ctrl_change" :key="321">
      <div class="head">
        <div class="btns">
          <i class="iconfont icon-zuixiaohua1" @click="min"></i>
          <i class="iconfont icon-guanbi" @click="close"></i>
        </div>
        <main>
          <p>lalalallalaalallaalalalal</p>
          <p>lalalallalaalallaalalalal</p>
          <p>lalalallalaalallaalalalal</p>
          <p>lalalallalaalallaalalalal</p>
        </main>
      </div>
      <footer>
        <i-button id='do_btn' @click="change" style="-webkit-app-region: no-drag;">取消</i-button>
        <i-button id='canl_btn' @click="change" style="-webkit-app-region: no-drag;">确定</i-button>
      </footer>
    </div>
  </transition-group>
</template>

<script>
import { Button, Input } from "iview";
import electron from "electron";
import mainPage from './mainPage.vue'
const ipc = require("electron").ipcRenderer;
const BrowserWindow = require("electron").remote.BrowserWindow;
const path = require("path");
export default {
  name: "login",
  components: {},
  data() {
    return {
      username: "",
      password: "",
      remb_pw: "",
      auto_login: "",
      ctrl_change: 1,
      codeImg: 0,
      imgMove: 0
    };
  },
  methods: {
    min() {
      ipc.send("window-min");
    },
    close() {
      ipc.send("window-close");
    },
    change() {
      this.ctrl_change = !this.ctrl_change;
    },
    openMainPage(){
      // console.log(winW);
      ipc.send("window-resize");
      this.$router.push("/mainPage")
    },
    showCodeImg(){
      this.codeImg = 1;
    },
    closeCodeImg(){
      this.codeImg = 0;
    },
    moveStart(){
      this.imgMove = 1;
    },
    moveEnd(){
      this.imgMove = 0;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");
#wrapper,.back{
  position: absolute;
  margin: 5px;
  height: 330px;
  width: 430px;
  background: #ebf2f9;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
  -webkit-backface-visibility: hidden;
  -webkit-app-region: drag;
}
#wrapper .head{
  width: 100%;
  height: 180px;
  background: url("../../../static/imgs/loginLogo.png") no-repeat;
  background-size: 100% 100%;
}
#wrapper .btns,.back .btns{
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  cursor: default;
  z-index: 50;
}
#wrapper .btns i,.back .btns i{
  margin: 0 2px;
  padding: 0 2px;
  -webkit-app-region: no-drag;
}
#wrapper .btns i:hover,.back .btns i:hover {
  color: #fff;
}
#wrapper .btns i.icon-guanbi:hover,.back .btns i.icon-guanbi:hover  {
  background-color: #fc4a2d;
  border-radius: 2px;
}
#wrapper main {
  display: flex;
  padding: 10px;
}
#wrapper main .left {
  padding-left: 35px;
  flex: 1;
}
#wrapper main .left .poli {
  height: 77px;
  width: 77px;
  border-radius: 50%;
  background: url("../../../static/imgs/polifile.jpg") center center;
  -webkit-app-region: no-drag;
  background-size: 100% 100%;
}
#wrapper main .middle {
  flex: 2;
}
#wrapper main .right {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 5px 0 30px 10px;
  justify-content: space-between;
}
#wrapper main .middle #username,
#wrapper main .middle #password,
#remb_pw,
#auto_login,
#wrapper main .right span {
  -webkit-app-region: no-drag;
}
#remb_pw,
#auto_login {
  display: inline-block;
  color: rgb(161, 164, 167);
}
.check{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 193px;
  height: 17px;
  margin-top: 5px;
}
/* #auto_login {
  margin: 4px 0 0 53px;
} */
#wrapper main .right span {
  color: #2786e4;
  -webkit-app-region: no-drag;
}
#wrapper main .right span:hove {
  color: #97c3ef;
}
#wrapper footer {
  display: flex;
  height: 40px;
  padding: 0 10px;
}
#wrapper footer .left {
  padding-left: 35px;
  flex: 1;
}
#wrapper footer .right {
  flex: 1;
}
#wrapper footer .middle {
  flex: 2;
  display: flex;
}

#wrapper .btnLg{
  line-height: 30px;
  -webkit-app-region: no-drag;
  background-color: #00a3ff;
  border-radius: 4px;
  text-align: center;
  color: #fff;
  cursor: pointer;
}
#wrapper footer .middle .btnLg{
  flex: 1;
  margin-bottom: 10px;
}
#wrapper .codeImg{
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 70px 0 45px;
}
#wrapper .codeImg p{
  color: #000;
  font-size: 13px;
}
#wrapper .codeImg .img{
  -webkit-app-region: no-drag;
  width: 100%;
  height: 100%;
}
#wrapper .codeImg .img .left{
  position: absolute;
  top: 108px;
  left: 135px;
  width: 120px;
  height: 130px;
  margin: 20px;
  background: url("../../../static/imgs/code.png") center center no-repeat;
  transition: left .5s;
}
#wrapper .codeImg .img .right{
  position: absolute;
  top: 100px;
  right: 44px;
  opacity: 0;
  width: 170px;
  height: 180px;
  background: url("../../../static/imgs/codeR.png") center center no-repeat;
  transition: opacity .3s;
}
#wrapper .codeImg .img.move .left{
  left: 63px;

}
#wrapper .codeImg .img.move .right{

  opacity: 1;
}
#wrapper .codeImg .btnLg{
  position: absolute;
  bottom: 12px;
  left: 117px;
  width: 196px;
  /* padding: 0; */
}


#wrapper .btnLg:hover {
  background-color: #3cc3f5;
}
#wrapper footer .left i,
#wrapper footer .right i {
  -webkit-app-region: no-drag;
  font-size: 20px;
  height: 25px;
  color: rgb(107, 109, 112);
  vertical-align: bottom;
  margin-top: 10px;
  padding: 0 4px;
}
#wrapper footer .left i:hover,
#wrapper footer .right i:hover {
  background: #d8dfe5;
}
#wrapper footer .left i {
  float: left;
  margin-left: -35px;
}
#wrapper footer .right i {
  float: right;
  font-size: 18px;
}
#wrapper .codeImg{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(255, 255, 255, 0)0%, #EBF2F9 15%);
}

/* 背面 */
.back{
  border-bottom: 1px solid #A0B1BE;
}
.back .head{
  width: 100%;
  height: 297px;
  background:  linear-gradient(rgba(255, 255, 255, 0)0%, #EBF2F9 17%) ,url("../../../static/imgs/loginLogo.png") no-repeat;
  background-size: 100% 100%;
}
.back .head main{
  position: absolute;
  top: 65px;
  left: 0;
  width: 100%;
  height: 100%-97px;
  padding: 0 20px;
}
.back footer{
  position: absolute;
  bottom: 0;
  height: 33px;
  width: 430px;
  background-color: #CDE2F2;
  /* border-bottom: 1px solid #A0B1BE; */
}
.back footer #do_btn,.back footer #canl_btn{
  width: 65px;
  height: 25px;
  float: right;
  margin: 3px 10px;
  padding: 3px 15px;
}
/* 动画开始 */
#app .oppo-enter-active,
#app .oppo-leave-active {
    transition: all .8s;
}

#app .oppo-enter,
#app .oppo-leave-to {
    transform: rotateY( -180deg ) scale(.8);
    opacity: 0 ;
}
/* 动画结束 */

</style>
