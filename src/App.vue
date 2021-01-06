<template>
  <div id="app">
    <ex1 />
  </div>
</template>

<script>
import ex1 from './components/Unit1/ex1.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    // ex3
    ex1
    // ex2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
