<template>
  <div class="aside__master">
    <div class="master__imgbox">
      <router-link class="imgbox__link" to="/">
        <img
          class="imgbo__img"
          :src="admin.headpic"
          :alt="admin.username"
          :title="admin.username"
        />
      </router-link>
    </div>
    <h3 class="master__name">{{ admin.username }}</h3>
    <div class="master__linkbox">
      <span class="linkbox__span linkbox-rexag" title="站长信息"></span>
      <img
        class="linkbox__img"
        src="http://127.0.0.1:9699/img/rexag.png"
        alt=""
      />
      <span class="linkbox__span linkbox-resume" title="站长简历"></span>
      <img
        class="linkbox__img"
        src="http://127.0.0.1:9699/img/resume.png"
        alt=""
      />
      <span class="linkbox__span linkbox-wechat" title="微信"></span>
      <img
        class="linkbox__img"
        src="http://127.0.0.1:9699/img/wechat.png"
        alt=""
      />
      <span class="linkbox__span linkbox-pub_wetchat" title="公众号"></span>
      <img
        class="linkbox__img"
        src="http://127.0.0.1:9699/img/pub_wetchat.png"
        alt=""
      />
      <span class="linkbox__span linkbox-github" title="GitHub"></span>
      <img
        class="linkbox__img"
        src="http://127.0.0.1:9699/img/github.png"
        alt=""
      />
      <span class="linkbox__span linkbox-oschina" title="开源中国"></span>
      <img
        class="linkbox__img"
        src="http://127.0.0.1:9699/img/oschina.png"
        alt=""
      />
    </div>
    <p class="master__autograph">
      {{ admin.autograph }}
    </p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      adminPics: 'ReData/GlobalData/getAdminPics',
      admin: 'ReData/GlobalData/getAdmin',
    })
  }
}
</script>
<style scoped>
.aside__master {
  width: 100%;
  height: 290px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
}
.master__imgbox {
  width: 100%;
  height: 100px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.imgbox__link {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: block;
}
.imgbo__img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.master__name {
  width: 100%;
  height: 60px;
  font-size: 32px;
  text-align: center;
  line-height: 60px;
}
.master__linkbox {
  width: 100%;
  height: 60px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.linkbox-rexag {
  background: url(http://127.1:9699/img/rexag_pic.jpg);
}
.linkbox-resume {
  background: url(http://127.1:9699/img/resume.svg);
}
.linkbox-wechat {
  background: url(http://127.1:9699/img/wechat.svg);
}
.linkbox-pub_wetchat {
  background: url(http://127.1:9699/img/pub_wetchat.svg);
}
.linkbox-github {
  background: url(http://127.1:9699/img/github.svg);
}
.linkbox-oschina {
  background: url(http://127.1:9699/img/oschina.svg);
}
.linkbox__span {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-size: 100% 100%;
  cursor: pointer;
}
.linkbox__img {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50px;
  left: -1000px;
}
.linkbox-rexag:hover + img {
  left: -75px;
}
.linkbox-resume:hover + img {
  left: -20px;
}
.linkbox-wechat:hover + img {
  left: 20px;
}
.linkbox-pub_wetchat:hover + img {
  left: 70px;
}
.linkbox-github:hover + img {
  left: 120px;
}
.linkbox-oschina:hover + img {
  left: 170px;
}
.master__autograph {
  width: 100%;
  height: 60px;
  text-align: center;
  line-height: 60px;
}
</style>
