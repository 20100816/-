<script>
export default {
  setup() {

  },
  methods:  {

  }
}
</script>

<template>
  <div class="home-container">
    <a href="https://www.runoob.com/html/html-tutorial.html">1.菜鸟教程HTML</a><br>
    <a href="https://www.runoob.com/css/css-tutorial.html">2.菜鸟教程CSS</a><br>
    <a href="https://www.w3school.com.cn/">3.w3school</a><br>
  </div>
</template>

<style scoped>

.home-container{
    background-color: rgb(247, 1, 1);
    padding: 0 20px 0 20px;
}
a{
  color: black;
}
a:link,a:visited{

  text-decoration:none;  /*超链接无下划线*/
 
 }
 
 a:hover{
 
  text-decoration:underline;  /*鼠标放上去有下划线*/
 
 }
</style>
