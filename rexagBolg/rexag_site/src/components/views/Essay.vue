<template>
  <div id="essay">
    <div class="essay__thirdmenu">
      <thirdmenu></thirdmenu>
    </div>
    <div class="essay__content">
      <recontent />
    </div>
  </div>
</template>
<script>
export default {

}
</script>

<style scoped>
#essay {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.essay__secondmenu {
  width: 1000px;
  margin-bottom: 15px;
}
.essay__thirdmenu {
  width: 1000px;
  height: 50px;
  margin-bottom: 15px;
}
.essay__content {
  width: 1000px;
  max-height: 1114px;
  height: 1114px;
}
</style>
