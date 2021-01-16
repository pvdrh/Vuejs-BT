
<template>
  <div class="container">
    
   <Ex2_login @Enter="handelEnter" />
   <Ex2_info :userName="userName" :phone="phone" :fb="fb" :birthday="birthday" />
  </div>
</template>

<script>

import Ex2_login from './Ex2_login.vue'
import Ex2_info from './Ex2_info.vue'


export default {
  name: "ex2",
     components: {
    Ex2_login,
    Ex2_info
  },
  data() {
    return {
      userName: '',
      birthday: '',
      phone: '',
      fb: '',
    };
  },
   methods: {
      handelEnter(data){
        this.userName=data[0];
        this.birthday=data[1];
        this.phone=data[2];
        this.fb=data[3];
      },
    }
 
};
</script>

<style lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;

}
</style>