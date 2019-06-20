<template>
  <div class="info">
    <main class="main">
      <div class="main__box">
        <ul class="main__ul">
          <li class="main__li">
            <img
              class="main__img"
              src="static/img/i_age.svg"
              :alt="isChinese ? '年龄' : 'age'"
              :title="isChinese ? '年龄' : 'age'"
            />
            <span class="main__span">{{
              isChinese ? "年龄 / 23" : "Age / 23"
            }}</span>
          </li>
          <li class="main__li">
            <img
              class="main__img"
              src="static/img/i_edu.svg"
              :alt="isChinese ? '学历' : 'education'"
              :title="isChinese ? '学历' : 'education'"
            />
            <span class="main__span">{{
              isChinese ? "学历 / 本科" : "Undergraduate"
            }}</span>
          </li>
          <li class="main__li">
            <img
              class="main__img"
              src="static/img/i_site.svg"
              :alt="isChinese ? '地点' : 'location'"
              :title="isChinese ? '地点' : 'location'"
            />
            <span class="main__span">{{
              isChinese ? "地点 / 深圳" : "Shenzhen"
            }}</span>
          </li>
          <li class="main__li">
            <img
              class="main__img"
              src="static/img/i_status.svg"
              :alt="isChinese ? '状态' : 'status'"
              :title="isChinese ? '状态' : 'status'"
            />
            <span class="main__span">{{
              isChinese ? "状态 / 离职" : "Status / Quit"
            }}</span>
          </li>
        </ul>
      </div>
      <div class="introduce__box">
        <div class="introduce">
          <p class="introduce_p">
            {{
              isChinese ? aboutRexag.zh_introduce1 : aboutRexag.en_introduce1
            }}
          </p>
          <p class="introduce_p">
            {{
              isChinese ? aboutRexag.zh_introduce2 : aboutRexag.en_introduce2
            }}
            <a class="introduce_a" href="http://www.rexag.site">{{
              isChinese ? "我的博客" : "My Blog"
            }}</a>
            {{
              isChinese ? aboutRexag.zh_introduce3 : aboutRexag.en_introduce3
            }}
            <a class="introduce_a" href="http://www.rexag.site">GitHub</a>）。
          </p>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      isChinese: 'global/rexag/getIsChinese',
      user: 'global/rexag/getUser',
      aboutRexag: 'global/rexag/getAboutRexag'
    })
  }
}
</script>
<style scoped>
.info {
  width: 100%;
  height: 100%;
  background: url(/static/img/bg.png) #109085;
}
.main {
  width: 100%;
  height: calc(100% - 80px);
  position: relative;
  top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.main__box {
  width: 100vw;
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main__ul {
  min-width: 300px;
  max-width: 600px;
  height: 160px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.main__li {
  width: 50%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main__img {
  width: 50px;
  height: 50px;
}
.main__span {
  min-width: 50px;
  height: 30px;
}
.introduce__box {
  padding: 20px 10vw 50px;
  width: 80vw;
  height: calc(100vh - 280px);
  position: absolute;
  top: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.introduce {
  min-width: 300px;
  max-width: 600px;
  height: 100%;
  overflow: scroll;
}
</style>
