<template>
    <div class="message">
        <aside>
            <ul>
                <li v-for="item in 36" :key="item">
                    <div class="poli"></div>
                    <div class="cont">
                        <h3>Electron交流群</h3>
                        <div class="dsc">
                            这个问题怎么解决？
                        </div>
                    </div>
                    <div class="right">
                        <div class="time">
                            17:07
                        </div>
                        <div class="close">
                            <i class="iconfont icon-guanbi1" @click=""></i>
                        </div>
                    </div>
                </li>
            </ul>
        </aside>
        <main>
            <div class="emp" v-show="!activeArr.length"></div>
            <div class="content" v-show="activeArr.length">
                <!-- <div v-emotion="'我的/微笑'"></div> -->
                <div class="dialog">
                    <header>
                        <div class="name" v-text="curConversation.name">
                        </div>
                        <div class="btns">
                            <i class="iconfont icon-yuanchengxiezhu" @click=""></i>
                            <i class="iconfont icon-tonghua" @click=""></i>
                            <i class="iconfont icon-tianjialianxiren" @click=""></i>
                            <i class="iconfont icon-shezhi" @click=""></i>
                        </div>
                    </header>
                </div>
                <div class="edit">
                    <header>
                        <div class="btns">
                            <i class="iconfont icon-wenzi1" @click=""></i>
                            <a href="javascript:void(0);" @blur="emShow=0;"><i class="iconfont icon-buoumaotubiao49" @click="emotions" ></i></a>
                            <i class="iconfont icon-jietu" @click=""></i>
                            <i class="iconfont icon-zhendong" @click=""></i>
                            <i class="iconfont icon-yuyin" @click=""></i>
                            <i class="iconfont icon-tupian" @click=""></i>
                            <i class="iconfont icon-wenjian2" @click=""></i>
                        </div>
                        <div class="msgHistory">
                            <span>消息记录</span>
                            <i class="iconfont icon-jiantouxia" @click=""></i>
                        </div>
                    </header>
                    <!-- <Input id="textInput" v-model="value6" type="textarea" :rows="4"></Input> -->
                    <textarea name="" id="textInput" v-model="textContent" cols="30" rows="10"></textarea>
                </div>
            </div>
        </main>
        <div class="emo" v-show="emShow">
                <img v-for="item in 104" :key="item" :src="'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/'+item+'.gif'" alt="">
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      activeArr: [
        {
          name: "张三",
          ownerAvatarUrl:
            "http://wx1.sinaimg.cn/mw690/0060lm7Tly1fu91ubqwevj30ku0kr3z3.jpg",
          contactAvatarUrl: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          wxChatData: [
            {
              direction: 2,
              id: 1,
              type: 1,
              content: "你好!!/呲牙",
              ctime: new Date().toLocaleString()
            }
          ]
        }
      ],
      curConversation: "",
      emShow: "",
      textContent: ""
    };
  },
  methods: {
    emotions() {
      if (this.emShow == 1) {
        this.emShow = 0;
      } else {
        this.emShow = 1;
      }
    },
    //选择表情
    selectEmo(){

    }
  },
  mounted() {
    this.curConversation = this.activeArr[0];
  }
};
</script>
<style scoped lang='less'>
.message {
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: 250px;
  .emo {
    position: absolute;
    left: 253px;
    bottom: 25%;
    width: 460px;
    height: 300px;
    border-radius: 5px;
    margin: 5px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
    background: #fff;
    img {
      padding: 4px;
      &:hover {
        background: #f2f2f2;
      }
      &:active {
        background: #e5e5e5;
      }
    }
  }
}
aside {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 250px;
  height: 100%;
  background-color: #fafafa;
  overflow-x: hidden;
  overflow-y: auto;
}
aside ul {
  width: 100%;
  li {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    &:hover {
      background-color: #ebebec;
    }
    &:hover .right .time {
      display: none;
    }
    &:hover .right .close i {
      display: block;
    }
    .poli {
      height: 44px;
      width: 44px;
      margin: 5px 10px;
      border-radius: 50%;
      background: url("https://i.loli.net/2017/08/21/599a521472424.jpg") center
        center;
      -webkit-app-region: no-drag;
      background-size: 100% 100%;
      border: 1px solid rgba(0, 0, 0, 0);
      box-sizing: content-box;
    }
    .cont {
      padding: 10px 0 15px 0;
      width: 130px;
      h3 {
        color: #000;
      }
      .dsc {
        color: rgb(142, 142, 148);
        font-size: 12px;
      }
    }
    .right {
      position: relative;
      width: 45px;
      .time {
        padding: 10px 0 15px 0;
        margin-right: 10px;
      }
    }
    .close i {
      position: absolute;
      top: 30%;
      right: 5px;
      font-size: 17px;
      color: #757373;
      display: none;
      &:hover {
        color: #d43a20;
      }
    }
  }
}
main {
  display: inline-block;
  width: 100%;
  height: 100%;
  .emp {
    display: block;
    width: 100%;
    height: 100%;
    background: url("../../../static/imgs/empBg.png") center center no-repeat;
  }
  .content {
    width: 100%;
    height: 100%;
  }
}

main .content .dialog,
main .content .edit {
  width: 100%;
  padding: 10px;
  border-bottom: #eaeaea 1px solid;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: #eaeaea 1px solid;
    height: 40px;
    .name {
      font-size: 20px;
      font-weight: 600;
      color: #000;
      //   margin: 8px 0 0 20px;
    }
    .btns {
      line-height: 40px;
    }
    .btns i {
      color: #727272;
      font-size: 18px;
      padding: 2px;
      margin: 0 4px;
      &:hover {
        background: #f2f2f2;
      }
      &:active {
        background: #e5e5e5;
      }
    }
  }
}
main .content .dialog {
  height: 75%;
}
main .content .edit {
  height: 25%;
  padding-top: 0;
  header {
    border: none;
    .msgHistory {
      line-height: 20px;
      padding: 0 5px;
      border-radius: 4px;
      &:hover {
        background: #f2f2f2;
      }
      &:active {
        background: #e5e5e5;
      }
      span,
      i {
        position: relative;
        cursor: pointer;
        &:active {
          top: 1px;
        }
      }
    }
  }
}
#textInput{
    height: 83px;
    width: 100%;
    border: none;
    outline:none;
    font-size: 14px;
}
</style>