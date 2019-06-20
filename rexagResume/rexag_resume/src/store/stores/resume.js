let user = {
  zh_name: '张洪祥',
  en_name: 'rexag',
  sex: 'male',
  phone: '16675159609',
  email: 'rexag.zhang@qq.com',
  headpic: '../static/img/rexag_pic.jpg',
  rexagpic: '../static/img/rexag_pic.jpg',
  autograph: 'keep new keep doing',
  bolg_link: 'https://www.rexag.site'
}

let routerName = {
  pcRouter: {
    home: '/pcHome',
    info: '/pcInfo',
    exp: '/pcExp',
    work: '/pcWorks',
    skills: '/pcSkills',
    contact: '/pcContact'
  },
  moveRouter: {
    home: '/moveHome',
    info: '/moveInfo',
    exp: '/moveExp',
    work: '/moveWorks',
    skills: '/moveSkills',
    contact: '/moveContact'
  }
}

let degree = [
  { id: 0, zh_name: '初学', en_name: 'Beginner' },
  { id: 1, zh_name: '熟悉', en_name: 'Familiar' },
  { id: 2, zh_name: '掌握', en_name: 'Grasp' },
  { id: 3, zh_name: '擅长', en_name: 'GoodAt' },
  { id: 4, zh_name: '精通', en_name: 'Proficient' }
]

let fontEnd = [
  { id: 0, name: 'HTML5', degree: [{ id: 0, show: 1 }, { id: 1, show: 1 }, { id: 2, show: 1 }, { id: 3, show: 1 }, { id: 4, show: 0 }] },
  { id: 1, name: 'CSS3', degree: [{ id: 0, show: 1 }, { id: 1, show: 1 }, { id: 2, show: 1 }, { id: 3, show: 1 }, { id: 4, show: 0 }] },
  { id: 2, name: 'JavsScript', degree: [{ id: 0, show: 1 }, { id: 1, show: 1 }, { id: 2, show: 1 }, { id: 3, show: 1 }, { id: 4, show: 1 }] },
  { id: 3, name: 'Vue', degree: [{ id: 0, show: 1 }, { id: 1, show: 1 }, { id: 2, show: 1 }, { id: 3, show: 1 }, { id: 4, show: 0 }] },
  { id: 4, name: 'JQuery', degree: [{ id: 0, show: 1 }, { id: 1, show: 1 }, { id: 2, show: 1 }, { id: 3, show: 0 }, { id: 4, show: 0 }] }
]

let backEnd = [
  { id: 0, name: 'C#', degree: [{ id: 0, show: 1 }, { id: 1, show: 1 }, { id: 2, show: 1 }, { id: 3, show: 1 }, { id: 4, show: 0 }] },
  { id: 1, name: 'NodeJS', degree: [{ id: 0, show: 1 }, { id: 1, show: 1 }, { id: 2, show: 1 }, { id: 3, show: 0 }, { id: 4, show: 0 }] },
  { id: 2, name: 'SQL Server', degree: [{ id: 0, show: 1 }, { id: 1, show: 1 }, { id: 2, show: 1 }, { id: 3, show: 1 }, { id: 4, show: 0 }] },
  { id: 3, name: 'MySQL', degree: [{ id: 0, show: 1 }, { id: 1, show: 1 }, { id: 2, show: 1 }, { id: 3, show: 0 }, { id: 4, show: 0 }] },
  { id: 4, name: 'MongoDB', degree: [{ id: 0, show: 1 }, { id: 1, show: 1 }, { id: 2, show: 0 }, { id: 3, show: 0 }, { id: 4, show: 0 }] }
]

let otherSkill = [
  { id: 0, name: 'TypeScript', degree: [{ id: 0, show: 1 }, { id: 1, show: 1 }, { id: 2, show: 0 }, { id: 3, show: 0 }, { id: 4, show: 0 }] },
  { id: 1, name: 'Koa', degree: [{ id: 0, show: 1 }, { id: 1, show: 1 }, { id: 2, show: 1 }, { id: 3, show: 0 }, { id: 4, show: 0 }] },
  { id: 2, name: 'Web Socket', degree: [{ id: 0, show: 1 }, { id: 1, show: 1 }, { id: 2, show: 1 }, { id: 3, show: 0 }, { id: 4, show: 0 }] }
]

