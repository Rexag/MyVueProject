<template>
  <div class="copy">
    <div class="copy__contactinfo">
      <span class="contactinfo__span spot__after">{{
        isChinese ? "邮箱 : " + user.email : "Email : " + user.email
      }}</span>
      <span class="contactinfo__span">{{
        isChinese ? "手机 : " + user.phone : "Phone : " + user.phone
      }}</span>
      <a class="contactinfo__a" href="http://www.miit.gov.cn" target="_blank">
        粤ICP备19031207号-2
      </a>
    </div>
    <div class="copy__right">
      Copyright © 2019 rexag.cn All Rights Reserved
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      user: 'global/rexag/getUser',
      isChinese: 'global/rexag/getIsChinese'
    })
  }
}
</script>
<style>
.copy {
  height: 100%;
  width: 100%;
  color: #424242;
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
}
.contactinfo__a {
  display: block;
  color: #424242;
}
</style>
