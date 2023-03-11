<script>
import { showDialog } from 'vant';
import { ref } from 'vue';

showDialog({
  title: '语录',
  message: '代码是写出来给人看的，附带能在机器上运行。',
  theme: 'round-button',
}).then(() => {
  // on close
});
import { showNotify } from 'vant';

// 主要通知
showNotify({ type: 'success', message: '欢迎进入' });
export default {
  setup() {
    const activeNames = ref(['1']);
    return { activeNames };
  },
}
</script>

<template>
  <div class="home-container">
    <div class="card">
    <van-card
  tag="站长"
  desc="银河知识库站长"
  title="小站长"
  thumb="vite.svg"
/>

<van-contact-card type="edit" name="站长QQ" tel="2335191986" :editable="false" />
</div>

<van-divider  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" >银河知识库</van-divider>
<van-collapse v-model="activeNames">
  <van-collapse-item title="语录1" name="1">
    代码是写出来给人看的，附带能在机器上运行。
  </van-collapse-item>
  <van-collapse-item title="语录2" name="2">
    技术无非就是那些开发它的人的共同灵魂。
  </van-collapse-item>
  <van-collapse-item title="语录3" name="3">
    在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
  </van-collapse-item>
</van-collapse>
  </div>
</template>

<style scoped>
.card{
  padding: 20px 20px 20px 20px;
}
.home-container{
    padding: 46px 20px 50px 20px;
}
</style>
