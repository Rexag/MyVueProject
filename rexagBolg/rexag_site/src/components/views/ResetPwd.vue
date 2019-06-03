<template>
  <div class="resetpwd">
    <h2 class="resetpwd__title">修改密码</h2>
    <main class="resetpwd__main">
      <ul class="main__resetpwdarea">
        <li class="items">
          <input
            type="text"
            placeholder="请输入手机号"
            title="手机号码"
            v-model="phone"
          />
          <div class="userphone-tips tips">{{ phonetips }}</div>
        </li>
        <li class="items">
          <input
            type="text"
            placeholder="请输入邮箱地址"
            title="邮箱地址"
            v-model="email"
          />
          <div class="useremail-tips tips">{{ emailtips }}</div>
        </li>

        <li class="items pwditem">
          <input
            type="password"
            id="userpwd"
            name="userpwd"
            placeholder="请输入密码，字母或特殊符号和数字结合"
            title="密码，字母或特殊符号和数字结合"
            v-model="password"
          />
          <div class="userpwd-tips tips">{{ passwordtips }}</div>
        </li>
        <li class="items pwdlevel">
          <div class="lpwdlevel__text">密码强度：</div>
          <span :class="'level1 ' + pwdleve1"></span>
          <span :class="'level2 ' + pwdleve2"></span>
          <span :class="'level3 ' + pwdleve3"></span>
        </li>
        <li class="items">
          <input
            type="password"
            id="confirmpwd"
            name="confirmpwd"
            placeholder="请再次输入密码"
            title="请再次输入密码"
            v-model="confirmpwd"
          />
          <div class="confirmpwd-tips tips">{{ confirmpwdtips }}</div>
        </li>
        <li class="items codeitem">
          <input
            type="text"
            id="vCode"
            name="vCode"
            placeholder="四位验证码"
            title="四位验证码"
            v-model="vCode"
          />
          <img
            :src="CaptchaUel"
            alt="..."
            id="img_vCode"
            @click="changeCaptcha"
          />
          <div class="vCode-tips tips">{{ vCodetips }}</div>
        </li>
        <li class="items codeitem">
          <input
            type="text"
            id="pCode"
            name="pCode"
            placeholder="请输入手机验证码（默认1234）"
            title="短信验证码"
            v-model="pCode"
          />
          <button
            :style="{ backgroundColor: pCodeColor }"
            @click="getPhoneCode"
          >
            {{ pCodeText }}
          </button>
          <div class="pCode-tips tips">{{ pCodetips }}</div>
        </li>
        <li class="items codeitem">
          <input
            type="text"
            id="mCode"
            name="eCode"
            placeholder="请输入邮箱验证码（默认1234）"
            title="邮箱验证码"
            v-model="mCode"
          />
          <button
            :style="{ backgroundColor: eCodeColor }"
            @click="getEmailCode"
          >
            {{ eCodeText }}
          </button>
          <div class="mCode-tips tips">{{ mCodetips }}</div>
        </li>
        <li class="items btnitem">
          <button class="btn-resetpwd" type="submit" @click="changepwd">
            确认修改
          </button>
          <div class="submit-tips tips">{{ resetpwdResult }}</div>
        </li>
      </ul>
      <div class="main__other">
        <div class="other">
          <span class="other__span">修改完成？</span>
          <router-link to="/login" class="signin__now">立即登录 →</router-link>
          <span class="other__span">使用以下账号直接登录</span>
          <div class="other__logos">
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
export default {
  name: 'resetpwd',
  data () {
    return {
      phone: '', // 手机号
      phonetips: '', // 手机提示
      email: '', // 邮箱地址
      emailtips: '', // 邮件提示
      password: '', // 密码
      passwordtips: '', // 密码提示
      confirmpwd: '', // 确认密码
      confirmpwdtips: '', // 密码确认提示
      vCode: '', // 验证码
      vCodetips: '', // 验证码提示
      pCode: '', // 手机验证码
      pCodeText: '获取验证码',
      pCodeColor: '#31b968', // 发送手机验证码按钮背景颜色
      pCodeTime: 60, //发送手机验证码倒计时
      pCodetips: '', // 手机验证码提示
      mCode: '', // 邮箱验证码
      eCodeText: '获取验证码',
      eCodeColor: '#31b968', // 发送邮箱验证码按钮背景颜色
      mCodeTime: 60, // 发送邮箱验证码倒计时
      mCodetips: '', // 邮箱验证码提示
      pwdleve1: '', // 密码等级1
      pwdleve2: '', // 密码等级2
      pwdleve3: '', // 密码等级3
      resetpwdResult: '', // 注册结果提示
      CaptchaUel: 'http://127.0.0.1:9699/user/Captcha?',
      regEmail: /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,9}$/,
      regPhone: 11 && /^((13|14|15|17|18|16|19)[0-9]{1}\d{8})$/,
      regUserName: /^[\u0391-\uFFE5A-Za-z0-9]+$/,
      regPwd1: /[0-9]/, // 数字
      regPwd2: /[A-Za-z]/, // 字母
      regPwd3: /\W/, // 特殊字符
      pwdLevel: { level1: 0, level2: 0, level3: 0 }, // 密码等级
      mCodeTimer: null,// 发送邮箱验证码倒计时的定时器
      pCodeTimer: null // 发送手机验证码倒计时的定时器
    }
  },
  watch: {
    email (newEmail) {
      if (newEmail === '') {
        this.emailtips = ''
      } else if (this.regEmail.test(newEmail)) {
        this.emailtips = ''
      } else {
        this.emailtips = '邮箱格式不正确，请重新输入!'
      }
    },
    phone (newPhone) {
      if (newPhone === '') {
        this.phonetips = ''
      } else if (this.regPhone.test(newPhone)) {
        this.phonetips = ''
      } else {
        this.phonetips = '手机号格式不正确，请重新输入!'
      }
    },
    password (newPassWord) {
      if (newPassWord === '') {
        this.pwdLevel.level1 = 0
        this.pwdLevel.level2 = 0
        this.pwdLevel.level3 = 0
        this.pwdleve1 = ''
        this.pwdleve2 = ''
        this.pwdleve3 = ''
        this.passwordtips = ''
      } else {
        if (newPassWord.length < 8) {
          this.passwordtips = '密码长度必须大于8位!'
        } else {
          this.passwordtips = ''
        }
        if (this.regPwd1.test(this.password)) {
          this.pwdLevel.level1 = 1
        } else {
          this.pwdLevel.level1 = 0
        }
        if (this.regPwd2.test(this.password)) {
          this.pwdLevel.level2 = 3
        } else {
          this.pwdLevel.level2 = 0
        }
        if (this.regPwd3.test(this.password)) {
          this.pwdLevel.level3 = 8
        } else {
          this.pwdLevel.level3 = 0
        }
        let levelNum = this.pwdLevel.level1 + this.pwdLevel.level2 + this.pwdLevel.level3
        if (levelNum === 1 || levelNum === 3 || levelNum === 8) {
          this.pwdleve1 = 'pwdleve1'
          this.pwdleve2 = ''
          this.pwdleve3 = ''
        }
        if (levelNum === 4 || levelNum === 9 || levelNum === 11) {
          this.pwdleve1 = 'pwdleve1'
          this.pwdleve2 = 'pwdleve2'
          this.pwdleve3 = ''
        }
        if (levelNum === 12) {
          this.pwdleve1 = 'pwdleve1'
          this.pwdleve2 = 'pwdleve2'
          this.pwdleve3 = 'pwdleve3'
        }
      }
    },
    confirmpwd (newConfirmPwd) {
      if (newConfirmPwd !== '') {
        if (this.password === newConfirmPwd) {
          this.confirmpwdtips = ''
        } else {
          this.confirmpwdtips = '两次密码不一致!'
        }
      } else {
        this.confirmpwdtips = '两次密码不一致!'
      }
    }
  },
  methods: {
    changeCaptcha () {
      this.CaptchaUel = 'http://127.0.0.1:9699/user/Captcha?' + Date.now()
    },
    changepwd () {
      if (this.phone === '') {
        this.resetpwdResult = '手机号不可为空!'
        return
      }
      if (this.email === '') {
        this.resetpwdResult = '邮箱不可为空!'
        return
      }
      if (this.password === '') {
        this.resetpwdResult = '密码不可为空!'
        return
      }
      if (this.confirmpwd === '') {
        this.resetpwdResult = '再次确认密码不可为空!'
        return
      }
      if (this.vCode === '') {
        this.resetpwdResult = '再次确认密码不可为空!'
        return
      }
      if (this.mCode === '') {
        this.resetpwdResult = '邮箱验证码不可为空!'
        return
      }
      if (this.pCode === '') {
        this.resetpwdResult = '手机验证码不可为空!'
        return
      }
      this.$axios.post('/user/changepwd', {
        'password': this.$assist.MD5(this.password),
        'confirmpwd': this.$assist.MD5(this.confirmpwd),
        'phoneoremail': this.phoneoremail,
        'vCode': this.vCode,
        'pmCode': this.pmCode
      })
        .then((res) => {
          if (res.data.code) {
            this.resetpwdResult = res.data.msg
          }
        })
        .catch(err => console.log(err, '重置密码时异常，异常原因是： ' + (err + "")))
    },
    Countdown1 () {
      this.pCodeTime = this.pCodeTime - 1
      this.pCodeText = '请' + this.pCodeTime + '秒后再试'
      this.pCodeColor = '#cdcdcd'
      if (this.pCodeTime === 0) {
        clearInterval(this.pCodeTimer);
        this.pCodeText = '发送验证码'
        this.pCodeColor = '#31b968'
        this.pCodeTime = 60
      }
    },
    Countdown2 () {
      this.mCodeTime = this.mCodeTime - 1
      this.eCodeText = '请' + this.mCodeTime + '秒后再试'
      this.eCodeColor = "#cdcdcd"
      if (this.mCodeTime === 0) {
        clearInterval(this.mCodeTimer);
        this.eCodeText = '发送验证码'
        this.eCodeColor = '#31b968'
        this.mCodeTime = 60
      }
    },
    getPhoneCode () {
      if (this.pCodeTime === 60) {
        this.pCodeTimer = setInterval(this.Countdown1, 1000)
      }
    },
    getEmailCode () {
      if (this.mCodeTime === 60) {
        this.mCodeTimer = setInterval(this.Countdown2, 1000)
      }
    },

  }
}
</script>
  <style scoped>