let DataBase = [
  { id: 0, name: 'TypeScript', degree: [{ id: 0, show: 1 }, { id: 1, show: 1 }, { id: 2, show: 0 }, { id: 3, show: 0 }, { id: 4, show: 0 }] },
  { id: 1, name: 'Koa', degree: [{ id: 0, show: 1 }, { id: 1, show: 1 }, { id: 2, show: 1 }, { id: 3, show: 0 }, { id: 4, show: 0 }] },
  { id: 2, name: 'Web Socket', degree: [{ id: 0, show: 1 }, { id: 1, show: 1 }, { id: 2, show: 1 }, { id: 3, show: 0 }, { id: 4, show: 0 }] }
]

let timeline = [
  { id: 0, pageName: 'studyhome', year: '2018', month: '11', day: '01', zh_describe: '开始', en_describe: 'start', zh_stress: '系统的自学前端', en_stress: 'Self-Study front-end of the system' },
  { id: 1, pageName: 'sayed', year: '2018', month: '08', day: '06', zh_describe: '入职于', en_describe: 'Entry into', zh_stress: '深圳市赛义德信息技术有限公司', en_stress: 'Shenzhen sayed Information Technology Limited company' },
  { id: 2, pageName: 'zuel', year: '2017', month: '12', day: '30', zh_describe: '毕业于', en_describe: 'Graduate from', zh_stress: '中南财经政法大学', en_stress: 'Zhongnan University of Economics and Law' },
  { id: 3, pageName: 'wczy', year: '2017', month: '06', day: '30', zh_describe: '毕业于', en_describe: 'Graduate from', zh_stress: '武昌职业学院', en_stress: 'Wuchang Polytechnic College' },
  { id: 4, pageName: 'merry', year: '2017', month: '06', day: '21', zh_describe: '入职于', en_describe: 'Entry into', zh_stress: '美律电子（深圳）有限公司', en_stress: 'Shenzhen merry Limited company' },
  { id: 5, pageName: 'catlbattery', year: '2016', month: '06', day: '15', zh_describe: '实习于福建宁德', en_describe: 'Internship in Ningde, Fujian', zh_stress: '时代新能源科技有限公司', en_stress: 'CATL company' }
]

