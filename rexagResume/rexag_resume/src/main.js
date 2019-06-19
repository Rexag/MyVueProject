// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '../static/css/global.css'
import pcHeader from '@/components/Computer/pc-header.vue'
import moveHeader from '@/components/Move/move-header.vue'

Vue.config.productionTip = false

Vue.component('pc-header', pcHeader)
Vue.component('move-header', moveHeader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
