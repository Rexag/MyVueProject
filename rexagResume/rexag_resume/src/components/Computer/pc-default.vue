<template>
  <div class="default">
    <main class="main">
      <div class="main__item">
        <div class="item__pic">
          <div class="pic__box">
            <img
              class="pic__img"
              :src="user.rexagpic"
              :alt="isChinese ? user.zh_name : user.en_name"
              :title="isChinese ? user.zh_name : user.en_name"
            />
          </div>
        </div>
        <div
          class="item__block"
          :style="{
            transform:
              'scale(1.03) translate(' +
              this.roX +
              'px, ' +
              this.roY +
              'px) rotateX(' +
              this.roX +
              'deg) rotateY(' +
              this.roY +
              'deg)'
          }"
        >
          <span
            class="block__span"
            @mousemove="remousemove"
            @mouseout="remouseout"
            :style="{
              background:
                'radial-gradient(circle at ' +
                this.disX +
                'px ' +
                this.disY +
                'px,' +
                'rgb(255, 255, 255), transparent)'
            }"
          ></span>
          <div class="block-box">
            <h2 class="block__h2">Hello,I'm rexag</h2>
            <strong class="block__strong">我与我周旋久，宁做我</strong>
            <p class="block__p">
              {{ isChinese ? "我是张洪祥" : "I'm hongxiang,zhang" }}
            </p>
            <p class="block__p">
              {{ isChinese ? "一名全栈工程师" : "A Full Stack Engineer" }}
            </p>
          </div>
        </div>
        <div class="hidden"></div>
      </div>
    </main>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      disX: 0,
      disY: 0,
      roX: 0,
      roY: 0
    }
  },
  computed: {
    ...mapGetters({
      isChinese: 'global/rexag/getIsChinese',
      user: 'global/rexag/getUser'
    })
  },
  methods: {
    remousemove (e) {
      var event = e || window.event
      this.disX = event.offsetX - 350
      this.disY = event.offsetY - 140
      this.roX = this.disX / 20
      this.roY = this.disY / 20
    },
    remouseout (e) {
      this.disX = 0
      this.disY = 0
      this.roX = 0
      this.roY = 0
    }
  }
}
</script>
<style scoped>
.default {
  width: 100%;
  height: 100%;
  background: url(/static/img/default-1.jpg);
  background-size: 100% 100%;
}
.picbox {
  width: 600%;
  height: 100%;
  display: flex;
  position: absolute;
}
.picimg {
  width: calc(100% / 6);
  height: 100%;
}
.main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10;
}
.main__item {
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main__item:hover .item__block {
  -webkit-box-shadow: 0 0 50px #333;
  box-shadow: 0 0 50px #333;
  -o-box-shadow: 0 0 50px #333;
  -moz-box-shadow: 0 0 50px #333;
  -ms-box-shadow: 0 0 50px #333;
}
.item__pic {
  height: 200px;
  width: 200%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.pic__box {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  animation: rotateImg 5s linear infinite;
}
@keyframes rotateImg {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.pic__img {
  height: 200px;
  width: 200px;
  border-radius: 50%;
}
.pic__img:hover {
  animation: wave 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  animation-direction: alternate;
  -webkit-animation-direction: alternate;
  -webkit-animation: wave 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  -o-animation: wave 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  -moz-animation: wave 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  -ms-animation: wave 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -o-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  -ms-animation-iteration-count: infinite;
}
@keyframes wave {
  0% {
    box-shadow: 0 0 0 0 rgb(255, 0, 0);
    -o-box-shadow: 0 0 0 0 rgb(255, 0, 0);
    -webkit-box-shadow: 0 0 0 0 rgb(255, 0, 0);
    -ms-box-shadow: 0 0 0 0 rgb(255, 0, 0);
    -moz-box-shadow: 0 0 0 0 rgb(255, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 30px rgba(85, 3, 51, 0);
    -o-box-shadow: 0 0 0 30px rgba(3, 85, 54, 0);
    -webkit-box-shadow: 0 0 0 30px rgba(3, 85, 54, 0);
    -moz-box-shadow: 0 0 0 30px rgba(3, 85, 54, 0);
    -ms-box-shadow: 0 0 0 30px rgba(3, 85, 54, 0);
  }
}
.item__block {
  width: 700px;
  height: 280px;
  color: #000;
  overflow: hidden;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  box-shadow: none;
}
.item__block:hover {
  -webkit-box-shadow: 0 0 70px #111;
  box-shadow: 0 0 70px #111;
  -o-box-shadow: 0 0 70px #111;
  -moz-box-shadow: 0 0 70px #111;
  -ms-box-shadow: 0 0 70px #111;
}
.block-box {
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.block__span {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 999;
  opacity: 0;
}
.block__span:hover {
  opacity: 0.4;
}
.block__h2 {
  height: 108px;
  color: rgb(0, 0, 0);
  font-family: myFristFont, SimSun, sans-serif;
  font-size: 70px;
  line-height: 108px;
  white-space: nowrap;
}
.block__strong {
  height: 40px;
  line-height: 40px;
  font-size: 25px;
}
.block__p {
  font-size: 20px;
  height: 40px;
  line-height: 40px;
  color: inherit;
}
.hidden {
  height: 200px;
  width: 100%;
}
</style>
