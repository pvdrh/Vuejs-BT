<template>
  <div id="app">
    <ProductPage />
  </div>
</template>

<script>

import ProductPage from './components/Unit4/Ex1/ProductPage.vue'

export default {
  name: 'App',
  components: {
    ProductPage
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
