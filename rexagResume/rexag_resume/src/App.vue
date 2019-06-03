<template>
  <div id="app" @mousewheel="handleScroll">
    <div class="header-wrapper">
      <rexag-header></rexag-header>
    </div>
    <div class="main-wrapper">
      <rexagDefault v-show="pagename === 'default'" />
      <rexagInfo v-show="pagename === 'info'" />
      <rexagSkill v-show="pagename === 'skill'" />
      <rexagExperience v-show="pagename === 'exp'" />
      <rexagWorks v-show="pagename === 'works'" />
      <rexagConcat v-show="pagename === 'concat'" />
    </div>
  </div>
</template>
<script>
import rexagDefault from '@/components/rexag-default'
import rexagConcat from '@/components/rexag-concat'
import rexagExperience from '@/components/rexag-experience'
import rexagInfo from '@/components/rexag-info'
import rexagSkill from '@/components/rexag-skill'
import rexagWorks from '@/components/rexag-works'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    rexagDefault,
    rexagConcat,
    rexagExperience,
    rexagInfo,
    rexagSkill,
    rexagWorks
  },
  data () {
    return {
      nowIndex: 0,
      isPageDown: true,
      pagelistObj: { 'default': 0, 'info': 1, 'skill': 2, 'exp': 3, 'works': 4, 'concat': 5 },
      pagelistArray: ['default', 'info', 'skill', 'exp', 'works', 'concat']
    }
  },
  mounted () {
    console.log('Hi! 朋友，感谢您愿意调试简历代码。\n如果您有什么建议或者想学习前端，欢迎您访问我的博客 http://www.rexag.site ,\n我们互相学习，共同进步^_^。')
  },
  computed: {
    ...mapGetters({
      pagename: 'global/rexag/getPageName',
      leftValue: 'global/rexag/getLeftVale'
    })
  },
  methods: {
    changePage (pagename) {
      this.$store.dispatch('global/rexag/setPageName', pagename)
    },
    handleScroll (e) {
      let event = e || window.event
      let index = this.pagelistObj[this.pagename]
      let seaLeft = this.leftValue[0] - 0
      let submarineLeft = this.leftValue[1] - 0
      if (event.wheelDelta) { // 判断浏览器IE，谷歌滑轮事件
        if (event.wheelDelta > 0) {
          if (index === 0) {
            this.changePage(this.pagelistArray[5])
          } else if (index === 2) {
            if (seaLeft <= 0 || submarineLeft <= 0) {
              this.changePage(this.pagelistArray[(index - 1)])
            } else {
              seaLeft -= 2
              submarineLeft -= (Math.floor(Math.random() + 0.6) + 2)
              this.$store.dispatch('global/rexag/setLeftVale', [seaLeft, submarineLeft])
            }
          } else {
            this.changePage(this.pagelistArray[(index - 1)])
          }
        }
        if (event.wheelDelta < 0) {
          if (index === 5) {
            this.changePage(this.pagelistArray[0])
          } else if (index === 2) {
            if (seaLeft >= 198 || submarineLeft >= 280) {
              this.changePage(this.pagelistArray[(index + 1)])
            } else {
              seaLeft += 2
              submarineLeft += (Math.floor(Math.random() + 0.6) + 2)
              this.$store.dispatch('global/rexag/setLeftVale', [seaLeft, submarineLeft])
            }
          } else {
            this.changePage(this.pagelistArray[(index + 1)])
          }
        }
      } else if (event.detail) { // Firefox滑轮事件
        if (event.detail > 0) {
          if (index === 0) {
            this.changePage(this.pagelistArray[5])
          } else {
            this.changePage(this.pagelistArray[(index - 1)])
          }
        }
        if (event.detail < 0) {
          if (index === 5) {
            this.changePage(this.pagelistArray[0])
          } else {
            this.changePage(this.pagelistArray[(index + 1)])
          }
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
