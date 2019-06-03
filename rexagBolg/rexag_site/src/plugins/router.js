import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'

import Home from '../components/views/Home'
import FondEnd from '../components/views/FondEnd'
import BackEnd from '../components/views/BackEnd'
import DataBase from '../components/views/DataBase'
import Tools from '../components/views/Tools'
import Essay from '../components/views/Essay'

import Login from '../components/views/Login'
import Register from '../components/views/Register'
import ResetPwd from '../components/views/ResetPwd'
import Editor from '../components/views/Editor'
import Service from '../components/common/TermsOfService'

// import Editor from '../components/views/EditorNew'


Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/fondend', name: 'fondend', component: FondEnd },
    { path: '/backend', name: 'backend', component: BackEnd },
    { path: '/database', name: 'database', component: DataBase },
    { path: '/tools', name: 'tools', component: Tools },
    { path: '/essay', name: 'essay', component: Essay },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/login/resetpwd', name: 'resetpwd', component: ResetPwd },
    { path: '/editor', name: 'editor', component: Editor },
    { path: '/service', name: 'service', component: Service }
  ]
});
router.beforeEach((to, from, next) => {
  store.dispatch('ReStates/GlobalStates/actSetFirstMenu', to.name)
  store.dispatch('ReStates/GlobalStates/actSetFromRouterName', from.name)
  next()
});
export default router
