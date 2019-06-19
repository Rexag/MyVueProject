<template>
  <div class="rexag-exp">
    <div class="exp">
      <div class="exp__defalut" v-show="expShowPage === 'default'">
        <div class="defalut__timeline">
          <div class="timeline__line">
            <ul class="line__ul">
              <li
                class="line__li"
                v-for="(item, index) in timeline"
                :key="index"
              >
                <div class="li__left">
                  <span class="line__year">{{ item.year }}</span>
                  <span class="line__month"
                    >{{ item.month }}{{ isChinese ? "月" : null }}</span
                  >
                  <span class="line__day"
                    >{{ item.day }}{{ isChinese ? "日" : null }}</span
                  >
                  <b class="line__b"></b>
                  <span class="line__node"></span>
                </div>
                <div class="li__right">
                  <p class="outline__work">
                    {{ isChinese ? item.zh_describe : item.en_describe }}
                    <strong
                      class="work__strong"
                      @click="changePageShow(item.pageName)"
                      >{{ isChinese ? item.zh_stress : item.en_stress }}</strong
                    >
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div class="timeline__time">
            <h2 class="time__title">
              {{ isChinese ? "我的经历" : "My Experience" }}
            </h2>
            <div class="time__start">
              <span class="start__time">2016</span>
              <span class="start__year">YEAR</span>
            </div>
          </div>
        </div>
      </div>
      <div class="exp__wrapper" v-show="expShowPage !== 'default'">
        <experience></experience>
      </div>
    </div>
  </div>
</template>
<script>
import experience from './experience'
import { mapGetters } from 'vuex'
export default {
  components: {
    experience
  },
  computed: {
    ...mapGetters({
      isChinese: 'global/rexag/getIsChinese',
      timeline: 'global/rexag/getTimeLine',
      expShowPage: 'global/rexag/getExpShowPage'
    })
  },
  methods: {
    changePageShow (expshowpage) {
      this.$store.dispatch('global/rexag/setExpShowPage', expshowpage)
    }
  }
}
</script>
<style scoped>
.rexag-exp {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(/static/img/bg.png) #945c4c;
}
.exp {
  width: 800px;
  height: 800px;
}
.exp__defalut {
  width: 100%;
  height: 100%;
  display: flex;
}
.defalut__timeline {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.timeline__time {
  width: 100%;
  height: 116px;
  display: flex;
}
.time__title {
  width: calc(100% - 116px);
  height: 100%;
  line-height: 116px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #ffd200;
}
.time__start {
  width: 100px;
  height: 100px;
  border: 8px solid #fff;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.start__time {
  color: #6bc30d;
  font-size: 30px;
  font-weight: bold;
}
.start__year {
  color: #90af70;
  font-size: 20px;
  font-weight: bold;
}
.timeline__line {
  width: 100%;
  height: calc(100% - 116px);
  position: relative;
}
.line__ul {
  border-right: 8px solid #fff;
  margin-right: 54px;
  width: calc(100% - 62px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.line__li {
  width: 800px;
  height: 100px;
  color: #e6de8d;
  display: flex;
  justify-content: center;
  align-items: center;
}
.line__year {
  width: 52px;
  font-size: 20px;
  text-align: center;
}
.line__month {
  width: 52px;
  font-size: 20px;
  text-align: center;
}
.line__day {
  width: 52px;
  font-size: 20px;
  text-align: center;
}
.line__b {
  width: 25px;
  height: 2px;
  position: absolute;
  right: 70px;
  background: #6bc30d;
}
.line__node {
  width: 16px;
  height: 16px;
  border: 4px solid #a6db6d;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  right: 46px;
}
.line__li:hover .line__node {
  border: 8px solid #a6db6d;
  right: 42px;
}
.defalut__outline {
  width: 60%;
  height: 100%;
}
.outline__ul {
  width: 100%;
  height: calc(100% - 116px);
  padding-bottom: 116px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.outline__li {
  width: 100%;
  height: 100px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.li__left {
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.li__right {
  width: calc(100% - 274px);
}
.outline__work {
  width: calc(100% -50px);
  height: 30%;
  color: #fff;
  line-height: 30px;
  margin-left: 50px;
  text-align: left;
  cursor: pointer;
}
.work__strong {
  font-weight: 500;
  color: #fff;
}
.exp__wrapper {
  width: 800px;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
