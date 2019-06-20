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
      <div
        class="header__horizontal"
        :class="moveNav ? 'arrow-down' : 'arrow-up'"
        @click="changeMoveNav"
      >
        {{ isChinese ? movePageName.zh : movePageName.en }}
      </div>
      <div class="switch">
        <div class="switch__box">
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
      </div>
    </header>
    <nav class="page__horizontal" v-show="moveNav">
      <ul class="horizontal__ul">
        <li class="horizontal__li">
          <router-link to="/">
            {{ isChinese ? "首页" : "Home" }}
          </router-link>
        </li>
        <li class="horizontal__li">
          <router-link to="/info">
            {{ isChinese ? "关于我" : "Info" }}
          </router-link>
        </li>
        <li class="horizontal__li">
          <router-link to="/skills">
            {{ isChinese ? "技能栈" : "Skills" }}
          </router-link>
        </li>
        <li class="horizontal__li">
          <router-link to="/exp">
            {{ isChinese ? "经历" : "Exp" }}
          </router-link>
        </li>
        <li class="horizontal__li">
          <router-link to="/works">
            {{ isChinese ? "作品集" : "Works" }}
          </router-link>
        </li>
        <li class="horizontal__li">
          <router-link to="/contact">
            {{ isChinese ? "联系我" : "Contact" }}
          </router-link>
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
      movePageName: { zh: '首页', en: 'Home' },
      moveNav: false
    }
  },
  watch: {
    pagename () {
      this.changePage()
    }
  },
  created () {
    this.changePage()
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
    changePage () {
      switch (this.pagename) {
        case 'home':
          this.movePageName = { zh: '首页', en: 'Home' }
          break
        case 'info':
          this.movePageName = { zh: '关于我', en: 'Info' }
          break
        case 'skills':
          this.movePageName = { zh: '技能栈', en: 'Skills' }
          break
        case 'exp':
          this.movePageName = { zh: '经历', en: 'Exp' }
          break
        case 'works':
          this.movePageName = { zh: '作品集', en: 'Works' }
          break
        case 'contact':
          this.movePageName = { zh: '联系我', en: 'Contact' }
          break
      }
    },
    changeMoveNav () {
      this.moveNav = !this.moveNav
    }
  }
}
</script>
<style scoped>
.header-box {
  width: 100%;
  height: 50px;
  position: absolute;
  z-index: 99;
}
.header {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__horizontal {
  position: relative;
  width: 60px;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.header__horizontal::after {
  content: "";
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #fff;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}
.arrow-down:after {
  -webkit-transform: rotate(180deg);
  transform: rotate(0deg);
}
.arrow-up::after {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
.logo {
  width: 60px;
  height: 100%;
}
.logo__a {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo__img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-block;
}
.switch {
  width: 80px;
  height: 100%;
}
.switch__box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.switch__lang {
  display: flex;
  justify-content: center;
  border-radius: 25px;
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
.page__horizontal {
  width: 100%;
  height: 30px;
  display: flex;
  background-color: rgba(97, 26, 26, 0.4);
}
.horizontal__ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.horizontal__li {
  color: #fff;
  font-size: 14px;
}
.horizontal__li a {
  display: flex;
  color: #fff;
}
</style>
