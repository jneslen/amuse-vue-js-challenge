<template>
  <div id="app">
    <img alt="Vue logo" width="200px" src="./assets/amuse-logo.svg">
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
}
.page-item.active .page-link,
.btn-primary {
  background-color: #F73D99 !important;
  border-color: #F73D99 !important;
}
</style>
