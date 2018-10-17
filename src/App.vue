<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="slidebar"></router-view>
      <router-view name="main"></router-view>
    </div>

  </div>
</template>

<script>
  import Header from "./components/Header";
  export default {
    name: "App",
    components: {
      Header
    }
  };
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  #app {
    height: 100vh;
    background: #e6e3e3;
    overflow: auto;
  }
  .main {
    max-width: 1344px;
    margin: 0 auto;
    min-width: 300px;
  }
</style>
