<template>
  <div id="app">
    <router-link to="/">
      <img src="http://static.tvmaze.com/images/tvm-header-logo.png" alt="TV Maze" width="200">
    </router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
