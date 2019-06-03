<template>
  <div class="aside__comments">
    <h4 class="comments__h4">站长推荐</h4>
    <ul class="comments__list">
      <li
        class="comments__li"
        v-for="Comment in masterComments"
        :key="Comment.id"
      >
        <router-link class="comments__a" to="/chat">
          <span class="comments__userpic"></span>
          <span class="comments__nickname">{{ Comment.title }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      masterComments: [
        { id: '1', title: '推荐1' },
        { id: '2', title: '推荐2' },
        { id: '3', title: '推荐3' },
        { id: '4', title: '推荐4' },
        { id: '5', title: '推荐5' },
        { id: '6', title: '推荐6' },
        { id: '7', title: '推荐7' }
      ]
    }
  },
}
</script>
<style scoped>
.aside__comments {
  width: 100%;
  height: calc(100% - 600px);
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
}
.comments__h4 {
  height: 30px;
  width: calc(100% - 20px);
  padding: 0 10px;
  text-align: center;
  line-height: 30px;
}
.comments__list {
  height: calc(100% - 30px);
  width: 100%;
  overflow: scroll;
}
.comments__list::-webkit-scrollbar-thumb {
  border-radius: 2em;
}
.comments__list::-webkit-scrollbar {
  width: 10px;
  height: 0;
}
.comments__list::-webkit-scrollbar-thumb {
  background-color: #56975b;
  background-clip: padding-box;
  min-height: 10px;
}
.comments__li {
  width: calc(100% - 20px);
  height: 60px;
  margin: 3px;
  border: 2px solid rgb(201, 179, 179);
  border-radius: 10px;
}
.comments__a {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.comments__userpic {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 5px;
  background: url(http://127.1:9699/img/headpic_male.jpg);
  background-size: 100% 100%;
}
.comments__nickname {
  display: inline-block;
  width: 100px;
  height: 30px;
  text-align: left;
  text-indent: 1rem;
  line-height: 30px;
}
</style>
