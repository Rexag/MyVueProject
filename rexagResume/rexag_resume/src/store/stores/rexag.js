import resume from './resume'
const state = () => ({
  rexag: {
    isChinese: true,
    pagename: '',
    expShowPage: 'default',
    userAgent: false,
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
    aboutRexag: resume.aboutRexag,
    routerName: resume.routerName,
    moveConcatLinks: resume.moveConcatLinks,
    moveSkills: resume.moveSkills
  }
})

const actions = {
  async 'setIsChinese' ({ commit }, isChinese) {
    commit('changeIsChinese', isChinese)
  },
  async 'setPageName' ({ commit }, pagename) {
    commit('changePageName', pagename)
  },
  async 'setExpShowPage' ({ commit }, expshowpage) {
    commit('changeExpShowPage', expshowpage)
  },
  async 'setUserAgent' ({ commit }, UserAgent) {
    commit('changeUserAgent', UserAgent)
  }
}
const mutations = {
  'changeIsChinese' (state, payload) {
    state.rexag.isChinese = payload
  },
  'changePageName' (state, payload) {
    state.rexag.pagename = payload
  },
  'changeExpShowPage' (state, payload) {
    state.rexag.expShowPage = payload
  },
  'changeUserAgent' (state, payload) {
    state.rexag.userAgent = payload
  }
}

const getters = {
  'getUser' (state) {
    return state.rexag.user
  },
  'getIsChinese' (state) {
    return state.rexag.isChinese
  },
  'getPageName' (state, id) {
    return state.rexag.pagename
  },
  'getHeaderWords' (state) {
    return state.rexag.headerwords
  },
  'getDegree' (state) {
    return state.rexag.degree
  },
  'getFontEnd' (state) {
    return state.rexag.fontEnd
  },
  'getBackEnd' (state) {
    return state.rexag.backEnd
  },
  'getOtherSkill' (state) {
    return state.rexag.otherSkill
  },
  'getTimeLine' (state) {
    return state.rexag.timeline
  },
  'getExpWork' (state) {
    return state.rexag.expWork
  },
  'getExpStudy' (state) {
    return state.rexag.expStudy
  },
  'getWorks' (state) {
    return state.rexag.works
  },
  'getConcatLinks' (state) {
    return state.rexag.concatLinks
  },
  'getMoveConcatLinks' (state) {
    return state.rexag.moveConcatLinks
  },
  'getConcatAuout' (state) {
    return state.rexag.concatAuout
  },
  'getAboutRexag' (state) {
    return state.rexag.aboutRexag
  },
  'getRouterName' (state) {
    return state.rexag.routerName
  },
  'getExpShowPage' (state, id) {
    return state.rexag.expShowPage
  },
  'getUserAgent' (state, id) {
    return state.rexag.userAgent
  },
  'getMoveSkills' (state, id) {
    return state.rexag.moveSkills
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
