<template>
  <div class="rexag-works">
    <div class="works">
      <ul class="works__list">
        <li class="works__project" v-for="work in works" :key="work.worksID">
          <h3 class="project__title">
            {{ isChinese ? work.zh_proName : work.en_proName }}
          </h3>
          <p class="project__introduction">
            {{ isChinese ? work.zh_proIntroduction : work.en_proIntroduction }}
          </p>
          <a
            class="project__link"
            :href="work.proHerf"
            :title="work.proHerf"
            target="_blank"
          >
            <img
              src="/static/img/w_link.svg"
              :alt="isChinese ? '链接' : 'link'"
              class="project__img"
            />
          </a>
        </li>
      </ul>
      <div class="work__more">
        <span
          class="control__span control-left"
          @click="switchWork('left')"
        ></span>
        <a
          class="more__a"
          target="_blank"
          href="http://github.com/Rexag"
          title="http://github.com/Rexag"
          >GitHub上查看更多</a
        >
        <span
          class="control__span control-right"
          @click="switchWork('right')"
        ></span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      workIndex: 0
    }
  },
  computed: {
    ...mapGetters({
      isChinese: 'global/rexag/getIsChinese',
      works: 'global/rexag/getWorks'
    })
  },
  mounted () {
    this.setWorkDraw()
  },
  methods: {
    setWorkDraw () {
      const workDom = document.getElementsByClassName('works__list')[0]
      const children = workDom.children
      for (let i = 0; i < children.length; i++) {
        children[i].style.transform = `translateX(${1.5 * i}rem) translateZ(${-1.5 * i}rem) scale(${1 - i * 0.05}, ${1 - i * 0.05})`
      }
    },
    switchWork (direction) {
      const workDom = document.getElementsByClassName('works__list')[0]
      const children = workDom.children
      if (direction === 'left' && this.workIndex !== 0) {
        this.workIndex = this.workIndex - 1
      } else if (direction === 'right' && this.workIndex !== children.length - 1) {
        this.workIndex = this.workIndex + 1
        children[this.workIndex - 1].style.transform = `translateX(-19rem)`
      }
      for (let i = this.workIndex; i < children.length; i++) {
        children[i].style.transform = `translateX(${1.5 * (i - this.workIndex)}rem) translateZ(${-1.5 * (i - this.workIndex)}rem) 
        scale(${1 - (i - this.workIndex) * 0.05}, ${1 - (i - this.workIndex) * 0.05})`
      }
    }
  }
}
</script>
<style scoped>
.rexag-works {
  width: 100%;
  height: 100%;
  background: url(/static/img/bg.png) #4b85a0;
}
.works {
  position: absolute;
  top: 15vh;
  left: 10vw;
  right: 10vw;
}
.works__list {
  transform-style: preserve-3d;
  width: 80vw;
  padding: 0;
  height: 60vh;
  transition: transform 2s;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  color: #000;
}
.works__project {
  box-shadow: 0 0.3125rem 0.625rem rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 0.375rem;
  padding: 0.625rem;
  width: 80vw;
  height: 60vh;
  position: absolute;
  text-align: justify;
  transition: transform 0.5s;
  background: hsla(0, 0%, 100%, 0.98);
}
.work__more {
  width: 100%;
  height: 30px;
  margin-top: 10px;
  position: relative;
  display: flex;
  justify-content: space-around;
}
.more__a {
  height: 100%;
  display: block;
  color: #fff;
  text-align: center;
  line-height: 30px;
}
.control__span {
  width: 18px;
  height: 19px;
  position: absolute;
  top: 6px;
  cursor: pointer;
  background: url(/static/img/arrow.svg) bottom center no-repeat;
  background-size: contain;
}
.control-left {
  left: 30px;
  transform: rotateZ(-90deg);
}
.control-right {
  right: 30px;
  transform: rotateZ(90deg);
}
.project__title {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #000;
  font-size: 20px;
  font-weight: bold;
}
.project__introduction {
  width: 100%;
  height: 130px;
}
.project__link {
  width: 100%;
  height: 50px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
}
.project__link:hover {
  background-color: rgba(60, 145, 93, 0.5);
}
.project__img {
  width: 60px;
  height: calc(100% - 2px);
  padding: 0 50px;
  border: 1px solid #999;
}
</style>
