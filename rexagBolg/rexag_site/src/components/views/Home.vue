<template>
  <div class="home">
    <div class="home__mainbox">
      <aside class="mainbox__aside">
        <user-info></user-info>
        <online-list></online-list>
        <recommend></recommend>
      </aside>
      <main class="mainbox__main">
        <div class="main__nav">
          <thirdmenu></thirdmenu>
        </div>
        <recontent></recontent>
      </main>
    </div>
    <div class="home__advert">
      <a
        class="advert__a"
        href="https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=v8poy28x"
        target="_blank"
      >
        <img class="advert__img" src="http://127.0.0.1:9699/img/server.jpg" />
      </a>
    </div>
    <footer>
      <refooter></refooter>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      showDetial: 'hot',
    }
  }
}
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.home__mainbox {
  width: 1000px;
  height: calc(100% - 345px);
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mainbox__aside {
  width: 285px;
  height: 100%;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
}
.mainbox__main {
  width: calc(100% - 300px);
  height: 100%;
}
.main__nav {
  width: 100%;
  height: 50px;
  margin-bottom: 15px;
}
.home__advert {
  width: 1000px;
  height: 200px;
  margin-bottom: 15px;
  background-color: rgb(255, 255, 255);
}
.advert__a {
  width: 100%;
  height: 100%;
  display: block;
}
.advert__img {
  width: 100%;
  height: 100%;
}
</style>
