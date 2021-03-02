<template>
  <div id="app">
    <!-- <Product /> bài 9 --> 
    <!-- <Ex1 /> 10.1--> 
     <!-- <Product />  10.2-->
  </div>
</template>

<script>
// import Product from "./components/Unit9/Product.vue"; bài 9
// import Ex1 from "./components/Unit10/Ex1.vue";
// import Product from "./components/Unit10/Product.vue"; 10.2

export default {
  components: {
    // Product bài 9
    // Ex1
    // Product 10.2
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
  font-family: Roboto, sans-serif;
  background: #f6f7f9 !important;
  font-size: 14px;
  color: #253036;
  margin: 0;
  padding: 0;
}
</style>
