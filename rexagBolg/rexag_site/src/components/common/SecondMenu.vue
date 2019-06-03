<template>
  <ul class="secondmenu">
    <li
      class="secondmenu__li"
      v-for="Menu in SecondMenuList[FirstMenu]"
      :key="Menu.id"
      :title="Menu.title"
    >
      {{ Menu.name }}
    </li>
  </ul>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'secondmenu',
  computed: {
    ...mapGetters({
      FirstMenu: 'ReStates/GlobalStates/getFirstMenu',
      SecondMenu: 'ReStates/GlobalStates/getSecondMenu',
      SecondMenuList: 'ReData/GlobalData/getSecondMenuList',
    })
  },
  methods: {
    RefreshArticle () {

    }
  }
}
</script>
<style>
.secondmenu {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(255, 255, 255);
  flex-wrap: wrap;
}
.secondmenu__li {
  height: 30px;
  max-width: 100px;
  min-width: 50px;
  margin: 10px 0;
  padding: 0 10px;
  line-height: 30px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
}
.secondmenu__li:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
