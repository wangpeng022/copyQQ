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
                    </div>
                </li>
            </ul>
        </aside>
        <main>
            右
        </main>
    </div>
</template>
<script>
    export default {
        data () {
            return {

            }
        }
    }
</script>
<style scoped>
    .message{
        width: 100%;
        height: 100%;
    }
    aside{
        width: 250px;
        height: 100%;
        background-color: #fafafa;
        overflow-x: hidden;
        overflow-y: auto;
        scrollbar-base-color: transparent;
        scrollbar-darkshadow-color: transparent;
        scrollbar-highlight-color: transparent;
        scrollbar-face-color: transparent;
    }
    aside:hover{
        /* overflow-y: auto; */
    }
    aside ul{
        width: 100%;

    }
    aside ul li{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 60px;
    }
    aside ul li:hover{
        background-color: #EBEBEC;
    }
    aside ul li .poli{
        height: 44px;
        width: 44px;
        margin: 5px 10px;
        border-radius: 50%;
        background: url("https://i.loli.net/2017/08/21/599a521472424.jpg") center center;
        -webkit-app-region: no-drag;
        background-size: 100% 100%;
        border: 1px solid rgba(0, 0, 0, 0);
        box-sizing: content-box;
    }
    aside ul li .cont{
        padding: 10px 0 15px 0;
        width: 130px;
    }
    aside ul li .cont h3{
        color: #000;
    }
    aside ul li .cont .dsc{
        color: rgb(142, 142, 148);
        font-size: 12px;
    }
    aside ul li .right{
        width: 45px;
    }
    aside ul li .right .time{
        padding: 10px 0 15px 0;
        margin-right: 10px;

    }
</style>