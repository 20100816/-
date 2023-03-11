<script>
import { ref } from 'vue';
export default {
  setup() {
    const activeNames = ref(['1']);
    return { activeNames };
  },
  data(){
    return{
      count: 0,
    }
  }
}
</script>

<template>
  <div class="home-container">
    <van-collapse v-model="activeNames">
    <van-collapse-item title="隋唐时期：繁荣与开放的时代" name="1">
      <van-collapse-item title="第一课 隋朝的统一与灭亡" name="2">
         隋的统一 开通大运河 开创科举取士制度 隋的灭亡
      </van-collapse-item>
      <van-collapse-item title="第二课 从“贞观之治”到“开元盛世”" name="3">
        唐朝的建立与“贞观之治” 女皇帝武则天 “开元盛世”
     </van-collapse-item>      
      <van-collapse-item title="第三课 盛唐气象" name="4">
        经济的繁荣 民族交往与交融 开放的社会风气 多彩的文学艺术
     </van-collapse-item>       
      <van-collapse-item title="第四课 唐朝的中外文化交流" name="5">
        遣唐使和鉴真东渡 唐与新罗的关系 玄奘西行 
     </van-collapse-item>         
      <van-collapse-item title="第五课 安史之乱与唐的衰亡" name="6">
        安史之乱 黄巢起义与唐朝灭亡 五代十国的更迭与分立
     </van-collapse-item>
    </van-collapse-item>  
    <van-collapse-item title="辽宋夏金元时期：民族关系发展和社会变化" name="7">
      <van-collapse-item title="第六课 北宋的政治" name="8">
         宋太祖强化中央集权 重文轻武的政策 王安石变法
      </van-collapse-item>
      <van-collapse-item title="第七课 辽、西夏与北宋的并立" name="9">
        契丹族与党项族 辽与北宋的和战 西夏与北宋的关系
     </van-collapse-item>      
      <van-collapse-item title="第八课 金与北宋的对峙" name="10">
        女真族的崛起 金灭辽及北宋 南宋的偏安
     </van-collapse-item>       
      <van-collapse-item title="第九课 宋代经济的发展" name="11">
        农业的发展 手工业的兴盛 商业贸易的繁荣
     </van-collapse-item>         
      <van-collapse-item title="第十课 蒙古族的兴起与元朝的建立" name="12">
        成吉思汗统一蒙古 蒙古灭西夏与金 元朝的建立与统一
     </van-collapse-item>
      <van-collapse-item title="第十一课 元朝的统治" name="13">
        元朝疆域和名族交融 行省制度 元朝对疆域地区的管辖 
     </van-collapse-item>     
    </van-collapse-item>      
  </van-collapse>
  </div>
</template>

<style scoped>
.home-container{
    padding: 46px 0 50px 0;
}
/*#67696c*/
.van-collapse-item__content{
  color: #878a8f;
}
</style>
