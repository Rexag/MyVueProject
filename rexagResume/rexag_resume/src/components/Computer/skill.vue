<template>
  <div class="skill">
    <div class="skill__title">
      <h3 class="title__h3">{{ isChinese ? zh_skillTitle : en_skillTitle }}</h3>
    </div>
    <div class="skill__degree">
      <ul class="degree__ul">
        <li class="degree__li" v-for="(item, index) in degree" :key="index">
          {{ isChinese ? item.zh_name : item.en_name }}
        </li>
      </ul>
    </div>
    <div class="skill__sort">
      <ul class="sort__ul">
        <li class="sort__li" v-for="(item, index) in skillData" :key="index">
          {{ item.name }}
        </li>
      </ul>
      <div class="skill__octopus">
        <div class="octopus" v-for="(item, index) in skillData" :key="index">
          <div
            class="octopus__wrapper"
            v-for="(item, num) in item.degree"
            :key="num"
            :style="{
              opacity: item.show,
              'background-image': 'url(/static/img/' + picName,
              'background-size': '100% 100%',
              width: picWidth + 'px',
              height: picHeight + 'px'
            }"
          >
            <div class="octopus__eyes"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      skillData: '',
      pic: '',
      zh_skillTitle: '',
      en_skillTitle: ''
    }
  },
  props: ['skillName', 'picName', 'picWidth', 'picHeight'],
  created () {
    if (this.skillName === 'getFontEnd') {
      this.skillData = this.fontEnd
      this.zh_skillTitle = '前端技能栈'
      this.en_skillTitle = 'FontEnd Skill Stack'
    }
    if (this.skillName === 'getBackEnd') {
      this.skillData = this.backEnd
      this.zh_skillTitle = '后端技能栈'
      this.en_skillTitle = 'BackEnd Skill Stack'
    }
    if (this.skillName === 'getOtherSkill') {
      this.skillData = this.otherSkill
      this.zh_skillTitle = '其他技能'
      this.en_skillTitle = 'Other Skills'
    }
  },
  computed: {
    ...mapGetters({
      isChinese: 'global/rexag/getIsChinese',
      user: 'global/rexag/getUser',
      degree: 'global/rexag/getDegree',
      fontEnd: 'global/rexag/getFontEnd',
      backEnd: 'global/rexag/getBackEnd',
      otherSkill: 'global/rexag/getOtherSkill'
    })
  }
}
</script>
<style scoped>
.skill {
  width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.skill__title {
  width: 100%;
  height: 100px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
}
.title__h3 {
  width: 500px;
  height: 100%;
  color: #fff;
  text-align: center;
  line-height: 70px;
  font-size: 30px;
  background-size: 100% 100%;
  background-image: url(/static/img/biaoti.png);
}
.skill__degree {
  width: 100%;
  height: 30px;
}
.degree__ul {
  width: calc(100% - 150px);
  height: 100%;
  margin-left: 150px;
  display: flex;
  justify-content: space-around;
}
.degree__li {
  width: 100px;
  height: 100%;
  background-color: #3bbd86;
  color: #fff;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  border-radius: 40px;
}
.skill__sort {
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: space-around;
}
.sort__ul {
  width: 100px;
  height: 100%;
  margin: 0 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.sort__li {
  width: 100%;
  height: 30px;
  background-color: #049d4b;
  border-radius: 40px;
  text-align: center;
  line-height: 30px;
  color: #fff;
}
.skill__octopus {
  width: calc(100% - 150px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.octopus {
  width: 650px;
  display: flex;
  justify-content: space-around;
}
.octopus__wrapper {
  width: 70px;
  height: 80px;
  /* background-image: url(/static/img/octopu.png);
  background-size: 100% 100%; */
}
</style>
