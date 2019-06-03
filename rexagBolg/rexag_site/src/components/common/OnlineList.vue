<template>
  <div class="aside__online">
    <h4 class="online__h4">在线列表</h4>

    <ul v-if="IsLogin" class="online__ul">
      <li
        class="online__li"
        v-for="onlineUser in onlineList"
        :key="onlineUser.id"
      >
        <router-link
          class="online__a"
          :to="{ name: '/chat', params: { id: onlineUser.id } }"
        >
          <span class="online__userpic"></span>
          <span class="online__nickname">{{ onlineUser.nickname }}</span>
        </router-link>
      </li>
    </ul>
    <ul v-else class="online__ul">
      <li class="online__tips">
        您还未登录
        <router-link class="online__link" to="/login">前去登录</router-link>
        <router-link class="online__link" to="/register">前去注册</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import io from 'socket.io-client';
export default {
  data () {
    return {
      onlineList: [],
      websock: null,
      socketIo: null,
      socket: null
    }
  },
  // mounted () {
  //   if (this.socketIo !== null) {
  //     document.body.appendChild(this.socketIo);
  //   }
  // },
  computed: {
    ...mapGetters({
      IsLogin: 'ReStates/GlobalStates/getIsLogin',
      User: 'ReStates/GlobalStates/getUser'
    })
  },
  created: async function () {
    if (!this.IsLogin) {
      return this.onlineList = []
    } else {
      this.initWebSocket()
    }
  },
  beforeDestroy () { //组件销毁之前，将socket 关闭
    // this.socket.close();
  },
  methods: {
    initWebSocket () { //初始化weosocket 
      // this.socket = io('http://127.0.0.1:9699')
      // console.log(this.socket, "-----this.socket----")
      // this.socket.on('connect', function () {
      //   console.log('进行链接。。');
      //   this.socket.emit('chat', { id: this.User.id })

      // })
    },
    // websocketonopen () {
    //   // console.log("WebSocket连接成功");
    // },
    // websocketonerror (e) { //错误
    //   // console.log("WebSocket连接发生错误");
    // },
    // websocketonmessage (e) { //数据接收 
    //   // const redata = JSON.parse(e.data);
    //   // //注意：长连接我们是后台直接1秒推送一条数据， 
    //   // //但是点击某个列表时，会发送给后台一个标识，后台根据此标识返回相对应的数据，
    //   // //这个时候数据就只能从一个出口出，所以让后台加了一个键，例如键为1时，是每隔1秒推送的数据，为2时是发送标识后再推送的数据，以作区分
    //   // console.log(redata.value);
    // },

    // websocketsend (agentData) {//数据发送 
    //   // this.websock.send(agentData);
    // },

    // websocketclose (e) { //关闭 
    //   console.log("connection closed (" + e.code + ")");
    // },
    // changeShowDetial (showDetialName) {
    //   this.showDetial = showDetialName
    // }
  }
}
</script>
<style scoped>
.aside__online {
  width: 100%;
  height: 290px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
}
.online__h4 {
  height: 30px;
  width: calc(100% - 20px);
  padding: 0 10px;
  text-align: center;
  line-height: 30px;
}
.online__ul {
  height: calc(100% - 30px);
  width: 100%;
  overflow: scroll;
}
.online__ul::-webkit-scrollbar-thumb {
  border-radius: 2em;
}
.online__ul::-webkit-scrollbar {
  width: 10px;
  height: 0;
}
.online__ul::-webkit-scrollbar-thumb {
  background-color: #56975b;
  background-clip: padding-box;
  min-height: 10px;
}
.online__li {
  width: calc(100% - 20px);
  height: 30px;
  margin: 3px;
  border: 2px solid rgb(201, 179, 179);
  border-radius: 10px;
}
.online__a {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.online__userpic {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 5px;
  background: url(http://127.1:9699/img/headpic_male.jpg);
  background-size: 100% 100%;
}
.online__nickname {
  width: 100px;
  height: 30px;
  text-align: left;
  text-indent: 1rem;
  line-height: 30px;
}
.online__link {
  margin-left: 10px;
  color: rgb(51, 9, 202);
}
.online__tips {
  text-align: center;
}
</style>
