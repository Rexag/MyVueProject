import resume from './resume'
const state = () => ({
  rexag: {
    isChinese: true,
    pagename: 'default',
    leftVale: [0, 0],
    expShowPage: 'default',
    user: resume.user,
    degree: resume.degree,
    fontEnd: resume.fontEnd,
    backEnd: resume.backEnd,
    otherSkill: resume.otherSkill,
    timeline: resume.timeline,
    expWork: resume.expWork,
    expStudy: resume.expStudy,
    works: resume.works,
    concatLinks: resume.concatLinks,
    concatAuout: resume.concatAuout,
    aboutRexag: resume.aboutRexag
  }
})

const actions = {
  async 'setIsChinese' ({ commit }, isChinese) {
    commit('changeIsChinese', isChinese)
  },
  async 'setPageName' ({ commit }, pagename) {
    commit('changePageName', pagename)
  },
  async 'setLeftVale' ({ commit }, leftVale) {
    commit('changeLeftVale', leftVale)
  },
  async 'setExpShowPage' ({ commit }, expshowpage) {
    commit('changeExpShowPage', expshowpage)
  }
}
const mutations = {
  'changeIsChinese' (state, payload) {
    state.rexag.isChinese = payload
  },
  'changePageName' (state, payload) {
    state.rexag.pagename = payload
  },
  'changeLeftVale' (state, payload) {
    state.rexag.leftVale = payload
  },
  'changeExpShowPage' (state, payload) {
    state.rexag.expShowPage = payload
  }
}

const getters = {
  'getUser' (state, id) {
    return state.rexag.user
  },
  'getIsChinese' (state, id) {
    return state.rexag.isChinese
  },
  'getHeaderWords' (state, id) {
    return state.rexag.headerwords
  },
  'getPageName' (state, id) {
    return state.rexag.pagename
  },
  'getDegree' (state, id) {
    return state.rexag.degree
  },
  'getFontEnd' (state, id) {
    return state.rexag.fontEnd
  },
  'getBackEnd' (state, id) {
    return state.rexag.backEnd
  },
  'getOtherSkill' (state, id) {
    return state.rexag.otherSkill
  },
  'getLeftVale' (state, id) {
    return state.rexag.leftVale
  },
  'getTimeLine' (state, id) {
    return state.rexag.timeline
  },
  'getExpShowPage' (state, id) {
    return state.rexag.expShowPage
  },
  'getExpWork' (state, id) {
    return state.rexag.expWork
  },
  'getExpStudy' (state, id) {
    return state.rexag.expStudy
  },
  'getWorks' (state, id) {
    return state.rexag.works
  },
  'getConcatLinks' (state, id) {
    return state.rexag.concatLinks
  },
  'getConcatAuout' (state, id) {
    return state.rexag.concatAuout
  },
  'getAboutRexag' (state, id) {
    return state.rexag.aboutRexag
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