let expWork = [
  {
    workindex: 6,
    pageName: 'sayed',
    zh_company: '深圳市赛义德信息技术有限公司',
    en_company: 'Shenzhen sayed Information Technology Limited company',
    zh_worktime: '2018-08-06 ~ 2018-11-01',
    en_worktime: '2018-08-06 ~ 2018-11-01',
    zh_department: '技术部',
    en_department: 'Technical Department',
    zh_position: '.NET 工程师',
    en_position: '.NET Engineer',
    zh_KeyWord: 'C#、NodeJs、TypeScript、git、Nginx、Linux、Mysql、MariaDB、TypeOrm、医疗设备',
    en_KeyWord: 'C#、NodeJs、TypeScript、git、Nginx、Linux、Mysql、MariaDB、TypeOrm、Medical equipment',
    companyherf: 'http://sayed.com.cn',
    duty: [
      { dutyindex: 61, zh_title: '负责自助医疗服务终端的接口开发，主要是.NET接口和NodeJs接口', en_title: 'Responsible for interface development of self-service terminal,Mainly. NET interface and NodeJs interface' },
      { dutyindex: 62, zh_title: '负责项目的项目框架设计，数据库设计，维护', en_title: 'Responsible for project framework design, database design and maintenance' },
      { dutyindex: 63, zh_title: '负责项目服务器环境搭建，服务部署', en_title: 'Responsible for the construction of project server environment and service deployment' }
    ]
  },
  {
    workindex: 7,
    pageName: 'merry',
    zh_company: '美律电子（深圳）有限公司',
    en_company: 'Shenzhen Merry Electronics Limited company',
    zh_worktime: '2017-06-21 ~ 2018-08-01',
    en_worktime: '2017-06-21 ~ 2018-08-01',
    zh_department: '资讯部',
    en_department: 'Information Department',
    zh_position: 'MES 助理工程师',
    en_position: 'MES Assistant Engineer',
    zh_KeyWord: 'C#、WPF、WinForm、Web Service、SQL Server、Oracle、SVN、MES',
    en_KeyWord: 'C#、WPF、WinForm、Web Service、SQL Server、Oracle、SVN、MES',
    companyherf: 'http://www.merry.com.tw',
    duty: [
      { dutyindex: 71, zh_title: '负责MES系统设备管理模组的维护与治工具模块开发', en_title: 'Responsible for maintenance and management tool module development of MES system equipment management module' },
      { dutyindex: 72, zh_title: '负责MES系统生产效率模组的维护与二次开发', en_title: 'Responsible for maintenance and secondary development of MES production efficiency module' },
      { dutyindex: 73, zh_title: '为生产部门和其他部门提供技术支持，功能开发', en_title: 'Provdutyindexe technical support and function development for production and other departments' },
      { dutyindex: 74, zh_title: '为BOSE客户开发数据上传程式', en_title: 'Develop data upload program for BOSE customers' }
    ]
  },
  {
    workindex: 8,
    pageName: 'catlbattery',
    zh_company: '宁德时代新能源',
    en_company: 'Ningde,Fujian CATL company',
    zh_worktime: '2016-06-15 ~ 2017-06-02',
    en_worktime: '2016-06-15 ~ 2017-06-02',
    zh_department: '生产部',
    en_department: 'Production Department',
    zh_position: '生产技术员',
    en_position: 'Production Technician',
    zh_KeyWord: '初次接触编程、C++、MES、JavaScript、PLC、WPF、SAP、工业4.0',
    en_KeyWord: 'First Contact Programming、C++、MES、JavaScript、PLC、WPF、SAP、Industry 4.0',
    companyherf: 'http://www.catlbattery.com',
    duty: [
      { dutyindex: 81, zh_title: '主要负责N1工厂宝马电池生产线大干燥房区域的生产任务', en_title: 'Mainly responsible for the production of large drying room area of BMW battery production line in N1 plant' },
      { dutyindex: 82, zh_title: '大干燥房区域的真空 Baking 阶段、注液阶段的生产技术支持', en_title: 'Technical Support for Vacuum Baking and Injection in Large Drying Room Area' },
      { dutyindex: 83, zh_title: '大干燥房区域的真空 Baking 阶段、注液阶段的设备调试、保养、维护', en_title: 'Debugging, Maintenance and Maintenance of Vacuum Baking and Injection Equipment in Large Drying Room Area' },
      { dutyindex: 84, zh_title: '大干燥房区域的真空 Baking 阶段、注液阶段的人员管理，任务分配', en_title: 'Personnel Management and Task Allocation in Vacuum Baking and Injection Phases in Large Drying Room Area' }
    ]
  }
]

let expStudy = [
  {
    studyindex: 9,
    pageName: 'studyhome',
    zh_school: '自学前端',
    en_school: 'Self-study front',
    zh_studytime: '2018-11-01 ~ 至今',
    en_studytime: '2018-11-01 ~ today',
    zh_discipline: '',
    en_discipline: '',
    zh_major: '',
    en_major: '',
    zh_KeyWord: 'C#、JavaScript、Jquery、CSS3、HTML5、ES6、NodeJs、Ajax、webpack、Vue、Vuex、公众号、小程序、GitHub、Nginx、Linux、Mysql、MongoDB',
    en_KeyWord: 'C#、JavaScript、Jquery、CSS3、HTML5、ES6、NodeJs、Ajax、webpack、Vue、Vuex、Wechat public account、Small program、GitHub、Nginx、Linux、Mysql、MongoDB',
    Schoolherf: 'http://www.zuel.edu.cn'
    // curriculum: [
    //   { curindex: 91, zh_title: '学习', en_title: '' },
    //   { curindex: 92, zh_title: '', en_title: '' },
    //   { curindex: 93, zh_title: '', en_title: '' }
    // ]
  },
  {
    studyindex: 10,
    pageName: 'zuel',
    zh_school: '中南财经政法大学',
    en_school: 'Zhongnan University of Economics and Law',
    zh_studytime: '2014-09-01 ~ 2017-12-30',
    en_studytime: '2014-09-01 ~ 2017-12-30',
    zh_discipline: '工商管理学院',
    en_discipline: 'college of business administration',
    zh_major: '工商企业管理',
    en_major: 'politics of the firm',
    zh_KeyWord: '自考本科',
    en_KeyWord: 'Self taught Examination Undergraduate degree',
    Schoolherf: 'http://www.zuel.edu.cn'
    // curriculum: [
    //   { curindex: 101, zh_title: '学习', en_title: '' },
    //   { curindex: 102, zh_title: '', en_title: '' },
    //   { curindex: 103, zh_title: '', en_title: '' }
    // ]
  },
  {
    studyindex: 11,
    pageName: 'wczy',
    zh_school: '武昌职业学院',
    en_school: 'Wuchang Polytechnic College',
    zh_studytime: '2014-09-01 ~ 2017-06-30',
    en_studytime: '2014-09-01 ~ 2017-06-30',
    zh_discipline: '汽车工程学院',
    en_discipline: 'College of Automotive Engineering',
    zh_major: '汽车检测与维修',
    en_major: 'Vehicle Inspection and Maintenance',
    zh_KeyWord: '统招大专',
    en_KeyWord: 'Unified enrollment Junior college degree',
    Schoolherf: 'http://www.wczy.cn'
    // curriculum: [
    //   { curindex: 111, zh_title: '学习', en_title: '' },
    //   { curindex: 112, zh_title: '', en_title: '' },
    //   { curindex: 113, zh_title: '', en_title: '' }
    // ]
  }
]

