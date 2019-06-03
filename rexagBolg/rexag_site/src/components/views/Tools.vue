<template>
  <div id="tools">
    <div class="tools__secondmenu">
      <secondmenu></secondmenu>
    </div>
    <div class="tools__thirdmenu">
      <thirdmenu></thirdmenu>
    </div>
    <div class="tools__content">
      <recontent />
    </div>
  </div>
</template>

<script>
export default {
  name: 'tools'
}
</script>

<style scoped>
#tools {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tools__secondmenu {
  width: 1000px;
  margin-bottom: 15px;
}
.tools__thirdmenu {
  width: 1000px;
  height: 50px;
  margin-bottom: 15px;
}
.tools__content {
  width: 1000px;
  max-height: 1114px;
  height: 1114px;
}
</style>
