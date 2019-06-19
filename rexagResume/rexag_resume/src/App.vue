<template>
  <div id="app" @mousewheel="handleScroll">
    <div class="header-wrapper">
      <move-header v-if="userAgent"></move-header>
      <pc-header v-else></pc-header>
    </div>
    <router-view name="move" v-if="userAgent"></router-view>
    <router-view name="pc" v-else></router-view>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  created () {
    this.checkUserAgent()
  },
  mounted () {
    console.log('Hi! 朋友，感谢您愿意调试简历代码。\n如果您有什么建议或者想学习前端，欢迎您访问我的博客 https://rexag.site ,\n我们互相学习，共同进步^_^。')
  },
  computed: {
    ...mapGetters({
      pagename: 'global/rexag/getPageName',
      userAgent: 'global/rexag/getUserAgent'
    })
  },
  methods: {
    handleScroll (e) {
      let event = e || window.event
      if (event.wheelDelta) {
        if (event.wheelDelta > 0) {
          this.upSwichPageName()
        }
        if (event.wheelDelta < 0) {
          this.downSwichPageName()
        }
      } else if (event.detail) { // Firefox滑轮事件
        if (event.detail > 0) {
          this.upSwichPageName()
        }
        if (event.detail < 0) {
          this.downSwichPageName()
        }
      }
    },
    upSwichPageName () {
      switch (this.pagename) {
        case 'home':
          this.$router.push('/contact')
          break
        case 'info':
          this.$router.push('/')
          break
        case 'skills':
          this.$router.push('/info')
          break
        case 'exp':
          this.$router.push('/skills')
          break
        case 'works':
          this.$router.push('/exp')
          break
        case 'contact':
          this.$router.push('/works')
          break
        default:
          this.$router.push('/')
      }
    },
    downSwichPageName () {
      switch (this.pagename) {
        case 'home':
          this.$router.push('/info')
          break
        case 'info':
          this.$router.push('/skills')
          break
        case 'skills':
          this.$router.push('/exp')
          break
        case 'exp':
          this.$router.push('/works')
          break
        case 'works':
          this.$router.push('/contact')
          break
        case 'contact':
          this.$router.push('/')
          break
        default:
          this.$router.push('/')
      }
    },
    checkUserAgent () {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      if (flag) {
        this.$store.dispatch('global/rexag/setUserAgent', true)
      }
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
.header-wrapper {
  width: 100%;
  height: 60px;
  position: absolute;
}
.main-wrapper {
  width: 100%;
  height: 100%;
}
.main-wrapper .page-box {
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
}
.main-wrapper .active {
  opacity: 1;
}
</style>