let works = [
  {
    worksID: 0,
    zh_proName: 'web前端工程师简历',
    en_proName: 'Resume Project',
    zh_proIntroduction: '本简历初版，项目使用vue-cli2.0，通过webpack进行项目架构生成和打包，使用Vue，Vuex进行组件开发和状态管理。',
    en_proIntroduction: 'First edition of this resume,The project uses vue-cli2.0,Project architecture generation and packaging through webpack,Using Vue and Vuex for Component development and state management',
    proHerf: 'https://rexag.cn'
  },
  {
    worksID: 1,
    zh_proName: 'web前端工程师博客',
    en_proName: 'Blog Project',
    zh_proIntroduction: '项目基于Vue-Cli3.0、Vue、Vuex、Vue-router、Axios进行开发，通过crypto进行MS5加密。服务端使用NodeJS的koa框架进行服务器搭建，文件响应和上传。数据库使用MySQL，使用Jsonwentoken进行登陆状态验证',
    en_proIntroduction: "The project is based on Vue-Cli 3.0, Vue, Vuex, Vue-router and Axios, and MS5 is encrypted by crypto. The server uses NodeJS's koa framework to build the server, respond to and upload files. The database uses MySQL and Jsonwentoken for login status verification",
    proHerf: 'https://rexag.site'
  },
  {
    worksID: 2,
    zh_proName: '前端练习项目',
    en_proName: 'exercises Project',
    zh_proIntroduction: '新知识点的小项目练习，主要是静态页面练习，js对象式、函数式、原型式编程，基于jq的动态效果，基于js或jq的小游戏，H5、CSS3的API练习，node koa项目(音乐播放网站服务端、web聊天室服务端、我的博客服务端)，vue项目练习(移动端新闻阅读以及在线购物小项目,我的简历网站和我的博客网站)',
    en_proIntroduction: 'Small project exercises for new knowledge points, mainly static page exercises,JS object-oriented, functional, prototype programming, jq-based dynamic effects, JS or jq-based games, H5, CSS3 API exercises,node koa Project practice,vue Project practice',
    proHerf: 'https://github.com/Rexag/MyPractice'
  },
  {
    worksID: 3,
    zh_proName: '佛山顺德妇幼项目',
    en_proName: 'Shunde Project',
    zh_proIntroduction: '程式基于NodeJS koa框架，使用TypeScript进行编程。通过Nginx进行http传输和接口反向代理。数据库是MariaDB，ORM框架为TypeOrm，代码管理工具git',
    en_proIntroduction: 'The program is based on NodeJS Koa framework,Programing with TypeScript,using Nginx for interface reverse proxy,database is MariaDB,ORM framework is TypeOrm,Code version control using Git',
    proHerf: 'https://github.com/Rexag/shundefuyou'
  }
]

