import 'mint-ui/lib/style.css'
import Header from 'mint-ui/lib/header'
import 'mint-ui/lib/header/style.css'
import Switch from 'mint-ui/lib/switch'
import 'mint-ui/lib/switch/style.css'
import Swipe from 'mint-ui/lib/swipe'
import 'mint-ui/lib/swipe/style.css'
import SwipeItem from 'mint-ui/lib/swipe-item'
import 'mint-ui/lib/swipe-item/style.css'
import Lazyload from 'mint-ui/lib/lazyload'
import 'mint-ui/lib/lazyload/style.css'
import Loadmore from 'mint-ui/lib/loadmore'
import 'mint-ui/lib/loadmore/style.css'
import Button from 'mint-ui/lib/button'
import 'mint-ui/lib/button/style.css'
import Toast from 'mint-ui/lib/toast'
import 'mint-ui/lib/toast/style.css'
import Tabbar from 'mint-ui/lib/tabbar'
import 'mint-ui/lib/tabbar/style.css'
import TabItem from 'mint-ui/lib/tab-item'
import 'mint-ui/lib/tab-item/style.css'
import Badge from 'mint-ui/lib/badge'
import 'mint-ui/lib/badge/style.css'

function Plugin (options) {

}

// 必须具备Install函数
Plugin.install = function (Vue) {
  Vue.component(Badge.name, Badge)
  Vue.component(Tabbar.name, Tabbar)
  Vue.component(TabItem.name, TabItem)
  Vue.component(Header.name, Header)
  Vue.component(Switch.name, Switch)
  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)
  Vue.component(Loadmore.name, Loadmore)
  Vue.component(Button.name, Button)
  Vue.use(Lazyload)
  Vue.prototype.$toast = Toast
}
export default Plugin
