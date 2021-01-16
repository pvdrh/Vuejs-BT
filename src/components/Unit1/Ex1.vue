<template>
  <div class="container">
   <Ex1_login />
   <Ex1_info />
    
  </div>
</template>

<script>
import Ex1_login from './Ex1_login.vue'
import Ex1_info from './Ex1_info.vue'

export default {
    name:"ex1",
      components: {
    Ex1_login,
    Ex1_info
  },
    data () {
      return {
        title:"",
        strHtml:""
      }
    }
    
}
</script>

<style lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
 
 
}
</style>
