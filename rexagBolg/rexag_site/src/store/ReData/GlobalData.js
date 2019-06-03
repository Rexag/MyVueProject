const state = () => ({
  FirstMenuList: [
    { id: 0, title: '首页', name: 'home', router: '/' },
    { id: 1, title: '前端', name: 'fondend', router: '/fondend' },
    { id: 2, title: '后端', name: 'backend', router: '/backend' },
    { id: 3, title: '数据库', name: 'database', router: '/database' },
    { id: 4, title: '工具', name: 'tools', router: '/tools' },
    { id: 5, title: '随笔', name: 'essay', router: '/essay' }
  ],
  SecondMenuList: {
    fondend: [
      { id: 0, name: 'HTML', title: 'HTML' },
      { id: 1, name: 'CSS', title: 'CSS' },
      { id: 2, name: 'JavaScript', title: 'JavaScript' },
      { id: 3, name: 'TypeScript', title: 'TypeScript' },
      { id: 4, name: 'Vue', title: 'Vue' },
      { id: 5, name: 'React', title: 'React' },
      { id: 6, name: 'ThreeJS', title: 'ThreeJS' },
      { id: 7, name: 'Angular', title: 'Angular' },
      { id: 8, name: 'JQuery', title: 'JQuery' },
      { id: 9, name: 'Bootstrap', title: 'Bootstrap' }
    ],
    backend: [
      { id: 0, name: 'C#', title: 'C#' },
      { id: 1, name: 'Node', title: 'Node' },
      { id: 2, name: 'Java', title: 'Java' },
      { id: 3, name: 'Python', title: 'Python' },
      { id: 4, name: 'PHP', title: 'PHP' },
      { id: 5, name: 'C', title: 'C' },
      { id: 6, name: 'C++', title: 'C++' }
    ],
    database: [
      { id: 0, name: 'Orcale', title: 'Orcale' },
      { id: 1, name: 'SQL Server', title: 'SQL Server' },
      { id: 2, name: 'MySql', title: 'MySql' },
      { id: 3, name: 'MongoDB', title: 'MongoDB' },
      { id: 4, name: 'MariaDB', title: 'MariaDB' },
      { id: 5, name: 'Redis', title: 'Redis' },
      { id: 6, name: 'Neo4j', title: 'Neo4j' },
      { id: 7, name: 'InfluxDB', title: 'InfluxDB' }
    ],
    tools: [
      { id: 0, name: 'IDE', title: '编辑器' },
      { id: 1, name: 'Plugin', title: '插件' },
      { id: 2, name: 'App', title: '程序' },
    ]
  },
  admin: {
    id: 0,
    username: 'rexag',
    sex: 'male',
    phone: '16675159609',
    email: 'rexag.zhang@gmail.com',
    headpic: 'http://127.0.0.1:9699/img/rexag_pic.jpg',
    autograph: 'keep new keep doing',
  },
  adminPics: [
    { id: 0, title: 'Rexag', name: 'rexag', imgUrl: 'rexag_pic.jpg', ewmUrl: 'rexag.png' },
    { id: 1, title: '简历', name: 'resume', imgUrl: 'resume.svg', ewmUrl: 'resume.png' },
    { id: 2, title: '微信', name: 'wechat', imgUrl: 'wechat.svg', ewmUrl: 'wechat.png' },
    { id: 3, title: '微信公众号', name: 'pub_wetchat', imgUrl: 'pub_wetchat.svg', ewmUrl: 'pub_wetchat.png' },
    { id: 4, title: 'GitHub', name: 'github', imgUrl: 'github.svg', ewmUrl: 'github.png' },
    { id: 5, title: '开源中国', name: 'oschina', imgUrl: 'oschina.svg', ewmUrl: 'oschina.png' }
  ]
})

const actions = {

}

const mutations = {

}

const getters = {
  'getFirstMenuList' (state) {
    return state.FirstMenuList
  },
  'getAdmin' (state) {
    return state.admin
  },
  'getAdminPics' (state) {
    return state.adminPics
  },
  'getSecondMenuList' (state) {
    return state.SecondMenuList
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
