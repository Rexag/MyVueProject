<template>
  <div class="default">
    <main class="main">
      <div class="main__item">
        <div class="item__pic">
          <div class="pic__box">
            <img
              class="pic__img"
              :src="user.rexagpic"
              :alt="isChinese ? user.zh_name : user.en_name"
              :title="isChinese ? user.zh_name : user.en_name"
            />
          </div>
        </div>
        <div class="item__block">
          <h2 class="block__h2">Hello,I'm rexag</h2>
          <strong class="block__strong">keep new keep doing</strong>
          <p class="block__p">
            {{ isChinese ? "我是张洪祥" : "I'm hongxiang,zhang" }}
          </p>
          <p class="block__p">
            {{ isChinese ? "一名全栈工程师" : "A Full Stack Engineer" }}
          </p>
          <h2>我与我周旋久，宁做我</h2>
        </div>
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
      user: 'global/rexag/getUser'
    })
  }
}
</script>
<style scoped>
.default {
  width: 100%;
  height: 100%;
  background: url(/static/img/default-1.jpg);
  background-size: 100% 100%;
}
.main {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
}
.main__item {
  width: 100%;
  height: calc(100% - 80px);
  position: absolute;
  top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.pic__img {
  width: 100px;
  height: 100px;
  margin-top: 10px;
  border-radius: 50%;
}
.item__block {
  width: 100%;
  height: 300px;
  text-align: center;
  color: #000;
}
.block__h2 {
  height: 60px;
  font-family: myFristFont, SimSun, sans-serif;
  font-size: 2em;
  line-height: 60px;
}
.block__strong {
  height: 40px;
  line-height: 40px;
  font-size: 1.2em;
}
.block__p {
  font-size: 1em;
  height: 40px;
  line-height: 40px;
  color: inherit;
}
</style>
