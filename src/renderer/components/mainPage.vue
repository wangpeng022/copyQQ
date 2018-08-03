<template>
    <div class="content" ref="content">
        <header>
            <div class="before">
                <div class="poli"></div>
                <div class="search">
                    <div class="searchS">
                        <i class="iconfont icon-sousuo"></i>
                    </div>
                </div>
            </div>
            <div class="bar">
                <router-link to="/message">
                    <i class="iconfont icon-xiaoxi"></i>
                </router-link>
                <router-link to="/friends">
                    <i class="iconfont icon-icon-p_lianxirenguanli"></i>
                </router-link>
                <router-link to="/cloudFiles">
                    <i class="iconfont icon-wenjian1"></i>
                </router-link>
            </div>
            <div class="btns">
                <i class="iconfont icon-caidan1"></i>
                <i class="iconfont icon-zuixiaohua1" @click="min"></i>
                <i class="iconfont icon-fangxing" @click="max"></i>
                <i class="iconfont icon-guanbi" @click="close"></i>
            </div>
        </header>
        <main ref="mainP">
            <router-view></router-view>
        </main>
    </div>
</template>
<script>
import {Input} from 'iview'
const ipc = require("electron").ipcRenderer;
const BrowserWindow = require("electron").remote.BrowserWindow;
const path = require("path");
export default {
  name: "mainPage",
  data() {
    return {
        isMax: 0,
        winHight: 200
    };
  },
  computed: {
        },
  methods: {
    min() {
      ipc.send("window-min");
    },
    max() {
        if (this.isMax) {
            ipc.send("window-unmax");
            this.isMax = 0;
        }else{
            ipc.send("window-max");
            this.isMax = 1;
        }
    },
    close() {
      ipc.send("window-close");
    },
    setH(){
        this.winHight = document.documentElement.clientHeight;
        this.$refs.content.style.height = this.winHight-10 + 'px';
    }
  },
  mounted () {
    this.setH();
    window.onresize = ()=> {
        this.setH();
    };
  }
};
</script>
<style scoped>
.content ::-webkit-scrollbar { width: 8px; height: 8px; }
.content ::-webkit-scrollbar-thumb { -webkit-border-radius: 5px; background: #cecaca; border: none; }
.content ::-webkit-scrollbar-thumb:vertical:hover { background-color: #969696; border: none; }
.content ::-webkit-scrollbar-thumb:hover { background-color: #969696; border: none; }
.content {
    position: relative;
    /* width: 755px; */
    /* height: 602px; */
    width: calc(100%-10px);
    padding-top: 55px;
    margin: 5px;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
    /* background-color: #c2c2c2; */
}
.content header {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 55px;
    background: url("../../../static/imgs/header1.png") no-repeat;
    background-size: 100% 100%;
    -webkit-app-region: drag;
}
.content header .before{
    display: flex;
    width: 210px;
}
.content header .before .poli{
    height: 44px;
    width: 44px;
    margin: 5px 10px;
    border-radius: 50%;
    background: url("../../../static/imgs/polifile.jpg") center center;
    -webkit-app-region: no-drag;
    background-size: 100% 100%;
    border: 1px solid rgba(0, 0, 0, 0);
    box-sizing: content-box;
}
.content header .before .poli:hover{
    border: 1px solid #fff;
}
.content header .before .search{

}
.content header .before .searchS{
    height: 24px;
    width: 95px;
    margin: 15px 18px;
    border-radius: 12px;
    border: 1px solid rgb(145, 190, 224);
    -webkit-app-region: no-drag;
}
.content header .before .searchS:hover{
    border: 1px solid #fff;
}
.content header .before .searchS:hover i{
    color: #fff;
}
.content header .before .searchS i{
    padding: 4px 6px;
    font-size: 16px;
}
.content header .bar{
    width: 200px;
    text-align: center;
    padding-top: 15px;
}
.content header .bar i{
    position: relative;
    font-size: 26px;
    color: #A7D5FA;
    padding: 0 10px;
    -webkit-app-region: no-drag;
}
.content header .bar .router-link-active i{
    color: #fff;
}
.content header .bar .router-link-active i::after{
    position: absolute;
    bottom: -5px;
    left: 15px;
    content: '';
    width: 0;
    height: 0;
    border-width: 0 6px 6px;
    border-style: solid;
    border-color: transparent transparent #fff;
}
.content header .bar i:hover{
    color: #fff;
}
/* .content header .bar a{
    -webkit-app-regin: no-drag;
} */
.content header .btns{
  margin-left: 70px;
  width: 120px;
  padding: 16px 10px;
  cursor: default;
}
.content header .btns i{
  margin: 0 2px;
  padding: 0 2px;
  font-size: 13px;
  -webkit-app-region: no-drag;
}
.content header .btns i:hover{
  color: #fff;
}
.content header .btns i.icon-guanbi:hover{
  background-color: #fc4a2d;
  border-radius: 2px;
}
.content main{
    width: 100%;
    height: 100%;
    background-color: #fff;
}
</style>