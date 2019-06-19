<template>
  <div class="skill">
    <div>
      <ul>
        <li
          v-for="item in skill.outCircleList"
          :key="item.id"
          :style="item.bg"
        ></li>
      </ul>
      <ul>
        <li
          v-for="item in skill.innerCircleList"
          :key="item.id"
          :style="item.bg"
        ></li>
      </ul>
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
      en_skillTitle: '',
      skill: {
        outCircleList: [
          { id: 0, bg: { backgroundColor: 'rgba(121,100,102,0.8)' }, name: '小程序' },
          { id: 1, bg: { backgroundColor: 'rgba(49,65,82,0.8)' }, name: '公众号' },
          { id: 2, bg: { backgroundColor: 'rgba(117,148,179,0.8)' }, name: 'MySQL' },
          { id: 3, bg: { backgroundColor: 'rgba(71,83,94,0.8)' }, name: 'JQuery' },
          { id: 4, bg: { backgroundColor: 'rgba(147,147,189,0.8)' }, name: 'React' },
          { id: 5, bg: { backgroundColor: 'rgba(147,147,189,0.8)' }, name: 'TypeScript' },
          { id: 6, bg: { backgroundColor: 'rgba(147,147,189,0.8)' }, name: 'MongoDB' },
          { id: 7, bg: { backgroundColor: 'rgba(147,147,189,0.8)' }, name: 'Socket' }
        ],
        innerCircleList: [
          { id: 0, bg: { backgroundColor: 'rgba(71,83,94,0.8)' }, name: 'JavaScript' },
          { id: 1, bg: { backgroundColor: 'rgba(71,83,94,0.8)' }, name: 'Vue' },
          { id: 2, bg: { backgroundColor: 'rgba(71,83,94,0.8)' }, name: 'C#' },
          { id: 3, bg: { backgroundColor: 'rgba(71,83,94,0.8)' }, name: 'NodeJS' },
          { id: 4, bg: { backgroundColor: 'rgba(71,83,94,0.8)' }, name: 'HTML5' },
          { id: 5, bg: { backgroundColor: 'rgba(71,83,94,0.8)' }, name: 'CSS3' }
        ]
      }
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title__h3 {
  width: 100%;
  height: 50px;
  color: #fff;
  text-align: center;
  line-height: 50px;
  font-size: 22px;
}
.skill__degree {
  width: 100%;
  height: 30px;
}
.degree__ul {
  width: calc(100% - 50px);
  height: 100%;
  margin-left: 50px;
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
  width: 50px;
  height: 100%;
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
  width: calc(100% - 50px);
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
