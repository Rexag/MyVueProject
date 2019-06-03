<template>
  <div id="backend">
    <div class="backend__secondmenu">
      <secondmenu></secondmenu>
    </div>
    <div class="backend__thirdmenu">
      <thirdmenu></thirdmenu>
    </div>
    <div class="backend__content">
      <recontent />
    </div>
  </div>
</template>

<script>
export default {
  name: 'backend'
}
</script>

<style scoped>
#backend {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.backend__secondmenu {
  width: 1000px;
  margin-bottom: 15px;
}
.backend__thirdmenu {
  width: 1000px;
  height: 50px;
  margin-bottom: 15px;
}
.backend__content {
  width: 1000px;
  max-height: 1114px;
  height: 1114px;
}
</style>
