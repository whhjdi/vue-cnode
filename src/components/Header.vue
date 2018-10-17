<template>
  <div class="header clearfix">
    <router-link :to="{name:'root'}">
      <img src="../assets/cnodejs_light.svg" alt="logo">
    </router-link>
    <div class="wrapper">
      <ul class="clearfix">
        <li><a href="">首页</a></li>
        <li><a href="">新手入门</a></li>
        <li><a href="">API</a></li>
        <li><a href="">关于</a></li>
        <li><router-link :to="{name:'signup'}">注册</router-link></li>
        <li><router-link :to="{name:'login'}">登录</router-link></li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Header"
  };
</script>

<style scoped>
@media(max-width: 580px){
  .header{
    display: flex;
    flex-direction: column;
  }
}
@media(max-width: 374px){
  .header li{
    padding-top: 5px;
    padding-bottom: 5px;
  }
}
  .clearfix::after {
    content: "";
    display: block;
    clear: both;
  }
  .header {
    background-color: #444444;
    /* height: 50px; */
  }
  .header > a {
    display: block;
    float: left;
    width: 120px;
    height: 34px;
    line-height: 34px;
    margin-left: 20px;
    margin-top: 8px;
  }
  .wrapper {
    float: right;
  }

  ul {
    list-style: none;
  }
  li {
    float: left;
    padding: 15px 15px;
  }
  a {
    text-decoration: none;
    color: #ccc;
    font-size: 13px;
    line-height: 20px;
  }
</style>
