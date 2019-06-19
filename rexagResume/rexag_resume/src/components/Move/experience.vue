<template>
  <div class="exp__show">
    <div
      class="experience__work"
      v-for="workitem in expWork"
      :key="workitem.workindex"
      v-show="expShowPage === workitem.pageName"
    >
      <div>
        <h3 class="work__h3 work-company">
          <a :href="workitem.companyherf">{{
            isChinese ? workitem.zh_company : workitem.en_company
          }}</a>
        </h3>
        <p class="work__p work-time">
          {{ isChinese ? workitem.zh_worktime : workitem.en_worktime }}
        </p>
        <p class="work__p work-position">
          &lt;{{
            isChinese ? workitem.zh_department : workitem.en_department
          }}
          / {{ isChinese ? workitem.zh_position : workitem.en_position }}&gt;
        </p>
        <p class="work__p work-skill">
          {{ isChinese ? workitem.zh_KeyWord : workitem.en_KeyWord }}
        </p>
      </div>
      <ul class="work__ul work-list">
        <li
          class="work__li"
          v-for="dutyitem in workitem.duty"
          :key="dutyitem.dutyindex"
        >
          {{ isChinese ? dutyitem.zh_title : dutyitem.en_title }}
        </li>
      </ul>
    </div>
    <div
      class="experience__study"
      v-for="studyitem in expStudy"
      :key="studyitem.studyindex"
      v-show="expShowPage === studyitem.pageName"
    >
      <div>
        <h3 class="study__h3 study-company">
          <a :href="studyitem.Schoolherf">{{
            isChinese ? studyitem.zh_school : studyitem.en_school
          }}</a>
        </h3>
        <p class="study__p study-time">
          {{ isChinese ? studyitem.zh_studytime : studyitem.en_studytime }}
        </p>
        <p
          class="study__p study-position"
          v-show="studyitem.zh_discipline !== ''"
        >
          &lt;{{
            isChinese ? studyitem.zh_discipline : studyitem.en_discipline
          }}
          / {{ isChinese ? studyitem.zh_major : studyitem.en_major }}&gt;
        </p>
        <p class="study__p study-skill">
          {{ isChinese ? studyitem.zh_KeyWord : studyitem.en_KeyWord }}
        </p>
      </div>
      <ul class="study__ul study-list">
        <li
          class="study__li"
          v-for="curitem in studyitem.curriculum"
          :key="curitem.curindex"
        >
          {{ isChinese ? curitem.zh_title : curitem.en_title }}
        </li>
      </ul>
    </div>
    <div class="control">
      <span
        class="control__span control-left"
        @click="lastPageShow(expShowPage)"
      ></span>
      <span
        class="control__span control-right"
        @click="nextPageShow(expShowPage)"
      ></span>
      <span class="control-return" @click="goHomo"></span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: ['pageShow'],
  data () {
    return {
      pagelistArr: ['studyhome', 'sayed', 'zuel', 'wczy', 'merry', 'catlbattery'],
      pagelistObj: { studyhome: 0, sayed: 1, zuel: 2, wczy: 3, merry: 4, catlbattery: 5 }
    }
  },
  computed: {
    ...mapGetters({
      isChinese: 'global/rexag/getIsChinese',
      expWork: 'global/rexag/getExpWork',
      expStudy: 'global/rexag/getExpStudy',
      expShowPage: 'global/rexag/getExpShowPage'
    })
  },
  methods: {
    nextPageShow (pageName) {
      console.log(pageName, 'nextPageShow')
      let index = this.pagelistObj[pageName]
      if (index === 5) {
        this.$store.dispatch('global/rexag/setExpShowPage', 'studyhome')
      } else {
        let goPageName = this.pagelistArr[(index + 1)]
        this.$store.dispatch('global/rexag/setExpShowPage', goPageName)
      }
    },
    lastPageShow (pageName) {
      console.log(pageName, 'lastPageShow')
      let index = this.pagelistObj[pageName]
      if (index === 0) {
        this.$store.dispatch('global/rexag/setExpShowPage', 'catlbattery')
      } else {
        let goPageName = this.pagelistArr[(index - 1)]
        this.$store.dispatch('global/rexag/setExpShowPage', goPageName)
      }
    },
    goHomo () {
      console.log('default')
      this.$store.dispatch('global/rexag/setExpShowPage', 'default')
    }
  }
}
</script>
<style scoped>
.exp__show {
  width: calc(100vw - 20px);
  min-height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
}
.experience__work,
.experience__study {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.work__h3,
.study__h3 {
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #945c4c;
  font-size: 18px;
}
.work__p,
.study__p {
  width: calc(100% - 50px);
  height: 20px;
  margin-left: 40px;
  line-height: 20px;
  text-align: left;
  color: #af7464;
  font-size: 14px;
  display: flex;
}
.work__ul,
.study__ul {
  width: calc(100% - 50px);
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.work__li,
.study__li {
  list-style: disc;
  width: calc(100% - 16px);
  text-align: left;
  color: #000;
  margin-left: 16px;
  font-size: 14px;
}
.control {
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
}
.control__span {
  width: 18px;
  height: 19px;
  cursor: pointer;
  background: url(/static/img/arrow.svg) bottom center no-repeat;
  background-size: contain;
}
.control-left {
  margin-left: 50px;
  transform: rotateZ(-90deg);
}
.control-right {
  margin-right: 50px;
  transform: rotateZ(90deg);
}
.control-return {
  width: 24px;
  height: 23px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
  background: url(/static/img/return.svg) bottom center no-repeat;
  background-size: contain;
}
</style>
