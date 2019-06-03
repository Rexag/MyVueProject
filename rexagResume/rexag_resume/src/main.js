// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import store from './store'
import '../static/css/global.css'
import rexagHeader from '@/components/common/header.vue'

Vue.config.productionTip = false

Vue.component('rexag-header', rexagHeader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  store,
  components: { App },
  template: '<App/>'
})
