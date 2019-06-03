<template>
  <div class="section__editor">
    <jump v-if="!islogin"></jump>
    <div v-else class="editor__wrapper">
      <div class="editor__func">
        <div class="article__titlebox">
          <label class="item__title" for="article-title">文章标题</label>
          <input
            class="title__input"
            type="text"
            id="article-title"
            placeholder="请输入文章标题"
            v-model="articleTitle"
          />
        </div>
        <ul class="article__firstitem">
          <li class="item__title">文章类型</li>
          <li
            class="firstitem__li"
            v-for="Frist_Menu in First_MenuList"
            :key="Frist_Menu.id"
            :style="{
              backgroundColor:
                FirstMenu === Frist_Menu.name ? 'rgba(23, 131, 64, 0.7)' : ''
            }"
          >
            <input
              class="firstitem__input"
              type="radio"
              :id="Frist_Menu.name"
              name="FristMenu"
              :value="Frist_Menu.name"
              v-model="FirstMenu"
            />
            <label class="firstitem__label" :for="Frist_Menu.name">
              {{ Frist_Menu.title }}
            </label>
          </li>
        </ul>
        <ul class="article__secondmenu" v-show="showSecondMenu">
          <li class="item__title">详细类型</li>
          <li
            class="seconditem__li"
            v-for="Second_Menu in Second_MenuList"
            :key="Second_Menu.id"
            :style="{
              backgroundColor:
                SecondMenu === Second_Menu.name ? 'rgba(23, 131, 64, 0.7)' : ''
            }"
          >
            <input
              class="seconditem__input"
              type="radio"
              :id="Second_Menu.name"
              name="SecondMenu"
              :value="Second_Menu.name"
              v-model="SecondMenu"
            />
            <label class="seconditem__label" :for="Second_Menu.name">
              {{ Second_Menu.title }}
            </label>
          </li>
        </ul>
        <div class="article__func">
          <div class="article__check">
            <label
              for="is_original"
              :style="{
                backgroundColor: is_original ? 'rgba(82, 145, 106, 0.3)' : ''
              }"
              >{{ is_original === true ? "原创" : "非原创" }}</label
            >
            <input type="checkbox" id="is_original" v-model="is_original" />
            <input
              type="text"
              placeholder="请输入文章原始链接"
              v-model="original_link"
              v-show="!is_original"
            />
            <label
              for="is_public"
              :style="{
                backgroundColor: is_public ? 'rgba(82, 145, 106, 0.3)' : ''
              }"
              >{{ is_public === true ? "公开" : "私密" }}</label
            >
            <input type="checkbox" id="is_public" v-model="is_public" />
          </div>
          <div class="article__btn">
            <button class="save" @click="uploadArticle()">保存</button>
            <button class="delete" @click="ClearEditor">删除</button>
          </div>
        </div>
      </div>
      <div class="editor">
        <editor-bar v-model="editor.info" :isClear="isClear"></editor-bar>
      </div>
    </div>
  </div>
</template>
<script>
import EditorBar from '../common/WangEditor'

