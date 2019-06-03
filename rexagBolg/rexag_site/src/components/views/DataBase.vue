<template>
  <div id="database">
    <div class="database__secondmenu">
      <secondmenu></secondmenu>
    </div>
    <div class="database__thirdmenu">
      <thirdmenu></thirdmenu>
    </div>
    <div class="database__content">
      <recontent />
    </div>
  </div>
</template>

<script>
export default {
  name: 'database'
}
</script>

<style scoped>
#database {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.database__secondmenu {
  width: 1000px;
  margin-bottom: 15px;
}
.database__thirdmenu {
  width: 1000px;
  height: 50px;
  margin-bottom: 15px;
}
.database__content {
  width: 1000px;
  max-height: 1114px;
  height: 1114px;
}
</style>
