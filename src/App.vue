<template>
  <div id="app">
    <Exercise />
  </div>
</template>

<script>

import Exercise from './components/Unit3/Ex/Exercise.vue'

export default {
  name: 'App',
  components: {
    Exercise
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
