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
          <a class="project__link" :href="work.proHerf" :title="work.proHerf">
            <img
              src="/static/img/w_link.svg"
              :alt="isChinese ? '链接' : 'link'"
              class="project__img"
            />
          </a>
        </li>
      </ul>
      <p class="work__more">
        {{ isChinese ? "GitHub上查看更多" : "See more on GitHub" }}
        <a
          class="more__a"
          href="http://github.com/Rexag"
          title="http://github.com/Rexag"
        ></a>
      </p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      isChinese: 'global/rexag/getIsChinese',
      works: 'global/rexag/getWorks'
    })
  }
}
</script>
<style scoped>
.rexag-works {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(/static/img/bg.png) #4b85a0;
}
.works {
  width: 1100px;
  height: 550px;
}
.works__list {
  width: 100%;
  height: calc(100% - 30px);
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  -webkit-box-pack: justify;
  flex-wrap: wrap;
}
.works__project {
  width: 500px;
  height: 200px;
  padding: 10px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.9);
}
.project__title {
  width: 100%;
  height: 40px;
  text-align: left;
  color: #000;
  font-size: 20px;
  font-weight: bold;
}
.project__introduction {
  width: 100%;
  height: 130px;
}
.project__link {
  width: 200px;
  height: 28px;
  display: flex;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
}
.project__link:hover {
  background-color: rgba(60, 145, 93, 0.5);
}
.project__img {
  width: 28px;
  height: 28px;
}
.work__more {
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  position: relative;
}
.work__more:hover {
  color: #fff;
}
.more__a {
  width: 100%;
  height: 30px;
  position: absolute;
  left: 0;
}
</style>
