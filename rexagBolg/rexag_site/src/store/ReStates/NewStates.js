const state = () => ({
  news: {
    userID: 1,
    newsList: [
      { id: 1, news: '这是一条消息！！' },
      { id: 1, news: '这是一条消息！！' },
      { id: 1, news: '这是一条消息！！' },
      { id: 1, news: '这是一条消息！！' },
      { id: 1, news: '这是一条消息！！' }
    ]
  }
})

const actions = {
  async 'actSetNews' ({ commit }, user) {
    commit('mutSetNews', user)
  }
}
const mutations = {
  'mutSetNews' (state, payload) {
    state.news = payload
  }
}

const getters = {
  'getNews' (state) {
    return state.news
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
