import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import pcContact from './components/Computer/pc-contact'
import pcDefault from './components/Computer/pc-default'
import pcExp from './components/Computer/pc-experience'
import pcInfo from './components/Computer/pc-info'
import pcSkills from './components/Computer/pc-skills'
import pcWorks from './components/Computer/pc-works'

import moveContact from './components/Move/move-contact'
import moveDefault from './components/Move/move-default'
import moveExp from './components/Move/move-experience'
import moveInfo from './components/Move/move-info'
import moveSkills from './components/Move/move-skills'
import moveWorks from './components/Move/move-works'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', components: { default: pcDefault, pc: pcDefault, move: moveDefault } },
    { path: '/info', name: 'info', components: { default: pcInfo, pc: pcInfo, move: moveInfo } },
    { path: '/skills', name: 'skills', components: { default: pcSkills, pc: pcSkills, move: moveSkills } },
    { path: '/exp', name: 'exp', components: { default: pcExp, pc: pcExp, move: moveExp } },
    { path: '/works', name: 'works', components: { default: pcWorks, pc: pcWorks, move: moveWorks } },
    { path: '/contact', name: 'contact', components: { default: pcContact, pc: pcContact, move: moveContact } }
  ]
})

router.beforeEach((to, from, next) => {
  store.dispatch('global/rexag/setPageName', to.name)
  let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  if (flag) {
    store.dispatch('global/rexag/setUserAgent', true)
  } else {
    store.dispatch('global/rexag/setUserAgent', false)
  }
  next()
})

export default router
