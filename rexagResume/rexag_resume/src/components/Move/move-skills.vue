<template>
  <div class="rexag__skill">
    <main class="skill__main">
      <div class="skill__box">
        <ul class="out__ul">
          <li
            v-for="item in moveSkills.outCircleList"
            :key="item.id"
            :style="item.bg"
            class="out__li"
          >
            {{ isChinese ? item.zh_name : item.en_name }}
          </li>
        </ul>
        <ul class="inner__ul">
          <li
            v-for="item in moveSkills.innerCircleList"
            :key="item.id"
            :style="item.bg"
            class="inner__li"
          >
            {{ isChinese ? item.zh_name : item.en_name }}
          </li>
        </ul>
      </div>
      <ul class="skill__degree">
        <li
          class="degree__li"
          v-for="item in degree"
          :key="item.id"
          :class="'degree__' + item.en_name"
        >
          {{ isChinese ? item.zh_name : item.en_name }}
        </li>
      </ul>
    </main>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
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
  computed: {
    ...mapGetters({
      isChinese: 'global/rexag/getIsChinese',
      user: 'global/rexag/getUser',
      moveSkills: 'global/rexag/getMoveSkills',
      degree: 'global/rexag/getDegree'
    })
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
.skill__main {
  width: 100%;
  height: calc(100% - 80px);
  position: relative;
  top: 80px;
}
.skill__box {
  width: 400px;
  height: 400px;
  position: relative;
  margin: 0 auto;
}
.out__ul {
  width: 300px;
  height: 300px;
  border: 8px dashed #999;
  border-radius: 50%;
  position: absolute;
  left: calc(50% - 158px);
  top: calc(50% - 158px);
}
.out__li {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  text-align: center;
  line-height: 100px;
  background: red;
  color: #fff;
  line-height: 60px;
  font-size: 12px;
}
@keyframes outX {
  0% {
    left: -35px;
  }

  100% {
    left: 275px;
  }
}

@keyframes outY {
  0% {
    top: -35px;
  }

  100% {
    top: 275px;
  }
}
.out__li:nth-child(1) {
  animation: outX 8s cubic-bezier(0.36, 0, 0.64, 1) -4s infinite alternate,
    outY 8s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;
}
.out__li:nth-child(2) {
  animation: outX 8s cubic-bezier(0.36, 0, 0.64, 1) -6s infinite alternate,
    outY 8s cubic-bezier(0.36, 0, 0.64, 1) -2s infinite alternate;
}
.out__li:nth-child(3) {
  animation: outX 8s cubic-bezier(0.36, 0, 0.64, 1) -8s infinite alternate,
    outY 8s cubic-bezier(0.36, 0, 0.64, 1) -4s infinite alternate;
}
.out__li:nth-child(4) {
  animation: outX 8s cubic-bezier(0.36, 0, 0.64, 1) -10s infinite alternate,
    outY 8s cubic-bezier(0.36, 0, 0.64, 1) -6s infinite alternate;
}
.out__li:nth-child(5) {
  animation: outX 8s cubic-bezier(0.36, 0, 0.64, 1) -12s infinite alternate,
    outY 8s cubic-bezier(0.36, 0, 0.64, 1) -8s infinite alternate;
}
.out__li:nth-child(6) {
  animation: outX 8s cubic-bezier(0.36, 0, 0.64, 1) -14s infinite alternate,
    outY 8s cubic-bezier(0.36, 0, 0.64, 1) -10s infinite alternate;
}
.out__li:nth-child(7) {
  animation: outX 8s cubic-bezier(0.36, 0, 0.64, 1) -16s infinite alternate,
    outY 8s cubic-bezier(0.36, 0, 0.64, 1) -12s infinite alternate;
}
.out__li:nth-child(8) {
  animation: outX 8s cubic-bezier(0.36, 0, 0.64, 1) -18s infinite alternate,
    outY 8s cubic-bezier(0.36, 0, 0.64, 1) -14s infinite alternate;
}
.inner__ul {
  width: 160px;
  height: 160px;
  border: 8px dashed #999;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  line-height: 50px;
  transform: translateX(-50%) translateY(-50%);
}
.inner__li {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  text-align: center;
  line-height: 80px;
  background: red;
  color: #fff;
  color: #fff;
  line-height: 40px;
  font-size: 14px;
}
@keyframes innerX {
  0% {
    left: -25px;
  }

  100% {
    left: 145px;
  }
}

@keyframes innerY {
  0% {
    top: 145px;
  }

  100% {
    top: -25px;
  }
}
.inner__li:nth-child(1) {
  animation: innerX 8s cubic-bezier(0.36, 0, 0.64, 1) -4s infinite alternate,
    innerY 8s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;
}
.inner__li:nth-child(2) {
  animation: innerX 8s cubic-bezier(0.36, 0, 0.64, 1) -8s infinite alternate,
    innerY 8s cubic-bezier(0.36, 0, 0.64, 1) -4s infinite alternate;
}
.inner__li:nth-child(3) {
  animation: innerX 8s cubic-bezier(0.36, 0, 0.64, 1) -12s infinite alternate,
    innerY 8s cubic-bezier(0.36, 0, 0.64, 1) -8s infinite alternate;
}
.inner__li:nth-child(4) {
  animation: innerX 8s cubic-bezier(0.36, 0, 0.64, 1) -16s infinite alternate,
    innerY 8s cubic-bezier(0.36, 0, 0.64, 1) -12s infinite alternate;
}
.skill__degree {
  width: 80%;
  padding: 40px 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.degree__li {
  min-width: 30px;
  height: 30px;
  padding: 5px 10px;
  margin: 0 5px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
  color: #fff;
  margin-bottom: 10px;
}
.degree__Beginner {
  background-color: rgba(71, 19, 19, 0.6);
}
.degree__Familiar {
  background-color: rgba(30, 28, 167, 0.6);
}
.degree__Grasp {
  background-color: rgba(8, 119, 184, 0.6);
}
.degree__GoodAt {
  background-color: rgba(17, 230, 70, 0.6);
}
.degree__Proficient {
  background-color: rgba(184, 45, 130, 0.6);
}
/* @media screen and (max-width: 1030px){

} */
</style>
