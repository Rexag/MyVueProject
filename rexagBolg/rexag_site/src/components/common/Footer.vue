<template>
  <div class="footer-box">
    <div class="footer__info">
      <span class="spot__after">{{ "邮箱：" + admin.email }}</span>
      <span class="spot__after">{{ " 手机：" + admin.phone }}</span>
      <router-link to="http://www.miit.gov.cn">
        粤ICP备19031207号-2
      </router-link>
    </div>
    <div class="footer__copy">
      Copyright © 2019 rexag.site All Rights Reserved
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      admin: 'ReData/GlobalData/getAdmin'
    })
  }
}
</script>
<style scoped>
.footer-box {
  width: 1000px;
  height: 100px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
}
.footer__info {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer__copy {
  width: 100%;
  height: 50%;
  display: block;
  text-align: center;
}
</style>
