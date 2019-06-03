import Content from '../components/common/Content'
import Header from '../components/common/Header'
import SecondMenu from '../components/common/SecondMenu'
import ThirdMenu from '../components/common/ThirdMenu'
import OnlineList from '../components/common/OnlineList'
import Recommend from '../components/common/Recommend'
import UserInfo from '../components/common/UserInfo'
import reFooter from '../components/common/Footer'

import Jump from '../components/common/Jump'
import MyError from '../components/common/Error'

function installers (options) {
  console.log(options)
}

// 必须具备Install函数
installers.install = function (Vue) {
  Vue.component('recontent', Content)
  Vue.component('reheader', Header)
  Vue.component('secondmenu', SecondMenu)
  Vue.component('thirdmenu', ThirdMenu)
  Vue.component('jump', Jump)
  Vue.component('myerror', MyError)
  Vue.component('onlineList', OnlineList)
  Vue.component('recommend', Recommend)
  Vue.component('userInfo', UserInfo)
  Vue.component('refooter', reFooter)

}
export default installers