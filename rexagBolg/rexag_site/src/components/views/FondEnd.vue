<template>
  <div id="fontend">
    <div class="fontend__secondmenu">
      <secondmenu></secondmenu>
    </div>
    <div class="fontend__thirdmenu">
      <thirdmenu></thirdmenu>
    </div>
    <div class="fontend__content">
      <recontent />
    </div>
  </div>
</template>

<script>
export default {
  name: 'fondend'
}
</script>

<style scoped>
#fontend {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fontend__secondmenu {
  width: 1000px;
  margin-bottom: 15px;
}
.fontend__thirdmenu {
  width: 1000px;
  height: 50px;
  margin-bottom: 15px;
}
.fontend__content {
  width: 1000px;
  max-height: 1114px;
  height: 1114px;
}
</style>
