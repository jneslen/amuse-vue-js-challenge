<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <Amuse msg="Amuse"/>
  </div>
</template>

<script>
import Amuse from './components/Amuse.vue'

export default {
  name: 'App',
  components: {
    Amuse
  }
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
