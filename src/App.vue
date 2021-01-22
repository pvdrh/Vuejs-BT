<template>
  <div id="app">
    <LoginForm v-if="!isLogin" @LoginSuccess="login" />
    <Dashboard v-else/>
  </div>
</template>

<script>
  import LoginForm from "./components/Unit5/LoginForm"
  import Dashboard from "./components/Unit5/Dashboard"
  export default{
     components: {
      LoginForm,
      Dashboard
    },
    data() {
      return {
        isLogin: false
      }
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
  font-family: Roboto,sans-serif;
  background: #f6f7f9 !important;
  font-size: 14px;
  color: #253036;
  margin: 0;
  padding: 0;
}
</style>
