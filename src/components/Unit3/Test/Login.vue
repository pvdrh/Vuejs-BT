<template>
  <div class="container">
    <LoginForm @Enter="handelEnter" />
    <LoginSuccess :userName="name2" :userAge="age" :content="content"/>
  </div>
</template>
<script>
import LoginForm from './LoginForm.vue'
import LoginSuccess from './LoginSuccess.vue'

  export default {
    name: 'Login',
    components: {
    LoginForm,
    LoginSuccess
  },
    data () {
      return {
        name2: 'Duy',
        age: '21',
        content: 'Hello World',
      }
    },
    methods: {
      handelEnter(data){
        console.log(data);
      },
    }
  }
</script>
<style lang="scss" scoped>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 500px;
        .textRed {
            color: red;
        }
    }
</style>
