<template>
  <div class="home">
    <div>
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <router-link to="/program2/about">App2's about page</router-link>
    <Counter></Counter>
    <a @click="add">点我</a>
    <!-- <HelloWorld></HelloWorld> -->
  </div>
</template>

<script>
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    Counter
  },
  methods: {
    add (e) {
      this.$store.commit('increment')
    }
  }
}
</script>