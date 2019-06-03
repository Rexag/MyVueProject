<template>
  <div class="rexag-concat">
    <div class="concat">
      <div class="concat__text">
        <h2 class="concat__title">
          {{ isChinese ? "我的职业道路" : "My Career Path" }}
        </h2>
        <p class="concat__p concat__past">
          {{ isChinese ? concatAuout.zh_past : concatAuout.en_past }}
        </p>
        <p class="concat__p concat__present">
          {{ isChinese ? concatAuout.zh_present : concatAuout.en_present }}
        </p>
        <p class="concat__p concat__future">
          {{ isChinese ? concatAuout.zh_future : concatAuout.en_future }}
        </p>
      </div>
      <ul class="concat__link">
        <li
          :class="'concat__' + link.name"
          class="concat__li"
          v-for="link in concatLinks"
          :key="link.urlID"
          :title="isChinese ? link.zh_title : link.en_title"
          :style="{ backgroundImage: 'url(' + link.imgUrl + ')' }"
        >
          <img
            class="concat__img"
            :class="'concat__ewm' + link.name"
            :src="link.ewmUrl"
            :alt="isChinese ? link.zh_title : link.en_title"
          />
        </li>
      </ul>
    </div>
    <footer class="footer">
      <refooter></refooter>
    </footer>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import refooter from '@/components/common/footer'
export default {
  computed: {
    ...mapGetters({
      isChinese: 'global/rexag/getIsChinese',
      concatLinks: 'global/rexag/getConcatLinks',
      concatAuout: 'global/rexag/getConcatAuout'
    })
  },
  components: {
    refooter
  }
}
</script>
<style scoped>
.rexag-concat {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: url(/static/img/bg.png) #a29971;
}
.concat {
  width: 900px;
  height: calc(100% - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.concat__text {
  width: 80%;
  margin-bottom: 20px;
}
.concat__title {
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 26px;
  color: #424242;
}
.concat__p {
  width: 100%;
  color: #424242;
  text-indent: 1rem;
  margin-bottom: 20px;
}
.concat__link {
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
}
.concat__li {
  width: 40px;
  height: 40px;
  margin: 5px;
  background-size: 100% 100%;
  cursor: pointer;
  border-radius: 50%;
}
.concat__img {
  opacity: 0;
  width: 200px;
  height: 200px;
  position: absolute;
  top: 60px;
}
.concat__li:hover img {
  opacity: 1;
}
.concat__ewmaboutRexag {
  left: -35px;
}
.concat__ewmblog {
  left: 80px;
}
.concat__ewmwechat {
  left: 200px;
}
.concat__ewmpub_wetchat {
  left: 315px;
}
.concat__ewmgithub {
  right: 85px;
}
.concat__ewmoschina {
  right: -45px;
}
.footer {
  width: 100%;
  height: 400px;
}
</style>
