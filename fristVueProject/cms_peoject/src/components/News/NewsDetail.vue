<template>
  <div>
    <nav-bar :title="myTitle"/>
    <div class="news-title">
      <p>{{newsInfo.title}}</p>
      <div>
        <span>{{newsInfo.click}}次点击</span>
        <span>分类:民生经济</span>
        <span>添加时间:{{newsInfo.add_time | convertTime('YYYY-MM-DD')}}</span>
      </div>
    </div>
    <div class="news-content" v-html="newsInfo.content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsInfo: {}, // 新闻详情数据
      myTitle: "" //可变的标题
    };
  },
  created() {
    let { id } = this.$route.params;
    this.newsInfo =  {
        id: id,
        title: "普吉沉船案800万赔偿被家属方拒绝！14人继续诉马蜂窝深之旅",
        add_time: "2019-04-07 21:17",
        click: 1,
        content: '距离7·5普吉沉船事故已过去近9个月。今年4月1日，遇难者家属及伤者第一次和这场“致命旅途”的国内供应商们分别站在了原被告席上。南都记者了解到，在当日的庭前调解中，被诉旅行公司提出了总计800万元赔偿方案，这与家属方原计划索赔金额相差甚远。随后，多名遇难者家属及伤者表示不接受协议方案，坚持诉讼。截至4月7日，已经有累计14名遇难者及伤者明确表示将继续起诉马蜂窝平台、深之旅国际旅行社。4月2日，马蜂窝平台曾就此向南都记者表示，该案系客户在马蜂窝平台购买了商家“深之旅”的产品，深之旅为涉事商家，目前案子还在开庭调解阶段。最终责任划定还需等待法院来做最终裁定。'
      }

    // 因为无法调用到 API接口 所以直接手打显示内容
    // 1: 获取路由参数
    // let { id } = this.$route.params;  
    // // 2: 拼接后台url发起请求
    // let url = 'getnew/' + id;
    // this.$axios.get(url)
    // .then(res=>{
    //      // 3: 响应的数据渲染到页面上，通过一个详情对象
    //      this.newsInfo = res.data.message[0];
    // })
    // .catch(err=> console.log(err));
  },
  beforeRouteEnter(to, from, next) {
    let title = "详情";
    // 1: 判断from是新闻列表，还是商品详情
    if (from.name === "NewsList") {
      title = "新闻详情";
    } else if (from.name === "GoodsDetail") {
      title = "商品图文信息";
    }

    // 这里没有this，因为组件还没有被实例化
    next(vm => {
      // 通过 `vm` 访问组件实例 就是这里未来的this
      vm.myTitle = title;
    });
  }
};
</script>
<style scoped>
.news-title p {
  color: #0a87f8;
  font-size: 20px;
  font-weight: bold;
}

.news-title span {
  margin-right: 30px;
}

.news-title {
  margin-top: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

/*主体文章的左右距离*/

.news-content {
  padding: 10 5;
}
</style>