import { mapGetters } from 'vuex'
export default {
  name: 'editor',
  data () {
    return {
      editor: {
        info: ''
      },
      isClear: false,
      articleTitle: '',
      First_MenuList: '',// 去除了首页的一级菜单
      Second_MenuList: '', // 二级菜单列表
      FirstMenu: '',  // 当前一级菜单
      SecondMenu: '',// 当前二级菜单
      showSecondMenu: false, // 是否显示二级菜单列表
      showkeyword: false, // 是否显示关键词选择区域
      addkeyword: true, // 是否允许添加关键词
      is_original: true, // 是否原创
      is_public: true, // 是否公开
      original_link: '' // 原始链接
    }
  },
  components: {
    EditorBar
  },
  watch: {
    FirstMenu (newFirstMenu) {
      if (newFirstMenu !== '') {
        this.Second_MenuList = this.SecondMenuList[this.FirstMenu]
        this.KeyWordList = {}
        this.showkeyword = false
      }
    },
    Second_MenuList (newValue) {
      if (newValue === undefined) {
        this.showSecondMenu = false
      } else {
        this.showSecondMenu = true
      }
    },
    SecondMenu (newValue) {
      if (newValue !== '') {
        this.showkeyword = true
        this.KeyWordList = {}
        this.KeyWordList[newValue] = newValue
      }
    }
  },
  computed: {
    ...mapGetters({
      FirstMenuList: 'ReData/GlobalData/getFirstMenuList',
      SecondMenuList: 'ReData/GlobalData/getSecondMenuList',
      user: 'ReStates/GlobalStates/getUser',
      islogin: 'ReStates/GlobalStates/getIsLogin'
    })
  },
  created () {
    this.First_MenuList = this.FirstMenuList.slice(1)
  },
  methods: {
    ClearEditor () {
      let message = confirm("确认清除编辑器中所有内容吗？")
      if (message === true) {
        this.isClear = true
      }
    },
    uploadArticle () {
      if (this.articleTitle === '') {
        alert('您还未输入文章标题')
        return
      }
      if (this.FirstMenu === '') {
        alert('您还未选择文章类型')
        return
      }
      if (this.SecondMenu === '') {
        alert('您还未选择详细类型')
        return
      }
      if (this.editor.info === '') {
        alert('您还未输入文章内容')
        return
      }
      let aa = {
        author: this.user.username,
        userid: this.user.id,
        title: this.articleTitle,
        firstmenu: this.FirstMenu,
        secondmenu: this.SecondMenu,
        content: this.editor.info,
        is_original: this.is_original ? 1 : 0,
        is_public: this.is_public ? 1 : 0,
        version: '00001',
        original_link: this.original_link,
      }
      this.$api.SaveArticle(aa)
        .then((res) => {
          if (res.data.code === '1') {
            if (confirm('文章上传成功,是继续上传?')) {
              this.$router.go('/editor')
            } else {
              this.$router.push('/')
            }
          } else {
            alert(res.data.msg)
          }
        })
        .catch(err => console.log(err, '上传文章时异常'))
    }
  }
}
</script>
<style scoped>
.section__editor {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}
.editor__jump {
  width: 1000px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255);
}
.editor__jump a {
  color: rgb(67, 149, 255);
}
.editor__wrapper {
  width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
}
.editor__func {
  width: 100%;
  background-color: rgb(255, 255, 255);
}
.article__titlebox,
.article__firstitem,
.article__func {
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
}
.article__titlebox {
  display: flex;
  align-items: center;
}
.item__title {
  width: 80px;
  height: 30px;
  padding: 5px;
  margin-right: 20px;
  line-height: 30px;
  text-align: center;
  border-radius: 10px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: rgba(87, 30, 30, 0.2);
}
.title__input {
  width: 840px;
  height: 30px;
  font-size: 0.875rem;
  line-height: 1.6;
  padding: 9px 24px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  color: #424242;
  border: 1px solid #dce4e6;
  border-radius: 5px;
  outline: 0;
}
.title__input:focus {
  border: 1px solid #31b968;
}
.article__firstitem {
  display: flex;
  justify-content: left;
  align-items: center;
}
.firstitem__li,
.seconditem__li {
  min-width: 60px;
  height: 30px;
  padding: 5px;
  margin-right: 20px;
  display: flex;
  border-radius: 10px;
  cursor: pointer;
  background-color: rgba(82, 145, 106, 0.3);
}
.firstitem__input,
.seconditem__input {
  opacity: 0;
  position: absolute;
}
.firstitem__label,
.seconditem__label {
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.article__secondmenu {
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}
.seconditem__li,
.keyword__li {
  margin-top: 5px;
  margin-bottom: 5px;
}
.article__keyword {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  min-height: 50px;
}
.keyword__add {
  width: 125px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 20px;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: rgba(82, 145, 106, 0.3);
}
.keyword__btn {
  width: 40px;
  height: 30px;
  border-radius: 10px;
  border: 0;
  margin-left: 5px;
  cursor: pointer;
  background-color: rgba(82, 145, 106, 0.3);
}
.keyword__btn:focus {
  outline: 0;
}
.keyword__input {
  width: 80px;
  height: 30px;
  font-size: 0.875rem;
  line-height: 1.6;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  color: #424242;
  border: 1px solid #dce4e6;
  border-radius: 5px;
  outline: 0;
}
.keyword__input:focus {
  border: 1px solid #31b968;
}
.keyword__li {
  min-width: 60px;
  height: 30px;
  padding: 5px;
  margin-right: 20px;
  border-radius: 10px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  background-color: rgba(82, 145, 106, 0.3);
}
.article__func {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.article__check {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.article__check label {
  width: 80px;
  height: 30px;
  padding: 5px;
  border-radius: 10px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: rgba(23, 131, 64, 0.7);
}
.article__check input[type="checkbox"] {
  opacity: 0;
}
.article__check input[type="text"] {
  width: 200px;
  height: 20px;
  font-size: 0.875rem;
  line-height: 1.6;
  padding: 9px 10px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  color: #424242;
  border: 1px solid #dce4e6;
  border-radius: 5px;
  outline: 0;
  margin-right: 10px;
}
.article__btn {
  display: flex;
  justify-content: right;
}
.article__btn button {
  width: 80px;
  height: 40px;
  padding: 5px 10px;
  margin-right: 20px;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  background-color: rgba(168, 42, 25, 0.2);
}
.article__btn button:focus {
  outline: 0;
}
.editor {
  width: 100%;
  height: 850px;
}
</style>
