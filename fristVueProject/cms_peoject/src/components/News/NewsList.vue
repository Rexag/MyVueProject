<template>
   <div>
    <nav-bar title="新闻列表" />
    <div class="demo">
      <ul >
            <li v-for="news in newsList" :key="news.id">
                <router-link :to="{name:'NewsDetail',params:{id:news.id}  }">
                    <img class="" :src="news.img_url">
                    <div >
                        <span>{{news.title}}</span>
                        <div class="news-desc">
                            <p>点击数:{{news.click}}</p>
                            <p>发表时间:{{news.add_time | convertTime('YYYY-MM-DD')}}</p>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>

    </div>
</template>
<script>
    export default {
        data(){
            return {
                title:'新闻列表',
                newsList:[],// 新闻列表数据
            }
        },
        created() {
            this.newsList =[
                {id:1, title:'普吉沉船案800万赔偿被家属方拒绝！14人继续诉马蜂窝深之旅', add_time:'2019-04-07 21:17', zhaiyao:'aaa', click:1, img_url:'../../static/img/news/01.jpg'},
                {id:2, title:'普吉沉船案800万赔偿被家属方拒绝！14人继续诉马蜂窝深之旅', add_time:'2019-04-07 21:17', zhaiyao:'aaa', click:1, img_url:'../../static/img/news/01.jpg'},
                {id:3, title:'普吉沉船案800万赔偿被家属方拒绝！14人继续诉马蜂窝深之旅', add_time:'2019-04-07 21:17', zhaiyao:'aaa', click:1, img_url:'../../static/img/news/01.jpg'},
                {id:4, title:'普吉沉船案800万赔偿被家属方拒绝！14人继续诉马蜂窝深之旅', add_time:'2019-04-07 21:17', zhaiyao:'aaa', click:1, img_url:'../../static/img/news/01.jpg'},
                {id:5, title:'普吉沉船案800万赔偿被家属方拒绝！14人继续诉马蜂窝深之旅', add_time:'2019-04-07 21:17', zhaiyao:'aaa', click:1, img_url:'../../static/img/news/01.jpg'},
                {id:6, title:'普吉沉船案800万赔偿被家属方拒绝！14人继续诉马蜂窝深之旅', add_time:'2019-04-07 21:17', zhaiyao:'aaa', click:1, img_url:'../../static/img/news/01.jpg'},
                {id:7, title:'普吉沉船案800万赔偿被家属方拒绝！14人继续诉马蜂窝深之旅', add_time:'2019-04-07 21:17', zhaiyao:'aaa', click:1, img_url:'../../static/img/news/01.jpg'},
                {id:8, title:'普吉沉船案800万赔偿被家属方拒绝！14人继续诉马蜂窝深之旅', add_time:'2019-04-07 21:17', zhaiyao:'aaa', click:1, img_url:'../../static/img/news/01.jpg'},
                {id:9, title:'普吉沉船案800万赔偿被家属方拒绝！14人继续诉马蜂窝深之旅', add_time:'2019-04-07 21:17', zhaiyao:'aaa', click:1, img_url:'../../static/img/news/01.jpg'},
                {id:10, title:'普吉沉船案800万赔偿被家属方拒绝！14人继续诉马蜂窝深之旅', add_time:'2019-04-07 21:17', zhaiyao:'aaa', click:1, img_url:'../../static/img/news/01.jpg'},
                {id:11, title:'普吉沉船案800万赔偿被家属方拒绝！14人继续诉马蜂窝深之旅', add_time:'2019-04-07 21:17', zhaiyao:'aaa', click:1, img_url:'../../static/img/news/01.jpg'},
                {id:12, title:'普吉沉船案800万赔偿被家属方拒绝！14人继续诉马蜂窝深之旅', add_time:'2019-04-07 21:17', zhaiyao:'aaa', click:1, img_url:'../../static/img/news/01.jpg'},
                {id:13, title:'普吉沉船案800万赔偿被家属方拒绝！14人继续诉马蜂窝深之旅', add_time:'2019-04-07 21:17', zhaiyao:'aaa', click:1, img_url:'../../static/img/news/01.jpg'},
                {id:14, title:'普吉沉船案800万赔偿被家属方拒绝！14人继续诉马蜂窝深之旅', add_time:'2019-04-07 21:17', zhaiyao:'aaa', click:1, img_url:'../../static/img/news/01.jpg'}
            ]

            // 没有API 可以调用
            // this.$axios.get('getnewslist')
            // .then(res=>{
            //     this.newsList = res.data.message;
            // })
            // .catch(err=>console.log(err));
        }

    }
</script>
<style scoped>
ul {
    margin:0;
    padding: 0;
}
p{
    margin:2px 30px 0px 0px;
}
.demo img{

    width: 42px;
    height: 42px;
    margin-right: 20px;

}

.demo a {
    display: flex;
    padding-left: 5px;
    align-items: center;
    margin: 5px 0px;
    border-bottom: 1px solid #dfdcdc;
    padding-bottom: 5px;
    color:black;
}

.news-desc{
    display: flex;
    color:#2196f3;
}

</style>