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
    <header>
      <center>
      <h1>介绍</h1></center>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;欢迎来到银河知识库，这里收录了大量知识，以供查阅</p>      
    </header>
    <van-divider  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" >银河知识库</van-divider>
    <van-swipe class="my-swipe" :autoplay="3000">
      <van-swipe-item><img src="../Img/1.jpg"></van-swipe-item>
      <van-swipe-item><img src="../Img/2.jpg"></van-swipe-item>
      <van-swipe-item><img src="../Img/3.jpg"></van-swipe-item>
      <van-swipe-item><img src="../Img/4.jpg"></van-swipe-item>
      <van-swipe-item><img src="../Img/5.jpg"></van-swipe-item>
    </van-swipe>
    <van-divider  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" >银河知识库</van-divider>
    <van-calendar
  title="便携日历"
  :poppable="false"
  :show-confirm="false"
  :style="{ height: '500px' }"
/>
    <van-divider  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" >银河知识库</van-divider>
    <P>Vant 是一个轻量、可定制的移动端组件库，于 2017 年开源。目前 Vant 官方提供了 Vue 2 版本、Vue 3 版本和微信小程序版本，并由社区团队维护 React 版本和支付宝小程序版本。</P>
    <van-divider  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" >银河知识库</van-divider>
  </div>
</template>

<style scoped>
.home-container{
  padding: 46px 20px 50px 20px;
}
.my-swipe .van-swipe-item {
  font-size: 20px;
  height: 300px;
  text-align: center;
}
img{
  height: 300px;
}
</style>
