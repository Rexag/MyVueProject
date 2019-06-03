<template>
  <div class="copy">
    <div class="copy__contactinfo">
      <span class="contactinfo__span">{{
        isChinese ? "邮箱: " + user.email : "Email: " + user.email
      }}</span>
      |
      <span class="contactinfo__span">{{
        isChinese ? "手机: " + user.phone : "Phone: " + user.phone
      }}</span>
      |
      <p class="contactinfo__p">
        <a class="contactinfo__a" href="http://www.miit.gov.cn"></a>
        粤ICP备19031207号-2
      </p>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.copy__contactinfo {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.copy .contactinfo__span {
  display: inline-block;
  color: #424242;
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin: 0 5px;
}
.contactinfo__p {
  height: 40px;
  line-height: 40px;
  margin-left: 5px;
  color: #424242;
}
.copy .contactinfo__a {
  height: 40px;
  min-width: 165px;
  max-width: 200px;
  position: absolute;
  display: block;
}
.copy__right {
  color: #424242;
  height: 40px;
  line-height: 40px;
}
</style>
