<template>
  <div class="error">
    <span>发生错误了，是否返回首页？</span>
    <router-link to="/">点击跳转</router-link>
  </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.error {
  width: 1000px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255);
}
.error a {
  color: rgb(67, 149, 255);
}
</style>