let concatLinks = [
  { urlID: 0, zh_title: 'Rexag', en_title: 'Rexag', name: 'aboutRexag', imgUrl: '/static/img/rexag_pic.jpg', ewmUrl: '/static/img/ewm_rexag.png' },
  { urlID: 1, zh_title: '博客', en_title: 'Blog', name: 'blog', imgUrl: '/static/img/blog.svg', ewmUrl: '/static/img/blog.png' },
  { urlID: 2, zh_title: '微信', en_title: 'Wechat', name: 'wechat', imgUrl: '/static/img/wechat.svg', ewmUrl: '/static/img/ewm_wechat.png' },
  { urlID: 3, zh_title: '微信公众号', en_title: 'Wechat Public Accounts', name: 'pub_wetchat', imgUrl: '/static/img/wechat_pub.svg', ewmUrl: '/static/img/ewm_pubwechat.png' },
  { urlID: 4, zh_title: 'GitHub', en_title: 'GitHub', name: 'github', imgUrl: '/static/img/github.svg', ewmUrl: '/static/img/ewm_github.png', linkUrl: 'https://github.com/Rexag' },
  { urlID: 5, zh_title: '开源中国', en_title: 'OSChina', name: 'oschina', imgUrl: '/static/img/osc.svg', ewmUrl: '/static/img/ewm_osc.png', linkUrl: 'https://my.oschina.net/u/4080784' }
]

let moveConcatLinks = [
  { urlID: 0, zh_title: '博客', en_title: 'Blog', name: 'blog', imgUrl: '/static/img/blog.svg', linkUrl: 'https://rexag.site' },
  { urlID: 1, zh_title: 'GitHub', en_title: 'GitHub', name: 'github', imgUrl: '/static/img/github.svg', linkUrl: 'https://github.com/Rexag' },
  { urlID: 2, zh_title: '开源中国', en_title: 'OSChina', name: 'oschina', imgUrl: '/static/img/osc.svg', linkUrl: 'https://my.oschina.net/u/4080784' }
]

let concatAuout = {
  zh_past: '小时候总觉得编程和黑客密切相关，显示器上一行都看不懂的代码永远都在飞速滚动。直到16年在宁德时代新能源实习，看到不同公司的工程师调试代码，我才开始认识编程。几个月后我的好朋友推荐我学习C#，于是我在上班之余开始学习C#的基础语法还有SQL Server数据库。17年6月初已经入职深圳美律电子的他邀请我来美律电子面试，于是我辞掉了时代新能源的工作来到深圳。经过一番努力后成功入职美律电子，就这样开始了我的程序员职业生涯。',
  en_past: "When I was young, I always felt that programming was closely related to hackers,A line of code on the monitor that you can't read is always scrolling fast.New Energy Practice in Ningde Age until 16 years,When I saw engineers from different companies debugging code, I began to understand programming. A few months later, my good friend recommended me to study C.#, So I started to learn the basic grammar of C# and the SQL Server database after work.At the beginning of June 17, he had joined Shenzhen Metro Electronics. He invited me to come to Metro Electronics for an interview. So I quit my job as Time New Energy and came to Shenzhen.After a lot of hard work, I succeeded in joining Shenzhen Merry Electronics Limited company and started my career as a programmer.",
  zh_present: '现在我已经持续学习了六个多月，从HTML,CSS,JavaScript这三门基础课到Jquery，网络基础，CSS3，HTML5，ES6，NodeJS，Vue。五月份准备开发属于自己的公众号和小程序。学习前端这么久，拥抱开源是我认为最有趣的事情。我可以找到非常多适合我练习的项目，阅读大牛们的代码，了解他们的编程思想和书写规范。我会持续不断的学习，为加入我喜欢的开源项目而努力。',
  en_present: "Now I have been studying for more than six months,From the three basic courses of HTML, CSS and JavaScript to Jquery,Network foundation,CSS3,HTML5,ES6,NodeJS,Vue. In May, I'm going to develop my own public numbers and small programs. Having studied the front end for so long, embracing open source is what I think is the most interesting thing. I can find many projects suitable for my practice., read Daniels'code, understand their programming ideas and writing specifications. I will continue to learn and work hard to join my favorite open source projects.",
  zh_future: '未来计划向web全栈方向发展，node + 端技术，注重敏捷开发。此外对于TypeScript、.NET Core、three.js、Python爬虫也比较感兴趣。同时也在不断的学习计算机科学基础（操作系统概念、计算机组成原理、算法和数据结构），软件工程（软件开发模式、设计模式、架构思维），以及开发规范和命名规范。',
  en_future: 'Future plans to move towards full web stack,Focus on Agile Development. node + end technology.Also interested in TypeScript,.NET Core,three.js,Python crawler.At the same time, he is constantly learning the basics of computer science (operating system concepts, computer composition principles, algorithms and data structures), software engineering (software development patterns, design patterns, architectural thinking), and development specifications and naming conventions.'
}

