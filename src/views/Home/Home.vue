<script>
import request from './request';
import {getaticleAPI} from './articleAPI';
import article from '../article/article.vue';
export default {
  components: { article },
  data(){
    return{
      _page: 1,
      limit: 10,
      artlist: [],
    }
  },
  created(){
    this.initArticleList();
  },
  methods: {
    //获取列表数据
    async initArticleList(){
      const {data: res} = await getaticleAPI(this._page,this.limit);
      this.artlist = res;
      console.log(res);
    }
  }
}
</script>

<template>
  <div class="home-container">
    <header class="box">
      <h1>介绍</h1>
      <p>欢迎来到银河知识库，这里收录了大量知识，以供查阅</p>      
    </header>
    <van-divider  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" >银河知识库</van-divider>
    <van-calendar
  title="便携日历"
  :poppable="false"
  :show-confirm="false"
  :style="{ height: '500px' }"
/>
    <van-divider  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" >银河知识库</van-divider>
  </div>
</template>

<style scoped>
.home-container{
  padding: 46px 0 50px 0;
}
.box{
  padding: 0 20px 0 20px;
}
</style>
