<template lang="html">
  <div class="editorbox">
    <div ref="toolbar" class="toolbar">
    </div>
    <div ref="editor" class="text" :class="edtiorClass">
    </div>
  </div>
</template>

<script>
import Editor from 'wangeditor'
export default {
  name: 'Editorbar',
  data () {
    return {
      editor: null,
      info_: null,
      edtiorClass: ''
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    isClear: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isClear (val) {
      // 触发清除文本域内容
      if (val) {
        this.editor.txt.clear()
        this.info_ = null
      }
    },
    value (val) {
      // 使用 v-model 时，设置初始值
      this.editor.txt.html(val)
    }
  },
  mounted () {
    this.seteditor()
    this.setStyle()
  },
  methods: {
    seteditor () {
      this.editor = new Editor(this.$refs.toolbar, this.$refs.editor)

      this.editor.customConfig.uploadImgShowBase64 = true // base 64 存储图片
      this.editor.customConfig.uploadImgServer = 'http://127.0.0.1:9699/saveImg'// 配置服务器端地址
      this.editor.customConfig.uploadImgHeaders = {} // 自定义 header 使用 koa-body接收图片时，header需要为空
      this.editor.customConfig.uploadFileName = 'file' // 后端接受上传文件的参数名
      this.editor.customConfig.uploadImgMaxSize = 2 * 1024 * 1024 // 将图片大小限制为 2M
      this.editor.customConfig.uploadImgMaxLength = 6 // 限制一次最多上传 6 张图片
      this.editor.customConfig.uploadImgTimeout = 3 * 60 * 1000 // 设置超时时间

      // 配置菜单
      this.editor.customConfig.menus = [
        'head', // 标题
        'bold', // 粗体
        'fontSize', // 字号
        'fontName', // 字体
        'italic', // 斜体
        'underline', // 下划线
        'strikeThrough', // 删除线
        'foreColor', // 文字颜色
        'backColor', // 背景颜色
        'link', // 插入链接
        'list', // 列表
        'justify', // 对齐方式
        'quote', // 引用
        'emoticon', // 表情
        'image', // 插入图片
        'table', // 表格
        // 'video', // 插入视频
        'code', // 插入代码
        // 'undo', // 撤销
        // 'redo' // 重复
      ]

      this.editor.customConfig.uploadImgHooks = {
        // fail: (xhr, editor, result) => {},
        // success: (xhr, editor, result) => {},
        // timeout: (xhr, editor) => {},
        // error: (xhr, editor) => {},
        customInsert: (insertImg, result) => {
          var url = result.imgUrl;
          if (url === '') {
            alert("图片上传失败，请重试!")
          } else {
            insertImg(url)
          }
        }
      }
      this.editor.customConfig.onchange = (html) => {
        this.info_ = html // 绑定当前逐渐地值
        this.$emit('change', this.info_) // 将内容同步到父组件中
      }

      // 创建富文本编辑器
      this.editor.create()
    },
    setStyle () {
      this.edtiorClass = 'myedtior'
    }
  }
}
</script>

<style scoped>
.editorbox {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
}
.toolbar {
  border: 1px solid #ccc;
}
.text {
  position: relative;
  border: 1px solid #ccc;
  height: calc(100% - 33px);
}
</style>
