<template>
  <div class="header__nav">
    <ul class="header__ul">
      <li class="header__li header__logo">
        <router-link class="logo__a" to="/">
          <img
            class="logo__img"
            src="http://127.0.0.1:9699/img/logo.jpg"
            alt="rexag"
          />
        </router-link>
      </li>
      <li
        class="header__li"
        v-for="firstmenu in FirstMenuList"
        :key="firstmenu.id"
        @click="changeFirstMenu(firstmenu.name)"
      >
        <router-link
          :to="firstmenu.router"
          :style="{
            color: FirstMenu === firstmenu.name ? '#4395ff' : '#424242'
          }"
        >
          {{ firstmenu.title }}
        </router-link>
      </li>
      <li class="header__search">
        <input
          v-model="searchValue"
          type="text"
          class="search__input"
          placeholder="搜索更新"
        />
        <img
          class="search__img"
          src="http://127.0.0.1:9699/img/search-icon.svg"
          alt="搜索"
        />
      </li>
      <li class="header__writeblog">
        <router-link to="/editor" class="writeblog__a">
          <img
            class="writeblog__img"
            src="http://127.0.0.1:9699/img/writeblog.svg"
            alt="写博客"
          />
          <span
            @click="changeFirstMenu('editor')"
            :style="{
              color: FirstMenu === 'editor' ? '#4395ff' : '#424242'
            }"
          >
            写博客
          </span>
        </router-link>
      </li>
      <li class="header__online" v-if="islogin">
        <router-link class="online__user" to="/">
          <img
            class="online__userpic"
            :src="user.headpic"
            :title="user.nickname"
            :alt="user.nickname"
          />
        </router-link>
        <router-link class="online__notic" to="/">
          <img
            class="onotic__img"
            src="http://127.0.0.1:9699/img/news.svg"
            alt="消息"
          />
          <span
            class="onotic__span"
            v-show="news.newsList.length > 0"
            :title="'您有 ' + news.newsList.length + ' 条未读消息'"
          >
            {{ news.newsList.length }}
          </span>
        </router-link>
        <span class="logout" title="退出" @click="logout"></span>
      </li>
      <li class="header__li header__login" v-else>
        <router-link
          class="login"
          to="/login"
          @click="changeFirstMenu('login')"
          :style="{
            color: FirstMenu === 'login' ? '#4395ff' : '#424242'
          }"
        >
          登录
        </router-link>
        <router-link
          class="register"
          @click="changeFirstMenu('register')"
          to="/register"
          :style="{
            color: FirstMenu === 'register' ? '#4395ff' : '#424242'
          }"
        >
          注册
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      searchValue: '',// 搜索框内容
    }
  },
  computed: {
    ...mapGetters({
      FirstMenuList: 'ReData/GlobalData/getFirstMenuList',
      user: 'ReStates/GlobalStates/getUser',
      news: 'ReStates/NewStates/getNews',
      islogin: 'ReStates/GlobalStates/getIsLogin',
      FirstMenu: 'ReStates/GlobalStates/getFirstMenu'
    })
  },
  methods: {
    changeFirstMenu (FirstMenuName) {
      this.$store.dispatch('ReStates/GlobalStates/actSetFirstMenu', FirstMenuName)
    },
    logout () {
      this.$api.logout()
        .then(() => {
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          this.$router.go('/')
        })
        .catch(err => console.log(err, '退出时异常'))
    }
  }
}
</script>
<style scoped>
.header__nav {
  width: 1000px;
  height: 50px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  color: #424242;
  background-color: #fff;
}
.header__ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.header__li {
  min-width: 60px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header__li:hover {
  border-radius: 10px;
  background-color: rgba(200, 200, 200, 0.5);
}
.router-link-exact-active {
  color: #4395ff;
}
.logo__a {
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo__img {
  width: 30px;
  height: 30px;
}
.header__search {
  background-color: rgba(200, 200, 200, 0.5);
  border-radius: 10px;
  min-width: 155px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.search__input {
  border: none;
  width: 100px;
  padding: 0.6rem 1rem;
  box-shadow: none;
  outline: none;
  font-size: 14px;
  color: #666;
  background-color: transparent;
}
.search__img {
  cursor: pointer;
}
.header__writeblog {
  min-width: 80px;
  height: 30px;
}
.writeblog__a {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.header__login,
.header__online {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.header__login a:hover {
  color: #4395ff;
}
.login::after {
  content: "·";
  margin: 0 0.4em;
  color: #424242;
}
.header__online {
  min-width: 80px;
  position: relative;
}
.online__user,
.online__notic {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
}
.online__userpic {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.onotic__img {
  width: 30px;
  height: 30px;
}
.onotic__span {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  position: absolute;
  color: rgb(255, 0, 0);
}
.logout {
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url(http://127.1:9699/img/logout.svg);
  background-size: 100% 100%;
  cursor: pointer;
}
</style>
