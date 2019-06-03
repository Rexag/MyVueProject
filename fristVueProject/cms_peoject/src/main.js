// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import '../static/css/global.css'
import Plugin from './plugins/Plugin' // 引入插件
import Indicator from 'mint-ui/lib/indicator'
import store from './store/store'
import Moment from 'moment' // 全局过滤器
// 引入全局组件
import MyUl from './components/common/MyUl'
import MyLi from './components/common/MyLi'
import NavBar from './components/common/NavBar'
import Swipe from './components/common/Swipe'
// 引入全局组件 结束

Vue.config.productionTip = false

// 使用 全局组件 开始
Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)
Vue.component(NavBar.name, NavBar)
Vue.component(Swipe.name, Swipe)
// 使用 全局组件 结束

// axios 开始
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = 'http://127.0.0.1:9609/'
Axios.interceptors.request.use(function (config) {
  Indicator.open({ text: '玩儿命加载中...', spinnerType: 'fading-circle' })
  return config
})
Axios.interceptors.response.use(function (response) {
  Indicator.close()
  return response
})
// axios 结束

// 让插件来局部安装mint-ui的组件 开始
Vue.use(Plugin)
// 注册插件 结束

// 定义全局过滤器 开始
Moment.locale('zh-cn')
Vue.filter('convertTime', function (data, formatStr) {
  // 2015-04-16T03:50:28.000Z
  return Moment(data).format(formatStr)
})
// 相对时间过滤器
Vue.filter('relTime', function (time) {
  // 2015-04-16T03:50:28.000Z
  return Moment(time).fromNow()
})
Vue.filter('controllShow', function (str, num) {
  if (str.length <= num) {
    return str
  }
  // 如果当前字符串大于num,截取0-num-1位
  if (str.length > num) {
    return str.substr(0, num - 1) + '...'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
