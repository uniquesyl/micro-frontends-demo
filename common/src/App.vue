<template>
  <div id="navbar-app">
    <div id="nav">
      <router-link to="/program1">App1</router-link> |
      <router-link to="/program2">App2</router-link> |
      <router-link to="/program3">App3</router-link> |
      {{count}}
    </div>
    <!-- <router-view/> -->
  </div>
</template>
<script>
export default {
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>>
<style>
#navbar-app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
