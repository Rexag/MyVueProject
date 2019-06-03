<template>
  <div id="app">
    <header class="app__header">
      <reheader></reheader>
    </header>
    <section class="app__section">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapGetters({
      islogin: 'ReStates/GlobalStates/getIsLogin',
    })
  },
  created () {
    if (this.islogin) {
      this.$api.RefreshToken()
    }
  }
}
</script>


<style>
html {
  height: 100vh;
  width: 100vw;
}
body {
  height: 100vh;
  width: 100vw;
  background-color: #f4f5f5;
}
#app {
  height: 100vh;
  width: 100vw;
}
.app__header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
}
.app__section {
  width: 100%;
  height: calc(100% - 65px);
  margin-top: 15px;
}
</style>
