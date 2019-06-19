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
                  <span class="line__month">{{ item.month }}</span>
                  <span class="line__day">{{ item.day }}</span>
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
              {{ isChinese ? "经历" : "Experience" }}
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
  width: 100%;
  height: calc(100% - 80px);
  position: relative;
  top: 80px;
}
.exp__defalut {
  width: 100%;
  height: 100%;
  display: flex;
}
.defalut__timeline {
  width: 50%;
  height: calc(100% - 50px);
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
  position: relative;
  left: 55vw;
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
  width: calc(100% - 62px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.line__li {
  width: 100vw;
  display: flex;
}
.li__left {
  width: calc(100vw - 50% - 58px);
  padding-left: 10px;
  text-align: center;
}
.li__right {
  width: calc(100vw - 50% + 38px);
  padding: 0 10px;
  text-align: left;
}
.exp__wrapper {
  display: flex;
  justify-content: center;
}
</style>
