<template>
  <div class="rexag__skill">
    <header class="skill__header">
      <h2 class="header__h2">{{ isChinese ? "技能栈" : "Skill Stack" }}</h2>
    </header>
    <div class="main__wave"></div>
    <main class="skill__main" :style="{ left: seaLeft + 'vw' }">
      <div class="main__sea">
        <div class="bg__ship"></div>
        <div class="bg__algae-a algae-1"></div>
        <div class="bg__algae-a algae-2"></div>
        <div class="bg__algae-a algae-3"></div>
        <div class="bg__algae-b algae-4"></div>
        <div class="bg__algae-b algae-5"></div>
        <div class="bg__algae-b algae-6"></div>
        <div class="bg__algae-c algae-7"></div>
        <div class="bg__algae-c algae-8"></div>
        <div class="bg__algae-c algae-9"></div>
        <div class="bg__coral coral-1"></div>
        <div class="bg__coral coral-2"></div>
        <div class="bg__coral coral-3"></div>
        <div class="bg__cloud cloud-1"></div>
        <div class="bg__cloud cloud-2"></div>
        <div class="bg__cloud cloud-3"></div>
        <div class="bg__seabed">
          <div class="seabed__div" :style="{ opacity: opacity }">
            <p class="seabed__p">用 鼠标滚轮 控制潜水艇移动进行查看</p>
            <p class="seabed__p">如手机观看请拖动潜水艇左右滑动</p>
          </div>
        </div>
      </div>
      <div class="main__skill">
        <div class="skill__box">
          <skill
            skillName="getFontEnd"
            picName="octopu.png"
            picWidth="80"
            picHeight="90"
          ></skill>
          <skill
            skillName="getBackEnd"
            picName="fish.png"
            picWidth="100"
            picHeight="70"
          ></skill>
          <skill
            skillName="getOtherSkill"
            picName="seal.png"
            picWidth="120"
            picHeight="80"
          ></skill>
        </div>
      </div>
      <div class="main__submarine" :style="{ left: submarineLeft + 'vw' }">
        <div
          class="submarine__slides"
          :style="{ top: moveDirection ? '0px' : '-200px' }"
        ></div>
      </div>
    </main>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import skill from '@/components/common/skill'
export default {
  data () {
    return {
      opacity: 0,
      timer: null,
      seaLeft: 0,
      submarineLeft: 0,
      moveDirection: true
    }
  },
  watch: {
    leftVale (old, newd) {
      if (old !== newd) {
        if (this.timer) {
          this.moveSubmarine()
        }
        this.seaLeft = -newd[0]
        this.submarineLeft = newd[1]
        if (old[0] < newd[0]) {
          this.moveDirection = false
        }
        if (old[0] > newd[0]) {
          this.moveDirection = true
        }
      }
    }
  },
  components: {
    skill
  },
  computed: {
    ...mapGetters({
      isChinese: 'global/rexag/getIsChinese',
      user: 'global/rexag/getUser',
      leftVale: 'global/rexag/getLeftVale'
    })
  },
  mounted () {
    this.showTips()
  },
  methods: {
    changeOpcity () {
      if (this.opacity === 0) {
        this.opacity = 1
      } else {
        this.opacity = 0
      }
    },
    showTips () {
      clearInterval(this.timer)
      this.timer = setInterval(this.changeOpcity, 1000)
    },
    moveSubmarine () {
      this.opacity = 0
      clearInterval(this.timer)
    }
  },
  beforeDestroy () {
    this.moveSubmarine()
  }
}
</script>
<style scoped>
.rexag__skill {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: url(/static/img/bg.png) rgb(171, 223, 201);
}
.skill__header {
  width: 100%;
  height: 200px;
}
.header__h2 {
  width: 100%;
  height: 100%;
  color: rgb(255, 255, 255);
  font-size: 40px;
  line-height: 200px;
  font-weight: bold;
  text-align: center;
  z-index: 99;
  position: relative;
}
.skill__main {
  width: 300vw;
  height: calc(100% - 222px);
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
}
.main__wave {
  width: 100%;
  height: 22px;
  position: relative;
  top: 4px;
  background-image: url(/static/img/sea-wave.png);
}
.main__sea {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  background-color: #054d2e;
}
.bg__ship {
  width: 600px;
  height: 180px;
  position: absolute;
  left: 200px;
  top: -135px;
  background-size: 100% 100%;
  background-image: url(/static/img/ship-1.png);
}
.bg__algae-a {
  width: 90px;
  height: 244px;
  position: absolute;
  background-size: 100% 100%;
  background-image: url(/static/img/algae-a.png);
}
.algae-1 {
  left: 100px;
  bottom: 90px;
}
.algae-2 {
  left: 108vw;
  bottom: 90px;
}
.algae-3 {
  left: 287vw;
  bottom: 90px;
}
.bg__algae-b {
  width: 110px;
  height: 170px;
  position: absolute;
  background-size: 100% 100%;
  background-image: url(/static/img/algae-b.png);
}
.algae-4 {
  left: 1400px;
  bottom: 90px;
}
.algae-5 {
  left: 113vw;
  bottom: 90px;
}
.algae-6 {
  left: 250vw;
  bottom: 90px;
}
.bg__algae-c {
  width: 110px;
  height: 370px;
  position: absolute;
  background-size: 100% 100%;
  background-image: url(/static/img/algae-c.png);
}
.algae-7 {
  left: 200px;
  bottom: 90px;
}
.algae-8 {
  left: 160vw;
  bottom: 90px;
}
.algae-9 {
  left: 280vw;
  bottom: 90px;
}
.bg__coral {
  width: 380px;
  height: 230px;
  position: absolute;
  background-size: 100% 100%;
  background-image: url(/static/img/coral-a.png);
}
.coral-1 {
  left: 700px;
  bottom: 100px;
}
.coral-2 {
  left: 175vw;
  bottom: 100px;
}
.coral-3 {
  left: 211vw;
  bottom: 100px;
}
.bg__cloud {
  width: 245px;
  height: 130px;
  position: absolute;
  background-size: 100% 100%;
  background-image: url(/static/img/cloud.png);
}
.cloud-1 {
  left: 70vw;
  top: -200px;
}
.cloud-2 {
  left: 173vw;
  top: -200px;
}
.cloud-3 {
  left: 271vw;
  top: -200px;
}
.bg__seabed {
  width: 100%;
  height: 100px;
  background-color: #023720;
  position: absolute;
  bottom: 0;
}
.seabed__div {
  width: 100vw;
  height: 70px;
  margin: 15px 0;
}
.seabed__p {
  width: 100%;
  height: 50%;
  color: #fff;
  line-height: 27px;
  text-align: center;
}
.main__skill {
  width: 100%;
  height: 100%;
  position: absolute;
}
.skill__box {
  width: 100%;
  height: 800px;
  position: absolute;
  top: 50px;
  display: flex;
  justify-content: space-around;
}
.main__submarine {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 400px;
  bottom: 100px;
  overflow: hidden;
}
.submarine__slides {
  width: 100vw;
  height: 400px;
  position: absolute;
  left: -600px;
  top: 0;
  background-image: url(/static/img/linyi-slides.png);
}
</style>
