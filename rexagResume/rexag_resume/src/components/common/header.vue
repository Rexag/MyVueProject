<template>
  <div class="header-box">
    <header class="header">
      <div class="logo">
        <a class="logo__a" :href="user.bolg_link" target="_blank">
          <img
            :src="user.headpic"
            class="logo__img"
            :alt="isChinese ? user.zh_name : user.en_name"
            :title="isChinese ? user.zh_name : user.en_name"
          />
        </a>
      </div>
      <div class="switch">
        <div class="switch__lang">
          <span
            class="lang__span lang_zh"
            :class="isChinese ? 'seclected' : ''"
            :title="isChinese ? '切换到中文' : 'Switch to Chinese'"
            @click="setLanguage(true)"
            >{{ isChinese ? "中" : "zh" }}</span
          >
          <span
            class="lang__span lang-en"
            :class="isChinese ? '' : 'seclected'"
            :title="isChinese ? '切换到英文' : 'Switch to English'"
            @click="setLanguage(false)"
            >{{ isChinese ? "英" : "en" }}</span
          >
        </div>
      </div>
    </header>
    <nav class="page">
      <ul class="page__ul">
        <li
          class="page__li"
          :class="pagename === 'dafault' ? 'page__alive' : ''"
        >
          <div>
            <img
              src="/static/img/d_home.svg"
              class="page__img"
              :alt="isChinese ? '首页' : 'Home'"
              @click="changePage('default')"
            />
          </div>
          <span class="page__span">{{ isChinese ? "首页" : "Home" }}</span>
        </li>
        <li class="page__li" :class="pagename === 'info' ? 'page__alive' : ''">
          <div class="page__img-box">
            <img
              src="/static/img/d_info.svg"
              :alt="isChinese ? '关于我' : 'About Me'"
              class="page__img"
              @click="changePage('info')"
            />
          </div>
          <span class="page__span">{{
            isChinese ? "关于我" : "About Me"
          }}</span>
        </li>
        <li class="page__li" :class="pagename === 'skill' ? 'page__alive' : ''">
          <div>
            <img
              src="/static/img/d_skills.svg"
              class="page__img"
              @click="changePage('skill')"
            />
          </div>
          <span class="page__span">{{ isChinese ? "技术栈" : "Skills" }}</span>
        </li>
        <li class="page__li" :class="pagename === 'exp' ? 'page__alive' : ''">
          <div>
            <img
              src="/static/img/d_exp.svg"
              :alt="isChinese ? '经历' : 'Experience'"
              class="page__img"
              @click="changePage('exp')"
            />
          </div>
          <span class="page__span">{{
            isChinese ? "经历" : "Experience"
          }}</span>
        </li>
        <li class="page__li" :class="pagename === 'works' ? 'page__alive' : ''">
          <div>
            <img
              src="/static/img/d_works.svg"
              :alt="isChinese ? '作品展示' : 'Works Display'"
              class="page__img"
              @click="changePage('works')"
            />
          </div>
          <span class="page__span">{{
            isChinese ? "作品展示" : "Works Display"
          }}</span>
        </li>
        <li
          class="page__li"
          :class="pagename === 'concat' ? 'page__alive' : ''"
        >
          <div>
            <img
              src="/static/img/d_contact.svg"
              :alt="isChinese ? '联系我' : 'Call Me'"
              class="page__img"
              @click="changePage('concat')"
            />
          </div>
          <span class="page__span">{{ isChinese ? "联系我" : "Call Me" }}</span>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      isChinese: 'global/rexag/getIsChinese',
      pagename: 'global/rexag/getPageName',
      user: 'global/rexag/getUser'
    })
  },
  methods: {
    setLanguage (isChinese) {
      this.$store.dispatch('global/rexag/setIsChinese', isChinese)
    },
    changePage (pagename) {
      this.$store.dispatch('global/rexag/setPageName', pagename)
    }
  }
}
</script>
<style scoped>
.header-box {
  width: 100%;
  height: 60px;
  position: absolute;
  z-index: 99;
}
.header {
  margin-top: 30px;
  padding: 0 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 40px;
  height: 100%;
}
.logo__a {
  width: 100%;
  height: 100%;
  display: inline-block;
}
.logo__img {
  width: 100%;
  height: 40px;
  border-radius: 50%;
  display: inline-block;
}
.switch {
  width: 60px;
  height: 100%;
}
.switch__lang {
  border-radius: 25px;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;
}
.lang__span {
  color: rgba(0, 0, 0, 0.3);
  width: 30px;
  height: 30px;
  display: inline-block;
  line-height: 30px;
  text-align: center;
  -webkit-transition: color 0.3s ease;
  transition: color 0.3s ease;
  cursor: pointer;
}
.switch__lang .seclected {
  background-color: #000;
  color: #fff;
  border-radius: 25px;
}
.page {
  width: 30px;
  height: 300px;
  position: absolute;
  right: 20px;
  z-index: 99;
  top: calc((100vh - 300px) / 2);
}
.page__ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.page__li {
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.page__img {
  width: 18px;
  height: 18px;
  padding: 6px;
  opacity: 0;
  background-color: rgb(0, 0, 0);
  border-radius: 50%;
}
.page__alive img {
  transform: scale(1.5);
  opacity: 1;
}
.page__li div:hover img,
.page__li div:hover + span {
  opacity: 1;
}
.page__li div:hover img {
  transform: scale(1.5);
}
.page__li:not(.page__alive) {
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
}
.page__li {
  animation: sploosh3 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  animation-direction: alternate;
  -webkit-animation-direction: alternate;
  -webkit-animation: sploosh3 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  -o-animation: sploosh3 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  -moz-animation: sploosh3 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  -ms-animation: sploosh3 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -o-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  -ms-animation-iteration-count: infinite;
}
@keyframes sploosh3 {
  0% {
    box-shadow: 0 0 0 0 rgb(255, 0, 0);
    -o-box-shadow: 0 0 0 0 rgb(255, 0, 0);
    -webkit-box-shadow: 0 0 0 0 rgb(255, 0, 0);
    -ms-box-shadow: 0 0 0 0 rgb(255, 0, 0);
    -moz-box-shadow: 0 0 0 0 rgb(255, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 10px rgba(3, 85, 54, 0);
    -o-box-shadow: 0 0 0 10px rgba(3, 85, 54, 0);
    -webkit-box-shadow: 0 0 0 10px rgba(3, 85, 54, 0);
    -moz-box-shadow: 0 0 0 10px rgba(3, 85, 54, 0);
    -ms-box-shadow: 0 0 0 10px rgba(3, 85, 54, 0);
  }
}
.page__span {
  position: absolute;
  opacity: 0;
  transition: all 0.3s ease;
  width: 110px;
  height: 30px;
  left: -130px;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 3px 0 0 3px;
  font-weight: 700;
  font-size: 14px;
  line-height: 30px;
}
.page__span::after {
  content: "";
  position: absolute;
  right: -15px;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-left: 15px solid rgba(0, 0, 0, 0.7);
  border-bottom: 15px solid transparent;
}
</style>
