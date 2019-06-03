const state = () => ({
  Token: localStorage.getItem('token') || null, // token
  User: JSON.parse(localStorage.getItem('user')) || {}, // 登录的user信息
  IsLogin: localStorage.getItem('token') === null ? false : true, // 是否登录了
  FirstMenu: 'home',// 当前一级菜单
  SecondMenu: '', // 当前二级菜单
  ThirdMenu: 'hot', // 当前三级菜单
  FromRouterName: '', // 从那个路由跳转过来
})

const actions = {
  async 'actSetToken' ({ commit }) {
    commit('mutSetToken')
  },
  async 'actSetUser' ({ commit }) {
    commit('mutSetUser')
  },
  async 'actSetIsLogin' ({ commit }) {
    commit('mutSetIsLogin')
  },
  async 'actSetFirstMenu' ({ commit }, FirstMenu) {
    commit('mutSetFirstMenu', FirstMenu)
  },
  async 'actSetSecondMenu' ({ commit }, SecondMenu) {
    commit('mutSetSecondMenu', SecondMenu)
  },
  async 'actSetThirdMenu' ({ commit }, ThirdMenu) {
    commit('mutSetThirdMenu', ThirdMenu)
  },
  async 'actSetFromRouterName' ({ commit }, FromRouterName) {
    commit('mutSetFromRouterName', FromRouterName)
  }
}

const mutations = {
  'mutSetToken' (state) {
    state.Token = localStorage.getItem('token')
  },
  'mutSetUser' (state) {
    state.User = JSON.parse(localStorage.getItem('user'))
  },
  'mutSetIsLogin' (state) {
    state.IsLogin = localStorage.getItem('token') === null ? false : true
  },
  'mutSetFirstMenu' (state, payload) {
    state.FirstMenu = payload
  },
  'mutSetSecondMenu' (state, payload) {
    state.SecondMenu = payload
  },
  'mutSetThirdMenu' (state, payload) {
    state.ThirdMenu = payload
  },
  'mutSetFromRouterName' (state, payload) {
    state.FromRouterName = payload
  }
}

const getters = {
  'getFirstMenu' (state) {
    return state.FirstMenu
  },
  'getSecondMenu' (state) {
    return state.SecondMenu
  },
  'getThirdMenu' (state) {
    return state.ThirdMenu
  },
  'getFromRouterName' (state) {
    return state.FromRouterName
  },
  'getUser' (state) {
    return state.User
  },
  'getIsLogin' (state) {
    return state.IsLogin
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
