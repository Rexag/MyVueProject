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
      <ul class="concat__ul">
        <li
          :class="'concat__' + link.name"
          class="concat__li"
          v-for="link in moveConcatLinks"
          :key="link.urlID"
          :title="isChinese ? link.zh_title : link.en_title"
          :style="{ backgroundImage: 'url(' + link.imgUrl + ')' }"
        >
          <a :href="link.linkUrl" class="concat__a" target="_blank"></a>
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
import refooter from './move-footer'
export default {
  computed: {
    ...mapGetters({
      isChinese: 'global/rexag/getIsChinese',
      moveConcatLinks: 'global/rexag/getMoveConcatLinks',
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
  width: 100%;
  height: calc(100% - 180px);
  position: relative;
  top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.concat__text {
  width: 90%;
  max-width: 500px;
  margin-bottom: 20px;
  overflow: scroll;
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
.concat__ul {
  width: 80%;
  max-width: 500px;
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
.concat__a {
  display: block;
  width: 100%;
  height: 100%;
}
.footer {
  width: 100%;
  height: 100px;
}
</style>
