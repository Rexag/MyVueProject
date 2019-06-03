<template>
  <div class="info">
    <header class="header">
      <h2 class="header__h2">{{ isChinese ? "关于我" : "About Me" }}</h2>
    </header>
    <main class="main">
      <div class="tips">
        <ul class="tips__ul">
          <li class="tips__li">
            <div class="tips__div">
              <div class="tips__imgbox">
                <img
                  class="tips__img"
                  src="static/img/i_age.svg"
                  :alt="isChinese ? '年龄' : 'age'"
                  :title="isChinese ? '年龄' : 'age'"
                />
              </div>
            </div>
            <div class="tips__text">
              <span>{{ isChinese ? "年龄" : "Age" }}</span> / <span>23</span>
            </div>
          </li>
          <li class="tips__li">
            <div class="tips__div">
              <div class="tips__imgbox">
                <img
                  class="tips__img"
                  src="static/img/i_edu.svg"
                  :alt="isChinese ? '学历' : 'education'"
                  :title="isChinese ? '学历' : 'education'"
                />
              </div>
            </div>
            <div class="tips__text">
              <span>{{ isChinese ? "学历" : "Education" }}</span> /
              <span>{{
                isChinese
                  ? "大专&自考本科"
                  : "Junior College & Self-taught undergraduate"
              }}</span>
            </div>
          </li>
          <li class="tips__li">
            <div class="tips__div">
              <div class="tips__imgbox">
                <img
                  class="tips__img"
                  src="static/img/i_site.svg"
                  :alt="isChinese ? '地点' : 'location'"
                  :title="isChinese ? '地点' : 'location'"
                />
              </div>
            </div>
            <div class="tips__text">
              <span>{{ isChinese ? "地点" : "Location" }}</span> /
              <span>{{ isChinese ? "深圳" : "China Shenzhen" }}</span>
            </div>
          </li>
          <li class="tips__li">
            <div class="tips__div">
              <div class="tips__imgbox">
                <img
                  class="tips__img"
                  src="static/img/i_status.svg"
                  :alt="isChinese ? '状态' : 'status'"
                  :title="isChinese ? '状态' : 'status'"
                />
              </div>
            </div>
            <div class="tips__text">
              <span>{{ isChinese ? "状态" : "Status" }}</span> /
              <span>{{ isChinese ? "离职" : "Leave" }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="introduce">
        <p class="introduce_p">
          {{ isChinese ? aboutRexag.zh_introduce1 : aboutRexag.en_introduce1 }}
        </p>
        <p class="introduce_p">
          {{ isChinese ? aboutRexag.zh_introduce2 : aboutRexag.en_introduce2 }}
          <a class="introduce_a" href="http://www.rexag.site">{{
            isChinese ? "我的博客" : "My Blog"
          }}</a>
          {{ isChinese ? aboutRexag.zh_introduce3 : aboutRexag.en_introduce3 }}
          <a class="introduce_a" href="http://www.rexag.site">GitHub</a>）。
        </p>
      </div>
    </main>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      isChinese: 'global/rexag/getIsChinese',
      user: 'global/rexag/getUser',
      aboutRexag: 'global/rexag/getAboutRexag'
    })
  }
}
</script>
<style scoped>
.info {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(/static/img/bg.png) #109085;
}
.header {
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
}
.header__h2 {
  width: 100%;
  height: 100%;
  color: rgb(255, 255, 255);
  font-size: 40px;
  line-height: 100px;
  font-weight: bold;
  text-align: center;
}
.main {
  width: 100%;
  height: 600px;
}
.tips {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
}
.tips__ul {
  width: 1100px;
  height: 134px;
  display: flex;
  justify-content: space-around;
}
.tips__li {
  width: 250px;
  height: 100%;
  margin: 0 20px;
}
.tips__div {
  width: 100px;
  height: 90px;
  margin: 0 75px;
}
.tips__imgbox {
  width: calc(100% - 10px);
  height: 100%;
  margin: 0 5px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
}
.tips__imgbox:hover {
  animation: wave 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  animation-direction: alternate;
  -webkit-animation-direction: alternate;
  -webkit-animation: wave 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  -o-animation: wave 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  -moz-animation: wave 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  -ms-animation: wave 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -o-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  -ms-animation-iteration-count: infinite;
}
@keyframes wave {
  0% {
    box-shadow: 0 0 0 0 rgb(255, 0, 0);
    -o-box-shadow: 0 0 0 0 rgb(255, 0, 0);
    -webkit-box-shadow: 0 0 0 0 rgb(255, 0, 0);
    -ms-box-shadow: 0 0 0 0 rgb(255, 0, 0);
    -moz-box-shadow: 0 0 0 0 rgb(255, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 15px rgba(85, 3, 51, 0);
    -o-box-shadow: 0 0 0 15px rgba(3, 85, 54, 0);
    -webkit-box-shadow: 0 0 0 15px rgba(3, 85, 54, 0);
    -moz-box-shadow: 0 0 0 15px rgba(3, 85, 54, 0);
    -ms-box-shadow: 0 0 0 15px rgba(3, 85, 54, 0);
  }
}
.tips__img {
  width: 45px;
  height: 45px;
  position: absolute;
  top: 50%;
  right: 50%;
  -webkit-transform: translateY(-50%) translateX(50%);
  transform: translateY(-50%) translateX(50%);
}
.tips__text {
  height: 24px;
  width: 100%;
  margin-top: 20px;
  color: #fff;
  text-align: center;
}
.tips__text span {
  color: #fff;
}
.introduce {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.introduce_p {
  width: 1000px;
  color: #fff;
  text-align: center;
  line-height: 2rem;
}
.introduce_a {
  color: #fff;
}
</style>
