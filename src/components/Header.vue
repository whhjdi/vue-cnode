<template>
    <div class="header clearfix">
      <a href="#">
        <img src="../assets/cnodejs_light.svg" alt="logo">
      </a>
      <div class="wrapper">
        <ul class="clearfix">
          <li><a href="">首页</a></li>
          <li><a href="">新手入门</a></li>
          <li><a href="">API</a></li>
          <li><a href="">关于</a></li>
          <li><a href="">注册</a></li>
          <li><a href="">登录</a></li>
        </ul>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
  .clearfix::after{
    content: '';
    display: block;
    clear: both;
  }
  .header{
    background-color:#5a5555;
    height: 50px;
  }
  .header>a{
    display: block;
    float: left;
    width: 120px;
    height: 34px;
    line-height: 34px;
    margin-left: 50px;
    margin-top:8px;
  }
  .wrapper{
    float: right;
  }

  ul{
    list-style: none;
  }
  li{
    float: left;
    padding: 15px 15px ;
  }
  a{
    text-decoration: none;
    color: #ccc;
    font-size: 13px;
    line-height: 20px;

  }
</style>
