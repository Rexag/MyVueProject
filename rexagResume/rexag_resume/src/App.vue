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
    this.listenTouchDirection(document, true, false, this.rightSwichPageName, false, this.leftSwichPageName)
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
    rightSwichPageName () {
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
    leftSwichPageName () {
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
    },
    addHandler (element, type, handler) {
      if (element.addEventListener) {
        element.addEventListener(type, handler, false)
      } else if (element.attachEvent) {
        element.attachEvent('on' + type, handler)
      } else { element['on' + type] = handler }
    },
    removeHandler (element, type, handler) {
      if (element.removeEventListener) {
        element.removeEventListener(type, handler, false)
      } else if (element.detachEvent) {
        element.detachEvent('on' + type, handler)
      } else { element['on' + type] = handler }
    },
    listenTouchDirection (target, isPreventDefault, upCallback, rightCallback, downCallback, leftCallback) {
      this.addHandler(target, 'touchstart', handleTouchEvent)
      this.addHandler(target, 'touchend', handleTouchEvent)
      this.addHandler(target, 'touchmove', handleTouchEvent)
      var startX
      var startY

      function handleTouchEvent (event) {
        switch (event.type) {
          case 'touchstart':
            startX = event.touches[0].pageX
            startY = event.touches[0].pageY
            break
          case 'touchend':
            var spanX = event.changedTouches[0].pageX - startX
            var spanY = event.changedTouches[0].pageY - startY
            if (Math.abs(spanX) > Math.abs(spanY)) { // 认定为水平方向滑动
              if (spanX > 50) { // 向右
                if (rightCallback) {
                  rightCallback()
                }
              } else if (spanX < -50) { // 向左
                if (leftCallback) {
                  leftCallback()
                }
              }
            } else { // 认定为垂直方向滑动
              if (spanY > 50) { // 向下
                if (downCallback) {
                  downCallback()
                }
              } else if (spanY < -50) { // 向上
                if (upCallback) {
                  upCallback()
                }
              }
            }
            break
          // case 'touchmove': // 阻止默认行为
          //   // if (isPreventDefault) event.preventDefault()
          //   break
        }
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