.resetpwd {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.resetpwd__title {
  height: 50px;
  width: 1000px;
  line-height: 50px;
  text-align: center;
  margin-bottom: 15px;
  background-color: #fff;
}
.resetpwd__main {
  width: 1000px;
  height: calc(100% - 65px);
  display: flex;
}
.main__resetpwdarea {
  width: 650px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
.items {
  width: 400px;
  height: 50px;
  margin-bottom: 20px;
  position: relative;
}
.items input {
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
.items input:focus {
  border: 1px solid #31b968;
}
.codeitem {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.codeitem input {
  width: 200px;
}
.codeitem button,
.codeitem img {
  width: 130px;
  height: 50px;
  margin-left: 20px;
}
.codeitem button {
  color: #fff;
  font-size: 16px;
  border: 0;
  border-radius: 10px;
}
.resetpwd__main button:focus {
  outline: 0;
}
.pwditem {
  margin-bottom: 0;
}
.pwdlevel {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 20px;
  text-indent: 25px;
}
.pwdlevel div {
  font-size: 14px;
}
.pwdlevel span {
  display: inline-block;
  width: 75px;
  height: 10px;
  margin-left: 20px;
  border-radius: 5px;
}
.Choiceitem {
  height: 30px;
  width: 400px;
  display: flex;
  justify-content: space-between;
}
.Choiceitem__left,
.Choiceitem__right {
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
}
.Choiceitem input {
  width: 18px;
  height: 18px;
}
.Choiceitem label {
  margin-left: 10px;
  line-height: 30px;
  color: #777;
}
.checkitem {
  height: 30px;
  display: flex;
  justify-content: left;
  align-items: center;
  line-height: 30px;
}
.checkitem input {
  width: 18px;
  height: 18px;
}
.checkitem label {
  margin-left: 10px;
  color: #777;
}
.checkitem label a {
  color: rgb(67, 149, 255);
}
.btnitem button {
  width: 400px;
  height: 50px;
  color: #fff;
  font-size: 22px;
  border: 0;
  border-radius: 10px;
  background-color: #31b968;
}
.lpwdlevel__text {
  color: #777;
}
.main__other {
  width: 335px;
  height: 800px;
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
.other {
  width: 80%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: left;
}
.other__span,
.signin__now {
  width: 100%;
  height: 30px;
  display: block;
  line-height: 30px;
}
.signin__now {
  color: #4395ff;
}
.other__logos {
  width: 100%;
  display: flex;
}
.other__logos a,
.other__logos img {
  width: 35px;
  height: 30px;
  display: block;
}
.pwdleve1 {
  background-color: yellowgreen;
}
.pwdleve2 {
  background-color: skyblue;
}
.pwdleve3 {
  background-color: hotpink;
}
.tips {
  display: block;
  width: 400px;
  height: 20px;
  font-size: 14px;
  color: red;
  position: absolute;
}
.userpwd-tips {
  top: 70px;
}
.vCode-tips {
  top: 50px;
}
.pCode-tips {
  top: 50px;
}
.mCode-tips {
  top: 50px;
}
.submit-tips {
  height: 40px;
  font-size: 16px;
}
</style>
