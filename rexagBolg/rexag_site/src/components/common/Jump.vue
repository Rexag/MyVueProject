<template>
  <div class="jump">
    <span>您还未登录，是否前去登录？</span>
    <router-link to="/login">点击跳转</router-link>
  </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.jump {
  width: 1000px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255);
}
.jump a {
  color: rgb(67, 149, 255);
}
</style>
