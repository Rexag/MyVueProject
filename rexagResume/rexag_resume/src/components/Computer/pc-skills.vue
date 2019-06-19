<template>
  <div class="rexag__skill">
    <header class="skill__header">
      <h2 class="header__h2">{{ isChinese ? "技能栈" : "Skill Stack" }}</h2>
    </header>
    <div class="main__wave"></div>
    <main class="skill__main">
      <div class="main__sea">
        <div class="bg__ship"></div>
        <div class="bg__algae-a"></div>
        <div class="bg__algae-b"></div>
        <div class="bg__algae-c"></div>
        <div class="bg__coral"></div>
        <ul class="bg__seabed">
          <li class="bg_li" @click="changeShowSkills('fontend')"></li>
          <li class="bg_li" @click="changeShowSkills('backend')"></li>
          <li class="bg_li" @click="changeShowSkills('other')"></li>
        </ul>
      </div>
      <div class="main__skill">
        <div class="skill__box">
          <skill
            skillName="getFontEnd"
            picName="octopu.png"
            picWidth="80"
            picHeight="90"
            v-show="showSkill === 'fontend' ? true : false"
          ></skill>
          <skill
            skillName="getBackEnd"
            picName="fish.png"
            picWidth="100"
            picHeight="70"
            v-show="showSkill === 'backend' ? true : false"
          ></skill>
          <skill
            skillName="getOtherSkill"
            picName="seal.png"
            picWidth="120"
            picHeight="80"
            v-show="showSkill === 'other' ? true : false"
          ></skill>
        </div>
      </div>
      <div class="main__submarine">
        <div class="submarine__slides"></div>
      </div>
    </main>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import skill from './skill'
export default {
  data () {
    return {
      showSkill: 'fontend',
      timer: null
    }
  },
  components: {
    skill
  },
  mounted () {
    this.setTimer()
  },
  beforeDestroy () {
    this.clearTimer()
  },
  computed: {
    ...mapGetters({
      isChinese: 'global/rexag/getIsChinese',
      user: 'global/rexag/getUser'
    })
  },
  methods: {
    changeShowSkills (skillsName) {
      this.showSkill = skillsName
    },
    changeSkills () {
      this.clearTimer()
      if (this.showSkill === 'fontend') {
        this.showSkill = 'backend'
      } else if (this.showSkill === 'backend') {
        this.showSkill = 'other'
      } else {
        this.showSkill = 'fontend'
      }
      this.setTimer()
    },
    setTimer () {
      this.timer = setInterval(this.changeSkills, 5000)
    },
    clearTimer () {
      clearInterval(this.timer)
    }
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
  position: relative;
}
.skill__main {
  width: 100%;
  height: calc(100% - 222px);
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
  display: flex;
  justify-content: center;
  background-color: #054d2e;
}
.bg__ship {
  width: 600px;
  height: 180px;
  position: absolute;
  left: 100px;
  top: 80px;
  background-size: 100% 100%;
  background-image: url(/static/img/ship-1.png);
}
.bg__algae-a {
  width: 90px;
  height: 244px;
  position: absolute;
  left: 100px;
  bottom: 90px;
  background-size: 100% 100%;
  background-image: url(/static/img/algae-a.png);
}
.bg__algae-b {
  width: 110px;
  height: 170px;
  position: absolute;
  left: 1250px;
  bottom: 90px;
  background-size: 100% 100%;
  background-image: url(/static/img/algae-b.png);
}
.bg__algae-c {
  width: 110px;
  height: 370px;
  position: absolute;
  right: 150px;
  bottom: 90px;
  background-size: 100% 100%;
  background-image: url(/static/img/algae-c.png);
}
.bg__coral {
  width: 380px;
  height: 230px;
  position: absolute;
  left: 700px;
  bottom: 100px;
  background-size: 100% 100%;
  background-image: url(/static/img/coral-a.png);
}
.bg__seabed {
  width: 100%;
  height: 100px;
  background-color: #023720;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-content: center;
}
.bg_li {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin: 42px 10px;
  cursor: pointer;
  background-color: rgba(145, 167, 20, 0.5);
}
.main__skill {
  width: 100%;
  height: 800px;
  position: absolute;
  top: calc((100% - 800px) / 2);
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.skill__box {
  width: 800px;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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
