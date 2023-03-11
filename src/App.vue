<script>
import { ref } from 'vue';
import Home from './views/Home/Home.vue';
import User from './views/User/User.vue';
import History from './views/History/History.vue';
import Information from './views/Information/Information.vue';
export default {
  components: { Home, User, History, Information },

  data(){
    return{
      active: 0,
    }
  },
  setup() {
    const active = ref(0);
  },
}
</script>

<template>
  <div>
    <van-nav-bar title="银河知识库" fixed/>
    <div v-if="active == 0">
      <home></home>
    </div>
    <div v-if="active == 1">
      <information></information>
    </div>
    <div v-if="active == 2">
      <history></history>
    </div>    
    <div v-if="active == 3">
      <user></user>
    </div>    
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item icon="search">知识</van-tabbar-item>
      <van-tabbar-item icon="friends-o">历史标题栏</van-tabbar-item>
      <van-tabbar-item icon="user-o">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped>
.van-nav-bar{
  background-color: #007dff;
}
/deep/ .van-nav-bar__title{
  color: white;
}
</style>