let aboutRexag = {
  zh_introduce1: `我并不是计算机专业,但对编程很感兴趣，所以自学了C#和前端。今后的职业规划是朝着前端发展。 目前在学Vue、小程序。19年下半年准备学习React，加深Node，TypeScript的熟练度。然后深入学习Vue和React的源码。后面感兴趣的还有weex、nuxt.js、three.js、Python爬虫等等。
      前端方面写过响应式页面，pc端页面，移动端练习较少。熟悉MVC、MVVM开发,熟悉自动化,模块化开发。做过一些小demo，如商城，企业网站，视频，音频，评论等都有涉及。`,
  en_introduce1: `I'm not a computer major, but I'm interested in programming, so I taught myself C# and the front end. Future career planning is to move towards the front end. At present, I am learning Vue and small program. 
  In the second half of nineteen years, we are going to learn React to deepen the proficiency of Node and TypeScript. Then I'll go into the source code of Vue and React. Later, weex, nuxt. js, three. js, Python crawlers and so on are also interesting.
  Front-end has written responsive pages, PC pages, mobile less practice. Familiar with MVC, MVVM development, familiar with automation, modular development. Have done some small demos, such as malls, corporate websites, videos, audio, reviews and so on.`,
  zh_introduce2: '能静下心来去做好每件事，非常喜欢前端，执行力，学习能力都很不错！目前能做点粗糙设计（比如本网站和',
  en_introduce2: `Can calm down to do everything well, like the front-end, execution, learning ability is very good! At present, we can do some rough design (for example, this website, and `,
  zh_introduce3: '更多项目欢迎访问我的',
  en_introduce3: 'More projects welcome to visit '
}

let moveSkills = {
  outCircleList: [
    { id: 0, bg: { backgroundColor: 'rgba(30, 28, 167, 0.6)' }, en_name: 'MiniApp', zh_name: '小程序' },
    { id: 1, bg: { backgroundColor: 'rgba(8, 119, 184, 0.6)' }, en_name: 'Node', zh_name: 'Node' },
    { id: 2, bg: { backgroundColor: 'rgba(17, 230, 70, 0.6)' }, en_name: 'MsSQL', zh_name: 'MsSQL' },
    { id: 3, bg: { backgroundColor: 'rgba(8, 119, 184, 0.6)' }, en_name: 'JQuery', zh_name: 'JQuery' },
    { id: 4, bg: { backgroundColor: 'rgba(71, 19, 19, 0.6)' }, en_name: 'React', zh_name: 'React' },
    { id: 5, bg: { backgroundColor: 'rgba(8, 119, 184, 0.6)' }, en_name: 'TypeScript', zh_name: 'TypeScript' },
    { id: 6, bg: { backgroundColor: 'rgba(71, 19, 19, 0.6)' }, en_name: 'MongoDB', zh_name: 'MongoDB' },
    { id: 7, bg: { backgroundColor: 'rgba(17, 230, 70, 0.6)' }, en_name: 'CSS3', zh_name: 'CSS3' }
  ],
  innerCircleList: [
    { id: 0, bg: { backgroundColor: 'rgba(184, 45, 130, 0.6)' }, en_name: 'JS', zh_name: 'JS' },
    { id: 1, bg: { backgroundColor: 'rgba(17, 230, 70, 0.6)' }, en_name: 'Vue', zh_name: 'Vue' },
    { id: 2, bg: { backgroundColor: 'rgba(17, 230, 70, 0.6)' }, en_name: 'C#', zh_name: 'C#' },
    { id: 4, bg: { backgroundColor: 'rgba(17, 230, 70, 0.6)' }, en_name: 'H5', zh_name: 'H5' }
  ]
}

export default {
  user,
  aboutRexag,
  degree,
  fontEnd,
  backEnd,
  otherSkill,
  timeline,
  expWork,
  expStudy,
  works,
  concatLinks,
  concatAuout,
  routerName,
  DataBase,
  moveConcatLinks,
  moveSkills
}
