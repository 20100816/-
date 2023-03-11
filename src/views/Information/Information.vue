<script>
import { ref } from 'vue';
import htmlcss from './active/html+css.vue'
import JavaScript from './active/javascript.vue'
export default {
  components: { htmlcss,JavaScript },
  setup() {
    const active = ref(0);
    return { active };
  },
  methods:  {
    onclick(){
      this.active++;
      if(this.active==4) this.active=ref(0);
    }
  }
}
</script>

<template>
  <div class="home-container">
    <center><h1>前端学习路线</h1></center>
    <van-steps :active="active">
      <van-step>HTML和CSS</van-step>
      <van-step>JavaScript</van-step>
      <van-step>Vue框架</van-step>
      <van-step>其他知识</van-step>
    </van-steps>
    <van-button @click="onclick" type="success">下一步</van-button>
    <van-divider  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" >银河知识库</van-divider>
    <div v-if="active==0" class="">
      <htmlcss></htmlcss>
    </div>
    <div v-if="active==1" class="">
      <java-script></java-script>
    </div>    
  </div>
</template>

<style scoped>
.home-container{
    padding: 46px 0 50px 0;
}
</style>
