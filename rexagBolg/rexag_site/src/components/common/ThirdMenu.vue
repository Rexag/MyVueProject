<template>
  <div class="thirdmenu">
    <nav class="thirdmenu__nav">
      <ul class="thirdmenu__left">
        <li
          class="thirdmenu__li spot__after"
          :style="{
            color: ThirdMenu === 'hot' ? '#4395ff' : '#424242'
          }"
          @click="changeThirdMenu('hot')"
        >
          热门
        </li>
        <li
          class="thirdmenu__li"
          :style="{
            color: ThirdMenu === 'new' ? '#4395ff' : '#424242'
          }"
          @click="changeThirdMenu('new')"
        >
          最新
        </li>
      </ul>
      <ul class="thirdmenu__right">
        <li
          class="thirdmenu__li spot__after"
          :style="{
            color: ThirdMenu === 'month' ? '#4395ff' : '#424242'
          }"
          @click="changeThirdMenu('month')"
        >
          本月最热
        </li>
        <li
          class="thirdmenu__li"
          :style="{
            color: ThirdMenu === 'history' ? '#4395ff' : '#424242'
          }"
          @click="changeThirdMenu('history')"
        >
          历史最热
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      ThirdMenu: 'ReStates/GlobalStates/getThirdMenu'
    })
  },
  methods: {
    changeThirdMenu (ThirdMenuName) {
      console.log(ThirdMenuName, "ThirdMenuName")
      this.$store.dispatch('ReStates/GlobalStates/actSetThirdMenu', ThirdMenuName)
    }
  }
}
</script>
<style scoped>
.thirdmenu {
  height: 100%;
  width: 100%;
}
.thirdmenu__nav {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: rgb(255, 255, 255);
}
.thirdmenu__left,
.thirdmenu__right {
  width: 120px;
  height: 100%;
  display: flex;
  justify-content: center;
}
.thirdmenu__right {
  width: 200px;
}
.thirdmenu__li {
  height: 100%;
  line-height: 50px;
  cursor: pointer;
}
</style>



