<template>
  <div class="main__content">
    <div class="content__article">
      <ul class="article__list">
        <li class="article__li" v-for="(item, index) in article" :key="index">
          <div class="article__imgbox">
            <router-link class="article__a" to="/article">
              <img
                class="article__img"
                src="http://127.0.0.1:9699/img/rexag_pic.jpg"
              />
            </router-link>
          </div>
          <div class="article__concent">
            <div class="article__sort">
              <router-link :to="'/user?' + item.id">
                <span class="article__span spot__after">
                  {{ item.author }}
                </span>
              </router-link>
              <span class="article__span spot__after">{{
                item.createtime
              }}</span>
              <router-link to="/">
                <span class="article__span">
                  {{ item.secondmenu }}
                </span>
              </router-link>
            </div>
            <div class="article__info">
              <router-link class="article__a" to="/article">
                <h4 class="article__title">{{ item.title }}</h4>
                <p class="article__outline">{{ item.title }}</p>
              </router-link>
            </div>
            <div class="article__func">
              <div class="func__li" title="浏览">
                <span class="func__span func__browse"></span>
                <strong class="func__strong">999</strong>
              </div>
              <div class="func__li" title="收藏">
                <span class="func__span func__collection"></span>
                <strong class="func__strong">999</strong>
              </div>
              <div class="func__li" title="评论">
                <span class="func__span func__comment"></span>
                <strong class="func__strong">999</strong>
              </div>
              <div class="func__li" title="点赞">
                <span class="func__span func__thumbsup"></span>
                <strong class="func__strong">999</strong>
              </div>
              <div class="func__li" title="分享">
                <span class="func__span func__share"></span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      article: []
    }
  },
  computed: {
    ...mapGetters({
      islogin: 'ReStates/GlobalStates/getIsLogin',
    })
  },
  created () {
    if (this.islogin) {
      this.$api.Getarticlelist()
        .then(res => {
          // console.log(res)
          if (res.data.code === '1') {
            this.article = JSON.parse(res.data.result)
            console.log(this.article)
          }
        })
    }
  }
}
</script>
<style scoped>
.main__content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content__article {
  width: 100%;
  height: calc(100% - 65px);
  background-color: rgb(255, 255, 255);
}
.article__list {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.article__list::-webkit-scrollbar-thumb {
  border-radius: 2em;
}
.article__list::-webkit-scrollbar {
  width: 10px;
  height: 0;
}
.article__list::-webkit-scrollbar-thumb {
  background-color: #56975b;
  background-clip: padding-box;
  min-height: 10px;
}
.article__li {
  height: 150px;
  width: 100%;
  display: flex;
}
.article__imgbox {
  width: 150px;
  height: 100%;
}
.article__img {
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  padding: 10px;
}
.article__concent {
  width: calc(100% - 165px);
  height: 100%;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
}
.article__sort {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: left;
}
.article__span {
  height: 100%;
  line-height: 30px;
}
.article__info {
  width: 100%;
  height: calc(100% - 60px);
}
.article__title {
  height: 30px;
  line-height: 30px;
}
.article__outline {
  text-indent: 1rem;
  height: 60px;
  line-height: 30px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.article__func {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: left;
}
.func__li {
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
.func__span {
  width: 22px;
  height: 22px;
  display: inline-block;
}
.func__browse {
  background: url(http://127.1:9699/img/comment.svg);
  background-size: 100% 100%;
}
.func__collection {
  background: url(http://127.1:9699/img/collection.svg);
  background-size: 100% 100%;
}
.func__comment {
  background: url(http://127.1:9699/img/comment.svg);
  background-size: 100% 100%;
}
.func__thumbsup {
  background: url(http://127.1:9699/img/thumbsup.svg);
  background-size: 100% 100%;
}
.func__share {
  background: url(http://127.1:9699/img/share.svg);
  background-size: 100% 100%;
}
.func__strong {
  margin-left: 5px;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
}
.article__a {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
