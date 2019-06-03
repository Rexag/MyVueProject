<template>
  <div class="login">
    <h2 class="login__title">登录</h2>
    <main class="login__main">
      <ul class="main__Signinarea">
        <li class="Signinarea__item inputitem">
          <input
            type="text"
            placeholder="用户名/手机/邮箱"
            class="username"
            v-model="username"
          />
        </li>
        <li class="Signinarea__item inputitem">
          <input
            type="password"
            placeholder="请输入密码"
            name="password"
            class="password"
            v-model="password"
            @keyup.enter="login"
          />
        </li>
        <li class="Signinarea__item checkitem">
          <div class="checkitem__left">
            <input type="checkbox" id="saveLogin" v-model="rememberpwd" />
            <label for="saveLogin">记住密码？</label>
          </div>
          <div class="checkitem__right">
            <router-link class="resetpwd" to="/login/resetpwd"
              >忘记密码？</router-link
            >
          </div>
        </li>
        <li class="Signinarea__item btmitem">
          <button class="loginbtn" @click="login">登录</button>
          <span class="tips">{{ loginmsg }}</span>
        </li>
      </ul>
      <div class="main__otherSignin">
        <div class="otherSignin">
          <span class="otherSignin__span">没有账号？</span>
          <router-link to="/register" class="register__now"
            >立即注册 →</router-link
          >
          <span class="otherSignin__span">使用以下账号直接登录</span>
          <div class="otherSignin__logos">
            <router-link class="wechat" to="/">
              <img
                src="http://127.0.0.1:9699/img/wechat.svg"
                alt="微信"
                title="微信登录"
              />
            </router-link>
            <router-link class="wechat" to="/">
              <img
                src="http://127.0.0.1:9699/img/microblog.svg"
                alt="微博"
                title="微博登录"
              />
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      rememberpwd: false,
      loginmsg: ''
    }
  },
  computed: {
    ...mapGetters({
      FromRouterName: 'ReStates/GlobalStates/getFromRouterName'
    })
  },
  methods: {
    login () {
      if (this.username === '' || this.password === '') {
        this.loginmsg = '请输入用户名或密码'
        return
      }
      let data = { 'username': this.username, 'password': this.$assist.MD5(this.password) }
      this.$api.login(data)
        .then((res) => {
          if (res.data.code !== '1') {
            this.loginmsg = res.data.msg
          } else {
            this.loginmsg = res.data.msg
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', res.data.result)
            this.$store.dispatch('ReStates/GlobalStates/actSetIsLogin', true)
            this.$store.dispatch('ReStates/GlobalStates/actSetUser')
            this.$store.dispatch('ReStates/GlobalStates/actSetToken')

            setTimeout(function () {
              if (this.FromRouterName === '' || this.FromRouterName === 'login' || this.FromRouterName === null || this.FromRouterName === 'home') {
                this.$router.push('/')
              } else {
                this.$router.push((this.FromRouterName))
              }
            }.bind(this), 500)
          }
        })
        .catch(err => console.log(err, '进行登录动作时异常'))
    }
  }
}
</script>
<style scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.login__title {
  width: 1000px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin-bottom: 15px;
  background-color: rgb(255, 255, 255);
}
.login__main {
  width: 1000px;
  height: calc(100% - 65px);
  display: flex;
}
.main__Signinarea {
  width: 650px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
}
.Signinarea__item {
  height: 50px;
  width: 400px;
  margin-bottom: 15px;
}
.inputitem {
  color: #424242;
  border-radius: 4px;
  background: #fff;
  box-shadow: 1px 1px 4px #767676;
}
.inputitem input {
  width: 350px;
  height: 30px;
  font-size: 0.875rem;
  line-height: 1.6;
  padding: 9px 24px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  color: #424242;
  border: 1px solid #dce4e6;
  border-radius: 5px;
  outline: 0;
}
.inputitem input:focus {
  border: 1px solid #31b968;
}
.checkitem {
  display: flex;
  height: 30px;
  justify-content: space-between;
}
.checkitem__left {
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.checkitem__left input {
  width: 16px;
  height: 16px;
}
.checkitem__left label {
  width: calc(100% - 16px);
  height: 30px;
  text-align: center;
  line-height: 30px;
}
.checkitem__right {
  width: 80px;
  height: 30px;
}
.resetpwd {
  height: 30px;
  width: 100%;
  color: #4395ff;
  line-height: 30px;
  text-align: center;
}
.loginbtn {
  width: 100%;
  height: 100%;
  border: 0;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  background-color: #31b968;
  border-radius: 5px;
}
.tips {
  width: 400px;
  height: 50px;
  display: block;
  position: absolute;
}
.main__otherSignin {
  width: 335px;
  height: 500px;
  margin-left: 15px;
  display: flex;
  justify-content: center;
  background-color: rgb(255, 255, 255);
}
.otherSignin {
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
}
.otherSignin__span,
.register__now {
  width: 100%;
  height: 30px;
  display: block;
  line-height: 30px;
}
.register__now {
  color: #4395ff;
}
.otherSignin__logos {
  width: 100%;
  display: flex;
}
.otherSignin__logos a,
.otherSignin__logos img {
  width: 35px;
  height: 30px;
  display: block;
}
</style>
