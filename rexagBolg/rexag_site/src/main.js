// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './plugins/router'
import Axios from './plugins/axios'
import Api from './plugins/api'
import installers from './plugins/installers'
import '../public/css/global.css'
import assist from './plugins/assist'

// 引入 http库
Vue.use(Axios)
Vue.prototype.$api = Api
// 引入 辅助工具库
Vue.use(assist)
Vue.prototype.$assist = assist
// 引入 Vuex
import store from './store'
// 引入全局组件
Vue.use(installers)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")